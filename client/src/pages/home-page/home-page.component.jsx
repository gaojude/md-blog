import React from "react";
import PostList from "../../components/post-list/post-list.component";
import { connect } from "react-redux";
import Typed from "react-typed";

const strings = [
  "Frontend Developer at Faire",
  "University of Waterloo Alumnus",
  "Big Fan of Algorithms, Data Structures",
];

const HomePage = ({ posts }) => {
  return (
    <div>
      <h1 className={"text-center display-5 mt-5"}>JUDE GAO</h1>
      <p className={"text-center"}>
        <code>
          <Typed strings={strings} typeSpeed={60} backSpeed={20} loop />
        </code>
      </p>
      <PostList posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps)(HomePage);
