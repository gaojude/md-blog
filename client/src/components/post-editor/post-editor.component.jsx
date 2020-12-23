import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {createPostStart, deletePostStart, updatePostStart} from "../../redux/post/post.actions";
import {Controlled as CodeMirror} from 'react-codemirror2';
import "./post-editor.styles.css"
require('codemirror/lib/codemirror')
require('codemirror/mode/markdown/markdown');
require('codemirror/addon/edit/continuelist')

const PostEditor = ({post, updatePost, createPost, deletePost, id}) => {

    const [currPost, setCurrPost] = useState({ title: '', body: '' })

    useEffect(() => {
        if (post) setCurrPost(post)
    }, [post])

    const handleChangeGeneric = (event) => {
        const { target: { name, value } } = event
        setCurrPost({
            ...currPost,
            [name]: value
        })
    }

    const updatePostBody = (value) => {
        setCurrPost({
            ...currPost,
            body: value
        })
    }

    const { title, body } = currPost

    const handlePostChange = async () => {
        if (id) {
            updatePost(id, currPost)
        } else {
            createPost(title, body)
        }
    }

    return (
        <div>
            <div>
                Post Name:
                <br/>
                <input
                    className={'form-control'}
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChangeGeneric}
                />
            </div>
            <div>
                Post Body:
                <br/>
                <CodeMirror
                    value={body}
                    options={{
                        mode: 'markdown',
                        lineNumbers: true,
                        theme: "eclipse",
                        extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"},
                        lineWrapping: true
                    }}
                    name="body"
                    onBeforeChange={(editor, data, value) => {
                        updatePostBody(value)
                    }}
                    onChange={(editor, data, value) => {
                        updatePostBody(value)
                    }}
                />
            </div>

            <div className="btn-group">
                <button className={'btn btn-primary'} onClick={handlePostChange}>{ id ? 'Update' : 'Create'}</button>
                {
                    id ?
                        <button className={'btn btn-danger'} onClick={async () => {
                            if (window.confirm('Do you want to delete this post-page?')) {
                                deletePost(id)
                            }
                        }
                        }>Delete</button>
                        : null
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, {match: { params: { id } }}) => ({
    post: state.post.posts.find(p => p._id === id),
    id
})

const mapDispatchToProps = (dispatch) => ({
    updatePost: (postID, post) => dispatch(updatePostStart(postID, post)),
    createPost: (title, body) => dispatch(createPostStart(title, body)),
    deletePost: (postID) => dispatch(deletePostStart(postID))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);