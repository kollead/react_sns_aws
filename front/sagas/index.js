import {all, call, fork, take, put} from 'redux-saga/effects'
import axios from 'axios'

function loginAPI() {
    return axios.post('/api/login')
}
function logoutAPI() {
    return axios.post('/api/logout')
}
function addPostAPI() {
    return axios.post('/api/post')
}

function* logIn() {
    const result=yield call(loginAPI)
    try {
    
        yield put({
            type: "LOG_IN_SUCCESS",
            data: result.data
        })
    } catch (error) {
        yield put({
            type: "LOG_IN_FAILURE",
            data: error.response.data
        })
    }

}
function* logOut() {
    const result=yield call(logoutAPI)
    try {
    
        yield put({
            type: "LOG_OUT_SUCCESS",
            data: result.data
        })
    } catch (error) {
        yield put({
            type: "LOG_OUT_FAILURE",
            data: error.response.data
        })
    }

}
function* addPost() {
    const result=yield call(addPostAPI)
    try {
    
        yield put({
            type: "ADD_POST_SUCCESS",
            data: result.data
        })
    } catch (error) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: error.response.data
        })
    }

}


function* watchLogin() {
    yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogout() {
    yield take('LOG_OUT_REQUEST', logOut);
}
function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost)
}
export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAddPost
            )
    ])
}