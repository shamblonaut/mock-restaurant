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
    background-color: #34435e40;
}

.heading {
    font-family: 'Grand Hotel', cursive;
    font-size: 3rem;
    margin: 25px 0;
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
    padding: 3vw;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 25px;
    row-gap: 8vh;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap');\n\n:root {\n    --dark-blue: #34435E;\n    --light-blue: #B8DBD9;\n    --saffron: #F9C846;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: url(\"../assets/restaurant.jpg\") no-repeat rgba(0, 0, 0, 0.65);\n    background-size: cover;\n    background-blend-mode: multiply;\n}\n\n#content {\n    font-family: sans-serif;\n    color: #ffffff;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.nav {\n    /* min-height: 100px; */\n    min-height: 10vh;\n    display: flex;\n    align-self: stretch;\n}\n\n.tab {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    border: none;\n    color: #ffffff;\n    font-size: 1.25rem;\n}\n\n.tab.active {\n    background-color: #34435e40;\n}\n\n.heading {\n    font-family: 'Grand Hotel', cursive;\n    font-size: 3rem;\n    margin: 25px 0;\n}\n\n.main {\n    width: 60vw;\n    height: 70vh;\n    padding: 3vh 3vw;\n    border-radius: 25px;\n    background-color: var(--dark-blue);\n    color: var(--light-blue);\n\n    display: flex;\n    flex-direction: column;\n}\n\n.testimonial {\n    align-self: center;\n    width: 35vw;\n}\n\n.quotes {\n    width: 65px;\n    height: auto;\n}\n\n.text {\n    padding-left: 30px;\n    font-size: 1.5rem;\n    font-weight: 300;\n    font-style: italic;\n    color: var(--saffron);\n}\n\n.author {\n    font-weight: 700;\n    color: var(--light-blue);\n    text-align: right;\n}\n\n.visit {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 5vh;\n}\n\n.title {\n    font-size: 1.5rem;\n    font-style: italic;\n    color: var(--saffron);\n    margin-bottom: 2.5vh;\n}\n\n.location {\n    display: flex;\n    align-items: center;\n}\n\n.pin {\n    width: 20px;\n    height: auto;\n    margin-right: 10px;\n}\n\n.hours {\n    margin-top: 5vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hours>.title {\n    color: #ffffff;\n    font-style: normal;\n}\n\n.timing {\n    display: grid;\n    grid-auto-flow: column;\n    column-gap: 25px;\n}\n\n\n.main.menu {\n    width: 70vw;\n    padding: 3vw;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    column-gap: 25px;\n    row-gap: 8vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.item {\n    width: 300px;\n    background-color: var(--saffron);\n    border-radius: 25px;\n    padding: 20px;\n}\n\n.picture.food {\n    width: 100%;\n    height: 60%;\n    border-radius: 25px;\n}\n\n.name.food {\n    color: #000000;\n    font-size: 1.5rem;\n    font-weight: 700;\n}\n\n.price {\n    color: #000000;\n    font-size: 1.5rem;\n    font-weight: 300;\n}\n\n\n.message {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#thoughts {\n    width: 30vw;\n    height: 20vh;\n    background-color: var(--light-blue);\n    border: none;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n.send {\n    margin-top: 10px;\n    padding: 10px 20px;\n    background-color: var(--saffron);\n    border: none;\n    border-radius: 10px;\n    color: #ffffff;\n}\n\n.call {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    margin-top: 3vh;\n}\n\n.contacts {\n    display: grid;\n    grid-auto-flow: column;\n    column-gap: 2vw;\n}\n\n.card {\n    background-color: var(--light-blue);\n    border-radius: 10px;\n    padding: 1vw;\n    width: 15vw;\n    color: #000000;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.info {\n    display: grid;\n    grid-template-columns: auto min-content;\n    column-gap: 25px;\n}\n\n.name.person {\n    grid-row: 1 / 2;\n    font-weight: 700;\n    align-self: flex-end;\n}\n\n.position {\n    grid-row: 2 / 3;\n    align-self: flex-start;\n    font-weight: 300;\n}\n\n.picture.person {\n    grid-row: 1 / 3;\n\n    width: 5vw;\n    height: auto;\n    border-radius: 2.5vw;\n}\n\n.phone {\n    font-size: 1.25rem;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 10px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlIQUF5SDtBQUN6SCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9B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YWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RTZWN0aW9uLmpzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC8uL3NyYy9ob21lU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9zcmMvbWVudVNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vY2stcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbW9jay1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tb2NrLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9yZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JhbmQrSG90ZWwmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZGFyay1ibHVlOiAjMzQ0MzVFO1xuICAgIC0tbGlnaHQtYmx1ZTogI0I4REJEOTtcbiAgICAtLXNhZmZyb246ICNGOUM4NDY7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG59XG5cbiNjb250ZW50IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2IHtcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDBweDsgKi9cbiAgICBtaW4taGVpZ2h0OiAxMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cblxuLnRhYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnRhYi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDQzNWU0MDtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtZmFtaWx5OiAnR3JhbmQgSG90ZWwnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW46IDI1cHggMDtcbn1cblxuLm1haW4ge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBwYWRkaW5nOiAzdmggM3Z3O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZXN0aW1vbmlhbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAzNXZ3O1xufVxuXG4ucXVvdGVzIHtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi50ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHZhcigtLXNhZmZyb24pO1xufVxuXG4uYXV0aG9yIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnZpc2l0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waW4ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5ob3VycyB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3Vycz4udGl0bGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLnRpbWluZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGNvbHVtbi1nYXA6IDI1cHg7XG59XG5cblxuLm1haW4ubWVudSB7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgcGFkZGluZzogM3Z3O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xuICAgIHJvdy1nYXA6IDh2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uaXRlbSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhZmZyb24pO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnBpY3R1cmUuZm9vZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLm5hbWUuZm9vZCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByaWNlIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5cbi5tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3Rob3VnaHRzIHtcbiAgICB3aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlbmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhZmZyb24pO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2FsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXJnaW4tdG9wOiAzdmg7XG59XG5cbi5jb250YWN0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGNvbHVtbi1nYXA6IDJ2dztcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXZ3O1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbmZvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtaW4tY29udGVudDtcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xufVxuXG4ubmFtZS5wZXJzb24ge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ucG9zaXRpb24ge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5waWN0dXJlLnBlcnNvbiB7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuXG4gICAgd2lkdGg6IDV2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMi41dnc7XG59XG5cbi5waG9uZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlGQUF5RTtJQUN6RSxzQkFBc0I7SUFDdEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7O0lBRWQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjOztJQUVkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixVQUFVO0lBQ1YsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmFuZCtIb3RlbCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tZGFyay1ibHVlOiAjMzQ0MzVFO1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNCOERCRDk7XFxuICAgIC0tc2FmZnJvbjogI0Y5Qzg0NjtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi4vYXNzZXRzL3Jlc3RhdXJhbnQuanBnXFxcIikgbm8tcmVwZWF0IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgLyogbWluLWhlaWdodDogMTAwcHg7ICovXFxuICAgIG1pbi1oZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRhYi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0MzVlNDA7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmFuZCBIb3RlbCcsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgcGFkZGluZzogM3ZoIDN2dztcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGVzdGltb25pYWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbn1cXG5cXG4ucXVvdGVzIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRleHQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiB2YXIoLS1zYWZmcm9uKTtcXG59XFxuXFxuLmF1dGhvciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi52aXNpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDV2aDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHZhcigtLXNhZmZyb24pO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBpbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmhvdXJzIHtcXG4gICAgbWFyZ2luLXRvcDogNXZoO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG91cnM+LnRpdGxlIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLnRpbWluZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxufVxcblxcblxcbi5tYWluLm1lbnUge1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgcGFkZGluZzogM3Z3O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgY29sdW1uLWdhcDogMjVweDtcXG4gICAgcm93LWdhcDogOHZoO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhZmZyb24pO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucGljdHVyZS5mb29kIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ubmFtZS5mb29kIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucHJpY2Uge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcblxcbi5tZXNzYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Rob3VnaHRzIHtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNlbmQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNhZmZyb24pO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uY2FsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgY29sdW1uLWdhcDogMnZ3O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxdnc7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gbWluLWNvbnRlbnQ7XFxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XFxufVxcblxcbi5uYW1lLnBlcnNvbiB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5wb3NpdGlvbiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnBpY3R1cmUucGVyc29uIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcblxcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDIuNXZ3O1xcbn1cXG5cXG4ucGhvbmUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFuYWdlckltYWdlIGZyb20gXCIuLi9hc3NldHMvbWFuYWdlci5qcGdcIjtcbmltcG9ydCBjaGVmSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9jaGVmLmpwZ1wiO1xuaW1wb3J0IG93bmVySW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9vd25lci5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIiwgXCJjb250YWN0XCIpO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVzc2FnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBtZXNzYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIlNlbmQgdXMgeW91ciBmZWVkYmFjayFcIjtcbiAgICBtZXNzYWdlLmFwcGVuZENoaWxkKG1lc3NhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCB0aG91Z2h0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB0aG91Z2h0cy5uYW1lID0gXCJ0aG91Z2h0c1wiO1xuICAgIHRob3VnaHRzLmlkID0gXCJ0aG91Z2h0c1wiO1xuICAgIHRob3VnaHRzLnBsYWNlaG9sZGVyID0gXCJXcml0ZSBkb3duIHlvdXIgdGhvdWdodHMgYWJvdXQgdXNcIjtcbiAgICBtZXNzYWdlLmFwcGVuZENoaWxkKHRob3VnaHRzKTtcblxuICAgIGNvbnN0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlbmRcIik7XG4gICAgc2VuZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xuICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQoc2VuZEJ1dHRvbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgY29uc3QgY2FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsbC5jbGFzc0xpc3QuYWRkKFwiY2FsbFwiKTtcblxuICAgIGNvbnN0IGNhbGxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FsbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBjYWxsVGl0bGUudGV4dENvbnRlbnQgPSBcIldhbm5hIHNwZWFrIHRvIHVzP1wiO1xuICAgIGNhbGwuYXBwZW5kQ2hpbGQoY2FsbFRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0cy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHNcIik7XG5cbiAgICBjb25zdCBtYW5hZ2VyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFuYWdlckNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBjb25zdCBtYW5hZ2VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFuYWdlckluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICBjb25zdCBtYW5hZ2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFuYWdlck5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJwZXJzb25cIik7XG4gICAgbWFuYWdlck5hbWUudGV4dENvbnRlbnQgPSBcIk1yLiBIYXJ0aGZpZWxkXCI7XG4gICAgbWFuYWdlckluZm8uYXBwZW5kQ2hpbGQobWFuYWdlck5hbWUpO1xuXG4gICAgY29uc3QgbWFuYWdlclBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYW5hZ2VyUG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uXCIpO1xuICAgIG1hbmFnZXJQb3NpdGlvbi50ZXh0Q29udGVudCA9IFwiTWFuYWdlclwiO1xuICAgIG1hbmFnZXJJbmZvLmFwcGVuZENoaWxkKG1hbmFnZXJQb3NpdGlvbik7XG5cbiAgICBjb25zdCBtYW5hZ2VyUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1hbmFnZXJQaWN0dXJlLnNyYyA9IG1hbmFnZXJJbWFnZTtcbiAgICBtYW5hZ2VyUGljdHVyZS5hbHQgPSBcIk1hbmFnZXJcIjtcbiAgICBtYW5hZ2VyUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcInBlcnNvblwiKTtcbiAgICBtYW5hZ2VySW5mby5hcHBlbmRDaGlsZChtYW5hZ2VyUGljdHVyZSk7XG5cbiAgICBtYW5hZ2VyQ2FyZC5hcHBlbmRDaGlsZChtYW5hZ2VySW5mbyk7XG5cbiAgICBjb25zdCBtYW5hZ2VyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hbmFnZXJQaG9uZS5jbGFzc0xpc3QuYWRkKFwicGhvbmVcIik7XG4gICAgbWFuYWdlclBob25lLnRleHRDb250ZW50ID0gXCIrMTgzOTQwODQ1MDBcIjtcbiAgICBtYW5hZ2VyQ2FyZC5hcHBlbmRDaGlsZChtYW5hZ2VyUGhvbmUpO1xuXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQobWFuYWdlckNhcmQpO1xuXG4gICAgY29uc3QgY2hlZkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWZDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gICAgY29uc3QgY2hlZkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWZJbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgY29uc3QgY2hlZk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWZOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwicGVyc29uXCIpO1xuICAgIGNoZWZOYW1lLnRleHRDb250ZW50ID0gXCJDaGVmIFRlbWVsbGluXCI7XG4gICAgY2hlZkluZm8uYXBwZW5kQ2hpbGQoY2hlZk5hbWUpO1xuXG4gICAgY29uc3QgY2hlZlBvc2l0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVmUG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uXCIpO1xuICAgIGNoZWZQb3NpdGlvbi50ZXh0Q29udGVudCA9IFwiSGVhZCBDaGVmXCI7XG4gICAgY2hlZkluZm8uYXBwZW5kQ2hpbGQoY2hlZlBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGNoZWZQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZlBpY3R1cmUuc3JjID0gY2hlZkltYWdlO1xuICAgIGNoZWZQaWN0dXJlLmFsdCA9IFwiSGVhZCBDaGVmXCI7XG4gICAgY2hlZlBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJwZXJzb25cIik7XG4gICAgY2hlZkluZm8uYXBwZW5kQ2hpbGQoY2hlZlBpY3R1cmUpO1xuXG4gICAgY2hlZkNhcmQuYXBwZW5kQ2hpbGQoY2hlZkluZm8pO1xuXG4gICAgY29uc3QgY2hlZlBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVmUGhvbmUuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xuICAgIGNoZWZQaG9uZS50ZXh0Q29udGVudCA9IFwiKzE1MTY1NzYzNzQ2XCI7XG4gICAgY2hlZkNhcmQuYXBwZW5kQ2hpbGQoY2hlZlBob25lKTtcblxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKGNoZWZDYXJkKTtcblxuICAgIGNvbnN0IG93bmVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3duZXJDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gICAgY29uc3Qgb3duZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvd25lckluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICBjb25zdCBvd25lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG93bmVyTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcInBlcnNvblwiKTtcbiAgICBvd25lck5hbWUudGV4dENvbnRlbnQgPSBcIk1yLiBNb2tzaW1cIjtcbiAgICBvd25lckluZm8uYXBwZW5kQ2hpbGQob3duZXJOYW1lKTtcblxuICAgIGNvbnN0IG93bmVyUG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG93bmVyUG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInBvc2l0aW9uXCIpO1xuICAgIG93bmVyUG9zaXRpb24udGV4dENvbnRlbnQgPSBcIk93bmVyXCI7XG4gICAgb3duZXJJbmZvLmFwcGVuZENoaWxkKG93bmVyUG9zaXRpb24pO1xuXG4gICAgY29uc3Qgb3duZXJQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgb3duZXJQaWN0dXJlLnNyYyA9IG93bmVySW1hZ2U7XG4gICAgb3duZXJQaWN0dXJlLmFsdCA9IFwiT3duZXJcIjtcbiAgICBvd25lclBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJwZXJzb25cIik7XG4gICAgb3duZXJJbmZvLmFwcGVuZENoaWxkKG93bmVyUGljdHVyZSk7XG5cbiAgICBvd25lckNhcmQuYXBwZW5kQ2hpbGQob3duZXJJbmZvKTtcblxuICAgIGNvbnN0IG93bmVyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG93bmVyUGhvbmUuY2xhc3NMaXN0LmFkZChcInBob25lXCIpO1xuICAgIG93bmVyUGhvbmUudGV4dENvbnRlbnQgPSBcIisxODQzNjY1MjQyN1wiO1xuICAgIG93bmVyQ2FyZC5hcHBlbmRDaGlsZChvd25lclBob25lKTtcblxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKG93bmVyQ2FyZCk7XG5cbiAgICBjYWxsLmFwcGVuZENoaWxkKGNvbnRhY3RzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2FsbCk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJpbXBvcnQgcXVvdGVzSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9xdW90ZXMuc3ZnXCI7XG5pbXBvcnQgcGluSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9sb2NhdGlvbi1waW4uc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lU2VjdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIsIFwiaG9tZVwiKTtcblxuICAgIGNvbnN0IHRlc3RpbW9uaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZXN0aW1vbmlhbC5jbGFzc0xpc3QuYWRkKFwidGVzdGltb25pYWxcIik7XG5cbiAgICBjb25zdCBxdW90ZXMgPSBuZXcgSW1hZ2UoKTtcbiAgICBxdW90ZXMuc3JjID0gcXVvdGVzSW1hZ2U7XG4gICAgcXVvdGVzLmFsdCA9IFwiRG91YmxlIFF1b3RhdGlvbiBtYXJrc1wiO1xuICAgIHF1b3Rlcy5jbGFzc0xpc3QuYWRkKFwicXVvdGVzXCIpO1xuICAgIHRlc3RpbW9uaWFsLmFwcGVuZENoaWxkKHF1b3Rlcyk7XG5cbiAgICBjb25zdCB0ZXN0aW1vbmlhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlc3RpbW9uaWFsVGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICB0ZXN0aW1vbmlhbFRleHQudGV4dENvbnRlbnQgPSBcIlRoZSByZXN0YXVyYW50IGhhcyBhbiBleHF1aXNpdGUgY29sbGVjdGlvbiBvZiBkZWxpY2lvdXMgZGlzaGVzLiBJdCBpcyBhIG11c3QgdHJ5IGZvciBldmVyeW9uZSBpbiB0b3duIVwiO1xuICAgIHRlc3RpbW9uaWFsLmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsVGV4dCk7XG5cbiAgICBjb25zdCB0ZXN0aW1vbmlhbEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVzdGltb25pYWxBdXRob3IuY2xhc3NMaXN0LmFkZChcImF1dGhvclwiKTtcbiAgICB0ZXN0aW1vbmlhbEF1dGhvci50ZXh0Q29udGVudCA9IFwiQWxpY2UgTWFjS2VuemllXCI7XG4gICAgdGVzdGltb25pYWwuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxBdXRob3IpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbCk7XG5cbiAgICBjb25zdCB2aXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlzaXQuY2xhc3NMaXN0LmFkZChcInZpc2l0XCIpO1xuXG4gICAgY29uc3QgdmlzaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlzaXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdmlzaXRUaXRsZS50ZXh0Q29udGVudCA9IFwiRmlsbCB5b3VyIHR1bW1pZXMgd2l0aCBvdXIgZGVsaWNhY2llcyFcIjtcbiAgICB2aXNpdC5hcHBlbmRDaGlsZCh2aXNpdFRpdGxlKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG5cbiAgICBjb25zdCBsb2NhdGlvblBpbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uUGluLnNyYyA9IHBpbkltYWdlO1xuICAgIGxvY2F0aW9uUGluLmFsdCA9IFwiTG9jYXRpb24gcGluXCI7XG4gICAgbG9jYXRpb25QaW4uY2xhc3NMaXN0LmFkZChcInBpblwiKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblBpbik7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIk1vY2tpbmdqYXkgU3QuLCBNb2NrYXJvbmllLCBGcmludHVja3lcIjtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIHZpc2l0LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuXG4gICAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcGVuSG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xuICAgIFxuICAgIGNvbnN0IG9wZW5Ib3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcGVuSG91cnNUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgb3BlbkhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIk9wZW4gSG91cnNcIjtcbiAgICBvcGVuSG91cnMuYXBwZW5kQ2hpbGQob3BlbkhvdXJzVGl0bGUpO1xuXG4gICAgY29uc3Qgb3BlbkhvdXJzVGltaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcGVuSG91cnNUaW1pbmcuY2xhc3NMaXN0LmFkZChcInRpbWluZ1wiKTtcblxuICAgIGNvbnN0IGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheXMuY2xhc3NMaXN0LmFkZChcImRheXNcIik7XG5cbiAgICBjb25zdCB3ZWVrZGF5c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWVrZGF5c1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgd2Vla2RheXNUaXRsZS50ZXh0Q29udGVudCA9IFwiV2Vla2RheXM6IFwiO1xuICAgIGRheXMuYXBwZW5kQ2hpbGQod2Vla2RheXNUaXRsZSk7XG5cbiAgICBjb25zdCB3ZWVrZW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlZWtlbmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGF5XCIpO1xuICAgIHdlZWtlbmRUaXRsZS50ZXh0Q29udGVudCA9IFwiV2Vla2VuZDogXCI7XG4gICAgZGF5cy5hcHBlbmRDaGlsZCh3ZWVrZW5kVGl0bGUpO1xuXG4gICAgb3BlbkhvdXJzVGltaW5nLmFwcGVuZENoaWxkKGRheXMpO1xuXG4gICAgY29uc3QgdGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbWVzLmNsYXNzTGlzdC5hZGQoXCJ0aW1lc1wiKTtcblxuICAgIGNvbnN0IHdlZWtkYXlzVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vla2RheXNUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuICAgIHdlZWtkYXlzVGltZS50ZXh0Q29udGVudCA9IFwiMTAgQU0gLSAwOCBQTVwiO1xuICAgIHRpbWVzLmFwcGVuZENoaWxkKHdlZWtkYXlzVGltZSk7XG5cbiAgICBjb25zdCB3ZWVrZW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vla2VuZFRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG4gICAgd2Vla2VuZFRpbWUudGV4dENvbnRlbnQgPSBcIjExIEFNIC0gMTEgUE1cIjtcbiAgICB0aW1lcy5hcHBlbmRDaGlsZCh3ZWVrZW5kVGltZSk7XG5cbiAgICBvcGVuSG91cnNUaW1pbmcuYXBwZW5kQ2hpbGQodGltZXMpO1xuXG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKG9wZW5Ib3Vyc1RpbWluZyk7XG5cbiAgICB2aXNpdC5hcHBlbmRDaGlsZChvcGVuSG91cnMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh2aXNpdCk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJpbXBvcnQgc2FsbW9uSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9ncmlsbGVkLXNhbG1vbi5qcGdcIjtcbmltcG9ydCBiaXJpeWFuaUltYWdlIGZyb20gXCIuLi9hc3NldHMvaHlkZXJhYmFkaS1iaXJpeWFuaS5qcGdcIjtcbmltcG9ydCBidXJnZXJJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2J1cmdlci5qcGdcIjtcbmltcG9ydCB0dW5hSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy90dW5hLXNhbGFkLXNhbmR3aWNoLmpwZ1wiO1xuaW1wb3J0IGR1Y2tJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL3JvYXN0ZWQtZHVjay5qcGdcIjtcbmltcG9ydCBzdGVha0ltYWdlIGZyb20gXCIuLi9hc3NldHMvZ2FybGljLWJ1dHRlci1zdGVhay5qcGdcIjtcbmltcG9ydCBidXJyaXRvSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9jaGlja2VuLWJ1cnJpdG8uanBnXCI7XG5pbXBvcnQgdG9mdUltYWdlIGZyb20gXCIuLi9hc3NldHMvdG9mdS1ub29kbGVzLmpwZ1wiO1xuaW1wb3J0IGZyaWVkcmljZUltYWdlIGZyb20gXCIuLi9hc3NldHMvZnJpZWQtcmljZS5qcGdcIjtcbmltcG9ydCBtZWF0YmFsbHNJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL3N3ZWRpc2gtbWVhdGJhbGxzLmpwZ1wiO1xuaW1wb3J0IHF1ZXNhZGlsbGFJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL3ZlZ2FuLXF1ZXNhZGlsbGEuanBnXCI7XG5pbXBvcnQgcmF0YXRvdWlsbGVJbWFnZSBmcm9tIFwiLi4vYXNzZXRzL3JhdGF0b3VpbGxlLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVNlY3Rpb24oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiLCBcIm1lbnVcIik7XG5cblxuICAgIC8vIEdyaWxsZWQgU2FsbW9uXG4gICAgY29uc3Qgc2FsbW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2FsbW9uSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IHNhbG1vblBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBzYWxtb25QaWN0dXJlLnNyYyA9IHNhbG1vbkltYWdlO1xuICAgIHNhbG1vblBpY3R1cmUuYWx0ID0gXCJHcmlsbGVkIFNhbG1vblwiO1xuICAgIHNhbG1vblBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIHNhbG1vbkl0ZW0uYXBwZW5kQ2hpbGQoc2FsbW9uUGljdHVyZSk7XG5cbiAgICBjb25zdCBzYWxtb25EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYWxtb25EZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3Qgc2FsbW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2FsbW9uTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgc2FsbW9uTmFtZS50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBTYWxtb25cIjtcbiAgICBzYWxtb25EZXRhaWxzLmFwcGVuZENoaWxkKHNhbG1vbk5hbWUpO1xuXG4gICAgY29uc3Qgc2FsbW9uUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhbG1vblByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBzYWxtb25QcmljZS50ZXh0Q29udGVudCA9IFwiJDE0Ljk5XCI7XG4gICAgc2FsbW9uRGV0YWlscy5hcHBlbmRDaGlsZChzYWxtb25QcmljZSk7XG5cbiAgICBzYWxtb25JdGVtLmFwcGVuZENoaWxkKHNhbG1vbkRldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzYWxtb25JdGVtKTtcblxuICAgIC8vIEh5ZGVyYWJhZGkgQmlyaXlhbmlcbiAgICBjb25zdCBiaXJpeWFuaUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJpcml5YW5pSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IGJpcml5YW5pUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJpcml5YW5pUGljdHVyZS5zcmMgPSBiaXJpeWFuaUltYWdlO1xuICAgIGJpcml5YW5pUGljdHVyZS5hbHQgPSBcIkh5ZGVyYWJhZGkgQmlyaXlhbmlcIjtcbiAgICBiaXJpeWFuaVBpY3R1cmUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVcIiwgXCJmb29kXCIpO1xuICAgIGJpcml5YW5pSXRlbS5hcHBlbmRDaGlsZChiaXJpeWFuaVBpY3R1cmUpO1xuXG4gICAgY29uc3QgYmlyaXlhbmlEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiaXJpeWFuaURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBiaXJpeWFuaU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJpcml5YW5pTmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiLCBcImZvb2RcIik7XG4gICAgYmlyaXlhbmlOYW1lLnRleHRDb250ZW50ID0gXCJIeWRlcmFiYWRpIEJpcml5YW5pXCI7XG4gICAgYmlyaXlhbmlEZXRhaWxzLmFwcGVuZENoaWxkKGJpcml5YW5pTmFtZSk7XG5cbiAgICBjb25zdCBiaXJpeWFuaVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiaXJpeWFuaVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBiaXJpeWFuaVByaWNlLnRleHRDb250ZW50ID0gXCIkMTYuOTlcIjtcbiAgICBiaXJpeWFuaURldGFpbHMuYXBwZW5kQ2hpbGQoYmlyaXlhbmlQcmljZSk7XG5cbiAgICBiaXJpeWFuaUl0ZW0uYXBwZW5kQ2hpbGQoYmlyaXlhbmlEZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmlyaXlhbmlJdGVtKTtcblxuICAgIC8vIENoZWVzZSBTdGVhayBCdXJnZXJcbiAgICBjb25zdCBidXJnZXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJnZXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgYnVyZ2VyUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlclBpY3R1cmUuc3JjID0gYnVyZ2VySW1hZ2U7XG4gICAgYnVyZ2VyUGljdHVyZS5hbHQgPSBcIkNoZWVzZSBTdGVhayBCdXJnZXJcIjtcbiAgICBidXJnZXJQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiZm9vZFwiKTtcbiAgICBidXJnZXJJdGVtLmFwcGVuZENoaWxkKGJ1cmdlclBpY3R1cmUpO1xuXG4gICAgY29uc3QgYnVyZ2VyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnVyZ2VyRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IGJ1cmdlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cmdlck5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJmb29kXCIpO1xuICAgIGJ1cmdlck5hbWUudGV4dENvbnRlbnQgPSBcIkNoZWVzZSBTdGVhayBCdXJnZXJcIjtcbiAgICBidXJnZXJEZXRhaWxzLmFwcGVuZENoaWxkKGJ1cmdlck5hbWUpO1xuXG4gICAgY29uc3QgYnVyZ2VyUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cmdlclByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBidXJnZXJQcmljZS50ZXh0Q29udGVudCA9IFwiJDMuNDlcIjtcbiAgICBidXJnZXJEZXRhaWxzLmFwcGVuZENoaWxkKGJ1cmdlclByaWNlKTtcblxuICAgIGJ1cmdlckl0ZW0uYXBwZW5kQ2hpbGQoYnVyZ2VyRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1cmdlckl0ZW0pO1xuXG4gICAgLy8gVHVuYSBTYWxhZCBTYW5kd2ljaFxuICAgIGNvbnN0IHR1bmFJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dW5hSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IHR1bmFQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgdHVuYVBpY3R1cmUuc3JjID0gdHVuYUltYWdlO1xuICAgIHR1bmFQaWN0dXJlLmFsdCA9IFwiVHVuYSBTYWxhZCBTYW5kd2ljaFwiO1xuICAgIHR1bmFQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiZm9vZFwiKTtcbiAgICB0dW5hSXRlbS5hcHBlbmRDaGlsZCh0dW5hUGljdHVyZSk7XG5cbiAgICBjb25zdCB0dW5hRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHVuYURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCB0dW5hTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHVuYU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJmb29kXCIpO1xuICAgIHR1bmFOYW1lLnRleHRDb250ZW50ID0gXCJUdW5hIFNhbGFkIFNhbmR3aWNoXCI7XG4gICAgdHVuYURldGFpbHMuYXBwZW5kQ2hpbGQodHVuYU5hbWUpO1xuXG4gICAgY29uc3QgdHVuYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0dW5hUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIHR1bmFQcmljZS50ZXh0Q29udGVudCA9IFwiJDE0Ljk5XCI7XG4gICAgdHVuYURldGFpbHMuYXBwZW5kQ2hpbGQodHVuYVByaWNlKTtcblxuICAgIHR1bmFJdGVtLmFwcGVuZENoaWxkKHR1bmFEZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQodHVuYUl0ZW0pO1xuXG4gICAgLy8gUm9hc3RlZCBEdWNrXG4gICAgY29uc3QgZHVja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1Y2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgZHVja1BpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBkdWNrUGljdHVyZS5zcmMgPSBkdWNrSW1hZ2U7XG4gICAgZHVja1BpY3R1cmUuYWx0ID0gXCJSb2FzdGVkIER1Y2tcIjtcbiAgICBkdWNrUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgZHVja0l0ZW0uYXBwZW5kQ2hpbGQoZHVja1BpY3R1cmUpO1xuXG4gICAgY29uc3QgZHVja0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1Y2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgZHVja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1Y2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBkdWNrTmFtZS50ZXh0Q29udGVudCA9IFwiUm9hc3RlZCBEdWNrXCI7XG4gICAgZHVja0RldGFpbHMuYXBwZW5kQ2hpbGQoZHVja05hbWUpO1xuXG4gICAgY29uc3QgZHVja1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkdWNrUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGR1Y2tQcmljZS50ZXh0Q29udGVudCA9IFwiJDI5Ljk5XCI7XG4gICAgZHVja0RldGFpbHMuYXBwZW5kQ2hpbGQoZHVja1ByaWNlKTtcblxuICAgIGR1Y2tJdGVtLmFwcGVuZENoaWxkKGR1Y2tEZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZHVja0l0ZW0pO1xuXG4gICAgLy8gR2FybGljIEJ1dHRlciBTdGVha1xuICAgIGNvbnN0IHN0ZWFrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RlYWtJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3Qgc3RlYWtQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgc3RlYWtQaWN0dXJlLnNyYyA9IHN0ZWFrSW1hZ2U7XG4gICAgc3RlYWtQaWN0dXJlLmFsdCA9IFwiR2FybGljIEJ1dHRlciBTdGVha1wiO1xuICAgIHN0ZWFrUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgc3RlYWtJdGVtLmFwcGVuZENoaWxkKHN0ZWFrUGljdHVyZSk7XG5cbiAgICBjb25zdCBzdGVha0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0ZWFrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IHN0ZWFrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RlYWtOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBzdGVha05hbWUudGV4dENvbnRlbnQgPSBcIkdhcmxpYyBCdXR0ZXIgU3RlYWtcIjtcbiAgICBzdGVha0RldGFpbHMuYXBwZW5kQ2hpbGQoc3RlYWtOYW1lKTtcblxuICAgIGNvbnN0IHN0ZWFrUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0ZWFrUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIHN0ZWFrUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxOS45OVwiO1xuICAgIHN0ZWFrRGV0YWlscy5hcHBlbmRDaGlsZChzdGVha1ByaWNlKTtcblxuICAgIHN0ZWFrSXRlbS5hcHBlbmRDaGlsZChzdGVha0RldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzdGVha0l0ZW0pO1xuXG4gICAgLy8gQ2hpY2tlbiBCdXJyaXRvXG4gICAgY29uc3QgYnVycml0b0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cnJpdG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgYnVycml0b1BpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJyaXRvUGljdHVyZS5zcmMgPSBidXJyaXRvSW1hZ2U7XG4gICAgYnVycml0b1BpY3R1cmUuYWx0ID0gXCJDaGlja2VuIEJ1cnJpdG9cIjtcbiAgICBidXJyaXRvUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgYnVycml0b0l0ZW0uYXBwZW5kQ2hpbGQoYnVycml0b1BpY3R1cmUpO1xuXG4gICAgY29uc3QgYnVycml0b0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cnJpdG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgY29uc3QgYnVycml0b05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1cnJpdG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBidXJyaXRvTmFtZS50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBCdXJyaXRvXCI7XG4gICAgYnVycml0b0RldGFpbHMuYXBwZW5kQ2hpbGQoYnVycml0b05hbWUpO1xuXG4gICAgY29uc3QgYnVycml0b1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXJyaXRvUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIGJ1cnJpdG9QcmljZS50ZXh0Q29udGVudCA9IFwiJDcuOTlcIjtcbiAgICBidXJyaXRvRGV0YWlscy5hcHBlbmRDaGlsZChidXJyaXRvUHJpY2UpO1xuXG4gICAgYnVycml0b0l0ZW0uYXBwZW5kQ2hpbGQoYnVycml0b0RldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXJyaXRvSXRlbSk7XG5cbiAgICAvLyBDcmlzcHkgVG9mdSB3aXRoIE5vb2RsZXNcbiAgICBjb25zdCB0b2Z1SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9mdUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCB0b2Z1UGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRvZnVQaWN0dXJlLnNyYyA9IHRvZnVJbWFnZTtcbiAgICB0b2Z1UGljdHVyZS5hbHQgPSBcIkNyaXNweSBUb2Z1IHdpdGggTm9vZGxlc1wiO1xuICAgIHRvZnVQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiZm9vZFwiKTtcbiAgICB0b2Z1SXRlbS5hcHBlbmRDaGlsZCh0b2Z1UGljdHVyZSk7XG5cbiAgICBjb25zdCB0b2Z1RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9mdURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCB0b2Z1TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9mdU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJmb29kXCIpO1xuICAgIHRvZnVOYW1lLnRleHRDb250ZW50ID0gXCJDcmlzcHkgVG9mdSB3aXRoIE5vb2RsZXNcIjtcbiAgICB0b2Z1RGV0YWlscy5hcHBlbmRDaGlsZCh0b2Z1TmFtZSk7XG5cbiAgICBjb25zdCB0b2Z1UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZnVQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgdG9mdVByaWNlLnRleHRDb250ZW50ID0gXCIkNC45OVwiO1xuICAgIHRvZnVEZXRhaWxzLmFwcGVuZENoaWxkKHRvZnVQcmljZSk7XG5cbiAgICB0b2Z1SXRlbS5hcHBlbmRDaGlsZCh0b2Z1RGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHRvZnVJdGVtKTtcblxuICAgIC8vIENoaWNrZW4gRnJpZWQgUmljZVxuICAgIGNvbnN0IGZyaWVkcmljZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyaWVkcmljZUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG5cbiAgICBjb25zdCBmcmllZHJpY2VQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgZnJpZWRyaWNlUGljdHVyZS5zcmMgPSBmcmllZHJpY2VJbWFnZTtcbiAgICBmcmllZHJpY2VQaWN0dXJlLmFsdCA9IFwiQ2hpY2tlbiBGcmllZCBSaWNlXCI7XG4gICAgZnJpZWRyaWNlUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgZnJpZWRyaWNlSXRlbS5hcHBlbmRDaGlsZChmcmllZHJpY2VQaWN0dXJlKTtcblxuICAgIGNvbnN0IGZyaWVkcmljZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyaWVkcmljZURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBmcmllZHJpY2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllZHJpY2VOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBmcmllZHJpY2VOYW1lLnRleHRDb250ZW50ID0gXCJDaGlja2VuIEZyaWVkIFJpY2VcIjtcbiAgICBmcmllZHJpY2VEZXRhaWxzLmFwcGVuZENoaWxkKGZyaWVkcmljZU5hbWUpO1xuXG4gICAgY29uc3QgZnJpZWRyaWNlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyaWVkcmljZVByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgICBmcmllZHJpY2VQcmljZS50ZXh0Q29udGVudCA9IFwiJDIuNDlcIjtcbiAgICBmcmllZHJpY2VEZXRhaWxzLmFwcGVuZENoaWxkKGZyaWVkcmljZVByaWNlKTtcblxuICAgIGZyaWVkcmljZUl0ZW0uYXBwZW5kQ2hpbGQoZnJpZWRyaWNlRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGZyaWVkcmljZUl0ZW0pO1xuXG4gICAgLy8gU3dlZGlzaCBNZWF0YmFsbHNcbiAgICBjb25zdCBtZWF0YmFsbHNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZWF0YmFsbHNJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuXG4gICAgY29uc3QgbWVhdGJhbGxzUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lYXRiYWxsc1BpY3R1cmUuc3JjID0gbWVhdGJhbGxzSW1hZ2U7XG4gICAgbWVhdGJhbGxzUGljdHVyZS5hbHQgPSBcIlN3ZWRpc2ggTWVhdGJhbGxzXCI7XG4gICAgbWVhdGJhbGxzUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgbWVhdGJhbGxzSXRlbS5hcHBlbmRDaGlsZChtZWF0YmFsbHNQaWN0dXJlKTtcblxuICAgIGNvbnN0IG1lYXRiYWxsc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lYXRiYWxsc0RldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBtZWF0YmFsbHNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZWF0YmFsbHNOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICBtZWF0YmFsbHNOYW1lLnRleHRDb250ZW50ID0gXCJTd2VkaXNoIE1lYXRiYWxsc1wiO1xuICAgIG1lYXRiYWxsc0RldGFpbHMuYXBwZW5kQ2hpbGQobWVhdGJhbGxzTmFtZSk7XG5cbiAgICBjb25zdCBtZWF0YmFsbHNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVhdGJhbGxzUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIG1lYXRiYWxsc1ByaWNlLnRleHRDb250ZW50ID0gXCIkMi45OVwiO1xuICAgIG1lYXRiYWxsc0RldGFpbHMuYXBwZW5kQ2hpbGQobWVhdGJhbGxzUHJpY2UpO1xuXG4gICAgbWVhdGJhbGxzSXRlbS5hcHBlbmRDaGlsZChtZWF0YmFsbHNEZXRhaWxzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVhdGJhbGxzSXRlbSk7XG4gICAgXG4gICAgLy8gVmVnYW4gUXVlc2FkaWxsYVxuICAgIGNvbnN0IHF1ZXNhZGlsbGFJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBxdWVzYWRpbGxhSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IHF1ZXNhZGlsbGFQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgcXVlc2FkaWxsYVBpY3R1cmUuc3JjID0gcXVlc2FkaWxsYUltYWdlO1xuICAgIHF1ZXNhZGlsbGFQaWN0dXJlLmFsdCA9IFwiVmVnYW4gUXVlc2FkaWxsYVwiO1xuICAgIHF1ZXNhZGlsbGFQaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlXCIsIFwiZm9vZFwiKTtcbiAgICBxdWVzYWRpbGxhSXRlbS5hcHBlbmRDaGlsZChxdWVzYWRpbGxhUGljdHVyZSk7XG5cbiAgICBjb25zdCBxdWVzYWRpbGxhRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcXVlc2FkaWxsYURldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBjb25zdCBxdWVzYWRpbGxhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcXVlc2FkaWxsYU5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiwgXCJmb29kXCIpO1xuICAgIHF1ZXNhZGlsbGFOYW1lLnRleHRDb250ZW50ID0gXCJWZWdhbiBRdWVzYWRpbGxhXCI7XG4gICAgcXVlc2FkaWxsYURldGFpbHMuYXBwZW5kQ2hpbGQocXVlc2FkaWxsYU5hbWUpO1xuXG4gICAgY29uc3QgcXVlc2FkaWxsYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBxdWVzYWRpbGxhUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICAgIHF1ZXNhZGlsbGFQcmljZS50ZXh0Q29udGVudCA9IFwiJDkuOTlcIjtcbiAgICBxdWVzYWRpbGxhRGV0YWlscy5hcHBlbmRDaGlsZChxdWVzYWRpbGxhUHJpY2UpO1xuXG4gICAgcXVlc2FkaWxsYUl0ZW0uYXBwZW5kQ2hpbGQocXVlc2FkaWxsYURldGFpbHMpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChxdWVzYWRpbGxhSXRlbSk7XG5cbiAgICAvLyBWZWdnaWUgQmFrZWQgUmF0YXRvdWlsbGVcbiAgICBjb25zdCByYXRhdG91aWxsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhdGF0b3VpbGxlSXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcblxuICAgIGNvbnN0IHJhdGF0b3VpbGxlUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgIHJhdGF0b3VpbGxlUGljdHVyZS5zcmMgPSByYXRhdG91aWxsZUltYWdlO1xuICAgIHJhdGF0b3VpbGxlUGljdHVyZS5hbHQgPSBcIlZlZ2dpZSBCYWtlZCBSYXRhdG91aWxsZVwiO1xuICAgIHJhdGF0b3VpbGxlUGljdHVyZS5jbGFzc0xpc3QuYWRkKFwicGljdHVyZVwiLCBcImZvb2RcIik7XG4gICAgcmF0YXRvdWlsbGVJdGVtLmFwcGVuZENoaWxkKHJhdGF0b3VpbGxlUGljdHVyZSk7XG5cbiAgICBjb25zdCByYXRhdG91aWxsZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJhdGF0b3VpbGxlRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGNvbnN0IHJhdGF0b3VpbGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmF0YXRvdWlsbGVOYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIsIFwiZm9vZFwiKTtcbiAgICByYXRhdG91aWxsZU5hbWUudGV4dENvbnRlbnQgPSBcIlZlZ2dpZSBCYWtlZCBSYXRhdG91aWxsZVwiO1xuICAgIHJhdGF0b3VpbGxlRGV0YWlscy5hcHBlbmRDaGlsZChyYXRhdG91aWxsZU5hbWUpO1xuXG4gICAgY29uc3QgcmF0YXRvdWlsbGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmF0YXRvdWlsbGVQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gICAgcmF0YXRvdWlsbGVQcmljZS50ZXh0Q29udGVudCA9IFwiJDEyLjQ5XCI7XG4gICAgcmF0YXRvdWlsbGVEZXRhaWxzLmFwcGVuZENoaWxkKHJhdGF0b3VpbGxlUHJpY2UpO1xuXG4gICAgcmF0YXRvdWlsbGVJdGVtLmFwcGVuZENoaWxkKHJhdGF0b3VpbGxlRGV0YWlscyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHJhdGF0b3VpbGxlSXRlbSk7XG4gICAgXG4gICAgcmV0dXJuIG1haW47XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgbG9hZEhvbWVTZWN0aW9uIGZyb20gXCIuL2hvbWVTZWN0aW9uXCI7XG5pbXBvcnQgbG9hZE1lbnVTZWN0aW9uIGZyb20gXCIuL21lbnVTZWN0aW9uXCI7XG5pbXBvcnQgbG9hZENvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RTZWN0aW9uXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cblxuY29uc3QgbmF2aWdhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm5hdmlnYXRvci5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmhvbWVUYWIuY2xhc3NMaXN0LmFkZChcInRhYlwiLCBcImhvbWVcIiwgXCJhY3RpdmVcIik7XG5ob21lVGFiLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbm5hdmlnYXRvci5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5tZW51VGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIiwgXCJtZW51XCIpO1xubWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG5uYXZpZ2F0b3IuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIsIFwiY29udGFjdFwiKTtcbmNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxubmF2aWdhdG9yLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKG5hdmlnYXRvcik7XG5cblxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTW9jayBSZXN0YXVyYW50XCI7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEhvbWVTZWN0aW9uKCkpO1xuXG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNb2NrIFJlc3RhdXJhbnRcIjtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGROb2Rlc1syXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkSG9tZVNlY3Rpb24oKSk7XG59KTtcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGROb2Rlc1syXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkTWVudVNlY3Rpb24oKSk7XG59KTtcbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGROb2Rlc1syXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkQ29udGFjdFNlY3Rpb24oKSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=