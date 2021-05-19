webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "01"
    },
    content: 'first content #first #content',
    Images: [{
      src: "https://64.media.tumblr.com/8688f176d0167d668fbc9750ff073824/bc6d6432604e5468-9d/s2048x3072/47d2d8df5f150f6e4cf38a83dc410e298d2490f8.png"
    }, {
      src: "https://64.media.tumblr.com/a42d9b563516bb893a8dac4628e62797/6ae9d73862ac638e-12/s2048x3072/063476d81525dbe411150e77944da0b7712bf974.png"
    }, {
      src: "https://64.media.tumblr.com/08a193b5577ba6e9a921605b7e698e5d/5baeef4540e82612-c6/s2048x3072/5521390db472cb1cd9048b590bfb8274f9eb0cb2.png"
    }, {
      src: "https://64.media.tumblr.com/a58a2b497ffb0d5d9a555fcfd5359293/b8dde5739efda089-b1/s2048x3072/6346221089420ddae7969d0b7d86ad04b495ff9a.png"
    }],
    Comments: [{
      User: {
        nickname: "02"
      },
      content: "first comments"
    }],
    imagePaths: [],
    postAdded: false
  }]
};
var ADD_POST = "ADD_POST";
var addPost = function addPost(data) {
  return {
    type: ADD_POST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        content: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBQyxDQUFDO0FBQ1BDLE1BQUUsRUFBRSxDQURHO0FBRVBDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZDO0FBTVBDLFdBQU8sRUFBRSwrQkFORjtBQU9QQyxVQUFNLEVBQUMsQ0FBQztBQUNKQyxTQUFHLEVBQUU7QUFERCxLQUFELEVBRUw7QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FGSyxFQUtQO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBTE8sRUFRUDtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQVJPLENBUEE7QUFrQlBDLFlBQVEsRUFBRSxDQUFDO0FBQ1BMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEQztBQUlQQyxhQUFPLEVBQUU7QUFKRixLQUFELENBbEJIO0FBd0JQSSxjQUFVLEVBQUUsRUF4Qkw7QUF5QlBDLGFBQVMsRUFBRTtBQXpCSixHQUFEO0FBRGMsQ0FBckI7QUE4QlAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ08sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFNBQU87QUFBQ0MsUUFBSSxFQUFFSCxRQUFQO0FBQWlCRSxRQUFJLEVBQUpBO0FBQWpCLEdBQVA7QUFDSCxDQUZNOztBQUlQLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWdDO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF6QmhCLFlBQXlCO0FBQUEsTUFBWGlCLE1BQVc7O0FBQzVDLFVBQVFBLE1BQU0sQ0FBQ0gsSUFBZjtBQUNJLFNBQUtILFFBQUw7QUFDSSw2Q0FBV0ssS0FBWDtBQUFrQlgsZUFBTyxFQUFFWSxNQUFNLENBQUNKO0FBQWxDOztBQUNKO0FBQ0ksYUFBT0csS0FBUDtBQUpSO0FBTUgsQ0FQRDs7QUFTZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMTI4OTE2YjA2M2IxNmMyNGQ4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czpbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIjAxXCIgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAnZmlyc3QgY29udGVudCAjZmlyc3QgI2NvbnRlbnQnLFxyXG4gICAgICAgIEltYWdlczpbe1xyXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly82NC5tZWRpYS50dW1ibHIuY29tLzg2ODhmMTc2ZDAxNjdkNjY4ZmJjOTc1MGZmMDczODI0L2JjNmQ2NDMyNjA0ZTU0NjgtOWQvczIwNDh4MzA3Mi80N2QyZDhkZjVmMTUwZjZlNGNmMzhhODNkYzQxMGUyOThkMjQ5MGY4LnBuZ1wiXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHNyYzogXCJodHRwczovLzY0Lm1lZGlhLnR1bWJsci5jb20vYTQyZDliNTYzNTE2YmI4OTNhOGRhYzQ2MjhlNjI3OTcvNmFlOWQ3Mzg2MmFjNjM4ZS0xMi9zMjA0OHgzMDcyLzA2MzQ3NmQ4MTUyNWRiZTQxMTE1MGU3Nzk0NGRhMGI3NzEyYmY5NzQucG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vNjQubWVkaWEudHVtYmxyLmNvbS8wOGExOTNiNTU3N2JhNmU5YTkyMTYwNWI3ZTY5OGU1ZC81YmFlZWY0NTQwZTgyNjEyLWM2L3MyMDQ4eDMwNzIvNTUyMTM5MGRiNDcyY2IxY2Q5MDQ4YjU5MGJmYjgyNzRmOWViMGNiMi5wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly82NC5tZWRpYS50dW1ibHIuY29tL2E1OGEyYjQ5N2ZmYjBkNWQ5YTU1NWZjZmQ1MzU5MjkzL2I4ZGRlNTczOWVmZGEwODktYjEvczIwNDh4MzA3Mi82MzQ2MjIxMDg5NDIwZGRhZTc5NjlkMGI3ZDg2YWQwNGI0OTVmZjlhLnBuZ1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIjAyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogXCJmaXJzdCBjb21tZW50c1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICAgICAgcG9zdEFkZGVkOiBmYWxzZVxyXG4gICAgfV1cclxufVxyXG5cclxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCJcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHt0eXBlOiBBRERfUE9TVCwgZGF0YX1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1QgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY29udGVudDogYWN0aW9uLmRhdGF9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9