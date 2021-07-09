import {all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import {ADD_POST_REQUEST, ADD_POST_SUCCESS,
  ADD_POST_FAILURE, ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_FAILURE, REMOVE_POST_SUCCESS, LOAD_POSTS_REQUEST, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS, generateDummyPost, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_FAILURE, LIKE_POST_SUCCESS} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME} from '../reducers/user';

function loadPostAPI(data) {
  return axios.get('/posts', data);
}
function addPostAPI(data) {
  return axios.post('/post', {content: data});
}
function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}}/comment`, data);
}
function removeCommentAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: error.response.data,
    });
  }
}

function* removePost(action) {
  try {
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: error.response.data,
    });
  }
}
function* likePost(action) {
  try {
    const result = yield call(like)
    yield put({
      type: LIKE_POST_SUCCESS,
      data: ,
    })
  } catch (error) {
    yield put({
      type: LIKE_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPosts),
    fork(watchLikePost),
    fork(watchUnlikePost),
  ]);
}
