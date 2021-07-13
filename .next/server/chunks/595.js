exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 3595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ src_theme; }
});

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
// EXTERNAL MODULE: external "tinycolor2"
var external_tinycolor2_ = __webpack_require__(2167);
var external_tinycolor2_default = /*#__PURE__*/__webpack_require__.n(external_tinycolor2_);
;// CONCATENATED MODULE: ./src/typography.ts
/* harmony default export */ var typography = ({
  htmlFontSize: 10,
  fontFamily: ['Lato', 'Roboto', 'Arial', 'sans-serif', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
  h1: {
    fontWeight: 900,
    fontSize: "2rem",
    letterSpacing: '-0.24px',
    '@media (min-width:600px)': {
      fontSize: '2.5rem'
    },
    '@media (min-width:900px)': {
      fontSize: '3.5rem'
    },
    '@media (min-width:1200px)': {
      fontSize: '4.5rem'
    }
  },
  h2: {
    fontWeight: 900,
    fontSize: "1.5rem",
    letterSpacing: '-0.24px',
    '@media (min-width:600px)': {
      fontSize: '2rem'
    },
    '@media (min-width:900px)': {
      fontSize: '3rem'
    },
    '@media (min-width:1200px)': {
      fontSize: '4rem'
    }
  },
  h3: {
    fontSize: "1.64rem"
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.142rem"
  },
  subtitle1: {
    fontSize: "1.3rem"
  },
  body1: {
    fontSize: "1.1rem"
  } // h1: {
  //   fontWeight: 500,
  //   fontSize: 35,
  //   letterSpacing: '-0.24px'
  // },
  // h2: {
  //   fontWeight: 500,
  //   fontSize: 29,
  //   letterSpacing: '-0.24px'
  // },
  // h3: {
  //   fontWeight: 500,
  //   fontSize: 24,
  //   letterSpacing: '-0.06px'
  // },
  // h4: {
  //   fontWeight: 500,
  //   fontSize: 20,
  //   letterSpacing: '-0.06px'
  // },
  // h5: {
  //   fontWeight: 500,
  //   fontSize: 16,
  //   letterSpacing: '-0.05px'
  // },
  // h6: {
  //   fontWeight: 500,
  //   fontSize: 14,
  //   letterSpacing: '-0.05px'
  // },
  // overline: {
  //   fontWeight: 500
  // }

});
;// CONCATENATED MODULE: ./src/default.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const primary = "#008000";
const secondary = "#FFA500";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";
const lightenRate = 7.5;
const darkenRate = 15;
const defaultTheme = {
  palette: {
    primary: {
      main: primary,
      light: external_tinycolor2_default()(primary).lighten(lightenRate).toHexString(),
      dark: external_tinycolor2_default()(primary).darken(darkenRate).toHexString()
    },
    secondary: {
      main: secondary,
      light: external_tinycolor2_default()(secondary).lighten(lightenRate).toHexString(),
      dark: external_tinycolor2_default()(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF"
    },
    warning: {
      main: warning,
      light: external_tinycolor2_default()(warning).lighten(lightenRate).toHexString(),
      dark: external_tinycolor2_default()(warning).darken(darkenRate).toHexString()
    },
    success: {
      main: success,
      light: external_tinycolor2_default()(success).lighten(lightenRate).toHexString(),
      dark: external_tinycolor2_default()(success).darken(darkenRate).toHexString()
    },
    info: {
      main: info,
      light: external_tinycolor2_default()(info).lighten(lightenRate).toHexString(),
      dark: external_tinycolor2_default()(info).darken(darkenRate).toHexString()
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9"
    },
    background: {
      default: `linear-gradient(to right, ${primary} 30%, ${secondary} 90%)`,
      paper: `linear-gradient(to bottom, ${secondary} 30%, ${primary} 90%)`
    }
  },
  typography: _objectSpread({}, typography),
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "#4A4A4A1A"
      }
    },
    MuiMenu: {
      paper: {
        boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9"
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF"
          }
        }
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF"
        }
      }
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white"
      }
    },
    MuiTableRow: {
      root: {
        height: 56
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        paddingLeft: 24
      },
      head: {
        fontSize: "0.95rem"
      },
      body: {
        fontSize: "0.95rem"
      }
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10
      }
    }
  }
};
/* harmony default export */ var src_default = (defaultTheme);
;// CONCATENATED MODULE: ./src/theme.tsx
function theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(Object(source), true).forEach(function (key) { theme_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function theme_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //import typography from './typography';
// const overrides = {
//   typography: typography,
// };
// const overrides = {
//   typography: {
//     h1: {
//       fontSize: '3rem',
//     },
//     h2: {
//       fontSize: '2rem',
//     },
//     h3: {
//       fontSize: '1.64rem',
//     },
//     h4: {
//       fontSize: '1.5rem',
//     },
//     h5: {
//       fontSize: '1.285rem',
//     },
//     h6: {
//       fontSize: '1.142rem',
//     },
//   },
// };

let theme = (0,styles_.createTheme)(theme_objectSpread({}, src_default)); //{ ...defaultTheme, ...overrides });
// theme.typography.h1 = {
//   fontSize: '2rem',
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '2.4rem',
//   },
// };
//console.log(theme);
//theme.typography = typography;
// const themes = {
//   default: createTheme({ ...defaultTheme, ...overrides }),
// };
// let theme = createTheme(defaultTheme);
// theme = responsiveFontSizes(theme);

/* harmony default export */ var src_theme = (theme);

/***/ })

};
;