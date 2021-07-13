exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 8081:
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
    prefetch: prefect,
    locale
  } = props,
        other = _objectWithoutProperties(props, ["to", "linkAs", "href", "replace", "scroll", "passHref", "shallow", "prefetch", "locale"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: to,
    prefetch: prefect,
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

/***/ 8739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4720);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2959);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4455);
/* harmony import */ var _material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4740);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7680);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1658);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2953);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5207);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9908);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2339);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8154);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1952);
/* harmony import */ var _material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _styles_layoutStyled__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2723);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const Item = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.styled)('div')(({
  theme
}) => _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'white',
  background: 'transparent'
}));
function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
    id: "contact",
    sx: {
      pt: 8,
      mt: -15
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_layoutStyled__WEBPACK_IMPORTED_MODULE_18__/* .GradientBackground */ .dZ, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1440 320",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
          fill: "#fff",
          fillOpacity: "1",
          d: "M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9___default()), {
        maxWidth: "sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
          "data-aos": "fade-up",
          "data-aos-delay": "40",
          direction: "row",
          spacing: 3,
          sx: {
            fontSize: '3rem'
          },
          justifyContent: "center",
          color: "white",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faFacebook
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faTwitter
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faInstagram
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
              icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faYoutube
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9___default()), {
          maxWidth: "lg",
          color: "white",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
            elevation: 5,
            sx: {
              background: 'transparent'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
              container: true,
              direction: "row",
              spacing: 1,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                item: true,
                "data-aos": "fade-up",
                "data-aos-delay": "60",
                md: 5,
                xl: 6,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                  spacing: 0,
                  sx: {
                    mt: 1
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                      sx: {
                        mt: 1
                      },
                      variant: "h4",
                      component: "div",
                      fontWeight: "900",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faAddressBook
                      }), "\xA0Contact"]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default()), {
                      orientation: "horizontal",
                      flexItem: true
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14___default()), {
                      sx: {
                        fontSize: '2rem'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPhone
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "+251-945-004-259",
                          secondary: "Mon-Fri 9am-6pm",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          },
                          secondaryTypographyProps: {
                            fontWeight: '500',
                            variant: 'body1',
                            color: 'orange'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "mailto:contact@pinnasofts.com",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faEnvelopeOpen
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "contact@pinnasofts.com",
                          secondary: "Contact Us",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          },
                          secondaryTypographyProps: {
                            fontWeight: '500',
                            variant: 'body1',
                            color: 'orange'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faLocationArrow
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Addis Ababa,Ethiopia",
                          secondary: "Bethel Street, AA",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          },
                          secondaryTypographyProps: {
                            fontWeight: '500',
                            variant: 'body1',
                            color: 'orange'
                          }
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                item: true,
                "data-aos": "fade-up",
                "data-aos-delay": "70",
                md: 4,
                xl: 3,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                  spacing: 0,
                  sx: {
                    mt: 1
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                      sx: {
                        mt: 1
                      },
                      variant: "h4",
                      component: "div",
                      fontWeight: "900",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faUsersCog
                      }), "\xA0Services"]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default()), {
                      orientation: "horizontal",
                      flexItem: true
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14___default()), {
                      sx: {
                        fontSize: '2rem'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faCartArrowDown
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "E-commerce Solutions",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faTablet
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Mobile Solutions",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faGlobe
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Website Solutions",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faShoppingBag
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Marketing Solutions",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
                item: true,
                "data-aos": "fade-up",
                "data-aos-delay": "80",
                md: 3,
                xl: 3,
                sm: 6,
                xs: 12,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Stack__WEBPACK_IMPORTED_MODULE_4___default()), {
                  spacing: 0,
                  sx: {
                    mt: 1
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Item, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                      sx: {
                        mt: 1
                      },
                      variant: "h4",
                      component: "div",
                      fontWeight: "900",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faLaptopCode
                      }), "\xA0Products"]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default()), {
                      orientation: "horizontal",
                      flexItem: true
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_14___default()), {
                      sx: {
                        fontSize: '2rem'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPeopleArrows
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Pinna-Recruitment",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faWarehouse
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Pinna-Rental",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPeopleArrows
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Pinna-CRM",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItemButton__WEBPACK_IMPORTED_MODULE_17___default()), {
                        component: "a",
                        href: "#customized-list",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default()), {
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faStore
                          })
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default()), {
                          primary: "Pinna-Stock",
                          primaryTypographyProps: {
                            fontWeight: '700',
                            variant: 'h6'
                          }
                        })]
                      })]
                    })]
                  })
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
              variant: "body1",
              color: "white",
              align: "center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: ['Copyright © ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  color: "inherit",
                  href: "https://pinnasofts.com/",
                  sx: {
                    textDecoration: 'none'
                  },
                  children: "PinnaSofts PLC"
                }), ' ', new Date().getFullYear(), "."]
              })
            })
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ 2723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dZ": function() { return /* binding */ GradientBackground; },
/* harmony export */   "U4": function() { return /* binding */ MainLayoutRoot; },
/* harmony export */   "me": function() { return /* binding */ MainLayoutWrapper; },
/* harmony export */   "$x": function() { return /* binding */ ShadowStyled; }
/* harmony export */ });
/* unused harmony export NormalBackground */
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const MainLayoutRoot = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)('div')(({
  theme
}) => ({
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));
const MainLayoutWrapper = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});
const GradientBackground = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)('div')(({
  theme
}) => ({
  background: theme.palette.background.default
}));
const NormalBackground = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)('div')(({
  theme
}) => ({
  background: theme.palette.background.paper
}));
const ShadowStyled = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.experimentalStyled)('div')(({
  theme
}) => ({
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  [theme.breakpoints.up('sm')]: {
    boxShadow: '0 .125rem .25rem rgba($black, .075)'
  },
  [theme.breakpoints.up('lg')]: {
    boxShadow: '0 1rem 3rem rgba($black, .175)'
  }
}));


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;