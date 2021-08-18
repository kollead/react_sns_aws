module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./component/AppLayout.js":
/*!********************************!*\
  !*** ./component/AppLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm */ "./component/LoginForm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ "./component/UserProfile.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\AppLayout.js";











const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].Search)`
    vertical-align: middle;
`;

const AppLayout = ({
  children
}) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const [searchInput, onChangeSearchInput] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])('');
  const onSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`/hashtag/${searchInput}`);
  }, [searchInput]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "nodebird"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 26
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SearchInput, {
          enterButton: true,
          value: searchInput,
          onChange: onChangeSearchInput,
          onSearch: onSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 32
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      gutter: 8,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 24,
        md: 6,
        children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_UserProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 19
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 37
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 24,
        md: 12,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: 24,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
          href: "",
          target: "_blank",
          rel: "noreferrer noopener",
          children: "Sujin Bae"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./component/CommentForm.js":
/*!**********************************!*\
  !*** ./component/CommentForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\CommentForm.js";








function CommentForm({
  post
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => {
    var _state$user$user;

    return (_state$user$user = state.user.user) === null || _state$user$user === void 0 ? void 0 : _state$user$user.id;
  });
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(post.id, commentText);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          position: 'absolute',
          right: 0,
          bottom: -40,
          zIndex: 1
        },
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "Twit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./component/FollowButton.js":
/*!***********************************!*\
  !*** ./component/FollowButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\FollowButton.js";







const FollowButton = ({
  post
}) => {
  var _user$Following;

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    user,
    followLoading,
    unfollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const isFollowing = user === null || user === void 0 ? void 0 : (_user$Following = user.Following) === null || _user$Following === void 0 ? void 0 : _user$Following.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
      console.log('isFollowing: ', isFollowing);
      console.log('isFollowing2: ', user === null || user === void 0 ? void 0 : user.Following.find(v => v.id === post.User.id));
      console.log('user: ', user.Following);
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
      console.log('isFollowing: ', isFollowing);
      console.log('isFollowing2: ', user === null || user === void 0 ? void 0 : user.Following.find(v => v.id === post.User.id));
      console.log('user: ', user.Following);
    }
  }, [isFollowing]);

  if (post.User.id === user.id) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, undefined);
};

FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./component/ImagesZoom/index.js":
/*!***************************************!*\
  !*** ./component/ImagesZoom/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./component/ImagesZoom/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\ImagesZoom\\index.js";






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "Detailed Images"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images && images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: `http://localhost:3065/${v.src}`,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./component/ImagesZoom/styles.js":
/*!****************************************!*\
  !*** ./component/ImagesZoom/styles.js ***!
  \****************************************/
/*! exports provided: Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    height: 44px;
    background: white;
    position: relative;
    padding: 0;
    text-align: center;

    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
    }
`;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["CloseOutlined"])`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
`;
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    height: calc(100%-44px);
    background: #090909;
`;
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    padding: 30px;
    text-align: center;
    & img {
        margin: 0 auto;
        max-height: 750px;
    }
`;
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    text-align: center;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
    
    margin-bottom: 10px;
  }
`;
const Global = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
    .slick-slide {
        display: inline-block;
    }
`;

/***/ }),

/***/ "./component/LoginForm.js":
/*!********************************!*\
  !*** ./component/LoginForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\LoginForm.js";








const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    margin-top: 10px;
`;
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
    padding: 10px;
`;

const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('');
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user); // const style= useMemo(()=>({marginTop: 10}), []);
  // <ButtonWrapper style={style}>

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onsubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(email, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["loginRequestAction"])({
      email,
      password
    })); // setIsLoggedIn(true)
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FormWrapper, {
    onFinish: onsubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
        htmlFor: "user-email",
        children: "E-Mail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-email",
        value: email,
        type: "email",
        onChange: onChangeEmail,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "PASSWORD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: logInLoading,
          children: " Login "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: " Signup "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 32
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./component/PostCard.js":
/*!*******************************!*\
  !*** ./component/PostCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./component/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./component/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./component/PostCardContent.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./component/FollowButton.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\PostCard.js";














function PostCard({
  post
}) {
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$user$user;

    return (_state$user$user = state.user.user) === null || _state$user$user === void 0 ? void 0 : _state$user$user.id;
  });
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const liked = post.Likers.find(v => v.id === id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    style: {
      marginBottom: 10
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 34
      }, this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "eb2f96",
        onClick: onUnLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "Modify"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 23
            }, this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "Report"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this)],
      title: post.RetweetId ? `${post.User.nickname} 님이 리트윗 하셨습니다.` : null,
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 22
      }, this),
      children: post.RetweetId && post.RetweetId ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 48
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/user/${post.Retweet.User.id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                children: post.Retweet.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 24
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: `/user/${post.User.id}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
              children: post.User.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 22
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 28
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
            author: item.User.nickname,
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/user/${item.User.id}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                  children: item.User.nickname[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 26
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 21
            }, this),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./component/PostCardContent.js":
/*!**************************************!*\
  !*** ./component/PostCardContent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\PostCardContent.js";





function PostCardContent({
  postData
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: postData.split(/(#[^\s#]+)/g).map(v => {
      if (v.match(/(#[^\s#]+)/)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: `/hashtag/${v.slice(1)}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 64
          }, this)
        }, v, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 18
        }, this);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./component/PostImages.js":
/*!*********************************!*\
  !*** ./component/PostImages.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom/index */ "./component/ImagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\PostImages.js";







function PostImages({
  images
}) {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%'
        },
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 28
      }, this)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%'
        },
        src: `http://localhost:3065/${images[0].src}`,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          display: 'inline-block',
          width: '50%'
        },
        src: `http://localhost:3065/${images[1].src}`,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 28
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
      role: "presentation",
      width: "50%",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      role: "presentation",
      style: {
        display: 'inline-block',
        width: '50%',
        textAlign: 'center',
        verticalAlign: 'middle'
      },
      onClick: onZoom,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 26
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

PostImages.defaultProps = {
  images: []
};
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./component/UserProfile.js":
/*!**********************************!*\
  !*** ./component/UserProfile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\UserProfile.js";







const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    user,
    LogOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["logoutRequestAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `/user/${user.id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          children: ["Twit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 64
          }, undefined), user.Posts.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 57
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }, undefined)
    }, "twit", false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          children: ["Following", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 65
          }, undefined), user.Following.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 31
      }, undefined)
    }, "followings", false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          children: ["Follower", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 63
          }, undefined), user.Follower.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 52
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 30
      }, undefined)
    }, "followers", false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      title: user.nickname,
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `/user/${user.id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          children: user.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: onLogout,
      loading: LogOutLoading,
      children: "Logout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_PostCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/PostCard */ "./component/PostCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\pages\\user\\[id].js";
// user/[id].js














const User = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    id
  } = router.query;
  const {
    mainPosts,
    hasMorePost,
    loadPostsLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    userInfo,
    user
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          var _mainPosts;

          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          console.log('lastId: ', lastId);
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["LOAD_USER_POSTS_REQUEST"],
            lastId,
            data: id
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostsLoading, id, mainPosts]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_component_AppLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("title", {
        children: [userInfo.nickname, "\uB2D8\uC758 \uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "description",
        content: `${userInfo.nickname}님의 게시글`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "og:title",
        content: `${userInfo.nickname}님의 게시글`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "og:description",
        content: `${userInfo.nickname}님의 게시글`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "og:image",
        content: "http://nodebird.com/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("meta", {
        name: "og:url",
        content: `https://nodebird.com/pot.${id}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), userInfo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        children: ["Twit", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 35
        }, undefined), userInfo.Posts.length]
      }, "twit", true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        children: ["Following", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 46
        }, undefined), userInfo.Following.length]
      }, "followings", true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        children: ["Follower", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 44
        }, undefined), userInfo.Follower.length]
      }, "followers", true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }, undefined)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Card"].Meta, {
        title: userInfo.nickname,
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
          children: userInfo.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }, undefined) : null, ";", mainPosts.map(p => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_component_PostCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      post: p
    }, p.id, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_MY_INFO_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["LOAD_USER_POSTS_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOAD_USER_INFO_REQUEST"],
    data: context.params.id
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
  await context.store.sagaTask.toPromise();
  return {
    props: {}
  };
});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE: ', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, removePost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePost", function() { return removePost; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



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
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_INFO_REQUEST, LOAD_USER_INFO_SUCCESS, LOAD_USER_INFO_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_INFO_REQUEST", function() { return LOAD_USER_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_INFO_SUCCESS", function() { return LOAD_USER_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_INFO_FAILURE", function() { return LOAD_USER_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}}/comment`, data);
}

function removeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}}/like`);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}}/like`);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: error.response.data
    });
  }
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: error.response.data
    });
  }
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: error.response.data
    });
  }
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: error.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadFollowersAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers');
}

function loadFollowingsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings');
}

function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user', {
    withCredentials: true
  });
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`, {
    withCredentials: true
  });
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`, {
    withCredentials: true
  });
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/unfollow`, {
    withCredentials: true
  });
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: error.response.data
    });
  }
}

function* logOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logoutAPI);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_INFO_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_INFO_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: error.response.data
    });
  }
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: error.response.data
    });
  }
}

function* follow(action) {
  const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: error.response.data
    });
  }
}

function* unfollow(action) {
  const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: error.response.data
    });
  }
}

function* changeNickname(action) {
  const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadFollowers() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: error.response.data
    });
  }
}

function* loadFollowings() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: error.response.data
    });
  }
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: error.response.data
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_INFO_REQUEST"], loadUser);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = context => {
  // console.log('ConfigureStore', context);
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9BcHBMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0NvbW1lbnRGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0ltYWdlc1pvb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0ltYWdlc1pvb20vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Bvc3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Qb3N0Q2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Bvc3RJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXIvLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInN0eWxlZCIsIklucHV0IiwiU2VhcmNoIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNlYXJjaElucHV0Iiwib25DaGFuZ2VTZWFyY2hJbnB1dCIsInVzZUlucHV0Iiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkNvbW1lbnRGb3JtIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsImlkIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsInVzZUVmZmVjdCIsIm9uU3VibWl0Q29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwicG9zdElkIiwidXNlcklkIiwicG9zaXRpb24iLCJtYXJnaW4iLCJyaWdodCIsImJvdHRvbSIsInpJbmRleCIsIm9iamVjdCIsIkZvbGxvd0J1dHRvbiIsImZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0xvYWRpbmciLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZyIsImZpbmQiLCJ2IiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInVzZVN0YXRlIiwic2xpZGUiLCJuZXdTbGlkZSIsIm1hcCIsInNyYyIsImxlbmd0aCIsImFycmF5T2YiLCJmdW5jIiwiT3ZlcmxheSIsImRpdiIsIkhlYWRlciIsIkNsb3NlQnRuIiwiQ2xvc2VPdXRsaW5lZCIsIlNsaWNrV3JhcHBlciIsIkltZ1dyYXBwZXIiLCJJbmRpY2F0b3IiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJ1dHRvbldyYXBwZXIiLCJGb3JtV3JhcHBlciIsIkZvcm0iLCJMb2dpbkZvcm0iLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwiYWxlcnQiLCJvbnN1Ym1pdEZvcm0iLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJQb3N0Q2FyZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJyZW1vdmVQb3N0TG9hZGluZyIsIm9uTGlrZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwib25Vbkxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsIm9uUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJsaWtlZCIsIkxpa2VycyIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsIlJldHdlZXRJZCIsIm5pY2tuYW1lIiwiUmV0d2VldCIsIkNvbW1lbnRzIiwiaXRlbSIsInNoYXBlIiwibnVtYmVyIiwic3RyaW5nIiwiY3JlYXRlZEF0Iiwib2JqZWN0T2YiLCJhbnkiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwibWF0Y2giLCJzbGljZSIsIlBvc3RJbWFnZXMiLCJzaG93SW1hZ2VzWm9vbSIsInNldFNob3dJbWFnZXNab29tIiwib25ab29tIiwiZGlzcGxheSIsIndpZHRoIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsImRlZmF1bHRQcm9wcyIsIlVzZXJQcm9maWxlIiwiTG9nT3V0TG9hZGluZyIsIm9uTG9nb3V0IiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIlBvc3RzIiwiRm9sbG93ZXIiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImUiLCJ0YXJnZXQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInVzZVJvdXRlciIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsInVzZXJJbmZvIiwib25TY3JvbGwiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJ3cmFwcGVyIiwiY29udGV4dCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJheGlvcyIsImRlZmF1bHRzIiwiQ29va2llIiwic3RvcmUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfVVNFUl9JTkZPX1JFUVVFU1QiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsImZpbGwiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJmYWtlciIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsInNlbnRlbmNlIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiYWRkQ29tbWVudCIsInJlbW92ZVBvc3QiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwidW5zaGlmdCIsIlBvc3RJZCIsImZpbHRlciIsImxpa2VQb3N0c0xvYWRpbmciLCJsaWtlUG9zdHNEb25lIiwibGlrZVBvc3RzRXJyb3IiLCJVc2VySWQiLCJ1bmxpa2VQb3N0c0xvYWRpbmciLCJ1bmxpa2VQb3N0c0RvbmUiLCJ1bmxpa2VQb3N0c0Vycm9yIiwibG9nSW5Eb25lIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9JTkZPX1NVQ0NFU1MiLCJMT0FEX1VTRVJfSU5GT19GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzQVBJIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsb2FkUG9zdEFQSSIsImFkZFBvc3RBUEkiLCJhZGRDb21tZW50QVBJIiwicmVtb3ZlQ29tbWVudEFQSSIsInVubGlrZVBvc3RBUEkiLCJkZWxldGUiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwicmVtb3ZlUG9zdEFQSSIsInVwbG9hZEltYWdlc0FQSSIsInJldHdlZXRBUEkiLCJjYWxsIiwicHV0IiwicmVzcG9uc2UiLCJsb2FkUG9zdHMiLCJsb2FkVXNlclBvc3RzIiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRQb3N0IiwidW5saWtlUG9zdCIsImxpa2VQb3N0IiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldCIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hMb2FkUG9zdCIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvZ2luQVBJIiwibG9nb3V0QVBJIiwibG9hZE15SW5mb0FQSSIsImxvYWRVc2VyQVBJIiwic2lnblVwQVBJIiwiZm9sbG93QVBJIiwidW5mb2xsb3dBUEkiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsInJlbW92ZUZvbGxvd2VyQVBJIiwibG9nSW4iLCJsb2dPdXQiLCJsb2FkVXNlciIsImxvYWRNeUluZm8iLCJzaWduVXAiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsImNoYW5nZU5pY2tuYW1lIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzIiwicmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlci9baWRdLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0lucHV0LCBNZW51LCBSb3csIENvbH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgb25DaGFuZ2VTZWFyY2hJbnB1dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaElucHV0fWApO1xyXG4gICAgfSxcclxuICAgIFtzZWFyY2hJbnB1dF0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+bm9kZWJpcmQ8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT5wcm9maWxlPC9hPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgIGVudGVyQnV0dG9uXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+c2lnbnVwPC9hPjwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXs2fT5cclxuICAgICAgICAgIHt1c2VyID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5TdWppbiBCYWU8L2E+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQge0FERF9DT01NRU5UX1JFUVVFU1R9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudEZvcm0oe3Bvc3R9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjb21tZW50VGV4dCwgb25DaGFuZ2VDb21tZW50VGV4dCwgc2V0Q29tbWVudFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXI/LmlkKTtcclxuICBjb25zdCB7YWRkQ29tbWVudERvbmUsIGFkZENvbW1lbnRMb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgfVxyXG4gIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0LmlkLCBjb21tZW50VGV4dCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkfSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgW2NvbW1lbnRUZXh0LCBpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luOiAwfX0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH1cclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMX19XHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUd2l0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoe3Bvc3R9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHt1c2VyLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPSB1c2VyPy5Gb2xsb3dpbmc/LmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0ZvbGxvd2luZzogJywgaXNGb2xsb3dpbmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0ZvbGxvd2luZzI6ICcsIHVzZXI/LkZvbGxvd2luZy5maW5kKCh2KSA9PiB2LmlkID09PSBwb3N0LlVzZXIuaWQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlcjogJywgdXNlci5Gb2xsb3dpbmcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0ZvbGxvd2luZzogJywgaXNGb2xsb3dpbmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpc0ZvbGxvd2luZzI6ICcsIHVzZXI/LkZvbGxvd2luZy5maW5kKCh2KSA9PiB2LmlkID09PSBwb3N0LlVzZXIuaWQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlcjogJywgdXNlci5Gb2xsb3dpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbaXNGb2xsb3dpbmddLFxyXG4gICk7XHJcbiAgaWYgKHBvc3QuVXNlci5pZCA9PT0gdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHtPdmVybGF5LCBHbG9iYWwsIEhlYWRlciwgQ2xvc2VCdG4sIFNsaWNrV3JhcHBlciwgSW5kaWNhdG9yLCBJbWdXcmFwcGVyfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHtpbWFnZXMsIG9uQ2xvc2V9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3ZlcmxheT5cclxuICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoMT5EZXRhaWxlZCBJbWFnZXM8L2gxPlxyXG4gICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfT5YPC9DbG9zZUJ0bj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZT17KHNsaWRlLCBuZXdTbGlkZSkgPT4gc2V0Q3VycmVudFNsaWRlKG5ld1NsaWRlKX1cclxuICAgICAgICAgICAgaW5maW5pdGVcclxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlcyAmJiBpbWFnZXMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEltZ1dyYXBwZXIga2V5PXt2LnNyY30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Yuc3JjfWB9IGFsdD17di5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWdXcmFwcGVyPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICA8SW5kaWNhdG9yPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50U2xpZGUgKyAxfVxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSW5kaWNhdG9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgIDwvT3ZlcmxheT5cclxuICApO1xyXG59O1xyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207XHJcbiIsImltcG9ydCB7Q2xvc2VPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkKENsb3NlT3V0bGluZWQpYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUtNDRweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xyXG5gO1xyXG5leHBvcnQgY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJiBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gICAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAmID4gZGl2IHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5zbGljay1zbGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQge2xvZ2luUmVxdWVzdEFjdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCB7bG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vIGNvbnN0IHN0eWxlPSB1c2VNZW1vKCgpPT4oe21hcmdpblRvcDogMTB9KSwgW10pO1xyXG4gIC8vIDxCdXR0b25XcmFwcGVyIHN0eWxlPXtzdHlsZX0+XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICBjb25zdCBvbnN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHtlbWFpbCwgcGFzc3dvcmR9KSk7XHJcbiAgICAvLyBzZXRJc0xvZ2dlZEluKHRydWUpXHJcbiAgfSxcclxuICBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uc3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWVtYWlsXCI+RS1NYWlsPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+UEFTU1dPUkQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvZ0luTG9hZGluZ30+IExvZ2luIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT4gU2lnbnVwIDwvYT48L0xpbms+XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Q2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIsIExpc3QsIENvbW1lbnR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge0VsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBSZXR3ZWV0T3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gJy4vRm9sbG93QnV0dG9uJztcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFJFVFdFRVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gUG9zdENhcmQoe3Bvc3R9KSB7XHJcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcj8uaWQpO1xyXG4gIGNvbnN0IHtyZW1vdmVQb3N0TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmICghaWQpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICB9KTtcclxuICAgIH0sIFtpZF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25Vbkxpa2UgPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9LCBbaWRdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtpZF0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSxcclxuICApO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9LCBbaWRdLFxyXG4gICk7XHJcbiAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAxMH19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cImViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Vbkxpa2V9IC8+XHJcbiAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkXHJcbiAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPk1vZGlmeTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+UmVtb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uPlJlcG9ydDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgICB0aXRsZT17cG9zdC5SZXR3ZWV0SWQgPyBgJHtwb3N0LlVzZXIubmlja25hbWV9IOuLmOydtCDrpqztirjsnJcg7ZWY7IWo7Iq164uI64ukLmAgOiBudWxsfVxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldElkXHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5SZXR3ZWV0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuUmV0d2VldC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT48QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7aXRlbS5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxDb21tZW50Rm9ybS8+XHJcbiAgICAgIDxDb21tZW50cy8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gUG9zdENhcmRDb250ZW50KHtwb3N0RGF0YX0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Bvc3REYXRhLnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgICBpZiAodi5tYXRjaCgvKCNbXlxccyNdKykvKSkge1xyXG4gICAgICAgICAgcmV0dXJuIDxMaW5rIGtleT17dn0gaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfT48YT57dn08L2E+PC9MaW5rPjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHtcclxuICBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgSW1hZ2VzWm9vbSBmcm9tICcuL0ltYWdlc1pvb20vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gUG9zdEltYWdlcyh7aW1hZ2VzfSkge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgIH0sIFtdLFxyXG4gICk7XHJcbiAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XHJcbiAgICB9LCBbXSxcclxuICApO1xyXG5cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAnNTAlJ319XHJcbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICc1MCUnfX1cclxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH1cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICc1MCUnfX1cclxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1sxXS5zcmN9YH1cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzFdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX1cclxuICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgID5cclxuICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggLSAxfVxyXG4gICAgICAgIOqwnOydmCDsgqzsp4Qg642UIOuztOq4sFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBvc3RJbWFnZXMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlczogW10sXHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtDYXJkLCBBdmF0YXIsIEJ1dHRvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7bG9nb3V0UmVxdWVzdEFjdGlvbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge3VzZXIsIExvZ091dExvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIH0sIFtdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+PExpbmsgaHJlZj17YC91c2VyLyR7dXNlci5pZH1gfT48YT5Ud2l0PGJyIC8+e3VzZXIuUG9zdHMubGVuZ3RofTwvYT48L0xpbms+PC9kaXY+LFxyXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPjxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPkZvbGxvd2luZzxiciAvPnt1c2VyLkZvbGxvd2luZy5sZW5ndGh9PC9hPjwvTGluaz48L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj48TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT5Gb2xsb3dlcjxiciAvPnt1c2VyLkZvbGxvd2VyLmxlbmd0aH08L2E+PC9MaW5rPjwvZGl2PixcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgIHRpdGxlPXt1c2VyLm5pY2tuYW1lfVxyXG4gICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgPEF2YXRhcj57dXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Mb2dvdXR9IGxvYWRpbmc9e0xvZ091dExvYWRpbmd9PkxvZ291dDwvQnV0dG9uPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sIFtdLFxyXG4gICk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlciwgc2V0VmFsdWVdO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLy8gdXNlci9baWRdLmpzXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IENhcmQsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7TE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfVVNFUl9JTkZPX1JFUVVFU1R9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50L1Bvc3RDYXJkJztcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qge21haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7dXNlckluZm8sIHVzZXJ9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbGFzdElkOiAnLCBsYXN0SWQpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZywgaWQsIG1haW5Qb3N0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAge3VzZXJJbmZvLm5pY2tuYW1lfVxyXG4gICAgICAgICAg64uY7J2YIOq4gFxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17YCR7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHA6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vcG90LiR7aWR9YH0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7dXNlckluZm9cclxuICAgICAgICA/IChcclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5Ud2l0PGJyIC8+e3VzZXJJbmZvLlBvc3RzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+Rm9sbG93aW5nPGJyIC8+e3VzZXJJbmZvLkZvbGxvd2luZy5sZW5ndGh9PC9kaXY+LFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+Rm9sbG93ZXI8YnIgLz57dXNlckluZm8uRm9sbG93ZXIubGVuZ3RofTwvZGl2PixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt1c2VySW5mby5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3VzZXJJbmZvLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApXHJcbiAgICAgICAgOiBudWxsIH07XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwKSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cC5pZH0gcG9zdD17cH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX0lORk9fUkVRVUVTVCxcclxuICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4gIHJldHVybiB7cHJvcHM6IHt9fTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iLCJpbXBvcnQge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZygnSFlEUkFURTogJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4Qg7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsgqzsmqnsnpAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4Qg7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4Qg7KSRXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG4gIHVzZXI6IG51bGwsIC8vIOycoOyggCDsoJXrs7RcclxuICB1c2VySW5mbzogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0lORk9fUkVRVUVTVCA9ICdMT0FEX1VTRVJfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfSU5GT19GQUlMVVJFID0gJ0xPQURfVVNFUl9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudXNlci5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC51c2VyLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0LnVzZXIuUG9zdHMgPSBkcmFmdC51c2VyLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXIuRm9sbG93aW5nLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlci5Gb2xsb3dpbmcgPSBkcmFmdC51c2VyLkZvbGxvd2luZy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VyLkZvbGxvd2VyID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VyLkZvbGxvd2luZyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXIuRm9sbG93ZXIgPSBkcmFmdC51c2VyLkZvbGxvd2VyLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7YWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgZm9yayh1c2VyU2FnYSksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgY2FsbCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9GQUlMVVJFLCBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19GQUlMVVJFLCBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9GQUlMVVJFLCBVTkxJS0VfUE9TVF9TVUNDRVNTLCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19TVUNDRVNTLCBSRVRXRUVUX1JFUVVFU1QsIFJFVFdFRVRfU1VDQ0VTUywgUkVUV0VFVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9fS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX19L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9fS9saWtlYCk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBkZWxheSwgY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCxcclxuICBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfSU5GT19SRVFVRVNULCBMT0FEX1VTRVJfSU5GT19TVUNDRVNTLCBMT0FEX1VTRVJfSU5GT19GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1N9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2Vyc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJyk7XHJcbn1cclxuZnVuY3Rpb24gbG9naW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ291dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2AsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS91bmZvbGxvd2AsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHtuaWNrbmFtZTogZGF0YX0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfSU5GT19SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ291dCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnQ29uZmlndXJlU3RvcmUnLCBjb250ZXh0KTtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoXHJcbiAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXHJcbiAgICApO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==