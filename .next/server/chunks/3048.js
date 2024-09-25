"use strict";
exports.id = 3048;
exports.ids = [3048];
exports.modules = {

/***/ 13048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
// "use client";
// import React from "react";
// import { useState } from "react";
// import Link from "next/link";
// const Nav = () => {
//   const [student, getStudent] = useState(false);
//   const [employ, getEmploy] = useState(false);
//   const Employdropdown = () => {
//     getEmploy(!employ);
//   };
//   const Studentdropdown = () => {
//     getStudent(!student);
//   };
//   const Studentfalse = () => {
//     getStudent(false);
//   };
//   return (
//     <nav className="py-3 flex justify-between items-center px-10">
//       {/*  Company Logo */}
//       <div className="flex items-center">
//         <Link href="/">
//         <h1 className="text-blue-500 text-lg md:text-xl">NaukriAdda</h1>
//         </Link>
//       </div>
//       <div className="flex items-center justify-center">
//         <div className=" relative mx-4">
//           <button
//             // onClick={changeProfileDropdown}
//             onClick={Studentdropdown }
//             className="flex items-center bg-white text-blue-500 py-2 px-3 rounded-lg focus:outline-none"
//           >
//             Job Seekers
//           </button>
//           {student && (
//             <div
//               className="absolute right-0 mt-2 w-48 bg-white border rounded shadow"
//             
//             >
//               <ul className="p-2">
//                 <li className="cursor-pointer hover:bg-blue-500 p-2">
//                   <Link href="/Studentlogin">Login</Link>
//                 </li>
//                 <li className="cursor-pointer hover:bg-blue-500 p-2">
//                   <Link href="/Stude  onMouseLeave={Studentdropdown}ntsignup">Signup</Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//         <div className=" relative mx-4">
//           <button
//             // onClick={changeProfileDropdown}
//             onClick={Employdropdown }
//             className="flex items-center  bg-white text-blue-500 py-2 px-3 rounded-lg focus:outline-none"
//           >
//             Employers
//           </button>
//           {employ && (
//             <div
//               className="absolute right-0 mt-2 w-48 bg-white border rounded shadow"
//               onMouseLeave={Employdropdown}
//             >
//               <ul className="p-2">
//               <li className="cursor-pointer hover:bg-blue-500 p-2">
//                   <Link href="/Employesignin">Login</Link>
//                 </li>
//                 <li className="cursor-pointer hover:bg-blue-500 p-2">
//                   <Link href="/EmployeSignup">Signup</Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Nav;
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Nav = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [profileDropdown, setProfileDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [student, getStudent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [employe, getEmploy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const Employdropdown = ()=>{
        getEmploy(!employe);
    };
    const Studentdropdown = ()=>{
        getStudent(!student);
    };
    const Studentfalse = ()=>{
        getStudent(false);
    };
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleProfileDropdown = ()=>{
        setProfileDropdown(!profileDropdown);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    className: "flex items-center space-x-3 rtl:space-x-reverse",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white",
                        children: "NaukriAdda"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    type: "button",
                    onClick: toggleMobileMenu,
                    className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-multi-level",
                    "aria-expanded": isMobileMenuOpen ? "true" : "false",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "w-5 h-5",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 17 14",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M1 1h15M1 7h15M1 13h15"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`,
                    id: "navbar-multi-level",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: Studentdropdown,
                                        id: "dropdownNavbarLink",
                                        className: "flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
                                        children: [
                                            "Job Seekers",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-2.5 h-2.5 ms-2.5",
                                                "aria-hidden": "true",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 10 6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "m1 1 4 4 4-4"
                                                })
                                            })
                                        ]
                                    }),
                                    student && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onMouseLeave: Studentdropdown,
                                        id: "dropdownNavbar",
                                        className: "z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "py-2 text-sm text-gray-700 dark:text-gray-200",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/Studentlogin",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Login"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "Studentsignup",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Signup"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: Employdropdown,
                                        id: "dropdownNavbarLink",
                                        className: "flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
                                        children: [
                                            "Employe",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-2.5 h-2.5 ms-2.5",
                                                "aria-hidden": "true",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 10 6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "m1 1 4 4 4-4"
                                                })
                                            })
                                        ]
                                    }),
                                    employe && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onMouseLeave: Employdropdown,
                                        id: "dropdownNavbar",
                                        className: "z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "py-2 text-sm text-gray-700 dark:text-gray-200",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/Employesignin",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Login"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/EmployeSignup",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Signup"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ })

};
;