import PostActionTypes from "./post.types";

const INITIAL_STATE = {
    posts: [],
    synced: false,
    errorMessage: null
}

const postReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                synced: true
            }
        case PostActionTypes.UPDATE_POST_START:
            return {
                ...state,
                synced: false
            }
        case PostActionTypes.UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post._id === action.payload.postID) {
                        return action.payload.post;
                    } else {
                        return post;
                    }
                }),
                synced: true
            }
        case PostActionTypes.CREATE_POST_START:
            return {
                ...state,
                synced: false
            }
        case PostActionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                synced: true,
                posts: [ action.payload, ...state.posts ]
            }
        case PostActionTypes.DELETE_POST_START:
            return {
                ...state,
                synced: false
            }
        case PostActionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                synced: true,
                posts: state.posts.filter(post => post._id !== action.payload)
            }

        case PostActionTypes.FETCH_ALL_POSTS_FAILURE:
        case PostActionTypes.UPDATE_POST_FAILURE:
        case PostActionTypes.CREATE_POST_FAILURE:
        case PostActionTypes.DELETE_POST_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state
    }
}

export default postReducer;