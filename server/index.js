const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Post, Collection } = require('./Models');

mongoose
  .connect('mongodb+srv://admin:admin@cluster0-eao6c.azure.mongodb.net/dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to MongoDB'));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app
  .route('/post')
  .get((req, res) => {
    Post.find().then((docs) => {
      res.json(docs);
    });
  })
  .post((req, res) => {
    const postInfo = req.body;
    console.log(postInfo);
    new Post(postInfo).save().then((receipt) => {
      res.json(receipt);
    });
  });

app
  .route('/post/:id')
  .get((req, res) => {
    const { id } = req.params;
    Post.findById(id).then((doc) => res.json(doc));
  })
  .post((req, res) => {
    const { id } = req.params;
    const newPost = req.body;
    Post.findById(id).then((doc) => {
      doc.title = newPost.title;
      doc.body = newPost.body;
      doc.save().then((doc) => res.json(doc));
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    Post.deleteOne({
      _id: id,
    }).then((info) => res.json(info));
  });

app
  .route('/collections')
  .get((req, res) => {
    Collection.find().then((collections) => res.json(collections));
  })
  .post((req, res) => {
    const { collectionName } = req.body;
    console.log('try to create a new collection with name ' + collectionName);
    new Collection({
      name: collectionName,
      description: '<This is a dummy description.>',
      posts: [],
    })
      .save()
      .then((collection) => {
        res.json({
          success: true,
          collection,
        });
      });
  });

app
  .route('/collection/:id')
  .get((req, res) => {
    const { id } = req.params;
    Collection.findById(id)
      .then((collection) => res.json(collection))
      .catch((err) => res.json(err));
  })
  .post((req, res) => {
    const data = req.body;
    console.log(data._id);
    Collection.findById(data._id).then((collection) => {
      if (data.posts) collection.posts = data.posts;
      if (data.name) collection.name = data.name;
      if (data.description) collection.description = data.description;
      collection.save().then((collection) =>
        res.json({
          success: true,
          collection,
        })
      );
    });
  })

  .delete((req, res) => {
    const { id } = req.params;
    Collection.deleteOne({ _id: id }).then((collection) => res.json(collection));
  });

var port = process.env.PORT || 80;

app.listen(port, () => console.log(`started listening at port ${port}`));
