import React, {useEffect} from 'react';
import MessageBox from "../../components/message-box/message-box.component";
import {connect} from "react-redux";
import './post-page.styles.scss';
import ReactMarkdown from "react-markdown";

const PostPage = ({post}) => {


    useEffect(() => {
        window.MathJax.typeset()
    }, [post])

    if (post)
        return (
            <div className={'markdown-body mt-5'}>
                {/*<h1>{ post.title }</h1>*/}
                <ReactMarkdown source={post.body} />
            </div>
        );
    else return <MessageBox message={`Please check the URL, since the post is not found in the database.`}/>
};

const mapStateToProps = (state, {match: {params: {postID}}}) => ({
    post: state.post.posts.find(p => p._id === postID)
})

export default connect(mapStateToProps)(PostPage);