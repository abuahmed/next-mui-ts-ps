exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 4751:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Copyright; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4740);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7680);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);





function Copyright() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    children: ['Copyright © ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "Your Website"
    }), ' ', new Date().getFullYear(), "."]
  });
}

/***/ }),

/***/ 9298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NextLinkComposed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7680);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/anchor-has-content */





const NextLinkComposed = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function NextLinkComposed(props, ref) {
  const {
    to,
    linkAs,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    locale
  } = props,
        other = _objectWithoutProperties(props, ["to", "linkAs", "href", "replace", "scroll", "passHref", "shallow", "prefetch", "locale"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: to,
    prefetch: prefetch,
    as: linkAs,
    replace: replace,
    scroll: scroll,
    shallow: shallow,
    passHref: passHref,
    locale: locale,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", _objectSpread({
      ref: ref
    }, other))
  });
});
// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Link(props, ref) {
  const {
    activeClassName = 'active',
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    role
  } = props,
        other = _objectWithoutProperties(props, ["activeClassName", "as", "className", "href", "noLinkStyle", "role"]);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  });
  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", _objectSpread({
        className: className,
        href: href,
        ref: ref
      }, other));
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
      className: className,
      href: href,
      ref: ref
    }, other));
  }

  if (noLinkStyle) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLinkComposed, _objectSpread({
      className: className,
      ref: ref,
      to: href
    }, other));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread({
    component: NextLinkComposed,
    linkAs: linkAs,
    className: className,
    ref: ref,
    to: href
  }, other));
});
/* harmony default export */ __webpack_exports__["C"] = (Link);

/***/ }),

/***/ 4211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ProTip; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7680);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1524);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4740);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function LightBulbIcon(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      d: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
    })
  }));
}

function ProTip() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    sx: {
      mt: 6,
      mb: 3
    },
    color: "text.secondary",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightBulbIcon, {
      sx: {
        mr: 1,
        verticalAlign: 'middle'
      }
    }), "Pro tip: See more", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "https://material-ui.com/getting-started/templates/",
      children: "templates"
    }), " on the Material-UI documentation."]
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;