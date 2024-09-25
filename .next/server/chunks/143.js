"use strict";
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 90143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64731);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Store_Actions_EmployeAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2607);
// "use client"
// import React from 'react'
// import moment from "moment/moment";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { asyncIntershipIsactive } from '@/Store/Actions/EmployeAction';
// import { useDispatch } from 'react-redux';
// const EmployeInternpage = ({key , data  }) => {
//     const router = useRouter();
//     const dispatch = useDispatch();
//     const InternshipActiveOrDeactive = () =>{
//       dispatch(asyncIntershipIsactive(data._id));
//     }
//   return (
//     <div >
//         <h1 className="text-4xl text-gray-800 text-center py-6 font-semibold pt-16 ">
//         {data.profile}
//       </h1>
//       <h2 className='text-2xl text-gray-700 text-center '>{data.usersapplied.length==0?"No":data.usersapplied.length} Students Applied for this Internship   {data.usersapplied.length==0?"yet":""}</h2>
//       <div className="w-[850px] m-auto my-10">
//         <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">
//           Activly Hiring
//         </button>
//         <div className="flex justify-between border-b-[1px] pb-4 mt-5 mb-1">
//           <div>
//             <h4 className=" text-xl text-black py-2">{data.profile}</h4>
//             <p className="text-sm text-gray-600">Wipro</p>
//           </div>
//         </div>
//         <h6 className="text-gray-600 my-2">Pune</h6>
//         <div className=" flex text-sm pb-3 ">
//           <div className="me-7">
//             <h6 className="text-gray-700">Stipend</h6>
//             <h6 className="text-gray-600">5000</h6>
//           </div>
//           <div className="me-7">
//             <h6 className="text-gray-700">Duration</h6>
//             <h6 className="text-gray-600 ">{data?.duration}</h6>
//           </div>
//         </div>
//         <div className="border-b-[1px] pb-2">
//           <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
//             {moment(data.createdAt).fromNow()}{" "}
//           </p>
//         </div>
//         <div className="flex justify-end">
//           {/* <button
//             className="text-sky-500 border-[1px] text-sm
//             px-3 py-2 border-sky-500 mt-2 "
//           >
//             View details
//           </button> */}
//         </div>
//         <div className="my-3">
//           <h2 className="text-xl text-gray-700 font-medium py-1 ">
//             Skills
//           </h2>
//           <h6 className="text-gray-600 pt-2">{data.skills}</h6>
//         </div>
//         {data.responsibility && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">
//               Responsibility
//             </h2>
//             <h6 className="text-gray-600 pt-2">
//               {data?.responsibility}
//             </h6>
//           </div>
//         )}
//         {data.assesments && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">Assessments</h2>
//             <h6 className="text-gray-600 pt-2">
//               {data?.assesments}
//             </h6>
//           </div>
//         )}
//         {data.opening && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">Number Of Opening</h2>
//             <h6 className="text-gray-600 pt-2">
//               {data?.opening}
//             </h6>
//           </div>
//         )}
//         <h2>{data.usersapplied.length} Students Applied for this Internship</h2>
//         <div className=" flex items-center justify-center m-auto py-8">
//             <Link className='px-4 py-2 bg-sky-400 text-white mx-4 rounded-sm' href={`Editinternship/${data._id}`}>
//             Edit Internship
//             </Link>
//             {data.usersapplied.length == 0?'' :<Link href={`StudentResume/${data._id}`} className="px-4 py-2 bg-green-600 text-white mx-4 rounded-sm">Student Resumes</Link>}
//             <button onClick={InternshipActiveOrDeactive} className="px-4 py-2 bg-yellow-500 text-white mx-4 rounded-sm">Deactivate</button>
//         {/* { apply?<button className=" px-4 py-2 bg-green-400 text-white">Applyed</button>:<button className="  px-4 py-2 bg-sky-400 text-white "onClick={handleApply}>Apply now</button> } */}
//         </div>
//       </div>
//     </div>
//   )
// }
// export default EmployeInternpage
/* __next_internal_client_entry_do_not_use__ default auto */ 





const EmployeInternpage = ({ key, data })=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const InternshipActiveOrDeactive = ()=>{
        dispatch((0,_Store_Actions_EmployeAction__WEBPACK_IMPORTED_MODULE_5__/* .asyncIntershipIsactive */ .yr)(data._id));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-4 py-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl md:text-4xl text-gray-800 text-center font-semibold pt-14 ",
                children: data.profile
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "text-xl md:text-2xl text-gray-700 text-center my-4",
                children: [
                    data.usersapplied.length === 0 ? "No" : data.usersapplied.length,
                    " ",
                    "Students Applied for this Internship",
                    " ",
                    data.usersapplied.length === 0 ? "yet" : ""
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-4xl m-auto my-10 p-4 bg-white shadow-lg rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "border-[1px] border-gray-300 p-1 rounded text-sm mb-4",
                        children: "Actively Hiring"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col md:flex-row justify-between border-b-[1px] pb-4 mb-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                    className: "text-xl md:text-2xl text-black py-2",
                                    children: data.profile
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Wipro"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                        className: "text-gray-600 my-2",
                        children: "Pune"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap justify-between text-sm pb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-3 md:mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "text-gray-700",
                                        children: "Stipend"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "text-gray-600",
                                        children: "5000"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-3 md:mb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "text-gray-700",
                                        children: "Duration"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "text-gray-600",
                                        children: data?.duration
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border-b-[1px] pb-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ",
                            children: moment_moment__WEBPACK_IMPORTED_MODULE_2___default()(data.createdAt).fromNow()
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl text-gray-700 font-medium py-1",
                                children: "Skills"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "text-gray-600 pt-2",
                                children: data.skills
                            })
                        ]
                    }),
                    data.responsibility && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl text-gray-700 font-medium py-1",
                                children: "Responsibility"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "text-gray-600 pt-2",
                                children: data?.responsibility
                            })
                        ]
                    }),
                    data.assesments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl text-gray-700 font-medium py-1",
                                children: "Assessments"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "text-gray-600 pt-2",
                                children: data?.assesments
                            })
                        ]
                    }),
                    data.opening && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl text-gray-700 font-medium py-1",
                                children: "Number Of Openings"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "text-gray-600 pt-2",
                                children: data?.opening
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-gray-700",
                        children: [
                            data.usersapplied.length,
                            " Students Applied for this Internship"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center justify-center py-8 gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                className: "px-4 py-2 bg-sky-400 text-white rounded-sm text-center",
                                href: `Editinternship/${data._id}`,
                                children: "Edit Internship"
                            }),
                            data.usersapplied.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: `StudentResume/${data._id}`,
                                className: "px-4 py-2 bg-green-600 text-white rounded-sm text-center",
                                children: "Student Resumes"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: InternshipActiveOrDeactive,
                                className: "px-4 py-2 bg-yellow-500 text-white rounded-sm text-center",
                                children: "Deactivate"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeInternpage);


/***/ })

};
;