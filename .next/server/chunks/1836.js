exports.id = 1836;
exports.ids = [1836];
exports.modules = {

/***/ 21248:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17442))

/***/ }),

/***/ 17442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/Store/Actions/EmployeAction.js
var EmployeAction = __webpack_require__(2607);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/app/components/Employenav.js
// "use client";
// import React from "react";
// import Link from "next/link";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { asyncRemoveEmploye } from "@/Store/Actions/EmployeAction"
// import { useRouter } from "next/navigation";
// const Employenav = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const [profileDropdown, setProfileDropdown] = useState(false);
//   const { isAuthenticated ,employe } = useSelector((state) => state.EmployeSlice);
//   console.log(employe)
//   useEffect(() => {
//     if(!isAuthenticated) router.push("/Employesignin")
//     // if (isAuthenticated) router.push("/Student/StudentHome");
//     // console.log(student)
//   }, [isAuthenticated]);
//   const changeProfileDropdown = () => { 
//     setProfileDropdown(!profileDropdown);
//   };
//   const employesignout =async () => {
//     const response = await dispatch(asyncRemoveEmploye())
//     console.log(response)
//     if(response.success){
//       router.push("/")
//     }
//   }
//   return (
//     <nav className=" p-4 flex flex-col md:flex-row justify-between items-center bg-white md:px-10">
//       {/*  Company Logo */}
//       <div className="flex items-center mb-4 md:mb-0">
//         <Link href="/Employe/EmployeHome" className="text-blue-500 text-xl md:text-2xl "><h1 className="">NaukriAdda</h1></Link>
//       </div>
//       <div className=" flex flex-col md:flex-row md:items-center">
//         <Link className=" text-blue-500 mb-2 md:mb-0 md:mr-8" href="/Employe/internships">Internship</Link>
//         <Link className=" text-blue-500 mb-2 md:mb-0 md:mr-8" href="/Employe/jobs">Job</Link>
//         <div className=" relative group">
//         <button
//           // onClick={changeProfileDropdown}
//           onMouseEnter={changeProfileDropdown}
//           className="flex items-center text-blue-500 focus:outline-none"
//           >
//           Employe
//         </button>
//         {profileDropdown && (
//           <div
//           className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10"
//           onMouseLeave={changeProfileDropdown}
//           >
//             <ul className="p-2">
//             <li className="cursor-pointer hover:bg-gray-200 p-2 border-b-[1px] flex items-center ">
//                 <Link href="/profile">
//                 <img className="h-10 w-10 rounded-full mr-2" src={employe.organisationlogo.url} alt="" />
//                   {employe.fullname} 
//                   </Link>
//               </li>
//               <li className="cursor-pointer hover:bg-gray-200 p-2">
//                 <Link href="/Employe/CreateJob">Create Job</Link>
//               </li>
//               <li className="cursor-pointer hover:bg-gray-200 p-2">
//                 <Link href="/Employe/CreateInternship">Create Internship</Link>
//               </li>
//               <li className="cursor-pointer hover:bg-gray-200 p-2">
//                 <Link href="/Employe/updateemploye">Update Profile</Link>
//               </li>
//               <li className="cursor-pointer hover:bg-gray-200 p-2">
//                 <Link href="/Employe/changepassword">Change Password</Link>
//               </li>
//               <li className="cursor-pointer hover:bg-gray-200 p-2">
//                 <p onClick={employesignout}>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Employenav;
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Employenav = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react_.useState)(false);
    const [profileDropdown, setProfileDropdown] = (0,react_.useState)(false);
    const dispatch = (0,lib.useDispatch)();
    const { isAuthenticated, employe } = (0,lib.useSelector)((state)=>state.EmployeSlice);
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        if (!isAuthenticated) router.push("/Employesignin");
    // if (isAuthenticated) router.push("/Student/StudentHome");
    }, [
        isAuthenticated
    ]);
    const changeProfileDropdown = ()=>{
        setProfileDropdown(!profileDropdown);
    };
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleProfileDropdown = ()=>{
        setProfileDropdown(!profileDropdown);
    };
    const employesignout = async ()=>{
        const res = await dispatch((0,EmployeAction/* asyncRemoveEmploye */.qL)());
        console.log(res);
        if (res.success) {
            router.push("/");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/Employe/EmployeHome",
                    className: "flex items-center space-x-3 rtl:space-x-reverse",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white",
                        children: "NaukriAdda"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    type: "button",
                    onClick: toggleMobileMenu,
                    className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-multi-level",
                    "aria-expanded": isMobileMenuOpen ? "true" : "false",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 17 14",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M1 1h15M1 7h15M1 13h15"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`,
                    id: "navbar-multi-level",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/Employe/internships",
                                    className: "block py-2 px-3 text-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent",
                                    "aria-current": "page",
                                    children: "Internship"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/Employe/jobs",
                                    className: "text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                    children: "Job"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        onClick: toggleProfileDropdown,
                                        onMouseEnter: changeProfileDropdown,
                                        id: "dropdownNavbarLink",
                                        className: "flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
                                        children: [
                                            "Employe",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "w-2.5 h-2.5 ms-2.5",
                                                "aria-hidden": "true",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 10 6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "m1 1 4 4 4-4"
                                                })
                                            })
                                        ]
                                    }),
                                    profileDropdown && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onMouseLeave: changeProfileDropdown,
                                        id: "dropdownNavbar",
                                        className: "z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "py-2 text-sm text-gray-700 dark:text-gray-200",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "/profile",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "h-7 w-7 rounded-full mr-2",
                                                                src: employe.organisationlogo.url,
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: employe && employe.fullname
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/Employe/CreateInternship",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Create Internship"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/Employe/CreateJob",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Create Job"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/Employe/changepassword",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Chang Password"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/Employe/updateemploye",
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: "Update Profile"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            onClick: employesignout,
                                                            children: "Logout"
                                                        })
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
/* harmony default export */ const components_Employenav = (Employenav);

// EXTERNAL MODULE: ./src/Store/Provider.js
var Provider = __webpack_require__(85208);
;// CONCATENATED MODULE: ./src/app/Employe/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







function DashboardLayout({ children }) {
    const dispatch = (0,lib.useDispatch)();
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        dispatch((0,EmployeAction/* asyncCurrentEmploye */.eY)()).then(()=>{}).catch((error)=>{
            console.error("Authentication error:", error);
            router.push("Employesignin");
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Employenav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Provider["default"], {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 85618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\AVS\Desktop\naukriAddaFrontend\src\app\Employe\layout.js`)

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