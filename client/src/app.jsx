import React from "react";
import WithSpinner from "./components/with-spinner/with-spinner.component";
import { compose } from "redux";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import PostPage from "./pages/post-page/post-page.component";
import UpdatePage from "./pages/update-page/update-page.component";

const App = ({ errorMessage }) => {
  if (errorMessage) {
    return (
      <div>
        <h1>{errorMessage}</h1>
        <p>App is not in a normal state. Please refresh.</p>
        <p>Jude Gao</p>
      </div>
    );
  } else {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:postID" component={PostPage} />
        <Route path="/maintain" component={UpdatePage} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isLoading: !state.post.errorMessage && state.post.synced === false,
  errorMessage: state.post.errorMessage,
});

export default compose(connect(mapStateToProps), WithSpinner)(App);
