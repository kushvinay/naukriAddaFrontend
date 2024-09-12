exports.id = 6229;
exports.ids = [6229];
exports.modules = {

/***/ 29849:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89262))

/***/ }),

/***/ 89262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Studentnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90466);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Store_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85208);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Store_Actions_StudentActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76311);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* __next_internal_client_entry_do_not_use__ default auto */ 







function DashboardLayout({ children }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { isAuthenticated, student } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.StudentSlice);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        dispatch((0,_Store_Actions_StudentActions__WEBPACK_IMPORTED_MODULE_5__/* .asyncCurrentUserwithall */ .L$)()).then(()=>{
            if (!student) router.push("/Studentlogin");
        }).catch((error)=>{
            console.error("Authentication error:", error);
            router.push("/Studentlogin");
        });
    }, []);
    // useEffect(() => {
    //   if(!isAuthenticated) dispatch(asyncCurrentUser())
    //   .then(() => {
    //   })
    //   .catch((error) => {
    //     console.error('Authentication error:', error);
    //     router.push('/Studentlogin');
    //   });
    // }, [isAuthenticated]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: " h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_Studentnav__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Store_Provider__WEBPACK_IMPORTED_MODULE_3__["default"], {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pt-14",
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 61079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\AVS\Desktop\naukriAddaFrontend\src\app\Student\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;