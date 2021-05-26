import {all, fork, takeLatest, put, delay, call } from 'redux-saga/effects'
import axios from 'axios'
import {LOG_IN_SUCCESS, LOG_IN_FAILURE,LOG_IN_REQUEST,
     LOG_OUT_SUCCESS, LOG_OUT_FAILURE,LOG_OUT_REQUEST,
     SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST} from '../reducers/user'

function loginAPI(data) {
    return axios.post('/api/login', data)
}
function logoutAPI() {
    return axios.post('/api/logout')
}

function* logIn(action) {
    
    try {
        //const result = yield call(loginAPI, action.data)
        yield delay(1000)
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        })
    } catch (error) {
        yield put({
            type: LOG_IN_FAILURE,
            data: error.response.data
        })
    }

}
function* logOut() {
    //const result=yield call(logoutAPI)
    yield delay(1000)
    try {
    
        yield put({
            type: LOG_OUT_SUCCESS
        })
    } catch (error) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: error.response.data
        })
    }

}
function* signUp() {
    yield delay(1000)
    try {
    
        yield put({
            type: SIGN_UP_SUCCESS
        })
    } catch (error) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: error.response.data
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
    yield all ([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp)
    ])
}