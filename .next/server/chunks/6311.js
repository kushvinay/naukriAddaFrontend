"use strict";
exports.id = 6311;
exports.ids = [6311];
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

/***/ 76311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BD: () => (/* binding */ asyncAddInternship),
/* harmony export */   Bo: () => (/* binding */ asynDeletjobRes),
/* harmony export */   E4: () => (/* binding */ asynDeletresponsibilitiesRes),
/* harmony export */   F5: () => (/* binding */ asynaddresponsibilitiesRes),
/* harmony export */   FD: () => (/* binding */ asyncsignup),
/* harmony export */   HF: () => (/* binding */ asynaddaccomplishmentsRes),
/* harmony export */   L$: () => (/* binding */ asyncCurrentUserwithall),
/* harmony export */   Ln: () => (/* binding */ asynaddprojectsRes),
/* harmony export */   MH: () => (/* binding */ asynapply),
/* harmony export */   PP: () => (/* binding */ asyncforgetpasswordstd),
/* harmony export */   Qq: () => (/* binding */ asynAddEducation),
/* harmony export */   Ys: () => (/* binding */ asynapplyjob),
/* harmony export */   ZH: () => (/* binding */ asyncCurrentUser),
/* harmony export */   ZS: () => (/* binding */ asynStudentlogout),
/* harmony export */   ZT: () => (/* binding */ asynDeletcoursesRes),
/* harmony export */   a7: () => (/* binding */ asynDeletprojectsRes),
/* harmony export */   aw: () => (/* binding */ setjobs),
/* harmony export */   cb: () => (/* binding */ asynupdatestudent),
/* harmony export */   e7: () => (/* binding */ asynaddInternshipRes),
/* harmony export */   fC: () => (/* binding */ asynDeletaccomplishmentsRes),
/* harmony export */   hB: () => (/* binding */ asynDeletEducationRes),
/* harmony export */   kY: () => (/* binding */ asynaddcoursesRes),
/* harmony export */   kx: () => (/* binding */ asynAddjobRes),
/* harmony export */   nx: () => (/* binding */ asyncAddjobs),
/* harmony export */   oR: () => (/* binding */ asynclogin),
/* harmony export */   p5: () => (/* binding */ asyncotppasswordstudent),
/* harmony export */   pZ: () => (/* binding */ asynDeletskillsRes),
/* harmony export */   rM: () => (/* binding */ asynDeletInternshipRes),
/* harmony export */   sN: () => (/* binding */ asynchangepassword),
/* harmony export */   vs: () => (/* binding */ asynaddskillsRes),
/* harmony export */   yR: () => (/* binding */ asynUpdateAvatar)
/* harmony export */ });
/* unused harmony exports setStudent, setinternships */
/* harmony import */ var _axiosconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21330);
/* harmony import */ var _Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(793);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34751);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45996);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);




const setStudent = ()=>async (dispatch, getState)=>{
        try {
            const res = await axios.get("/");
        } catch (error) {
            console.log(error);
        }
    };
const setjobs = ()=>async (dispatch, getState)=>{
        try {
            const { data } = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student/find-job/pagination?limit=20");
            // console.log(data.jobs);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .Setjobs */ .gS)(data?.jobs));
        } catch (error) {
            console.log(_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asyncAddjobs = (length)=>async (dispatch, getState)=>{
        try {
            const { data } = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/user/student/find-job/pagination?length=${length}&limit=20`);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .AddInternships */ .vo)(data?.jobs));
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const setinternships = ()=>async (dispatch, getState)=>{
        try {
            const { data } = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student/find-internship/pagination?limt=20");
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .SetInternships */ .D2)(data?.internships));
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data.message));
        // console.log(error);
        }
    };
const asyncAddInternship = (length)=>async (dispatch, getState)=>{
        try {
            console.log(length);
            const { data } = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/user/student/find-internship/pagination?lenth=${length}&limit=3`);
            console.log(`addinter ${data?.internships?.length}`);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .AddInternships */ .vo)(data?.internships));
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asyncCurrentUserwithall = ()=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student");
            console.log(res.data.student.fullname);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .SetUser */ .uq)(res?.data?.student));
            dispatch(setjobs());
            dispatch(setinternships());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asyncCurrentUser = ()=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student");
            console.log(res.data.student.fullname);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .SetUser */ .uq)(res?.data?.student));
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asyncsignup = (student)=>async (dispatch, getState)=>{
        try {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .IsLoading */ .tr)());
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student/signup", student);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asynclogin = (student)=>async (dispatch, getState)=>{
        try {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .IsLoading */ .tr)());
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student/signin", student);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
// export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get("/student/signout");
//     dispatch(removestudent());
//   } catch (error) {
//     dispatch(iserror(error.response.data.message));
//   }
const asynStudentlogout = ()=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/user/student/signout", {
                withCredentials: true
            });
            console.log(res);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .RemoveUser */ .ST)());
            return res?.data;
        } catch (error) {
            // console.log(error);
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        }
    };
const asynUpdateAvatar = (formdata)=>async (dispatch, getState)=>{
        try {
            console.log("call");
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/user/student/avatar`, formdata);
            dispatch(asyncCurrentUser()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.success("Profile Picture Changed", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.error("Update failed");
            });
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asynchangepassword = (password)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/user/student/change-password`, password);
            dispatch(asyncCurrentUser()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.success("Password changed Successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                });
            }).catch((error)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.error("Update failed");
            });
        } catch (error) {
            // dispatch(iserror(error?.data?.message))
            console.log(error);
        }
    };
//forget password
const asyncforgetpasswordstd = (email)=>async (dispatch, getState)=>{
        try {
            const data = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/student/forget-password", email);
            console.log(data);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error)
        }
    };
///get otp 
const asyncotppasswordstudent = (pwd)=>async (dispatch, getState)=>{
        try {
            const otp = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/student/forget-link/", pwd);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        // dispatch(iserror(error.response.data.message));
        }
    };
const asynupdatestudent = (updateInfo)=>async (dispatch, getState)=>{
        try {
            const res = await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/user/student/update-user", updateInfo);
            dispatch(asyncCurrentUser()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.success("Update Successfully", {
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
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.error("Update failed"); // Show an error toast notification
            // console.error('Update error:', error.response.data.error);
            });
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asynAddEducation = (education)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-education", education);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asynDeletEducationRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-education/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asynAddjobRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-jobs", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
        // console.log(error);
        }
    };
const asynDeletjobRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-jobs/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynaddInternshipRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-intenships", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynDeletInternshipRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-intenships/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynaddresponsibilitiesRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-responsibilities", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynDeletresponsibilitiesRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-responsibilities/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynaddcoursesRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-courses", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error.response.data.message));
            console.log(error);
        }
    };
const asynDeletcoursesRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-courses/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynaddskillsRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-skills", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynDeletskillsRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-skills/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynaddprojectsRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-projects", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            console.log(error);
        }
    };
const asynDeletprojectsRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-projects/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynaddaccomplishmentsRes = (info)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/resume/add-accomplishments", info);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynDeletaccomplishmentsRes = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/resume/delete-accomplishments/${id}`);
            dispatch(asyncCurrentUser());
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynapply = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/user/student/internship-apply/${id}`);
            dispatch(asyncCurrentUser()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.success("Applied Successfully", {
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
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.error("Update failed"); // Show an error toast notification
            // console.error('Update error:', error.response.data.error);
            });
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };
const asynapplyjob = (id)=>async (dispatch, getState)=>{
        try {
            await _axiosconfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`/user/student/job-apply/${id}`);
            dispatch(asyncCurrentUser()).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.success("Applied Successfully", {
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
                react_toastify__WEBPACK_IMPORTED_MODULE_2__/* .toast */ .Am.error("Update failed"); // Show an error toast notification
            // console.error('Update error:', error.response.data.error);
            });
        } catch (error) {
            dispatch((0,_Slices_StudentSlice__WEBPACK_IMPORTED_MODULE_1__/* .iserror */ .Ru)(error?.data?.message));
            console.log(error);
        }
    };


/***/ })

};
;