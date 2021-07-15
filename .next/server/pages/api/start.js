(function() {
var exports = {};
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 6041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ handler; }
});

;// CONCATENATED MODULE: external "node-fetch"
var external_node_fetch_namespaceObject = require("node-fetch");;
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_namespaceObject);
;// CONCATENATED MODULE: external "googleapis"
var external_googleapis_namespaceObject = require("googleapis");;
;// CONCATENATED MODULE: ./pages/api/start.ts


async function handler(req, res) {
  const {
    body,
    method
  } = req;
  const bd = JSON.parse(body);
  const {
    name,
    email,
    phone,
    message,
    captcha
  } = bd; //console.log(bd)

  if (method === "POST") {
    // If email or captcha are missing return an error
    if (!email || !captcha) {
      return res.status(422).json({
        message: "Invalid request, please provide the required fields"
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await external_node_fetch_default()(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          Accept: 'application/json, text/plain, */*',
          'User-Agent': '*'
        },
        method: "POST"
      });
      const captchaValidation = await response.json();

      if (captchaValidation.success) {
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6041));
module.exports = __webpack_exports__;

})();