exports.id = 446;
exports.ids = [446];
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

/***/ 685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Footer; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(4720);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(2959);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@material-ui/core/Stack"
var Stack_ = __webpack_require__(4455);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(4740);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__(7680);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__(1658);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__(3266);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(2953);
// EXTERNAL MODULE: external "@material-ui/styles"
var external_material_ui_styles_ = __webpack_require__(4047);
;// CONCATENATED MODULE: ./src/components/footer/styles.ts

/* harmony default export */ var styles = ((0,external_material_ui_styles_.makeStyles)(theme => ({
  footerBackground: {
    background: theme.palette.background.default
  },
  socialBackground: {
    background: theme.palette.background.paper
  },
  listItems: {
    display: 'block',
    listStyleType: 'none',
    position: 'relative',
    li: {
      marginBottom: '0.5rem',
      textDecoration: 'none',
      a: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.text.primary
        }
      }
    }
  }
})));
// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(5207);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(9908);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(2339);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(8154);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@material-ui/core/ListItemButton"
var ListItemButton_ = __webpack_require__(1952);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
;// CONCATENATED MODULE: ./src/components/footer/Footer.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const Item = (0,styles_.styled)('div')(({
  theme
}) => _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'white',
  background: 'transparent'
}));
function Footer() {
  const classes = styles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Box_default()), {
      className: classes.footerBackground,
      children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1440 320",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#fff",
          fillOpacity: "1",
          d: "M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        maxWidth: "sm",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Stack_default()), {
          "data-aos": "zoom-in",
          "data-aos-delay": "500",
          direction: "row",
          spacing: 3,
          sx: {
            fontSize: '3rem'
          },
          justifyContent: "center",
          color: "white",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_brands_svg_icons_.faFacebook
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_brands_svg_icons_.faTwitter
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_brands_svg_icons_.faInstagram
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
            href: "#",
            color: "inherit",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_brands_svg_icons_.faYoutube
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
      className: classes.footerBackground,
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
        maxWidth: "lg",
        color: "white",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
          elevation: 5,
          sx: {
            background: 'transparent'
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            direction: "row",
            spacing: 1,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              "data-aos": "fade-right",
              "data-aos-delay": "500",
              lg: 6,
              sm: 4,
              xl: 6,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((Stack_default()), {
                spacing: 0,
                sx: {
                  mt: 4
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                      mt: 1
                    },
                    variant: "h6",
                    component: "div",
                    children: "Contact"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Divider_default()), {
                    orientation: "horizontal",
                    flexItem: true
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((List_default()), {
                    sx: {
                      fontSize: '2rem'
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faPhone
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
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
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "mailto:contact@pinnasofts.com",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faEnvelopeOpen
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "contact@pinnasofts.com",
                        secondary: "Online Support",
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
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faLocationArrow
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
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
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              "data-aos": "fade-up",
              "data-aos-delay": "1000",
              lg: 3,
              sm: 4,
              xl: 3,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((Stack_default()), {
                spacing: 0,
                sx: {
                  mt: 4
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                      mt: 1
                    },
                    variant: "h6",
                    component: "div",
                    children: "Services"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Divider_default()), {
                    orientation: "horizontal",
                    flexItem: true
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((List_default()), {
                    sx: {
                      fontSize: '2rem'
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faCartArrowDown
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "E-commerce Solutions",
                        primaryTypographyProps: {
                          fontWeight: '700',
                          variant: 'h6'
                        }
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faTablet
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "Mobile Solutions",
                        primaryTypographyProps: {
                          fontWeight: '700',
                          variant: 'h6'
                        }
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faGlobe
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "Website Solutions",
                        primaryTypographyProps: {
                          fontWeight: '700',
                          variant: 'h6'
                        }
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faShoppingBag
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
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
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              "data-aos": "fade-left",
              "data-aos-delay": "1500",
              lg: 3,
              sm: 4,
              xl: 3,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((Stack_default()), {
                spacing: 0,
                sx: {
                  mt: 4
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                    sx: {
                      mt: 1
                    },
                    variant: "h6",
                    component: "div",
                    children: "Products"
                  }), /*#__PURE__*/jsx_runtime_.jsx((Divider_default()), {
                    orientation: "horizontal",
                    flexItem: true
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((List_default()), {
                    sx: {
                      fontSize: '2rem'
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faPeopleArrows
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "Pinna-Recruitment",
                        primaryTypographyProps: {
                          fontWeight: '700',
                          variant: 'h6'
                        }
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faWarehouse
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "Pinna-Rental",
                        primaryTypographyProps: {
                          fontWeight: '700',
                          variant: 'h6'
                        }
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faPeopleArrows
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
                        primary: "Pinna-CRM",
                        primaryTypographyProps: {
                          fontWeight: '700',
                          variant: 'h6'
                        }
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                      component: "a",
                      href: "#customized-list",
                      children: [/*#__PURE__*/jsx_runtime_.jsx((ListItemIcon_default()), {
                        children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                          icon: free_solid_svg_icons_.faStore
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((ListItemText_default()), {
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
        }), /*#__PURE__*/jsx_runtime_.jsx((Box_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            variant: "body1",
            color: "white",
            align: "center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: ['Copyright © ', /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
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
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;