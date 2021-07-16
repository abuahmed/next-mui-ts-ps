(function() {
var exports = {};
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 2763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ handler; }
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "googleapis"
var external_googleapis_namespaceObject = require("googleapis");;
;// CONCATENATED MODULE: external "cors"
var external_cors_namespaceObject = require("cors");;
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/start.ts
//import fetch from "node-fetch";


 // Initializing the cors middleware
// const cors = Cors({
//     methods: ['GET', 'HEAD','POST'],
// })

function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const cors = initMiddleware( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
external_cors_default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS']
})); // Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: NextApiHandler) {
//     return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//             if (result instanceof Error) {
//                 return reject(result)
//             }
//             return resolve(result)
//         })
//     })
// }

async function handler(req, res) {
  // Run the middleware
  await cors(req, res);
  const {
    body,
    method
  } = req; //const bd = JSON.parse(body)

  const {
    name,
    email,
    phone,
    message,
    captcha
  } = body; //console.log(body)

  if (method === "POST") {
    // If email or captcha are missing return an error
    if (!email || !captcha) {
      return res.status(422).json({
        message: "Invalid request, please provide the required fields"
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          Accept: 'application/json, text/plain, */*',
          'User-Agent': '*'
        }
      };
      const {
        data
      } = await external_axios_default().post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`, config); //const captchaValidation = data// await response.json();

      if (data.success) {
        const auth = new external_googleapis_namespaceObject.google.auth.GoogleAuth({
          keyFile: "keys.json",
          //the key file
          //url to spreadsheets API
          scopes: "https://www.googleapis.com/auth/spreadsheets"
        });
        const authClientObject = await auth.getClient();
        const sheets = external_googleapis_namespaceObject.google.sheets({
          version: "v4",
          auth: authClientObject
        });
        const spreadsheetId = '1FpbyOgkV0hHkXFkaUZBooxVU0_ZbNBuIwWebw_lhtYw';
        const range = 'Sheet1!A:D';
        const result = await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[name, email, phone, message]]
          }
        }); //console.log(result.data);
        //return result.data;

        if (result.data) {
          return res.status(200).json({
            message: "Your form has been submitted!,We will get back to you soon. Have a great day!"
          });
        } else {
          return res.status(422).json({
            message: "Something went wrong!, Please try after some time"
          });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "Something went wrong"
      });
    }
  } // Return 404 if someone pings the API with a method other than
  // POST


  return res.status(404).send("Not found");
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2763));
module.exports = __webpack_exports__;

})();