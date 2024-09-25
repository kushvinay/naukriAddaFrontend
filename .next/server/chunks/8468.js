exports.id = 8468;
exports.ids = [8468];
exports.modules = {

/***/ 67090:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 70162:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85208));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 46982))

/***/ }),

/***/ 85208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68112);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Providers({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
            store: _Store__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .y,
            children: children
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);


/***/ }),

/***/ 70322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AC: () => (/* binding */ SetResumes),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   e3: () => (/* binding */ RemoveResumes),
/* harmony export */   m4: () => (/* binding */ SetEmploye),
/* harmony export */   oY: () => (/* binding */ RemoveEmploye),
/* harmony export */   tr: () => (/* binding */ IsLoading)
/* harmony export */ });
/* unused harmony export EmployeSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    employe: null,
    error: null,
    resumes: null
};
const EmployeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "emploucounter",
    initialState,
    reducers: {
        IsLoading: (state, action)=>{
            state.isLoading = true;
        },
        SetEmploye: (state, action)=>{
            state.isAuthenticated = true;
            state.isLoading = false;
            state.employe = action.payload;
            state.error = null;
            console.log(`action ${action.payload}`);
        },
        RemoveEmploye: (state, action)=>{
            state = {
                isLoading: false,
                isAuthenticated: false,
                employe: null,
                error: null
            };
        },
        SetResumes: (state, action)=>{
            state.resumes = action.payload;
        },
        RemoveResumes: (state, action)=>{
            state.resumes = null;
        }
    }
});
const { SetEmploye, RemoveEmploye, SetResumes, RemoveResumes, IsLoading } = EmployeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeSlice.reducer);


/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D2: () => (/* binding */ SetInternships),
/* harmony export */   Ru: () => (/* binding */ iserror),
/* harmony export */   ST: () => (/* binding */ RemoveUser),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   gS: () => (/* binding */ Setjobs),
/* harmony export */   tr: () => (/* binding */ IsLoading),
/* harmony export */   uq: () => (/* binding */ SetUser),
/* harmony export */   vo: () => (/* binding */ AddInternships)
/* harmony export */ });
/* unused harmony exports StudentSlice, AddJobs */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    student: null,
    internships: null,
    jobs: null,
    errors: null
};
const StudentSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        IsLoading: (state, action)=>{
            state.isLoading = true;
        },
        SetUser: (state, action)=>{
            state.isAuthenticated = true;
            state.isLoading = false;
            state.student = action.payload;
            state.error = null;
            console.log(1);
            console.log(action.payload);
        },
        RemoveUser: (state, action)=>{
            state = {
                isLoading: false,
                isAuthenticated: false,
                student: null,
                error: null
            };
        },
        SetInternships: (state, action)=>{
            state.internships = action.payload;
        },
        AddInternships: (state, action)=>{
            state.internships = [
                ...state.internships,
                ...action.payload
            ];
            console.log("added");
            console.log(state.internships);
        },
        Setjobs: (state, action)=>{
            state.jobs = action.payload;
        },
        iserror: (state, action)=>{
            state.errors = action.payload;
        },
        AddJobs: (state, action)=>{
            const old = action.payload;
            state.jobs = [
                ...state.jobs,
                ...old
            ];
        }
    }
});
const { SetUser, RemoveUser, SetInternships, Setjobs, AddInternships, AddJobs, iserror, IsLoading } = StudentSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentSlice.reducer);


/***/ }),

/***/ 68112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(793);
/* harmony import */ var _Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70322);



const Store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    reducer: {
        StudentSlice: _Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP,
        EmployeSlice: _Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
    }
});


/***/ }),

/***/ 46982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34751);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45996);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68112);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Wrapper = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
            store: _Store_Store__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .y,
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .ToastContainer */ .Ix, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);


/***/ }),

/***/ 35564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7155);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/Store/Provider.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\AVS\Desktop\naukriAddaFrontend\src\Store\Provider.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Provider = ((/* unused pure expression or super */ null && (__default__)));
;// CONCATENATED MODULE: ./src/app/components/wrapper/Wrapper.js

const Wrapper_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\AVS\Desktop\naukriAddaFrontend\src\app\components\wrapper\Wrapper.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Wrapper_esModule, $$typeof: Wrapper_$$typeof } = Wrapper_proxy;
const Wrapper_default_ = Wrapper_proxy.default;


/* harmony default export */ const Wrapper = (Wrapper_default_);
;// CONCATENATED MODULE: ./src/app/layout.js





const metadata = {
    title: "NaukriAdda",
    description: "Find your jobs & Hire Experts for Any Job and Internship"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;