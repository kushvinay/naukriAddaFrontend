"use strict";
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 20405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22723);
/* harmony import */ var _intershipCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80005);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const CustomArrow = ({ className, onClick })=>/*#__PURE__*/ _jsx("button", {
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ _jsx("span", {
            className: "text-black",
            children: "x"
        })
    });
function SampleArrow(props) {
    const { className, style, onClick } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        style: {
            ...style,
            display: "block",
            background: "#cdddf4",
            borderRadius: "50%",
            color: "white",
            paddingTop: "1px"
        },
        onClick: onClick,
        children: "X"
    });
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        style: {
            ...style,
            background: "#cdddf4",
            borderRadius: "50%",
            color: "white",
            paddingTop: "1px"
        },
        onClick: onClick,
        children: "X"
    });
}
const Responsive = ({ data, student })=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SamplePrevArrow, {}),
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SampleArrow, {}),
        responsive: [
            {
                breakpoint: 1055,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                charset: "UTF-8",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_slick__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: "ps-3",
                ...settings,
                children: data.map((internship)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_intershipCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        data: internship,
                        student: student
                    }, internship._id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsive);


/***/ })

};
;