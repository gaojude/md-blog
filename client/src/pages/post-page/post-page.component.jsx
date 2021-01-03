import React, { useEffect } from "react";
import MessageBox from "../../components/message-box/message-box.component";
import { connect } from "react-redux";
import "./post-page.styles.scss";
import ReactMarkdown from "react-markdown";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getProperTitle } from "../../components/post-list/badgeUtil";

const PostPage = ({ post }) => {
  useEffect(() => {
    window.MathJax.typeset();
  }, [post]);

  if (post)
    return (
      <>
        <AppBar color={"transparent"} position="static">
          <Toolbar>
            <Link to={"/"}>
              <IconButton>
                <Home />
              </IconButton>
            </Link>
            <Typography variant="body2" align={"center"} color="textSecondary">
              {getProperTitle(post.title)}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <div className={"markdown-body mt-5"}>
            <ReactMarkdown source={post.body} />
          </div>
        </Container>
      </>
    );
  else
    return (
      <MessageBox
        message={`Please check the URL, since the post is not found in the database.`}
      />
    );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { postID },
    },
  }
) => ({
  post: state.post.posts.find((p) => p._id === postID),
});

export default connect(mapStateToProps)(PostPage);
