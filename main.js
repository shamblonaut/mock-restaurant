/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/restaurant.jpg */ "./assets/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --dark-blue: #34435E;
    --light-blue: #B8DBD9;
    --saffron: #F9C846;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat rgba(0, 0, 0, 0.65);
    background-size: cover;
    background-blend-mode: multiply;
}

#content {
    font-family: sans-serif;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav {
    /* min-height: 100px; */
    min-height: 10vh;
    display: flex;
    align-self: stretch;
}

.tab {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 1.25rem;
}

.tab.active {
    background-color: #34435e70;
}

.tab:hover:not(.active) {
    background-color: #34435e50;
}

.heading {
    font-family: 'Grand Hotel', cursive;
    font-size: 3rem;
    margin: 2vh 0;
}

.main {
    width: 60vw;
    height: 70vh;
    padding: 3vh 3vw;
    border-radius: 25px;
    background-color: var(--dark-blue);
    color: var(--light-blue);

    display: flex;
    flex-direction: column;
}

.testimonial {
    align-self: center;
    width: 35vw;
}

.quotes {
    width: 65px;
    height: auto;
}

.text {
    padding-left: 30px;
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;
    color: var(--saffron);
}

.author {
    font-weight: 700;
    color: var(--light-blue);
    text-align: right;
}

.visit {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
}

.title {
    font-size: 1.5rem;
    font-style: italic;
    color: var(--saffron);
    margin-bottom: 2.5vh;
}

.location {
    display: flex;
    align-items: center;
}

.pin {
    width: 20px;
    height: auto;
    margin-right: 10px;
}

.hours {
    margin-top: 5vh;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.hours>.title {
    color: #ffffff;
    font-style: normal;
}

.timing {
    display: grid;
    grid-auto-flow: column;
    column-gap: 25px;
}


.main.menu {
    width: 70vw;
    height: 75vh;
    padding: 1vw;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 10px;
    row-gap: 4vh;
    overflow-x: hidden;
    overflow-y: scroll;
}

.item {
    width: 300px;
    background-color: var(--saffron);
    border-radius: 25px;
    padding: 20px;
}

.picture.food {
    width: 100%;
    height: 60%;
    border-radius: 25px;
}

.name.food {
    color: #000000;
    font-size: 1.5rem;
    font-weight: 700;
}

.price {
    color: #000000;
    font-size: 1.5rem;
    font-weight: 300;
}


.message {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#thoughts {
    width: 30vw;
    height: 20vh;
    background-color: var(--light-blue);
    border: none;
    border-radius: 10px;
    padding: 10px;
}

.send {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: var(--saffron);
    border: none;
    border-radius: 10px;
    color: #ffffff;
}

.call {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3vh;
}

.contacts {
    display: grid;
    grid-auto-flow: column;
    column-gap: 2vw;
}

.card {
    background-color: var(--light-blue);
    border-radius: 10px;
    padding: 1vw;
    width: 15vw;
    color: #000000;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info {
    display: grid;
    grid-template-columns: auto min-content;
    column-gap: 25px;
}

.name.person {
    grid-row: 1 / 2;
    font-weight: 700;
    align-self: flex-end;
}

.position {
    grid-row: 2 / 3;
    align-self: flex-start;
    font-weight: 300;
}

.picture.person {
    grid-row: 1 / 3;

    width: 5vw;
    height: auto;
    border-radius: 2.5vw;
}

.phone {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iFAAyE;IACzE,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,uBAAuB;IACvB,cAAc;;IAEd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;IACnC,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kCAAkC;IAClC,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;;IAEZ,aAAa;IACb,2DAA2D;IAC3D,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,cAAc;;IAEd,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,eAAe;;IAEf,UAAU;IACV,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap');\n\n:root {\n    --dark-blue: #34435E;\n    --light-blue: #B8DBD9;\n    --saffron: #F9C846;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: url(\"../assets/restaurant.jpg\") no-repeat rgba(0, 0, 0, 0.65);\n    background-size: cover;\n    background-blend-mode: multiply;\n}\n\n#content {\n    font-family: sans-serif;\n    color: #ffffff;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.nav {\n    /* min-height: 100px; */\n    min-height: 10vh;\n    display: flex;\n    align-self: stretch;\n}\n\n.tab {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    border: none;\n    color: #ffffff;\n    font-size: 1.25rem;\n}\n\n.tab.active {\n    background-color: #34435e70;\n}\n\n.tab:hover:not(.active) {\n    background-color: #34435e50;\n}\n\n.heading {\n    font-family: 'Grand Hotel', cursive;\n    font-size: 3rem;\n    margin: 2vh 0;\n}\n\n.main {\n    width: 60vw;\n    height: 70vh;\n    padding: 3vh 3vw;\n    border-radius: 25px;\n    background-color: var(--dark-blue);\n    color: var(--light-blue);\n\n    display: flex;\n    flex-direction: column;\n}\n\n.testimonial {\n    align-self: center;\n    width: 35vw;\n}\n\n.quotes {\n    width: 65px;\n    height: auto;\n}\n\n.text {\n    padding-left: 30px;\n    font-size: 1.5rem;\n    font-weight: 300;\n    font-style: italic;\n    color: var(--saffron);\n}\n\n.author {\n    font-weight: 700;\n    color: var(--light-blue);\n    text-align: right;\n}\n\n.visit {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 5vh;\n}\n\n.title {\n    font-size: 1.5rem;\n    font-style: italic;\n    color: var(--saffron);\n    margin-bottom: 2.5vh;\n}\n\n.location {\n    display: flex;\n    align-items: center;\n}\n\n.pin {\n    width: 20px;\n    height: auto;\n    margin-right: 10px;\n}\n\n.hours {\n    margin-top: 5vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hours>.title {\n    color: #ffffff;\n    font-style: normal;\n}\n\n.timing {\n    display: grid;\n    grid-auto-flow: column;\n    column-gap: 25px;\n}\n\n\n.main.menu {\n    width: 70vw;\n    height: 75vh;\n    padding: 1vw;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    column-gap: 10px;\n    row-gap: 4vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.item {\n    width: 300px;\n    background-color: var(--saffron);\n    border-radius: 25px;\n    padding: 20px;\n}\n\n.picture.food {\n    width: 100%;\n    height: 60%;\n    border-radius: 25px;\n}\n\n.name.food {\n    color: #000000;\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n.price {\n    color: #000000;\n    font-size: 1.5rem;\n    font-weight: 300;\n}\n\n\n.message {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#thoughts {\n    width: 30vw;\n    height: 20vh;\n    background-color: var(--light-blue);\n    border: none;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.send {\n    margin-top: 10px;\n    padding: 10px 20px;\n    background-color: var(--saffron);\n    border: none;\n    border-radius: 10px;\n    color: #ffffff;\n}\n\n.call {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 3vh;\n}\n\n.contacts {\n    display: grid;\n    grid-auto-flow: column;\n    column-gap: 2vw;\n}\n\n.card {\n    background-color: var(--light-blue);\n    border-radius: 10px;\n    padding: 1vw;\n    width: 15vw;\n    color: #000000;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.info {\n    display: grid;\n    grid-template-columns: auto min-content;\n    column-gap: 25px;\n}\n\n.name.person {\n    grid-row: 1 / 2;\n    font-weight: 700;\n    align-self: flex-end;\n}\n\n.position {\n    grid-row: 2 / 3;\n    align-self: flex-start;\n    font-weight: 300;\n}\n\n.picture.person {\n    grid-row: 1 / 3;\n\n    width: 5vw;\n    height: auto;\n    border-radius: 2.5vw;\n}\n\n.phone {\n    font-size: 1.25rem;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactSection.js":
/*!*******************************!*\
  !*** ./src/contactSection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContactSection)
/* harmony export */ });
/* harmony import */ var _assets_manager_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/manager.jpg */ "./assets/manager.jpg");
/* harmony import */ var _assets_chef_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/chef.jpg */ "./assets/chef.jpg");
/* harmony import */ var _assets_owner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/owner.jpg */ "./assets/owner.jpg");




function loadContactSection() {
    const main = document.createElement("div");
    main.classList.add("main", "contact");

    const message = document.createElement("div");
    message.classList.add("message");

    const messageTitle = document.createElement("div");
    messageTitle.classList.add("title");
    messageTitle.textContent = "Send us your feedback!";
    message.appendChild(messageTitle);

    const thoughts = document.createElement("textarea");
    thoughts.name = "thoughts";
    thoughts.id = "thoughts";
    thoughts.placeholder = "Write down your thoughts about us";
    message.appendChild(thoughts);

    const sendButton = document.createElement("button");
    sendButton.classList.add("send");
    sendButton.textContent = "Send";
    message.appendChild(sendButton);

    main.appendChild(message);

    const call = document.createElement("div");
    call.classList.add("call");

    const callTitle = document.createElement("div");
    callTitle.classList.add("title");
    callTitle.textContent = "Wanna speak to us?";
    call.appendChild(callTitle);

    const contacts = document.createElement("div");
    contacts.classList.add("contacts");

    const managerCard = document.createElement("div");
    managerCard.classList.add("card");

    const managerInfo = document.createElement("div");
    managerInfo.classList.add("info");

    const managerName = document.createElement("div");
    managerName.classList.add("name", "person");
    managerName.textContent = "Mr. Harthfield";
    managerInfo.appendChild(managerName);

    const managerPosition = document.createElement("div");
    managerPosition.classList.add("position");
    managerPosition.textContent = "Manager";
    managerInfo.appendChild(managerPosition);

    const managerPicture = new Image();
    managerPicture.src = _assets_manager_jpg__WEBPACK_IMPORTED_MODULE_0__;
    managerPicture.alt = "Manager";
    managerPicture.classList.add("picture", "person");
    managerInfo.appendChild(managerPicture);

    managerCard.appendChild(managerInfo);

    const managerPhone = document.createElement("div");
    managerPhone.classList.add("phone");
    managerPhone.textContent = "+18394084500";
    managerCard.appendChild(managerPhone);

    contacts.appendChild(managerCard);

    const chefCard = document.createElement("div");
    chefCard.classList.add("card");

    const chefInfo = document.createElement("div");
    chefInfo.classList.add("info");

    const chefName = document.createElement("div");
    chefName.classList.add("name", "person");
    chefName.textContent = "Chef Temellin";
    chefInfo.appendChild(chefName);

    const chefPosition = document.createElement("div");
    chefPosition.classList.add("position");
    chefPosition.textContent = "Head Chef";
    chefInfo.appendChild(chefPosition);

    const chefPicture = new Image();
    chefPicture.src = _assets_chef_jpg__WEBPACK_IMPORTED_MODULE_1__;
    chefPicture.alt = "Head Chef";
    chefPicture.classList.add("picture", "person");
    chefInfo.appendChild(chefPicture);

    chefCard.appendChild(chefInfo);

    const chefPhone = document.createElement("div");
    chefPhone.classList.add("phone");
    chefPhone.textContent = "+15165763746";
    chefCard.appendChild(chefPhone);

    contacts.appendChild(chefCard);

    const ownerCard = document.createElement("div");
    ownerCard.classList.add("card");

    const ownerInfo = document.createElement("div");
    ownerInfo.classList.add("info");

    const ownerName = document.createElement("div");
    ownerName.classList.add("name", "person");
    ownerName.textContent = "Mr. Moksim";
    ownerInfo.appendChild(ownerName);

    const ownerPosition = document.createElement("div");
    ownerPosition.classList.add("position");
    ownerPosition.textContent = "Owner";
    ownerInfo.appendChild(ownerPosition);

    const ownerPicture = new Image();
    ownerPicture.src = _assets_owner_jpg__WEBPACK_IMPORTED_MODULE_2__;
    ownerPicture.alt = "Owner";
    ownerPicture.classList.add("picture", "person");
    ownerInfo.appendChild(ownerPicture);

    ownerCard.appendChild(ownerInfo);

    const ownerPhone = document.createElement("div");
    ownerPhone.classList.add("phone");
    ownerPhone.textContent = "+18436652427";
    ownerCard.appendChild(ownerPhone);

    contacts.appendChild(ownerCard);

    call.appendChild(contacts);

    main.appendChild(call);

    return main;
}

/***/ }),

/***/ "./src/homeSection.js":
/*!****************************!*\
  !*** ./src/homeSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomeSection)
/* harmony export */ });
/* harmony import */ var _assets_quotes_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/quotes.svg */ "./assets/quotes.svg");
/* harmony import */ var _assets_location_pin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/location-pin.svg */ "./assets/location-pin.svg");



function loadHomeSection() {
    const main = document.createElement("div");
    main.classList.add("main", "home");

    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");

    const quotes = new Image();
    quotes.src = _assets_quotes_svg__WEBPACK_IMPORTED_MODULE_0__;
    quotes.alt = "Double Quotation marks";
    quotes.classList.add("quotes");
    testimonial.appendChild(quotes);

    const testimonialText = document.createElement("div");
    testimonialText.classList.add("text");
    testimonialText.textContent = "The restaurant has an exquisite collection of delicious dishes. It is a must try for everyone in town!";
    testimonial.appendChild(testimonialText);

    const testimonialAuthor = document.createElement("div");
    testimonialAuthor.classList.add("author");
    testimonialAuthor.textContent = "Alice MacKenzie";
    testimonial.appendChild(testimonialAuthor);

    main.appendChild(testimonial);

    const visit = document.createElement("div");
    visit.classList.add("visit");

    const visitTitle = document.createElement("div");
    visitTitle.classList.add("title");
    visitTitle.textContent = "Fill your tummies with our delicacies!";
    visit.appendChild(visitTitle);

    const location = document.createElement("div");
    location.classList.add("location");

    const locationPin = new Image();
    locationPin.src = _assets_location_pin_svg__WEBPACK_IMPORTED_MODULE_1__;
    locationPin.alt = "Location pin";
    locationPin.classList.add("pin");
    location.appendChild(locationPin);

    const address = document.createElement("div");
    address.classList.add("address");
    address.textContent = "Mockingjay St., Mockaronie, Frintucky";
    location.appendChild(address);

    visit.appendChild(location);


    const openHours = document.createElement("div");
    openHours.classList.add("hours");
    
    const openHoursTitle = document.createElement("div");
    openHoursTitle.classList.add("title");
    openHoursTitle.textContent = "Open Hours";
    openHours.appendChild(openHoursTitle);

    const openHoursTiming = document.createElement("div");
    openHoursTiming.classList.add("timing");

    const days = document.createElement("div");
    days.classList.add("days");

    const weekdaysTitle = document.createElement("div");
    weekdaysTitle.classList.add("day");
    weekdaysTitle.textContent = "Weekdays: ";
    days.appendChild(weekdaysTitle);

    const weekendTitle = document.createElement("div");
    weekendTitle.classList.add("day");
    weekendTitle.textContent = "Weekend: ";
    days.appendChild(weekendTitle);

    openHoursTiming.appendChild(days);

    const times = document.createElement("div");
    times.classList.add("times");

    const weekdaysTime = document.createElement("div");
    weekdaysTime.classList.add("time");
    weekdaysTime.textContent = "10 AM - 08 PM";
    times.appendChild(weekdaysTime);

    const weekendTime = document.createElement("div");
    weekendTime.classList.add("time");
    weekendTime.textContent = "11 AM - 11 PM";
    times.appendChild(weekendTime);

    openHoursTiming.appendChild(times);

    openHours.appendChild(openHoursTiming);

    visit.appendChild(openHours);

    main.appendChild(visit);

    return main;
}

/***/ }),

/***/ "./src/menuSection.js":
/*!****************************!*\
  !*** ./src/menuSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuSection)
/* harmony export */ });
/* harmony import */ var _assets_grilled_salmon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/grilled-salmon.jpg */ "./assets/grilled-salmon.jpg");
/* harmony import */ var _assets_hyderabadi_biriyani_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/hyderabadi-biriyani.jpg */ "./assets/hyderabadi-biriyani.jpg");
/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/burger.jpg */ "./assets/burger.jpg");
/* harmony import */ var _assets_tuna_salad_sandwich_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/tuna-salad-sandwich.jpg */ "./assets/tuna-salad-sandwich.jpg");
/* harmony import */ var _assets_roasted_duck_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/roasted-duck.jpg */ "./assets/roasted-duck.jpg");
/* harmony import */ var _assets_garlic_butter_steak_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/garlic-butter-steak.jpg */ "./assets/garlic-butter-steak.jpg");
/* harmony import */ var _assets_chicken_burrito_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/chicken-burrito.jpg */ "./assets/chicken-burrito.jpg");
/* harmony import */ var _assets_tofu_noodles_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/tofu-noodles.jpg */ "./assets/tofu-noodles.jpg");
/* harmony import */ var _assets_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/fried-rice.jpg */ "./assets/fried-rice.jpg");
/* harmony import */ var _assets_swedish_meatballs_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/swedish-meatballs.jpg */ "./assets/swedish-meatballs.jpg");
/* harmony import */ var _assets_vegan_quesadilla_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/vegan-quesadilla.jpg */ "./assets/vegan-quesadilla.jpg");
/* harmony import */ var _assets_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/ratatouille.jpg */ "./assets/ratatouille.jpg");













function loadMenuSection() {
    const main = document.createElement("div");
    main.classList.add("main", "menu");


    // Grilled Salmon
    const salmonItem = document.createElement("div");
    salmonItem.classList.add("item");

    const salmonPicture = new Image();
    salmonPicture.src = _assets_grilled_salmon_jpg__WEBPACK_IMPORTED_MODULE_0__;
    salmonPicture.alt = "Grilled Salmon";
    salmonPicture.classList.add("picture", "food");
    salmonItem.appendChild(salmonPicture);

    const salmonDetails = document.createElement("div");
    salmonDetails.classList.add("details");

    const salmonName = document.createElement("div");
    salmonName.classList.add("name", "food");
    salmonName.textContent = "Grilled Salmon";
    salmonDetails.appendChild(salmonName);

    const salmonPrice = document.createElement("div");
    salmonPrice.classList.add("price");
    salmonPrice.textContent = "$14.99";
    salmonDetails.appendChild(salmonPrice);

    salmonItem.appendChild(salmonDetails);

    main.appendChild(salmonItem);

    // Hyderabadi Biriyani
    const biriyaniItem = document.createElement("div");
    biriyaniItem.classList.add("item");

    const biriyaniPicture = new Image();
    biriyaniPicture.src = _assets_hyderabadi_biriyani_jpg__WEBPACK_IMPORTED_MODULE_1__;
    biriyaniPicture.alt = "Hyderabadi Biriyani";
    biriyaniPicture.classList.add("picture", "food");
    biriyaniItem.appendChild(biriyaniPicture);

    const biriyaniDetails = document.createElement("div");
    biriyaniDetails.classList.add("details");

    const biriyaniName = document.createElement("div");
    biriyaniName.classList.add("name", "food");
    biriyaniName.textContent = "Hyderabadi Biriyani";
    biriyaniDetails.appendChild(biriyaniName);

    const biriyaniPrice = document.createElement("div");
    biriyaniPrice.classList.add("price");
    biriyaniPrice.textContent = "$16.99";
    biriyaniDetails.appendChild(biriyaniPrice);

    biriyaniItem.appendChild(biriyaniDetails);

    main.appendChild(biriyaniItem);

    // Cheese Steak Burger
    const burgerItem = document.createElement("div");
    burgerItem.classList.add("item");

    const burgerPicture = new Image();
    burgerPicture.src = _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_2__;
    burgerPicture.alt = "Cheese Steak Burger";
    burgerPicture.classList.add("picture", "food");
    burgerItem.appendChild(burgerPicture);

    const burgerDetails = document.createElement("div");
    burgerDetails.classList.add("details");

    const burgerName = document.createElement("div");
    burgerName.classList.add("name", "food");
    burgerName.textContent = "Cheese Steak Burger";
    burgerDetails.appendChild(burgerName);

    const burgerPrice = document.createElement("div");
    burgerPrice.classList.add("price");
    burgerPrice.textContent = "$3.49";
    burgerDetails.appendChild(burgerPrice);

    burgerItem.appendChild(burgerDetails);

    main.appendChild(burgerItem);

    // Tuna Salad Sandwich
    const tunaItem = document.createElement("div");
    tunaItem.classList.add("item");

    const tunaPicture = new Image();
    tunaPicture.src = _assets_tuna_salad_sandwich_jpg__WEBPACK_IMPORTED_MODULE_3__;
    tunaPicture.alt = "Tuna Salad Sandwich";
    tunaPicture.classList.add("picture", "food");
    tunaItem.appendChild(tunaPicture);

    const tunaDetails = document.createElement("div");
    tunaDetails.classList.add("details");

    const tunaName = document.createElement("div");
    tunaName.classList.add("name", "food");
    tunaName.textContent = "Tuna Salad Sandwich";
    tunaDetails.appendChild(tunaName);

    const tunaPrice = document.createElement("div");
    tunaPrice.classList.add("price");
    tunaPrice.textContent = "$14.99";
    tunaDetails.appendChild(tunaPrice);

    tunaItem.appendChild(tunaDetails);

    main.appendChild(tunaItem);

    // Roasted Duck
    const duckItem = document.createElement("div");
    duckItem.classList.add("item");

    const duckPicture = new Image();
    duckPicture.src = _assets_roasted_duck_jpg__WEBPACK_IMPORTED_MODULE_4__;
    duckPicture.alt = "Roasted Duck";
    duckPicture.classList.add("picture", "food");
    duckItem.appendChild(duckPicture);

    const duckDetails = document.createElement("div");
    duckDetails.classList.add("details");

    const duckName = document.createElement("div");
    duckName.classList.add("name", "food");
    duckName.textContent = "Roasted Duck";
    duckDetails.appendChild(duckName);

    const duckPrice = document.createElement("div");
    duckPrice.classList.add("price");
    duckPrice.textContent = "$29.99";
    duckDetails.appendChild(duckPrice);

    duckItem.appendChild(duckDetails);

    main.appendChild(duckItem);

    // Garlic Butter Steak
    const steakItem = document.createElement("div");
    steakItem.classList.add("item");

    const steakPicture = new Image();
    steakPicture.src = _assets_garlic_butter_steak_jpg__WEBPACK_IMPORTED_MODULE_5__;
    steakPicture.alt = "Garlic Butter Steak";
    steakPicture.classList.add("picture", "food");
    steakItem.appendChild(steakPicture);

    const steakDetails = document.createElement("div");
    steakDetails.classList.add("details");

    const steakName = document.createElement("div");
    steakName.classList.add("name", "food");
    steakName.textContent = "Garlic Butter Steak";
    steakDetails.appendChild(steakName);

    const steakPrice = document.createElement("div");
    steakPrice.classList.add("price");
    steakPrice.textContent = "$19.99";
    steakDetails.appendChild(steakPrice);

    steakItem.appendChild(steakDetails);

    main.appendChild(steakItem);

    // Chicken Burrito
    const burritoItem = document.createElement("div");
    burritoItem.classList.add("item");

    const burritoPicture = new Image();
    burritoPicture.src = _assets_chicken_burrito_jpg__WEBPACK_IMPORTED_MODULE_6__;
    burritoPicture.alt = "Chicken Burrito";
    burritoPicture.classList.add("picture", "food");
    burritoItem.appendChild(burritoPicture);

    const burritoDetails = document.createElement("div");
    burritoDetails.classList.add("details");

    const burritoName = document.createElement("div");
    burritoName.classList.add("name", "food");
    burritoName.textContent = "Chicken Burrito";
    burritoDetails.appendChild(burritoName);

    const burritoPrice = document.createElement("div");
    burritoPrice.classList.add("price");
    burritoPrice.textContent = "$7.99";
    burritoDetails.appendChild(burritoPrice);

    burritoItem.appendChild(burritoDetails);

    main.appendChild(burritoItem);

    // Crispy Tofu with Noodles
    const tofuItem = document.createElement("div");
    tofuItem.classList.add("item");

    const tofuPicture = new Image();
    tofuPicture.src = _assets_tofu_noodles_jpg__WEBPACK_IMPORTED_MODULE_7__;
    tofuPicture.alt = "Crispy Tofu with Noodles";
    tofuPicture.classList.add("picture", "food");
    tofuItem.appendChild(tofuPicture);

    const tofuDetails = document.createElement("div");
    tofuDetails.classList.add("details");

    const tofuName = document.createElement("div");
    tofuName.classList.add("name", "food");
    tofuName.textContent = "Crispy Tofu with Noodles";
    tofuDetails.appendChild(tofuName);

    const tofuPrice = document.createElement("div");
    tofuPrice.classList.add("price");
    tofuPrice.textContent = "$4.99";
    tofuDetails.appendChild(tofuPrice);

    tofuItem.appendChild(tofuDetails);

    main.appendChild(tofuItem);

    // Chicken Fried Rice
    const friedriceItem = document.createElement("div");
    friedriceItem.classList.add("item");

    const friedricePicture = new Image();
    friedricePicture.src = _assets_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_8__;
    friedricePicture.alt = "Chicken Fried Rice";
    friedricePicture.classList.add("picture", "food");
    friedriceItem.appendChild(friedricePicture);

    const friedriceDetails = document.createElement("div");
    friedriceDetails.classList.add("details");

    const friedriceName = document.createElement("div");
    friedriceName.classList.add("name", "food");
    friedriceName.textContent = "Chicken Fried Rice";
    friedriceDetails.appendChild(friedriceName);

    const friedricePrice = document.createElement("div");
    friedricePrice.classList.add("price");
    friedricePrice.textContent = "$2.49";
    friedriceDetails.appendChild(friedricePrice);

    friedriceItem.appendChild(friedriceDetails);

    main.appendChild(friedriceItem);

    // Swedish Meatballs
    const meatballsItem = document.createElement("div");
    meatballsItem.classList.add("item");

    const meatballsPicture = new Image();
    meatballsPicture.src = _assets_swedish_meatballs_jpg__WEBPACK_IMPORTED_MODULE_9__;
    meatballsPicture.alt = "Swedish Meatballs";
    meatballsPicture.classList.add("picture", "food");
    meatballsItem.appendChild(meatballsPicture);

    const meatballsDetails = document.createElement("div");
    meatballsDetails.classList.add("details");

    const meatballsName = document.createElement("div");
    meatballsName.classList.add("name", "food");
    meatballsName.textContent = "Swedish Meatballs";
    meatballsDetails.appendChild(meatballsName);

    const meatballsPrice = document.createElement("div");
    meatballsPrice.classList.add("price");
    meatballsPrice.textContent = "$2.99";
    meatballsDetails.appendChild(meatballsPrice);

    meatballsItem.appendChild(meatballsDetails);

    main.appendChild(meatballsItem);
    
    // Vegan Quesadilla
    const quesadillaItem = document.createElement("div");
    quesadillaItem.classList.add("item");

    const quesadillaPicture = new Image();
    quesadillaPicture.src = _assets_vegan_quesadilla_jpg__WEBPACK_IMPORTED_MODULE_10__;
    quesadillaPicture.alt = "Vegan Quesadilla";
    quesadillaPicture.classList.add("picture", "food");
    quesadillaItem.appendChild(quesadillaPicture);

    const quesadillaDetails = document.createElement("div");
    quesadillaDetails.classList.add("details");

    const quesadillaName = document.createElement("div");
    quesadillaName.classList.add("name", "food");
    quesadillaName.textContent = "Vegan Quesadilla";
    quesadillaDetails.appendChild(quesadillaName);

    const quesadillaPrice = document.createElement("div");
    quesadillaPrice.classList.add("price");
    quesadillaPrice.textContent = "$9.99";
    quesadillaDetails.appendChild(quesadillaPrice);

    quesadillaItem.appendChild(quesadillaDetails);

    main.appendChild(quesadillaItem);

    // Veggie Baked Ratatouille
    const ratatouilleItem = document.createElement("div");
    ratatouilleItem.classList.add("item");

    const ratatouillePicture = new Image();
    ratatouillePicture.src = _assets_ratatouille_jpg__WEBPACK_IMPORTED_MODULE_11__;
    ratatouillePicture.alt = "Veggie Baked Ratatouille";
    ratatouillePicture.classList.add("picture", "food");
    ratatouilleItem.appendChild(ratatouillePicture);

    const ratatouilleDetails = document.createElement("div");
    ratatouilleDetails.classList.add("details");

    const ratatouilleName = document.createElement("div");
    ratatouilleName.classList.add("name", "food");
    ratatouilleName.textContent = "Veggie Baked Ratatouille";
    ratatouilleDetails.appendChild(ratatouilleName);

    const ratatouillePrice = document.createElement("div");
    ratatouillePrice.classList.add("price");
    ratatouillePrice.textContent = "$12.49";
    ratatouilleDetails.appendChild(ratatouillePrice);

    ratatouilleItem.appendChild(ratatouilleDetails);

    main.appendChild(ratatouilleItem);
    
    return main;
}

/***/ }),

/***/ "./assets/burger.jpg":
/*!***************************!*\
  !*** ./assets/burger.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59401a0437fdc526f0ca.jpg";

/***/ }),

/***/ "./assets/chef.jpg":
/*!*************************!*\
  !*** ./assets/chef.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f31be43a12a77dc854d7.jpg";

/***/ }),

/***/ "./assets/chicken-burrito.jpg":
/*!************************************!*\
  !*** ./assets/chicken-burrito.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18af37262b41cab341d7.jpg";

/***/ }),

/***/ "./assets/fried-rice.jpg":
/*!*******************************!*\
  !*** ./assets/fried-rice.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50effcee760b73655a74.jpg";

/***/ }),

/***/ "./assets/garlic-butter-steak.jpg":
/*!****************************************!*\
  !*** ./assets/garlic-butter-steak.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3637edb413a6e9c2e8ca.jpg";

/***/ }),

/***/ "./assets/grilled-salmon.jpg":
/*!***********************************!*\
  !*** ./assets/grilled-salmon.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "768c99a91f2ede724eed.jpg";

/***/ }),

/***/ "./assets/hyderabadi-biriyani.jpg":
/*!****************************************!*\
  !*** ./assets/hyderabadi-biriyani.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9897a9749fb8580b437b.jpg";

/***/ }),

/***/ "./assets/location-pin.svg":
/*!*********************************!*\
  !*** ./assets/location-pin.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "850b17e5d6510edfd2a5.svg";

/***/ }),

/***/ "./assets/manager.jpg":
/*!****************************!*\
  !*** ./assets/manager.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e10529a23c28378bd7f.jpg";

/***/ }),

/***/ "./assets/owner.jpg":
/*!**************************!*\
  !*** ./assets/owner.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6306fc09d214bcab8522.jpg";

/***/ }),

/***/ "./assets/quotes.svg":
/*!***************************!*\
  !*** ./assets/quotes.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a95307ca773dc5406a47.svg";

/***/ }),

/***/ "./assets/ratatouille.jpg":
/*!********************************!*\
  !*** ./assets/ratatouille.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c623e161d71cc1d9251b.jpg";

/***/ }),

/***/ "./assets/restaurant.jpg":
/*!*******************************!*\
  !*** ./assets/restaurant.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8b162f5cddd04965fe.jpg";

/***/ }),

/***/ "./assets/roasted-duck.jpg":
/*!*********************************!*\
  !*** ./assets/roasted-duck.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "555d36c0f2ae59f6315c.jpg";

/***/ }),

/***/ "./assets/swedish-meatballs.jpg":
/*!**************************************!*\
  !*** ./assets/swedish-meatballs.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e85d67e53f4bc7e57fc6.jpg";

/***/ }),

/***/ "./assets/tofu-noodles.jpg":
/*!*********************************!*\
  !*** ./assets/tofu-noodles.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7887eaea5172ec583dfb.jpg";

/***/ }),

/***/ "./assets/tuna-salad-sandwich.jpg":
/*!****************************************!*\
  !*** ./assets/tuna-salad-sandwich.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c05b5d3916fd9d55e84.jpg";

/***/ }),

/***/ "./assets/vegan-quesadilla.jpg":
/*!*************************************!*\
  !*** ./assets/vegan-quesadilla.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f637f8484c8048b149b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeSection */ "./src/homeSection.js");
/* harmony import */ var _menuSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuSection */ "./src/menuSection.js");
/* harmony import */ var _contactSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactSection */ "./src/contactSection.js");






const content = document.querySelector("#content");


const navigator = document.createElement("div");
navigator.classList.add("nav");

const homeTab = document.createElement("button");
homeTab.classList.add("tab", "home", "active");
homeTab.textContent = "Home";

navigator.appendChild(homeTab);

const menuTab = document.createElement("button");
menuTab.classList.add("tab", "menu");
menuTab.textContent = "Menu";

navigator.appendChild(menuTab);

const contactTab = document.createElement("button");
contactTab.classList.add("tab", "contact");
contactTab.textContent = "Contact";

navigator.appendChild(contactTab);

content.appendChild(navigator);


const heading = document.createElement("div");
heading.classList.add("heading");
heading.textContent = "Mock Restaurant";
content.appendChild(heading);


content.appendChild((0,_homeSection__WEBPACK_IMPORTED_MODULE_1__["default"])());

homeTab.addEventListener("click", () => {
    homeTab.classList.add("active");
    menuTab.classList.remove("active");
    contactTab.classList.remove("active");

    heading.textContent = "Mock Restaurant";
    content.removeChild(content.childNodes[2]);
    content.appendChild((0,_homeSection__WEBPACK_IMPORTED_MODULE_1__["default"])());
});
menuTab.addEventListener("click", () => {
    homeTab.classList.remove("active");
    menuTab.classList.add("active");
    contactTab.classList.remove("active");

    heading.textContent = "Menu";
    content.removeChild(content.childNodes[2]);
    content.appendChild((0,_menuSection__WEBPACK_IMPORTED_MODULE_2__["default"])());
});
contactTab.addEventListener("click", () => {
    homeTab.classList.remove("active");
    menuTab.classList.remove("active");
    contactTab.classList.add("active");

    heading.textContent = "Contact";
    content.removeChild(content.childNodes[2]);
    content.appendChild((0,_contactSection__WEBPACK_IMPORTED_MODULE_3__["default"])());
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SDtBQUN6SCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxV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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQWtCO0FBQzFDLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL3NyYy9jb250YWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9zcmMvaG9tZVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vc3JjL21lbnVTZWN0aW9uLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcmVzdGF1cmFudC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyYW5kK0hvdGVsJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWRhcmstYmx1ZTogIzM0NDM1RTtcbiAgICAtLWxpZ2h0LWJsdWU6ICNCOERCRDk7XG4gICAgLS1zYWZmcm9uOiAjRjlDODQ2O1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4jY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdiB7XG4gICAgLyogbWluLWhlaWdodDogMTAwcHg7ICovXG4gICAgbWluLWhlaWdodDogMTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi50YWIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi50YWIuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0MzVlNzA7XG59XG5cbi50YWI6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0MzVlNTA7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LWZhbWlseTogJ0dyYW5kIEhvdGVsJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luOiAydmggMDtcbn1cblxuLm1haW4ge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBwYWRkaW5nOiAzdmggM3Z3O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZXN0aW1vbmlhbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAzNXZ3O1xufVxuXG4ucXVvdGVzIHtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi50ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHZhcigtLXNhZmZyb24pO1xufVxuXG4uYXV0aG9yIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZpc2l0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waW4ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ob3VycyB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3Vycz4udGl0bGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLnRpbWluZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGNvbHVtbi1nYXA6IDI1cHg7XG59XG5cblxuLm1haW4ubWVudSB7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICAgIHBhZGRpbmc6IDF2dztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICByb3ctZ2FwOiA0dmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLml0ZW0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5waWN0dXJlLmZvb2Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5uYW1lLmZvb2Qge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcmljZSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuXG4ubWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0aG91Z2h0cyB7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZW5kIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG4uY29udGFjdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBjb2x1bW4tZ2FwOiAydnc7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgICB3aWR0aDogMTV2dztcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XG4gICAgY29sdW1uLWdhcDogMjVweDtcbn1cblxuLm5hbWUucGVyc29uIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnBvc2l0aW9uIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucGljdHVyZS5wZXJzb24ge1xuICAgIGdyaWQtcm93OiAxIC8gMztcblxuICAgIHdpZHRoOiA1dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIuNXZ3O1xufVxuXG4ucGhvbmUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpRkFBeUU7SUFDekUsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjOztJQUVkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsd0JBQXdCOztJQUV4QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZOztJQUVaLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7O0lBRWQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLFVBQVU7SUFDVixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyYW5kK0hvdGVsJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1kYXJrLWJsdWU6ICMzNDQzNUU7XFxuICAgIC0tbGlnaHQtYmx1ZTogI0I4REJEOTtcXG4gICAgLS1zYWZmcm9uOiAjRjlDODQ2O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLi9hc3NldHMvcmVzdGF1cmFudC5qcGdcXFwiKSBuby1yZXBlYXQgcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYge1xcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDBweDsgKi9cXG4gICAgbWluLWhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGFiLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQzNWU3MDtcXG59XFxuXFxuLnRhYjpob3Zlcjpub3QoLmFjdGl2ZSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0MzVlNTA7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFuZCBIb3RlbCcsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAydmggMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBwYWRkaW5nOiAzdmggM3Z3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50ZXN0aW1vbmlhbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDM1dnc7XFxufVxcblxcbi5xdW90ZXMge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHZhcigtLXNhZmZyb24pO1xcbn1cXG5cXG4uYXV0aG9yIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnZpc2l0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogdmFyKC0tc2FmZnJvbik7XFxuICAgIG1hcmdpbi1ib3R0b206IDIuNXZoO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGluIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaG91cnMge1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3Vycz4udGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4udGltaW5nIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG59XFxuXFxuXFxuLm1haW4ubWVudSB7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIHBhZGRpbmc6IDF2dztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIHJvdy1nYXA6IDR2aDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnBpY3R1cmUuZm9vZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLm5hbWUuZm9vZCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0aG91Z2h0cyB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zZW5kIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNhbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxufVxcblxcbi5jb250YWN0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDJ2dztcXG59XFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXZ3O1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIG1pbi1jb250ZW50O1xcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xcbn1cXG5cXG4ubmFtZS5wZXJzb24ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucG9zaXRpb24ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5waWN0dXJlLnBlcnNvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG5cXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAyLjV2dztcXG59XFxuXFxuLnBob25lIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1hbmFnZXJJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL21hbmFnZXIuanBnXCI7XG5pbXBvcnQgY2hlZkltYWdlIGZyb20gXCIuLi9hc3NldHMvY2hlZi5qcGdcIjtcbmltcG9ydCBvd25lckltYWdlIGZyb20gXCIuLi9hc3NldHMvb3duZXIuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIsIFwiY29udGFjdFwiKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VcIik7XG5cbiAgICBjb25zdCBtZXNzYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgbWVzc2FnZVRpdGxlLnRleHRDb250ZW50ID0gXCJTZW5kIHVzIHlvdXIgZmVlZGJhY2shXCI7XG4gICAgbWVzc2FnZS5hcHBlbmRDaGlsZChtZXNzYWdlVGl0bGUpO1xuXG4gICAgY29uc3QgdGhvdWdodHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGhvdWdodHMubmFtZSA9IFwidGhvdWdodHNcIjtcbiAgICB0aG91Z2h0cy5pZCA9IFwidGhvdWdodHNcIjtcbiAgICB0aG91Z2h0cy5wbGFjZWhvbGRlciA9IFwiV3JpdGUgZG93biB5b3VyIHRob3VnaHRzIGFib3V0IHVzXCI7XG4gICAgbWVzc2FnZS5hcHBlbmRDaGlsZCh0aG91Z2h0cyk7XG5cbiAgICBjb25zdCBzZW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzZW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZW5kXCIpO1xuICAgIHNlbmRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlbmRcIjtcbiAgICBtZXNzYWdlLmFwcGVuZENoaWxkKHNlbmRCdXR0b24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIGNvbnN0IGNhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGwuY2xhc3NMaXN0LmFkZChcImNhbGxcIik7XG5cbiAgICBjb25zdCBjYWxsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhbGxUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgY2FsbFRpdGxlLnRleHRDb250ZW50ID0gXCJXYW5uYSBzcGVhayB0byB1cz9cIjtcbiAgICBjYWxsLmFwcGVuZENoaWxkKGNhbGxUaXRsZSk7XG5cbiAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdHMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RzXCIpO1xuXG4gICAgY29uc3QgbWFuYWdlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hbmFnZXJDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gICAgY29uc3QgbWFuYWdlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hbmFnZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgY29uc3QgbWFuYWdlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hbmFnZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwicGVyc29uXCIpO1xuICAgIG1hbmFnZXJOYW1lLnRleHRDb250ZW50ID0gXCJNci4gSGFydGhmaWVsZFwiO1xuICAgIG1hbmFnZXJJbmZvLmFwcGVuZENoaWxkKG1hbmFnZXJOYW1lKTtcblxuICAgIGNvbnN0IG1hbmFnZXJQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFuYWdlclBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvblwiKTtcbiAgICBtYW5hZ2VyUG9zaXRpb24udGV4dENvbnRlbnQgPSBcIk1hbmFnZXJcIjtcbiAgICBtYW5hZ2VySW5mby5hcHBlbmRDaGlsZChtYW5hZ2VyUG9zaXRpb24pO1xuXG4gICAgY29uc3QgbWFuYWdlclBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYW5hZ2VyUGljdHVyZS5zcmMgPSBtYW5hZ2VySW1hZ2U7XG4gICAgbWFuYWdlclBpY3R1cmUuYWx0ID0gXCJNYW5hZ2VyXCI7XG4gICAgbWFuYWdlclBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJwZXJzb25cIik7XG4gICAgbWFuYWdlckluZm8uYXBwZW5kQ2hpbGQobWFuYWdlclBpY3R1cmUpO1xuXG4gICAgbWFuYWdlckNhcmQuYXBwZW5kQ2hpbGQobWFuYWdlckluZm8pO1xuXG4gICAgY29uc3QgbWFuYWdlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYW5hZ2VyUGhvbmUuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xuICAgIG1hbmFnZXJQaG9uZS50ZXh0Q29udGVudCA9IFwiKzE4Mzk0MDg0NTAwXCI7XG4gICAgbWFuYWdlckNhcmQuYXBwZW5kQ2hpbGQobWFuYWdlclBob25lKTtcblxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKG1hbmFnZXJDYXJkKTtcblxuICAgIGNvbnN0IGNoZWZDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVmQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IGNoZWZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVmSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICAgIGNvbnN0IGNoZWZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVmTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcInBlcnNvblwiKTtcbiAgICBjaGVmTmFtZS50ZXh0Q29udGVudCA9IFwiQ2hlZiBUZW1lbGxpblwiO1xuICAgIGNoZWZJbmZvLmFwcGVuZENoaWxkKGNoZWZOYW1lKTtcblxuICAgIGNvbnN0IGNoZWZQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlZlBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvblwiKTtcbiAgICBjaGVmUG9zaXRpb24udGV4dENvbnRlbnQgPSBcIkhlYWQgQ2hlZlwiO1xuICAgIGNoZWZJbmZvLmFwcGVuZENoaWxkKGNoZWZQb3NpdGlvbik7XG5cbiAgICBjb25zdCBjaGVmUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNoZWZQaWN0dXJlLnNyYyA9IGNoZWZJbWFnZTtcbiAgICBjaGVmUGljdHVyZS5hbHQgPSBcIkhlYWQgQ2hlZlwiO1xuICAgIGNoZWZQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwicGVyc29uXCIpO1xuICAgIGNoZWZJbmZvLmFwcGVuZENoaWxkKGNoZWZQaWN0dXJlKTtcblxuICAgIGNoZWZDYXJkLmFwcGVuZENoaWxkKGNoZWZJbmZvKTtcblxuICAgIGNvbnN0IGNoZWZQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlZlBob25lLmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcbiAgICBjaGVmUGhvbmUudGV4dENvbnRlbnQgPSBcIisxNTE2NTc2Mzc0NlwiO1xuICAgIGNoZWZDYXJkLmFwcGVuZENoaWxkKGNoZWZQaG9uZSk7XG5cbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZChjaGVmQ2FyZCk7XG5cbiAgICBjb25zdCBvd25lckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG93bmVyQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgIGNvbnN0IG93bmVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3duZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgY29uc3Qgb3duZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvd25lck5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJwZXJzb25cIik7XG4gICAgb3duZXJOYW1lLnRleHRDb250ZW50ID0gXCJNci4gTW9rc2ltXCI7XG4gICAgb3duZXJJbmZvLmFwcGVuZENoaWxkKG93bmVyTmFtZSk7XG5cbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvd25lclBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwb3NpdGlvblwiKTtcbiAgICBvd25lclBvc2l0aW9uLnRleHRDb250ZW50ID0gXCJPd25lclwiO1xuICAgIG93bmVySW5mby5hcHBlbmRDaGlsZChvd25lclBvc2l0aW9uKTtcblxuICAgIGNvbnN0IG93bmVyUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIG93bmVyUGljdHVyZS5zcmMgPSBvd25lckltYWdlO1xuICAgIG93bmVyUGljdHVyZS5hbHQgPSBcIk93bmVyXCI7XG4gICAgb3duZXJQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwicGVyc29uXCIpO1xuICAgIG93bmVySW5mby5hcHBlbmRDaGlsZChvd25lclBpY3R1cmUpO1xuXG4gICAgb3duZXJDYXJkLmFwcGVuZENoaWxkKG93bmVySW5mbyk7XG5cbiAgICBjb25zdCBvd25lclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvd25lclBob25lLmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcbiAgICBvd25lclBob25lLnRleHRDb250ZW50ID0gXCIrMTg0MzY2NTI0MjdcIjtcbiAgICBvd25lckNhcmQuYXBwZW5kQ2hpbGQob3duZXJQaG9uZSk7XG5cbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZChvd25lckNhcmQpO1xuXG4gICAgY2FsbC5hcHBlbmRDaGlsZChjb250YWN0cyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNhbGwpO1xuXG4gICAgcmV0dXJuIG1haW47XG59IiwiaW1wb3J0IHF1b3Rlc0ltYWdlIGZyb20gXCIuLi9hc3NldHMvcXVvdGVzLnN2Z1wiO1xuaW1wb3J0IHBpbkltYWdlIGZyb20gXCIuLi9hc3NldHMvbG9jYXRpb24tcGluLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiLCBcImhvbWVcIik7XG5cbiAgICBjb25zdCB0ZXN0aW1vbmlhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVzdGltb25pYWwuY2xhc3NMaXN0LmFkZChcInRlc3RpbW9uaWFsXCIpO1xuXG4gICAgY29uc3QgcXVvdGVzID0gbmV3IEltYWdlKCk7XG4gICAgcXVvdGVzLnNyYyA9IHF1b3Rlc0ltYWdlO1xuICAgIHF1b3Rlcy5hbHQgPSBcIkRvdWJsZSBRdW90YXRpb24gbWFya3NcIjtcbiAgICBxdW90ZXMuY2xhc3NMaXN0LmFkZChcInF1b3Rlc1wiKTtcbiAgICB0ZXN0aW1vbmlhbC5hcHBlbmRDaGlsZChxdW90ZXMpO1xuXG4gICAgY29uc3QgdGVzdGltb25pYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXN0aW1vbmlhbFRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgdGVzdGltb25pYWxUZXh0LnRleHRDb250ZW50ID0gXCJUaGUgcmVzdGF1cmFudCBoYXMgYW4gZXhxdWlzaXRlIGNvbGxlY3Rpb24gb2YgZGVsaWNpb3VzIGRpc2hlcy4gSXQgaXMgYSBtdXN0IHRyeSBmb3IgZXZlcnlvbmUgaW4gdG93biFcIjtcbiAgICB0ZXN0aW1vbmlhbC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbFRleHQpO1xuXG4gICAgY29uc3QgdGVzdGltb25pYWxBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlc3RpbW9uaWFsQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJhdXRob3JcIik7XG4gICAgdGVzdGltb25pYWxBdXRob3IudGV4dENvbnRlbnQgPSBcIkFsaWNlIE1hY0tlbnppZVwiO1xuICAgIHRlc3RpbW9uaWFsLmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsQXV0aG9yKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGVzdGltb25pYWwpO1xuXG4gICAgY29uc3QgdmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZpc2l0LmNsYXNzTGlzdC5hZGQoXCJ2aXNpdFwiKTtcblxuICAgIGNvbnN0IHZpc2l0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZpc2l0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHZpc2l0VGl0bGUudGV4dENvbnRlbnQgPSBcIkZpbGwgeW91ciB0dW1taWVzIHdpdGggb3VyIGRlbGljYWNpZXMhXCI7XG4gICAgdmlzaXQuYXBwZW5kQ2hpbGQodmlzaXRUaXRsZSk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25QaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvblBpbi5zcmMgPSBwaW5JbWFnZTtcbiAgICBsb2NhdGlvblBpbi5hbHQgPSBcIkxvY2F0aW9uIHBpblwiO1xuICAgIGxvY2F0aW9uUGluLmNsYXNzTGlzdC5hZGQoXCJwaW5cIik7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25QaW4pO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJNb2NraW5namF5IFN0LiwgTW9ja2Fyb25pZSwgRnJpbnR1Y2t5XCI7XG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICB2aXNpdC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cblxuICAgIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3BlbkhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgICBcbiAgICBjb25zdCBvcGVuSG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3BlbkhvdXJzVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIG9wZW5Ib3Vyc1RpdGxlLnRleHRDb250ZW50ID0gXCJPcGVuIEhvdXJzXCI7XG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKG9wZW5Ib3Vyc1RpdGxlKTtcblxuICAgIGNvbnN0IG9wZW5Ib3Vyc1RpbWluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3BlbkhvdXJzVGltaW5nLmNsYXNzTGlzdC5hZGQoXCJ0aW1pbmdcIik7XG5cbiAgICBjb25zdCBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXlzLmNsYXNzTGlzdC5hZGQoXCJkYXlzXCIpO1xuXG4gICAgY29uc3Qgd2Vla2RheXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vla2RheXNUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xuICAgIHdlZWtkYXlzVGl0bGUudGV4dENvbnRlbnQgPSBcIldlZWtkYXlzOiBcIjtcbiAgICBkYXlzLmFwcGVuZENoaWxkKHdlZWtkYXlzVGl0bGUpO1xuXG4gICAgY29uc3Qgd2Vla2VuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWVrZW5kVGl0bGUuY2xhc3NMaXN0LmFkZChcImRheVwiKTtcbiAgICB3ZWVrZW5kVGl0bGUudGV4dENvbnRlbnQgPSBcIldlZWtlbmQ6IFwiO1xuICAgIGRheXMuYXBwZW5kQ2hpbGQod2Vla2VuZFRpdGxlKTtcblxuICAgIG9wZW5Ib3Vyc1RpbWluZy5hcHBlbmRDaGlsZChkYXlzKTtcblxuICAgIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aW1lcy5jbGFzc0xpc3QuYWRkKFwidGltZXNcIik7XG5cbiAgICBjb25zdCB3ZWVrZGF5c1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlZWtkYXlzVGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcbiAgICB3ZWVrZGF5c1RpbWUudGV4dENvbnRlbnQgPSBcIjEwIEFNIC0gMDggUE1cIjtcbiAgICB0aW1lcy5hcHBlbmRDaGlsZCh3ZWVrZGF5c1RpbWUpO1xuXG4gICAgY29uc3Qgd2Vla2VuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlZWtlbmRUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuICAgIHdlZWtlbmRUaW1lLnRleHRDb250ZW50ID0gXCIxMSBBTSAtIDExIFBNXCI7XG4gICAgdGltZXMuYXBwZW5kQ2hpbGQod2Vla2VuZFRpbWUpO1xuXG4gICAgb3BlbkhvdXJzVGltaW5nLmFwcGVuZENoaWxkKHRpbWVzKTtcblxuICAgIG9wZW5Ib3Vycy5hcHBlbmRDaGlsZChvcGVuSG91cnNUaW1pbmcpO1xuXG4gICAgdmlzaXQuYXBwZW5kQ2hpbGQob3BlbkhvdXJzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQodmlzaXQpO1xuXG4gICAgcmV0dXJuIG1haW47XG59IiwiaW1wb3J0IHNhbG1vbkltYWdlIGZyb20gXCIuLi9hc3NldHMvZ3JpbGxlZC1zYWxtb24uanBnXCI7XG5pbXBvcnQgYmlyaXlhbmlJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2h5ZGVyYWJhZGktYmlyaXlhbmkuanBnXCI7XG5pbXBvcnQgYnVyZ2VySW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9idXJnZXIuanBnXCI7XG5pbXBvcnQgdHVuYUltYWdlIGZyb20gXCIuLi9hc3NldHMvdHVuYS1zYWxhZC1zYW5kd2ljaC5qcGdcIjtcbmltcG9ydCBkdWNrSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9yb2FzdGVkLWR1Y2suanBnXCI7XG5pbXBvcnQgc3RlYWtJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2dhcmxpYy1idXR0ZXItc3RlYWsuanBnXCI7XG5pbXBvcnQgYnVycml0b0ltYWdlIGZyb20gXCIuLi9hc3NldHMvY2hpY2tlbi1idXJyaXRvLmpwZ1wiO1xuaW1wb3J0IHRvZnVJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL3RvZnUtbm9vZGxlcy5qcGdcIjtcbmltcG9ydCBmcmllZHJpY2VJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2ZyaWVkLXJpY2UuanBnXCI7XG5pbXBvcnQgbWVhdGJhbGxzSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9zd2VkaXNoLW1lYXRiYWxscy5qcGdcIjtcbmltcG9ydCBxdWVzYWRpbGxhSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy92ZWdhbi1xdWVzYWRpbGxhLmpwZ1wiO1xuaW1wb3J0IHJhdGF0b3VpbGxlSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9yYXRhdG91aWxsZS5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnVTZWN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIiwgXCJtZW51XCIpO1xuXG5cbiAgICAvLyBHcmlsbGVkIFNhbG1vblxuICAgIGNvbnN0IHNhbG1vbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhbG1vbkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCBzYWxtb25QaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgc2FsbW9uUGljdHVyZS5zcmMgPSBzYWxtb25JbWFnZTtcbiAgICBzYWxtb25QaWN0dXJlLmFsdCA9IFwiR3JpbGxlZCBTYWxtb25cIjtcbiAgICBzYWxtb25QaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiZm9vZFwiKTtcbiAgICBzYWxtb25JdGVtLmFwcGVuZENoaWxkKHNhbG1vblBpY3R1cmUpO1xuXG4gICAgY29uc3Qgc2FsbW9uRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2FsbW9uRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IHNhbG1vbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhbG1vbk5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJmb29kXCIpO1xuICAgIHNhbG1vbk5hbWUudGV4dENvbnRlbnQgPSBcIkdyaWxsZWQgU2FsbW9uXCI7XG4gICAgc2FsbW9uRGV0YWlscy5hcHBlbmRDaGlsZChzYWxtb25OYW1lKTtcblxuICAgIGNvbnN0IHNhbG1vblByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYWxtb25QcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgc2FsbW9uUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxNC45OVwiO1xuICAgIHNhbG1vbkRldGFpbHMuYXBwZW5kQ2hpbGQoc2FsbW9uUHJpY2UpO1xuXG4gICAgc2FsbW9uSXRlbS5hcHBlbmRDaGlsZChzYWxtb25EZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2FsbW9uSXRlbSk7XG5cbiAgICAvLyBIeWRlcmFiYWRpIEJpcml5YW5pXG4gICAgY29uc3QgYmlyaXlhbmlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiaXJpeWFuaUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCBiaXJpeWFuaVBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBiaXJpeWFuaVBpY3R1cmUuc3JjID0gYmlyaXlhbmlJbWFnZTtcbiAgICBiaXJpeWFuaVBpY3R1cmUuYWx0ID0gXCJIeWRlcmFiYWRpIEJpcml5YW5pXCI7XG4gICAgYmlyaXlhbmlQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiZm9vZFwiKTtcbiAgICBiaXJpeWFuaUl0ZW0uYXBwZW5kQ2hpbGQoYmlyaXlhbmlQaWN0dXJlKTtcblxuICAgIGNvbnN0IGJpcml5YW5pRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmlyaXlhbmlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgYmlyaXlhbmlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiaXJpeWFuaU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJmb29kXCIpO1xuICAgIGJpcml5YW5pTmFtZS50ZXh0Q29udGVudCA9IFwiSHlkZXJhYmFkaSBCaXJpeWFuaVwiO1xuICAgIGJpcml5YW5pRGV0YWlscy5hcHBlbmRDaGlsZChiaXJpeWFuaU5hbWUpO1xuXG4gICAgY29uc3QgYmlyaXlhbmlQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmlyaXlhbmlQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgYmlyaXlhbmlQcmljZS50ZXh0Q29udGVudCA9IFwiJDE2Ljk5XCI7XG4gICAgYmlyaXlhbmlEZXRhaWxzLmFwcGVuZENoaWxkKGJpcml5YW5pUHJpY2UpO1xuXG4gICAgYmlyaXlhbmlJdGVtLmFwcGVuZENoaWxkKGJpcml5YW5pRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJpcml5YW5pSXRlbSk7XG5cbiAgICAvLyBDaGVlc2UgU3RlYWsgQnVyZ2VyXG4gICAgY29uc3QgYnVyZ2VySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnVyZ2VySXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IGJ1cmdlclBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJnZXJQaWN0dXJlLnNyYyA9IGJ1cmdlckltYWdlO1xuICAgIGJ1cmdlclBpY3R1cmUuYWx0ID0gXCJDaGVlc2UgU3RlYWsgQnVyZ2VyXCI7XG4gICAgYnVyZ2VyUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgYnVyZ2VySXRlbS5hcHBlbmRDaGlsZChidXJnZXJQaWN0dXJlKTtcblxuICAgIGNvbnN0IGJ1cmdlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cmdlckRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBidXJnZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBidXJnZXJOYW1lLnRleHRDb250ZW50ID0gXCJDaGVlc2UgU3RlYWsgQnVyZ2VyXCI7XG4gICAgYnVyZ2VyRGV0YWlscy5hcHBlbmRDaGlsZChidXJnZXJOYW1lKTtcblxuICAgIGNvbnN0IGJ1cmdlclByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXJQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgYnVyZ2VyUHJpY2UudGV4dENvbnRlbnQgPSBcIiQzLjQ5XCI7XG4gICAgYnVyZ2VyRGV0YWlscy5hcHBlbmRDaGlsZChidXJnZXJQcmljZSk7XG5cbiAgICBidXJnZXJJdGVtLmFwcGVuZENoaWxkKGJ1cmdlckRldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXJnZXJJdGVtKTtcblxuICAgIC8vIFR1bmEgU2FsYWQgU2FuZHdpY2hcbiAgICBjb25zdCB0dW5hSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHVuYUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCB0dW5hUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIHR1bmFQaWN0dXJlLnNyYyA9IHR1bmFJbWFnZTtcbiAgICB0dW5hUGljdHVyZS5hbHQgPSBcIlR1bmEgU2FsYWQgU2FuZHdpY2hcIjtcbiAgICB0dW5hUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgdHVuYUl0ZW0uYXBwZW5kQ2hpbGQodHVuYVBpY3R1cmUpO1xuXG4gICAgY29uc3QgdHVuYURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR1bmFEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgdHVuYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR1bmFOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICB0dW5hTmFtZS50ZXh0Q29udGVudCA9IFwiVHVuYSBTYWxhZCBTYW5kd2ljaFwiO1xuICAgIHR1bmFEZXRhaWxzLmFwcGVuZENoaWxkKHR1bmFOYW1lKTtcblxuICAgIGNvbnN0IHR1bmFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHVuYVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICB0dW5hUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxNC45OVwiO1xuICAgIHR1bmFEZXRhaWxzLmFwcGVuZENoaWxkKHR1bmFQcmljZSk7XG5cbiAgICB0dW5hSXRlbS5hcHBlbmRDaGlsZCh0dW5hRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHR1bmFJdGVtKTtcblxuICAgIC8vIFJvYXN0ZWQgRHVja1xuICAgIGNvbnN0IGR1Y2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWNrSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IGR1Y2tQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgZHVja1BpY3R1cmUuc3JjID0gZHVja0ltYWdlO1xuICAgIGR1Y2tQaWN0dXJlLmFsdCA9IFwiUm9hc3RlZCBEdWNrXCI7XG4gICAgZHVja1BpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIGR1Y2tJdGVtLmFwcGVuZENoaWxkKGR1Y2tQaWN0dXJlKTtcblxuICAgIGNvbnN0IGR1Y2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGR1Y2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWNrTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgZHVja05hbWUudGV4dENvbnRlbnQgPSBcIlJvYXN0ZWQgRHVja1wiO1xuICAgIGR1Y2tEZXRhaWxzLmFwcGVuZENoaWxkKGR1Y2tOYW1lKTtcblxuICAgIGNvbnN0IGR1Y2tQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVja1ByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBkdWNrUHJpY2UudGV4dENvbnRlbnQgPSBcIiQyOS45OVwiO1xuICAgIGR1Y2tEZXRhaWxzLmFwcGVuZENoaWxkKGR1Y2tQcmljZSk7XG5cbiAgICBkdWNrSXRlbS5hcHBlbmRDaGlsZChkdWNrRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGR1Y2tJdGVtKTtcblxuICAgIC8vIEdhcmxpYyBCdXR0ZXIgU3RlYWtcbiAgICBjb25zdCBzdGVha0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0ZWFrSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IHN0ZWFrUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIHN0ZWFrUGljdHVyZS5zcmMgPSBzdGVha0ltYWdlO1xuICAgIHN0ZWFrUGljdHVyZS5hbHQgPSBcIkdhcmxpYyBCdXR0ZXIgU3RlYWtcIjtcbiAgICBzdGVha1BpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIHN0ZWFrSXRlbS5hcHBlbmRDaGlsZChzdGVha1BpY3R1cmUpO1xuXG4gICAgY29uc3Qgc3RlYWtEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVha0RldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBzdGVha05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0ZWFrTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgc3RlYWtOYW1lLnRleHRDb250ZW50ID0gXCJHYXJsaWMgQnV0dGVyIFN0ZWFrXCI7XG4gICAgc3RlYWtEZXRhaWxzLmFwcGVuZENoaWxkKHN0ZWFrTmFtZSk7XG5cbiAgICBjb25zdCBzdGVha1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGVha1ByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBzdGVha1ByaWNlLnRleHRDb250ZW50ID0gXCIkMTkuOTlcIjtcbiAgICBzdGVha0RldGFpbHMuYXBwZW5kQ2hpbGQoc3RlYWtQcmljZSk7XG5cbiAgICBzdGVha0l0ZW0uYXBwZW5kQ2hpbGQoc3RlYWtEZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc3RlYWtJdGVtKTtcblxuICAgIC8vIENoaWNrZW4gQnVycml0b1xuICAgIGNvbnN0IGJ1cnJpdG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJyaXRvSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IGJ1cnJpdG9QaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgYnVycml0b1BpY3R1cmUuc3JjID0gYnVycml0b0ltYWdlO1xuICAgIGJ1cnJpdG9QaWN0dXJlLmFsdCA9IFwiQ2hpY2tlbiBCdXJyaXRvXCI7XG4gICAgYnVycml0b1BpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIGJ1cnJpdG9JdGVtLmFwcGVuZENoaWxkKGJ1cnJpdG9QaWN0dXJlKTtcblxuICAgIGNvbnN0IGJ1cnJpdG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJyaXRvRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGJ1cnJpdG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJyaXRvTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgYnVycml0b05hbWUudGV4dENvbnRlbnQgPSBcIkNoaWNrZW4gQnVycml0b1wiO1xuICAgIGJ1cnJpdG9EZXRhaWxzLmFwcGVuZENoaWxkKGJ1cnJpdG9OYW1lKTtcblxuICAgIGNvbnN0IGJ1cnJpdG9QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnVycml0b1ByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBidXJyaXRvUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ3Ljk5XCI7XG4gICAgYnVycml0b0RldGFpbHMuYXBwZW5kQ2hpbGQoYnVycml0b1ByaWNlKTtcblxuICAgIGJ1cnJpdG9JdGVtLmFwcGVuZENoaWxkKGJ1cnJpdG9EZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnVycml0b0l0ZW0pO1xuXG4gICAgLy8gQ3Jpc3B5IFRvZnUgd2l0aCBOb29kbGVzXG4gICAgY29uc3QgdG9mdUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgdG9mdVBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0b2Z1UGljdHVyZS5zcmMgPSB0b2Z1SW1hZ2U7XG4gICAgdG9mdVBpY3R1cmUuYWx0ID0gXCJDcmlzcHkgVG9mdSB3aXRoIE5vb2RsZXNcIjtcbiAgICB0b2Z1UGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgdG9mdUl0ZW0uYXBwZW5kQ2hpbGQodG9mdVBpY3R1cmUpO1xuXG4gICAgY29uc3QgdG9mdURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZnVEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgdG9mdU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZnVOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICB0b2Z1TmFtZS50ZXh0Q29udGVudCA9IFwiQ3Jpc3B5IFRvZnUgd2l0aCBOb29kbGVzXCI7XG4gICAgdG9mdURldGFpbHMuYXBwZW5kQ2hpbGQodG9mdU5hbWUpO1xuXG4gICAgY29uc3QgdG9mdVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Z1UHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIHRvZnVQcmljZS50ZXh0Q29udGVudCA9IFwiJDQuOTlcIjtcbiAgICB0b2Z1RGV0YWlscy5hcHBlbmRDaGlsZCh0b2Z1UHJpY2UpO1xuXG4gICAgdG9mdUl0ZW0uYXBwZW5kQ2hpbGQodG9mdURldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b2Z1SXRlbSk7XG5cbiAgICAvLyBDaGlja2VuIEZyaWVkIFJpY2VcbiAgICBjb25zdCBmcmllZHJpY2VJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllZHJpY2VJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgZnJpZWRyaWNlUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIGZyaWVkcmljZVBpY3R1cmUuc3JjID0gZnJpZWRyaWNlSW1hZ2U7XG4gICAgZnJpZWRyaWNlUGljdHVyZS5hbHQgPSBcIkNoaWNrZW4gRnJpZWQgUmljZVwiO1xuICAgIGZyaWVkcmljZVBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIGZyaWVkcmljZUl0ZW0uYXBwZW5kQ2hpbGQoZnJpZWRyaWNlUGljdHVyZSk7XG5cbiAgICBjb25zdCBmcmllZHJpY2VEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllZHJpY2VEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgZnJpZWRyaWNlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJpZWRyaWNlTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgZnJpZWRyaWNlTmFtZS50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBGcmllZCBSaWNlXCI7XG4gICAgZnJpZWRyaWNlRGV0YWlscy5hcHBlbmRDaGlsZChmcmllZHJpY2VOYW1lKTtcblxuICAgIGNvbnN0IGZyaWVkcmljZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllZHJpY2VQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgZnJpZWRyaWNlUHJpY2UudGV4dENvbnRlbnQgPSBcIiQyLjQ5XCI7XG4gICAgZnJpZWRyaWNlRGV0YWlscy5hcHBlbmRDaGlsZChmcmllZHJpY2VQcmljZSk7XG5cbiAgICBmcmllZHJpY2VJdGVtLmFwcGVuZENoaWxkKGZyaWVkcmljZURldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmcmllZHJpY2VJdGVtKTtcblxuICAgIC8vIFN3ZWRpc2ggTWVhdGJhbGxzXG4gICAgY29uc3QgbWVhdGJhbGxzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVhdGJhbGxzSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IG1lYXRiYWxsc1BpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZWF0YmFsbHNQaWN0dXJlLnNyYyA9IG1lYXRiYWxsc0ltYWdlO1xuICAgIG1lYXRiYWxsc1BpY3R1cmUuYWx0ID0gXCJTd2VkaXNoIE1lYXRiYWxsc1wiO1xuICAgIG1lYXRiYWxsc1BpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIG1lYXRiYWxsc0l0ZW0uYXBwZW5kQ2hpbGQobWVhdGJhbGxzUGljdHVyZSk7XG5cbiAgICBjb25zdCBtZWF0YmFsbHNEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZWF0YmFsbHNEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgbWVhdGJhbGxzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVhdGJhbGxzTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgbWVhdGJhbGxzTmFtZS50ZXh0Q29udGVudCA9IFwiU3dlZGlzaCBNZWF0YmFsbHNcIjtcbiAgICBtZWF0YmFsbHNEZXRhaWxzLmFwcGVuZENoaWxkKG1lYXRiYWxsc05hbWUpO1xuXG4gICAgY29uc3QgbWVhdGJhbGxzUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lYXRiYWxsc1ByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBtZWF0YmFsbHNQcmljZS50ZXh0Q29udGVudCA9IFwiJDIuOTlcIjtcbiAgICBtZWF0YmFsbHNEZXRhaWxzLmFwcGVuZENoaWxkKG1lYXRiYWxsc1ByaWNlKTtcblxuICAgIG1lYXRiYWxsc0l0ZW0uYXBwZW5kQ2hpbGQobWVhdGJhbGxzRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lYXRiYWxsc0l0ZW0pO1xuICAgIFxuICAgIC8vIFZlZ2FuIFF1ZXNhZGlsbGFcbiAgICBjb25zdCBxdWVzYWRpbGxhSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcXVlc2FkaWxsYUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCBxdWVzYWRpbGxhUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIHF1ZXNhZGlsbGFQaWN0dXJlLnNyYyA9IHF1ZXNhZGlsbGFJbWFnZTtcbiAgICBxdWVzYWRpbGxhUGljdHVyZS5hbHQgPSBcIlZlZ2FuIFF1ZXNhZGlsbGFcIjtcbiAgICBxdWVzYWRpbGxhUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgcXVlc2FkaWxsYUl0ZW0uYXBwZW5kQ2hpbGQocXVlc2FkaWxsYVBpY3R1cmUpO1xuXG4gICAgY29uc3QgcXVlc2FkaWxsYURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHF1ZXNhZGlsbGFEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgcXVlc2FkaWxsYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHF1ZXNhZGlsbGFOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBxdWVzYWRpbGxhTmFtZS50ZXh0Q29udGVudCA9IFwiVmVnYW4gUXVlc2FkaWxsYVwiO1xuICAgIHF1ZXNhZGlsbGFEZXRhaWxzLmFwcGVuZENoaWxkKHF1ZXNhZGlsbGFOYW1lKTtcblxuICAgIGNvbnN0IHF1ZXNhZGlsbGFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcXVlc2FkaWxsYVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBxdWVzYWRpbGxhUHJpY2UudGV4dENvbnRlbnQgPSBcIiQ5Ljk5XCI7XG4gICAgcXVlc2FkaWxsYURldGFpbHMuYXBwZW5kQ2hpbGQocXVlc2FkaWxsYVByaWNlKTtcblxuICAgIHF1ZXNhZGlsbGFJdGVtLmFwcGVuZENoaWxkKHF1ZXNhZGlsbGFEZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocXVlc2FkaWxsYUl0ZW0pO1xuXG4gICAgLy8gVmVnZ2llIEJha2VkIFJhdGF0b3VpbGxlXG4gICAgY29uc3QgcmF0YXRvdWlsbGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYXRhdG91aWxsZUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCByYXRhdG91aWxsZVBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICByYXRhdG91aWxsZVBpY3R1cmUuc3JjID0gcmF0YXRvdWlsbGVJbWFnZTtcbiAgICByYXRhdG91aWxsZVBpY3R1cmUuYWx0ID0gXCJWZWdnaWUgQmFrZWQgUmF0YXRvdWlsbGVcIjtcbiAgICByYXRhdG91aWxsZVBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIHJhdGF0b3VpbGxlSXRlbS5hcHBlbmRDaGlsZChyYXRhdG91aWxsZVBpY3R1cmUpO1xuXG4gICAgY29uc3QgcmF0YXRvdWlsbGVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYXRhdG91aWxsZURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCByYXRhdG91aWxsZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhdGF0b3VpbGxlTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgcmF0YXRvdWlsbGVOYW1lLnRleHRDb250ZW50ID0gXCJWZWdnaWUgQmFrZWQgUmF0YXRvdWlsbGVcIjtcbiAgICByYXRhdG91aWxsZURldGFpbHMuYXBwZW5kQ2hpbGQocmF0YXRvdWlsbGVOYW1lKTtcblxuICAgIGNvbnN0IHJhdGF0b3VpbGxlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhdGF0b3VpbGxlUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIHJhdGF0b3VpbGxlUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxMi40OVwiO1xuICAgIHJhdGF0b3VpbGxlRGV0YWlscy5hcHBlbmRDaGlsZChyYXRhdG91aWxsZVByaWNlKTtcblxuICAgIHJhdGF0b3VpbGxlSXRlbS5hcHBlbmRDaGlsZChyYXRhdG91aWxsZURldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChyYXRhdG91aWxsZUl0ZW0pO1xuICAgIFxuICAgIHJldHVybiBtYWluO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGxvYWRIb21lU2VjdGlvbiBmcm9tIFwiLi9ob21lU2VjdGlvblwiO1xuaW1wb3J0IGxvYWRNZW51U2VjdGlvbiBmcm9tIFwiLi9tZW51U2VjdGlvblwiO1xuaW1wb3J0IGxvYWRDb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb250YWN0U2VjdGlvblwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5cbmNvbnN0IG5hdmlnYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uYXZpZ2F0b3IuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5ob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIiwgXCJob21lXCIsIFwiYWN0aXZlXCIpO1xuaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG5uYXZpZ2F0b3IuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG5cbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubWVudVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIsIFwibWVudVwiKTtcbm1lbnVUYWIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxubmF2aWdhdG9yLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiLCBcImNvbnRhY3RcIik7XG5jb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbm5hdmlnYXRvci5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChuYXZpZ2F0b3IpO1xuXG5cbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbmhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1vY2sgUmVzdGF1cmFudFwiO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuXG5jb250ZW50LmFwcGVuZENoaWxkKGxvYWRIb21lU2VjdGlvbigpKTtcblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTW9jayBSZXN0YXVyYW50XCI7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMl0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEhvbWVTZWN0aW9uKCkpO1xufSk7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMl0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnVTZWN0aW9uKCkpO1xufSk7XG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMl0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3RTZWN0aW9uKCkpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9