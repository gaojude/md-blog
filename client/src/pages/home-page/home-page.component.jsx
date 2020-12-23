import React from 'react';
import PostList from "../../components/post-list/post-list.component";
import {connect} from "react-redux";

const HomePage = ({posts}) => {
    return (
        <div>
            <h1 className={"text-center display-5 mt-2 mb-3"}>JUDE<small>'S BLOG</small></h1>
            <PostList posts={posts}/>
        </div>
    )
};

const mapStateToProps = state => ({
    posts: state.post.posts
})

export default connect(mapStateToProps)(HomePage);