module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AQn3");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const App = ({
  Component
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
      children: "NodeBird"
    })]
  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Component, {})]
});

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(App));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('HYDRATE: ', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["J" /* default */],
          post: post["L" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/post.js





function loadPostsAPI(lastId) {
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`);
}

function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

function addPostAPI(data) {
  return external_axios_default.a.post('/post', data);
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}}/comment`, data);
}

function removeCommentAPI(data) {
  return external_axios_default.a.post('/api/post', data);
}

function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}}/like`);
}

function likePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data}}/like`);
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}`);
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data);
}

function retweetAPI(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`);
}

function modifyPostAPI(data) {
  return external_axios_default.a.patch(`/post/${data.postId}`, data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: error.response.data
    });
  }
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["B" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["C" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["z" /* REMOVE_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_POSTS_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_USER_POSTS_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["F" /* UNLIKE_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["K" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["I" /* UPLOAD_IMAGES_FAILURE */],
      error: error.response.data
    });
  }
}

function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: post["E" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["C" /* RETWEET_FAILURE */],
      error: error.response.data
    });
  }
}

function* modifyPost(action) {
  try {
    const result = yield Object(effects_["call"])(modifyPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["x" /* MODIFY_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["v" /* MODIFY_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["A" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchLoadPosts() {
  yield Object(effects_["throttle"])(5000, post["n" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchLoadUserPosts() {
  yield Object(effects_["throttle"])(5000, post["t" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["throttle"])(5000, post["k" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnlikePost() {
  yield Object(effects_["takeLatest"])(post["G" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["J" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["D" /* RETWEET_REQUEST */], retweet);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchModifyPost() {
  yield Object(effects_["takeLatest"])(post["w" /* MODIFY_POST_REQUEST */], modifyPost);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchRetweet), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchModifyPost)]);
}
// CONCATENATED MODULE: ./sagas/user.js




function loadFollowersAPI() {
  return external_axios_default.a.get('/user/followers');
}

function loadFollowingsAPI() {
  return external_axios_default.a.get('/user/followings');
}

function loginAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

function logoutAPI() {
  return external_axios_default.a.post('/user/logout');
}

function loadMyInfoAPI() {
  return external_axios_default.a.get('/user', {
    withCredentials: true
  });
}

function loadUserAPI(data) {
  return external_axios_default.a.get(`/user/${data}`, {
    withCredentials: true
  });
}

function signUpAPI(data) {
  return external_axios_default.a.post('/user', data);
}

function followAPI(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`, {
    withCredentials: true
  });
}

function unfollowAPI(data) {
  return external_axios_default.a.delete(`/user/${data}/unfollow`, {
    withCredentials: true
  });
}

function changeNicknameAPI(data) {
  return external_axios_default.a.patch('/user/nickname', {
    nickname: data
  });
}

function removeFollowerAPI(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`);
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(loginAPI, action.data);
    yield Object(effects_["put"])({
      type: user["v" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["t" /* LOG_IN_FAILURE */],
      error: error.response.data
    });
  }
}

function* logOut() {
  yield Object(effects_["call"])(logoutAPI);

  try {
    yield Object(effects_["put"])({
      type: user["y" /* LOG_OUT_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["w" /* LOG_OUT_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      type: user["s" /* LOAD_USER_INFO_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["q" /* LOAD_USER_INFO_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["n" /* LOAD_MY_INFO_FAILURE */],
      error: error.response.data
    });
  }
}

function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["F" /* SIGN_UP_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["D" /* SIGN_UP_FAILURE */],
      error: error.response.data
    });
  }
}

function* follow(action) {
  const result = yield Object(effects_["call"])(followAPI, action.data);

  try {
    yield Object(effects_["put"])({
      type: user["g" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_FAILURE */],
      error: error.response.data
    });
  }
}

function* unfollow(action) {
  const result = yield Object(effects_["call"])(unfollowAPI, action.data);

  try {
    yield Object(effects_["put"])({
      type: user["I" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["G" /* UNFOLLOW_FAILURE */],
      error: error.response.data
    });
  }
}

function* changeNickname(action) {
  const result = yield Object(effects_["call"])(changeNicknameAPI, action.data);

  try {
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadFollowers() {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadFollowings() {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
      error: error.response.data
    });
  }
}

function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      type: user["B" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["z" /* REMOVE_FOLLOWER_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchLogin() {
  yield Object(effects_["takeLatest"])(user["u" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogout() {
  yield Object(effects_["takeLatest"])(user["x" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["E" /* SIGN_UP_REQUEST */], signUp);
}

function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["f" /* FOLLOW_REQUEST */], follow);
}

function* watchUnfollow() {
  yield Object(effects_["takeLatest"])(user["H" /* UNFOLLOW_REQUEST */], unfollow);
}

function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["r" /* LOAD_USER_INFO_REQUEST */], loadUser);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["o" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["A" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogout), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnfollow), Object(effects_["fork"])(watchChangeNickname), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadMyInfo)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js







const configureStore = context => {
  // console.log('ConfigureStore', context);
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return logoutRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

const initialState = {
  logInLoading: false,
  // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도 중
  logOutDone: false,
  logOutError: null,
  loadMyInfoLoading: false,
  // 사용자 정보 가져오기 시도 중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도 중
  loadUserDone: false,
  loadUserError: null,
  signUpLoading: false,
  // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  user: null,
  // 유저 정보
  userInfo: null
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_INFO_REQUEST = 'LOAD_USER_INFO_REQUEST';
const LOAD_USER_INFO_SUCCESS = 'LOAD_USER_INFO_SUCCESS';
const LOAD_USER_INFO_FAILURE = 'LOAD_USER_INFO_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInDone = false;
      draft.logInError = null;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logOutDone = true;
      draft.user = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logOutDone = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.logOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.logInDone = false;
      draft.user = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.user = action.data;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOAD_USER_INFO_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserDone = false;
      draft.loadUserError = null;
      break;

    case LOAD_USER_INFO_SUCCESS:
      draft.loadUserLoading = false;
      draft.loadUserDone = true;
      draft.userInfo = action.data;
      break;

    case LOAD_USER_INFO_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.user.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.user.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      draft.user.Posts = draft.user.Posts.filter(v => v.id !== action.data);
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.user.Following.push({
        id: action.data.UserId
      });
      draft.followDone = false;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowDone = false;
      draft.unfollowError = null;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.user.Following = draft.user.Following.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersDone = false;
      draft.loadFollowersError = null;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.user.Follower = action.data;
      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsDone = false;
      draft.loadFollowingsError = null;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.user.Following = action.data;
      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerDone = false;
      draft.removeFollowerError = null;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.user.Follower = draft.user.Follower.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["J"] = (reducer);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((...argus) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...argus);
});

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_FAILURE; });
/* unused harmony export addPost */
/* unused harmony export addComment */
/* unused harmony export removePost */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePost: true,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
const removePost = data => ({
  type: REMOVE_POST_REQUEST,
  data
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePost = draft.mainPosts.length === 10;
      break;

    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_POST_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.singlePost = action.data;
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true; // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = {...state.mainPosts[postIndex]};
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };

        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case MODIFY_POST_REQUEST:
      draft.modifyPostLoading = true;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      break;

    case MODIFY_POST_SUCCESS:
      draft.modifyPostLoading = false;
      draft.modifyPostDone = true;
      draft.mainPosts.find(v => v.id === action.data.PostId).content = action.data.content;
      break;

    case MODIFY_POST_FAILURE:
      draft.modifyPostLoading = false;
      draft.modifyPostError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostsLoading = true;
      draft.likePostsDone = false;
      draft.likePostsError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostsLoading = false;
        draft.likePostsDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostsLoading = false;
      draft.likePostsError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostsLoading = true;
      draft.unlikePostsDone = false;
      draft.unlikePostsError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id === action.data.UserId);
        draft.unlikePostsLoading = false;
        draft.unlikePostsDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostsLoading = false;
      draft.unlikePostsError = action.error;
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = action.data;
      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      break;

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      draft.retweetLoading = false;
      draft.retweetDone = true;
      draft.mainPosts.unshift(action.data);
      break;

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["L"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });