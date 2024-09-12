"use strict";
exports.id = 2607;
exports.ids = [2607];
exports.modules = {

/***/ 21330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54997);

const instance = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: "http://localhost:4040/",
    withCredentials: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ 2607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cu: () => (/* binding */ asyncEmployeSignup),
/* harmony export */   Ew: () => (/* binding */ asyncJobIsactive),
/* harmony export */   Fh: () => (/* binding */ asyncEmployeSignin),
/* harmony export */   Ie: () => (/* binding */ asyncforgetpassword),
/* harmony export */   Q2: () => (/* binding */ asyncgetotp),
/* harmony export */   Yb: () => (/* binding */ asynupdateemploye),
/* harmony export */   _S: () => (/* binding */ asyncEditInternship),
/* harmony export */   eY: () => (/* binding */ asyncCurrentEmploye),
/* harmony export */   hE: () => (/* binding */ asyncEmployeCreateInternship),
/* harmony export */   jd: () => (/* binding */ asyncEmpchangepassword),
/* harmony export */   jr: () => (/* binding */ asyncSetResumesjob),
/* harmony export */   oE: () => (/* binding */ asyncEditJob),
/* harmony export */   oq: () => (/* binding */ asyncEmployeCreateJob),
/* harmony export */   qL: () => (/* binding */ asyncRemoveEmploye),
/* harmony export */   tP: () => (/* binding */ asynUpdateOrganisationlogo),
/* harmony export */   xp: () => (/* binding */ asyncSetResumes),
/* harmony export */   yr: () => (/* binding */ asyncIntershipIsactive)
/* harmony export */ });
/* unused harmony export setStudent */
/* harmony import */ var _axiosconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21330);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34751);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45996);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70322);




const setStudent = ()=>async (dispatch, getState)=>{
        try {
            const res = await axios.get("/");
        } catch (error) {
            console.log(error);
        }
    };
const asyncRemoveEmploye = ()=>async (dispatch, getState)=>{
        try {
            const response = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/employe/signout");
            console.log(response);
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .RemoveEmploye */ .oY)());
            return response.data;
        } catch (error) {
            console.log(error);
        // dispatch(iserror(error.response.data.message));
        }
    };
// export const asynEmployelogout = () => async (dispatch, getState) => {
//   try {
//     const res = await axios.get("/employe/signout");
//     console.log(res)
//     dispatch(RemoveEmploye())
//     return res.data
//   } catch (error) {
//     console.log(error);
//     // dispatch(iserror(error.response.data.message));
//   }
// };
const asyncCurrentEmploye = ()=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/employe/employe");
            console.log(`form curr user ${res.data.employe}`);
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .SetEmploye */ .m4)(res.data.employe));
        } catch (error) {
            console.log(error);
        }
    };
const asyncEmployeSignup = (employe)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/employe/signup", employe);
            console.log(`res ${res}`);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncEmployeSignin = (employe)=>async (dispatch, getState)=>{
        try {
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .IsLoading */ .tr)());
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/Employe/signin", employe);
            console.log("login is ");
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncEmployeCreateJob = (job)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/Employe/job/create", job).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.success("Job Post Created", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("Creation failed");
            });
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncEmployeCreateInternship = (internship)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/Employe/internship/create", internship).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.success("Internship Post Created", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("Creation failed");
            });
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asynupdateemploye = (updateInfo)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/Employe/update-employe", updateInfo);
            dispatch(asyncCurrentEmploye()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.success("Update Successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                // Handle error response
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("Update failed"); // Show an error toast notification
            // console.error('Update error:', error.response.data.error);
            });
        } catch (error) {
            // dispatch(iserror(error?.data?.message))
            console.log(error);
        }
    };
// export const asyncEmpchangepassword = (password) => async (dispatch, getState) => {
//     try {
//       console.log(password)
//       const res = await axios.post('/Employe/change-password', password);
//       dispatch(asyncCurrentEmploye());
//     } catch (error) {
//       console.log(error);
//     }
//   };
const asyncEmpchangepassword = (password)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/Employe/change-password", password);
            dispatch(asyncCurrentEmploye()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.success("Password changed Successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("Update failed");
            });
        } catch (error) {
            console.log(error);
        }
    };
//forget password
const asyncforgetpassword = (email)=>async (dispatch, getState)=>{
        try {
            const data = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/employe/forget-password", email);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            // dispatch(iserror(error?.data?.message))
            console.log(error);
        }
    };
///get otp
const asyncgetotp = (email)=>async (dispatch, getState)=>{
        try {
            const data = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("employe/forget-link/:id", email);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            // dispatch(iserror(error?.data?.message))
            console.log(error);
        }
    };
const asynUpdateOrganisationlogo = (formdata)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/organisation-logo`, formdata).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.success("Compony logo update", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .toast */ .Am.error("Update failed");
            });
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncEditInternship = (id, internship)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/Edit-Internship/${id}`, internship);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncIntershipIsactive = (id)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/Internship-isActive/${id}`);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncEditJob = (id, job)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/Edit-job/${id}`, job);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncJobIsactive = (id)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/job-isActive/${id}`);
            dispatch(asyncCurrentEmploye());
        } catch (error) {
            console.log(error);
        }
    };
const asyncSetResumes = (id)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/Interns-resume/${id}`);
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .RemoveResumes */ .e3)());
            console.log(`tung fatch = ${res}`);
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .SetResumes */ .AC)(res.data.Resumes.usersapplied));
        } catch (error) {
            console.log(error);
        }
    };
const asyncSetResumesjob = (id)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/Employe/Job-resume/${id}`);
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .RemoveResumes */ .e3)());
            console.log(`tung fatch = ${res}`);
            dispatch((0,_Slices_EmployeSlice__WEBPACK_IMPORTED_MODULE_3__/* .SetResumes */ .AC)(res.data.Resumes.usersapplied));
        } catch (error) {
            console.log(error);
        }
    };


/***/ })

};
;