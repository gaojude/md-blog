import React from "react";
import PostList from "../../components/post-list/post-list.component";
import { connect } from "react-redux";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";

const strings = [
  "Frontend Developer at Faire",
  "University of Waterloo Alumnus",
  "Big Fan of Algorithms, Data Structures",
];

const HomePage = ({ posts }) => {
  return (
    <Container>
      <Typography
        className={"mt-5"}
        align={"center"}
        variant={"h3"}
        color={"textPrimary"}
        component={"h1"}
      >
        JUDE GAO
      </Typography>
      <p className={"text-center"}>
        <code>
          <Typed strings={strings} typeSpeed={60} backSpeed={20} loop />
        </code>
      </p>
      <PostList posts={posts} />
      <p
        className={
          "text-center text-uppercase font-weight-bold text-secondary mt-5"
        }
      >
        <Link to={"/maintain"} className={`nav-link`} href="#">
          <Typography color={"textSecondary"}>Manage Contents</Typography>
        </Link>
      </p>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps)(HomePage);
