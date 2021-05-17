webpackHotUpdate_N_E("pages/index",{

/***/ "./component/PostImages.js":
/*!*********************************!*\
  !*** ./component/PostImages.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom/index */ "./component/ImagesZoom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\irald\\Documents\\reactSns\\front\\component\\PostImages.js",
    _s = $RefreshSig$();








function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%"
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 36
      }, this)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%"
        },
        src: images[0].src,
        alt: images[0].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%"
        },
        src: images[1].src,
        alt: images[1].src,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 36
      }, this)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
      role: "presentation",
      width: "50%",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      role: "presentation",
      style: {
        display: "inline-block",
        width: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      },
      onClick: onZoom,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

_s(PostImages, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1Bvc3RJbWFnZXMuanMiXSwibmFtZXMiOlsiUG9zdEltYWdlcyIsImltYWdlcyIsInVzZVN0YXRlIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsInVzZUNhbGxiYWNrIiwib25DbG9zZSIsImxlbmd0aCIsImRpc3BsYXkiLCJ3aWR0aCIsInNyYyIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxTQUFTQSxVQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxLQUFELENBRHhCO0FBQUEsTUFDbkJDLGNBRG1CO0FBQUEsTUFDSEMsaUJBREc7O0FBRTFCLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FDdEIsWUFBTTtBQUNGRixxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0gsR0FIcUIsRUFJdEIsRUFKc0IsQ0FBMUI7QUFNQSxNQUFNRyxPQUFPLEdBQUlELHlEQUFXLENBQ3hCLFlBQU07QUFDRkYscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNILEdBSHVCLEVBSXhCLEVBSndCLENBQTVCOztBQU9BLE1BQUdILE1BQU0sQ0FBQ08sTUFBUCxLQUFnQixDQUFuQixFQUFxQjtBQUNqQix3QkFDSTtBQUFBLDhCQUNJO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBMEIsYUFBSyxFQUFFO0FBQUNDLGlCQUFPLEVBQUUsY0FBVjtBQUEwQkMsZUFBSyxFQUFFO0FBQWpDLFNBQWpDO0FBQTJFLFdBQUcsRUFBRVQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVVSxHQUExRjtBQUErRixXQUFHLEVBQUVWLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVUsR0FBOUc7QUFDQyxlQUFPLEVBQUVOO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBR0tGLGNBQWMsaUJBQUkscUVBQUMseURBQUQ7QUFBWSxjQUFNLEVBQUVGLE1BQXBCO0FBQTRCLGVBQU8sRUFBRU07QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUh2QjtBQUFBLG9CQURKO0FBT0g7O0FBQ0QsTUFBR04sTUFBTSxDQUFDTyxNQUFQLEtBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLHdCQUNJO0FBQUEsOEJBQ0k7QUFBSyxZQUFJLEVBQUMsY0FBVjtBQUF5QixhQUFLLEVBQUU7QUFBQ0MsaUJBQU8sRUFBRSxjQUFWO0FBQTBCQyxlQUFLLEVBQUU7QUFBakMsU0FBaEM7QUFBeUUsV0FBRyxFQUFFVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVVLEdBQXhGO0FBQTZGLFdBQUcsRUFBRVYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVVSxHQUE1RztBQUNDLGVBQU8sRUFBRU47QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHSTtBQUFLLFlBQUksRUFBQyxjQUFWO0FBQXlCLGFBQUssRUFBRTtBQUFDSSxpQkFBTyxFQUFFLGNBQVY7QUFBMEJDLGVBQUssRUFBRTtBQUFqQyxTQUFoQztBQUF5RSxXQUFHLEVBQUVULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVUsR0FBeEY7QUFBNkYsV0FBRyxFQUFFVixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVVLEdBQTVHO0FBQ0MsZUFBTyxFQUFFTjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQUtLRixjQUFjLGlCQUFJLHFFQUFDLHlEQUFEO0FBQVksY0FBTSxFQUFFRixNQUFwQjtBQUE0QixlQUFPLEVBQUVNO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMdkI7QUFBQSxvQkFESjtBQVNIOztBQUNELHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxVQUFJLEVBQUMsY0FBVjtBQUF5QixXQUFLLEVBQUUsS0FBaEM7QUFBdUMsU0FBRyxFQUFFTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVVLEdBQXREO0FBQTJELFNBQUcsRUFBRVYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVVSxHQUExRTtBQUNLLGFBQU8sRUFBRU47QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSTtBQUNJLFVBQUksRUFBQyxjQURUO0FBRUksV0FBSyxFQUFFO0FBQUNJLGVBQU8sRUFBRSxjQUFWO0FBQTBCQyxhQUFLLEVBQUUsS0FBakM7QUFBd0NFLGlCQUFTLEVBQUUsUUFBbkQ7QUFBNkRDLHFCQUFhLEVBQUU7QUFBNUUsT0FGWDtBQUdJLGFBQU8sRUFBRVIsTUFIYjtBQUFBLDhCQUlRLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUixlQUtRO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMUixFQU1TSixNQUFNLENBQUNPLE1BQVAsR0FBZSxDQU54QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixFQVlLTCxjQUFjLGlCQUFJLHFFQUFDLHlEQUFEO0FBQVksWUFBTSxFQUFFRixNQUFwQjtBQUE0QixhQUFPLEVBQUVNO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFadkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBbkRRUCxVOztLQUFBQSxVO0FBb0RUQSxVQUFVLENBQUNjLFNBQVgsR0FBdUI7QUFDbkJiLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUI7QUFEVyxDQUF2QjtBQUllakIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRjYjNjYTJiMGVmODQ3MDBhMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgSW1hZ2VzWm9vbSBmcm9tICcuL0ltYWdlc1pvb20vaW5kZXgnXHJcbmZ1bmN0aW9uIFBvc3RJbWFnZXMoe2ltYWdlc30pIHtcclxuICAgIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAgdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKVxyXG5cclxuICAgIGlmKGltYWdlcy5sZW5ndGg9PT0xKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgd2lkdGg6IFwiNTAlXCJ9fSAgc3JjPXtpbWFnZXNbMF0uc3JjfSBhbHQ9e2ltYWdlc1swXS5zcmN9IFxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfS8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBpZihpbWFnZXMubGVuZ3RoPT09Mil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgd2lkdGg6IFwiNTAlXCJ9fSBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHdpZHRoOiBcIjUwJVwifX0gc3JjPXtpbWFnZXNbMV0uc3JjfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IFxyXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfS8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHdpZHRoPXtcIjUwJVwifSBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VzWzBdLnNyY30gXHJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17b25ab29tfS8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB3aWR0aDogXCI1MCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtMX1cclxuICAgICAgICAgICAgICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlCDrs7TquLBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0vPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9