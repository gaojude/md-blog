import PostActionTypes from "./post.types";

export const fetchPostStart = () => ({
    type: PostActionTypes.FETCH_ALL_POSTS_START
})

export const fetchPostSuccess = (posts) => ({
    type: PostActionTypes.FETCH_ALL_POSTS_SUCCESS,
    payload: posts
})

export const fetchPostFailure = (errorMessage) => ({
    type: PostActionTypes.FETCH_ALL_POSTS_FAILURE,
    payload: errorMessage
})

export const updatePostStart = (postID, post) => ({
    type: PostActionTypes.UPDATE_POST_START,
    payload: {
        postID,
        post
    }
})

export const updatePostSuccess = (postID, post) => ({
    type: PostActionTypes.UPDATE_POST_SUCCESS,
    payload: {
        postID,
        post
    }
})

export const updatePostFailure = (errorMessage) => ({
    type: PostActionTypes.UPDATE_POST_FAILURE,
    payload: errorMessage
})


export const createPostStart = (title, body) => ({
    type: PostActionTypes.CREATE_POST_START,
    payload: {
        title,
        body
    }
})

export const createPostSuccess = (post) => ({
    type: PostActionTypes.CREATE_POST_SUCCESS,
    payload: post
})

export const createPostFailure = (errorMessage) => ({
    type: PostActionTypes.CREATE_POST_FAILURE,
    payload: errorMessage
})

export const deletePostStart = (postID) => ({
    type: PostActionTypes.DELETE_POST_START,
    payload: postID
})

export const deletePostSuccess = (postID) => ({
    type: PostActionTypes.DELETE_POST_SUCCESS,
    payload: postID
})

export const deletePostFailure = (errorMessage) => ({
    type: PostActionTypes.DELETE_POST_FAILURE,
    payload: errorMessage
})