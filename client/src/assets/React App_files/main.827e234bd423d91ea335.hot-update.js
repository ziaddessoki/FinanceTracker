webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n* {\n  box-sizing: border-box;\n  color: #e1e1e1;\n  \n}\n#root{\n  /* background-color: rgba(187, 187, 187, 0.746); */\n}\n\nbody {\n  background-color: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* min-height: 100vh; */\n  margin: 0;\n  font-family: \"Lato\", sans-serif;\n  /* background:url(./assets/pexels-thiago-matos-3708554.jpg) no-repeat center center fixed ; */\n  background-color: #3b3b3b;\n  background-size: cover;\n}\n\n.container {\n  margin: 30px 20px;\n  width: 400px;\n  height: 650px;\n}\n.signContainer{\n  margin: 10px auto;\n  margin-top: 50px;\n  width:90%;\n}\n.accContainer {\n  margin: 20px auto;\n  /* width: 400px; */\n  display: block;\n  height: 90%;\n  overflow: scroll;\n}\n\nh1 {\n  letter-spacing: 1px;\n  margin: 10px auto;\n  font-size: 25px;\n}\n\n.title{\n  float:left;\n  margin:10px 10px;\n  margin-left: 0px;\n}\n/* landing page*/\n\nh7 {\n \n font-size: 20px;\n font-weight: bolder;\n  float: left;\n margin-top: 20px;\n color: rgb(44, 228, 44);\n}\np1{\n  font-size: 14px;\n  float: left;\n  width: 250px;\n }\n\n .imgLanding{\n   border-radius: 5px;\n   width: 90px;\n   float: right;\n   margin:10px 30px 0 0;\n }\n\n .toSignUpBtn{\n  background-color: rgb(4, 160, 4);\n  margin: 55px auto;\n  clear:both\n  \n }\n\n /* End-landingPage */\n\nh3 {\n  border-bottom: 1px solid #bbb;\n  padding-bottom: 10px;\n  margin: 30px 0 10px;\n}\n\nh4 {\n  color: #3b3b3b;\n  margin: 0;\n  text-transform: uppercase;\n}\nh6{\n  color: #3b3b3b;\n}\n\np{\n  margin-bottom: 0%;\n}\na{\n  color: #e1e1e1;\n  text-decoration: none;\n}\na:link{\n  text-decoration: none;\n  \n  text-decoration: none;\n}\n/* a:visited {\n  text-decoration: none;\n  color: #333;\n} */\n\na:hover {\n  color:red;\n}\n\n.toolBar ul{\n  list-style-type: none;\n  padding: 0px;\n  text-align: center;\n}\n\n.toolBar li{\n  color: #e1e1e1;\n  margin: 10px 14px;\n  display: inline;\n}\n\n.inc-exp-container {\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: var(--box-shadow);\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n\n.inc-exp-container > div {\n  flex: 1 1;\n  text-align: center;\n}\n\n.inc-exp-container > div:first-of-type {\n  border-right: 1px solid #dedede;\n}\n\n.money {\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin: 5px 0;\n}\n\n.money.plus {\n  color: #2ecc71;\n}\n\n.money.minus {\n  color: #c0392b;\n}\n\nlabel {\n  display: inline-block;\n  margin: 0;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"password\"] {\n  color: #333;\n  border: 1px solid #dedede;\n  border-radius: 15px;\n  display: block;\n  font-size: 16px;\n  margin: 10px auto;\n  padding: 8px;\n  width: 100%;\n}\n\n.btn {\n  cursor: pointer;\n  box-shadow: var(--box-shadow);\n  color: #fff;\n  border: 0;\n  /* display: inline-block; */\n  font-size: 16px;\n  margin: 10px 10px;\n  padding: 10px;\n  align-items:center;\n  width: 42%;\n}\n\n.dropdownBtn{\n  display: none;\n  width: 10%;\n  float: right;\n}\n.dropdownBtn::after {\n  content: none;\n}\n\n.loginBtn{\n  margin: 12px auto;\n\n}\n\n.incomeBtn{\n  background-color: rgb(4, 160, 4);\n  float:left;\n}\n.expenseBtn{\n  background-color: red;\n \n  float:right;\n}\n\n\n\n.btn:focus,\n.delete-btn:focus {\n  outline: 0;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  /* margin-bottom: 40px; */\n  height: 230px;\n  overflow-y:scroll;\n \n}\n\n.list li {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: var(--box-shadow);\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 10px;\n  margin: 10px auto;\n  width: 85%;\n}\n\n.list li.plus {\n  border-right: 5px solid #2ecc71;\n}\n\n.list li.minus {\n  border-right: 5px solid #c0392b;\n}\n\n.delete-btn {\n  cursor: pointer;\n  background-color: #e74c3c;\n  border-radius: 5px;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  line-height: 20px;\n  /* padding: 2px 5px; */\n  margin-right: 6px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-100%, -50%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.list li:hover .delete-btn {\n  opacity: 1;\n}\n\n.clearfix{\n  clear:both\n}\n\n\n/* @media only screen and (min-width: 768px) {\n\n} */\n\n@media (max-width: 960px) {\n  .toolBar ul     { display: none; }\n  .dropdownBtn {display: initial;}\n  /* nav select { display: inline-block; } */\n}", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Lato&display=swap\");\n\n:root {\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n* {\n  box-sizing: border-box;\n  color: #e1e1e1;\n  \n}\n#root{\n  /* background-color: rgba(187, 187, 187, 0.746); */\n}\n\nbody {\n  background-color: #f7f7f7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* min-height: 100vh; */\n  margin: 0;\n  font-family: \"Lato\", sans-serif;\n  /* background:url(./assets/pexels-thiago-matos-3708554.jpg) no-repeat center center fixed ; */\n  background-color: #3b3b3b;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\n.container {\n  margin: 30px 20px;\n  width: 400px;\n  height: 650px;\n}\n.signContainer{\n  margin: 10px auto;\n  margin-top: 50px;\n  width:90%;\n}\n.accContainer {\n  margin: 20px auto;\n  /* width: 400px; */\n  display: block;\n  height: 90%;\n  overflow: scroll;\n}\n\nh1 {\n  letter-spacing: 1px;\n  margin: 10px auto;\n  font-size: 25px;\n}\n\n.title{\n  float:left;\n  margin:10px 10px;\n  margin-left: 0px;\n}\n/* landing page*/\n\nh7 {\n \n font-size: 20px;\n font-weight: bolder;\n  float: left;\n margin-top: 20px;\n color: rgb(44, 228, 44);\n}\np1{\n  font-size: 14px;\n  float: left;\n  width: 250px;\n }\n\n .imgLanding{\n   border-radius: 5px;\n   width: 90px;\n   float: right;\n   margin:10px 30px 0 0;\n }\n\n .toSignUpBtn{\n  background-color: rgb(4, 160, 4);\n  margin: 55px auto;\n  clear:both\n  \n }\n\n /* End-landingPage */\n\nh3 {\n  border-bottom: 1px solid #bbb;\n  padding-bottom: 10px;\n  margin: 30px 0 10px;\n}\n\nh4 {\n  color: #3b3b3b;\n  margin: 0;\n  text-transform: uppercase;\n}\nh6{\n  color: #3b3b3b;\n}\n\np{\n  margin-bottom: 0%;\n}\na{\n  color: #e1e1e1;\n  text-decoration: none;\n}\na:link{\n  text-decoration: none;\n  \n  text-decoration: none;\n}\n/* a:visited {\n  text-decoration: none;\n  color: #333;\n} */\n\na:hover {\n  color:red;\n}\n\n.toolBar ul{\n  list-style-type: none;\n  padding: 0px;\n  text-align: center;\n}\n\n.toolBar li{\n  color: #e1e1e1;\n  margin: 10px 14px;\n  display: inline;\n}\n\n.inc-exp-container {\n  background-color: #fff;\n  border-radius: 20px;\n  box-shadow: var(--box-shadow);\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0;\n}\n\n.inc-exp-container > div {\n  flex: 1;\n  text-align: center;\n}\n\n.inc-exp-container > div:first-of-type {\n  border-right: 1px solid #dedede;\n}\n\n.money {\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin: 5px 0;\n}\n\n.money.plus {\n  color: #2ecc71;\n}\n\n.money.minus {\n  color: #c0392b;\n}\n\nlabel {\n  display: inline-block;\n  margin: 0;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"password\"] {\n  color: #333;\n  border: 1px solid #dedede;\n  border-radius: 15px;\n  display: block;\n  font-size: 16px;\n  margin: 10px auto;\n  padding: 8px;\n  width: 100%;\n}\n\n.btn {\n  cursor: pointer;\n  box-shadow: var(--box-shadow);\n  color: #fff;\n  border: 0;\n  /* display: inline-block; */\n  font-size: 16px;\n  margin: 10px 10px;\n  padding: 10px;\n  align-items:center;\n  width: 42%;\n}\n\n.dropdownBtn{\n  display: none;\n  width: 10%;\n  float: right;\n}\n.dropdownBtn::after {\n  content: none;\n}\n\n.loginBtn{\n  margin: 12px auto;\n\n}\n\n.incomeBtn{\n  background-color: rgb(4, 160, 4);\n  float:left;\n}\n.expenseBtn{\n  background-color: red;\n \n  float:right;\n}\n\n\n\n.btn:focus,\n.delete-btn:focus {\n  outline: 0;\n}\n\n.list {\n  list-style-type: none;\n  padding: 0;\n  /* margin-bottom: 40px; */\n  height: 230px;\n  overflow-y:scroll;\n \n}\n\n.list li {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: var(--box-shadow);\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 10px;\n  margin: 10px auto;\n  width: 85%;\n}\n\n.list li.plus {\n  border-right: 5px solid #2ecc71;\n}\n\n.list li.minus {\n  border-right: 5px solid #c0392b;\n}\n\n.delete-btn {\n  cursor: pointer;\n  background-color: #e74c3c;\n  border-radius: 5px;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  line-height: 20px;\n  /* padding: 2px 5px; */\n  margin-right: 6px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-100%, -50%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.list li:hover .delete-btn {\n  opacity: 1;\n}\n\n.clearfix{\n  clear:both\n}\n\n\n/* @media only screen and (min-width: 768px) {\n\n} */\n\n@media (max-width: 960px) {\n  .toolBar ul     { display: none; }\n  .dropdownBtn {display: initial;}\n  /* nav select { display: inline-block; } */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.827e234bd423d91ea335.hot-update.js.map