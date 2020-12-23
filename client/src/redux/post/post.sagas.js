import { all, takeLatest, put } from '@redux-saga/core/effects';
import PostActionTypes from './post.types';
import axios from 'axios';
import {
  createPostFailure,
  createPostSuccess,
  deletePostFailure,
  deletePostSuccess,
  fetchPostFailure,
  fetchPostSuccess,
  updatePostFailure,
  updatePostSuccess,
} from './post.actions';

const BASE_URL = '';

const ROUTE = {
  allPosts: 'post',
  specificPost: (postID) => `post/${postID}`,
};

export function* fetchAllPosts() {
  try {
    const { data } = yield axios.get(`${BASE_URL}/${ROUTE.allPosts}`);
    yield put(fetchPostSuccess(data.reverse()));
  } catch (e) {
    yield put(fetchPostFailure(e.message));
  }
}

export function* onFetchPostStart() {
  yield takeLatest(PostActionTypes.FETCH_ALL_POSTS_START, fetchAllPosts);
}

export function* updatePost({ payload: { postID, post } }) {
  try {
    const { data } = yield axios.post(`${BASE_URL}/${ROUTE.specificPost(postID)}`, post);
    yield put(updatePostSuccess(postID, data));
  } catch (e) {
    yield put(updatePostFailure(e.message));
  }
}

export function* createPost({ payload: { title, body } }) {
  try {
    const { data } = yield axios.post(`${BASE_URL}/${ROUTE.allPosts}`, { title, body });
    yield put(createPostSuccess(data));
  } catch (e) {
    yield put(createPostFailure(e.message));
  }
}

export function* deletePost({ payload }) {
  try {
    yield axios.delete(`${BASE_URL}/${ROUTE.specificPost(payload)}`);
    yield put(deletePostSuccess(payload));
  } catch (e) {
    yield put(deletePostFailure(e.message));
  }
}

export function* onUpdatePostStart() {
  yield takeLatest(PostActionTypes.UPDATE_POST_START, updatePost);
}

export function* onCreatePostStart() {
  yield takeLatest(PostActionTypes.CREATE_POST_START, createPost);
}

export function* onDeletePostStart() {
  yield takeLatest(PostActionTypes.DELETE_POST_START, deletePost);
}

export default function* postSagas() {
  yield all([fetchAllPosts(), onUpdatePostStart(), onCreatePostStart(), onDeletePostStart()]);
}
