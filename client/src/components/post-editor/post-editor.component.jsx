import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  createPostStart,
  deletePostStart,
  updatePostStart,
} from "../../redux/post/post.actions";
import { Controlled as CodeMirror } from "react-codemirror2";
import "./post-editor.styles.css";
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

require("codemirror/lib/codemirror");
require("codemirror/mode/markdown/markdown");
require("codemirror/addon/edit/continuelist");

const PostEditor = ({ post, updatePost, createPost, deletePost, id }) => {
  const [currPost, setCurrPost] = useState({ title: "", body: "" });

  useEffect(() => {
    if (post) setCurrPost(post);
  }, [post]);

  const handleChangeGeneric = (event) => {
    const {
      target: { name, value },
    } = event;
    setCurrPost({
      ...currPost,
      [name]: value,
    });
  };

  const updatePostBody = (value) => {
    setCurrPost({
      ...currPost,
      body: value,
    });
  };

  const { title, body } = currPost;

  const handlePostChange = async () => {
    if (id) {
      updatePost(id, currPost);
    } else {
      createPost(title, body);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        marginTop: 10,
        flexDirection: "column",
      }}
    >
      <FormControl
        fullWidth
        variant="outlined"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={title}
          onChange={handleChangeGeneric}
          labelWidth={40}
          style={{
            flexGrow: 1,
          }}
        />
        <ButtonGroup variant="contained">
          <Button onClick={handlePostChange}>{id ? "Update" : "Create"}</Button>
          {id ? (
            <Button
              color={"primary"}
              onClick={async () => {
                if (window.confirm("Do you want to delete this post-page?")) {
                  deletePost(id);
                }
              }}
            >
              Delete
            </Button>
          ) : null}
        </ButtonGroup>
      </FormControl>
      <Grid item>
        <CodeMirror
          value={body}
          options={{
            mode: "markdown",
            lineNumbers: true,
            theme: "idea",
            extraKeys: { Enter: "newlineAndIndentContinueMarkdownList" },
            lineWrapping: true,
          }}
          name="body"
          onBeforeChange={(editor, data, value) => {
            updatePostBody(value);
          }}
          onChange={(editor, data, value) => {
            updatePostBody(value);
          }}
        />
      </Grid>
    </Container>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => ({
  post: state.post.posts.find((p) => p._id === id),
  id,
});

const mapDispatchToProps = (dispatch) => ({
  updatePost: (postID, post) => dispatch(updatePostStart(postID, post)),
  createPost: (title, body) => dispatch(createPostStart(title, body)),
  deletePost: (postID) => dispatch(deletePostStart(postID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
