"use strict";
exports.id = 3506;
exports.ids = [3506];
exports.modules = {

/***/ 93506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22723);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87578);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
const Responsivejob = ({ data })=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SampleArrow, {}),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SampleArrow, {}),
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_slick__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "ps-3",
                ...settings,
                children: data.map((internship)=>// <CarouselComp data={internship}/>
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        data: internship
                    }, internship._id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsivejob);


/***/ })

};
;