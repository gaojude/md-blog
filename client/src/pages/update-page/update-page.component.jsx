import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import PostEditor from "../../components/post-editor/post-editor.component";
import { connect } from "react-redux";
import { MaintainPostListDrawer } from "../../components/maintain-post-list/MaintainPostListDrawer";
import { compose } from "redux";
import {
  AppBar,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { MenuOpen } from "@material-ui/icons";

const UpdatePage = ({ posts }) => {
  const [drawerOpen, setDrawer] = useState(false);
  return (
    <>
      <AppBar color={"transparent"} position="static">
        <Toolbar>
          <IconButton onClick={() => setDrawer(true)}>
            <MenuOpen />
          </IconButton>
          <Typography variant="body2" align={"center"} color="textSecondary">
            Jude's Content Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <MaintainPostListDrawer
        posts={posts}
        open={drawerOpen}
        close={() => setDrawer(false)}
      />
      <div>
        <Route path={"/maintain"} exact>
          <Container
            style={{
              marginTop: 40,
            }}
          >
            <Paper
              style={{
                padding: 40,
              }}
            >
              <Typography
                align={"center"}
                variant={"h4"}
                color={"textPrimary"}
                component={"h1"}
                gutterBottom
              >
                Welcome to Jude's Content Manager
              </Typography>
              <Typography variant={"body1"} color={"textSecondary"}>
                Click the top left icon to open up the menu, where you can{" "}
                <strong>create a post</strong>,{" "}
                <strong>edit the existent posts</strong>, or even{" "}
                <strong>go back to the home page</strong>!
              </Typography>
            </Paper>
          </Container>
        </Route>
        <Route path="/maintain/posts/create" component={PostEditor} />
        <Route path={"/maintain/posts/edit/:id"} component={PostEditor} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default compose(connect(mapStateToProps), withRouter)(UpdatePage);
