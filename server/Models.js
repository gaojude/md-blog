const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = mongoose.model(
  "Post",
  new Schema({
    title: String,
    body: String,
  })
);
const Collection = mongoose.model(
  "Collection",
  new Schema({
    name: String,
    description: String,
    posts: [String],
  })
);

module.exports = { Post, Collection };
