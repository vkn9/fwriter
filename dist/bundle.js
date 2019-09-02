/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./enum/core.js":
/*!**********************!*\
  !*** ./enum/core.js ***!
  \**********************/
/*! exports provided: heading, font, fontSizeText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heading\", function() { return heading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"font\", function() { return font; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontSizeText\", function() { return fontSizeText; });\nvar heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\nvar font = ['Arial', 'Comic Sans MS', 'Courier', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'];\nvar fontSizeText = [1, 2, 3, 4, 5, 6, 7];\n\n//# sourceURL=webpack:///./enum/core.js?");

/***/ }),

/***/ "./enum/element.js":
/*!*************************!*\
  !*** ./enum/element.js ***!
  \*************************/
/*! exports provided: editor, MenuEditor, blockLevel, fontName, fontSize, bold, underLine, insertImage, justifyLeft, justifyCenter, justifyRight, foreColor, contentEditor, exportContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editor\", function() { return editor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuEditor\", function() { return MenuEditor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockLevel\", function() { return blockLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontName\", function() { return fontName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontSize\", function() { return fontSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bold\", function() { return bold; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"underLine\", function() { return underLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertImage\", function() { return insertImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"justifyLeft\", function() { return justifyLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"justifyCenter\", function() { return justifyCenter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"justifyRight\", function() { return justifyRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreColor\", function() { return foreColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contentEditor\", function() { return contentEditor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exportContent\", function() { return exportContent; });\nvar editor = {\n  name: 'div',\n  prop: {\n    attribute: [['class', 'fwt-editor']]\n  }\n};\nvar MenuEditor = {\n  name: 'div',\n  prop: {\n    attribute: [['class', 'fwt-menu']]\n  }\n};\nvar blockLevel = {\n  name: 'select',\n  prop: {\n    attribute: [['class', 'fwt-select'], ['title', 'heading']],\n    dataset: [['cmd', 'formatBlock']]\n  }\n};\nvar fontName = {\n  name: 'select',\n  prop: {\n    attribute: [['class', 'fwt-select'], ['title', 'Font Name']],\n    dataset: [['cmd', 'fontName']]\n  }\n};\nvar fontSize = {\n  name: 'select',\n  prop: {\n    attribute: [['class', 'fwt-select'], ['title', 'Font Size']],\n    dataset: [['cmd', 'fontSize']]\n  }\n};\nvar bold = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    dataset: [['cmd', 'bold']],\n    content: '<i class=\"fas fa-bold\"></i>'\n  }\n};\nvar underLine = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    dataset: [['cmd', 'underline']],\n    content: '<i class=\"fas fa-underline\"></i>'\n  }\n};\nvar insertImage = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    dataset: [['cmd', 'insertimage']],\n    content: '<i class=\"fas fa-image\"></i>'\n  }\n};\nvar justifyLeft = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    dataset: [['cmd', 'justifyLeft']],\n    content: '<i class=\"fas fa-align-left\"></i>'\n  }\n};\nvar justifyCenter = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    dataset: [['cmd', 'justifyCenter']],\n    content: '<i class=\"fas fa-align-center\"></i>'\n  }\n};\nvar justifyRight = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    dataset: [['cmd', 'justifyRight']],\n    content: '<i class=\"fas fa-align-right\"></i>'\n  }\n};\nvar foreColor = {\n  name: 'input',\n  prop: {\n    attribute: [['class', 'fwt-input'], ['type', 'color'], ['title', 'Color']],\n    dataset: [['cmd', 'foreColor']]\n  }\n};\nvar contentEditor = {\n  name: 'div',\n  prop: {\n    attribute: [['class', 'fwt-content'], ['contenteditable', true], ['spellcheck', false]]\n  }\n};\nvar exportContent = {\n  name: 'button',\n  prop: {\n    attribute: [['id', 'fwt-export-content'], ['class', 'fwt-button']],\n    content: '<i class=\"fas fa-save\"></i>'\n  }\n};\n\n//# sourceURL=webpack:///./enum/element.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core */ \"./utils/core.js\");\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum/element */ \"./enum/element.js\");\n/* harmony import */ var _sass_menu_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/menu_editor.scss */ \"./sass/menu_editor.scss\");\n/* harmony import */ var _sass_menu_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_menu_editor_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sass_content_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sass/content_editor.scss */ \"./sass/content_editor.scss\");\n/* harmony import */ var _sass_content_editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_content_editor_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nwindow.fWrite = function (seletor, obj) {\n  var inject = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"detectSelector\"])(seletor);\n  var init = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(inject, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"editor\"]);\n  var menu = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(init, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"MenuEditor\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menu, Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"initButton\"])(obj));\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(init, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"contentEditor\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(init, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"exportContent\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"execCommand\"])(menu, [['.fwt-button', 'button'], ['.fwt-select', 'select'], ['.fwt-input', 'input']]);\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/block_level.js":
/*!********************************!*\
  !*** ./modules/block_level.js ***!
  \********************************/
/*! exports provided: blockLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/core */ \"./utils/core.js\");\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../enum/element */ \"./enum/element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"blockLevel\", function() { return _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"blockLevel\"]; });\n\n/* harmony import */ var _enum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../enum/core */ \"./enum/core.js\");\n\n\n\nObject(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"initChildElement\"])(_enum_element__WEBPACK_IMPORTED_MODULE_1__[\"blockLevel\"], _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"heading\"].length);\n\nfor (var i = 0; i < _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"heading\"].length; i++) {\n  var element = _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"heading\"][i];\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"blockLevel\"].child[i].name = 'option';\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"blockLevel\"].child[i].prop.content = element;\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"blockLevel\"].child[i].prop.attribute.push(['value', element]);\n}\n\n\n\n//# sourceURL=webpack:///./modules/block_level.js?");

/***/ }),

/***/ "./modules/font_name.js":
/*!******************************!*\
  !*** ./modules/font_name.js ***!
  \******************************/
/*! exports provided: fontName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/core */ \"./utils/core.js\");\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../enum/element */ \"./enum/element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fontName\", function() { return _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontName\"]; });\n\n/* harmony import */ var _enum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../enum/core */ \"./enum/core.js\");\n\n\n\nObject(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"initChildElement\"])(_enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontName\"], _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"font\"].length);\n\nfor (var i = 0; i < _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"font\"].length; i++) {\n  var element = _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"font\"][i];\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontName\"].child[i].name = 'option';\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontName\"].child[i].prop.content = element;\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontName\"].child[i].prop.attribute.push(['value', element]);\n}\n\n\n\n//# sourceURL=webpack:///./modules/font_name.js?");

/***/ }),

/***/ "./modules/font_size.js":
/*!******************************!*\
  !*** ./modules/font_size.js ***!
  \******************************/
/*! exports provided: fontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/core */ \"./utils/core.js\");\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../enum/element */ \"./enum/element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fontSize\", function() { return _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontSize\"]; });\n\n/* harmony import */ var _enum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../enum/core */ \"./enum/core.js\");\n\n\n\nObject(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"initChildElement\"])(_enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontSize\"], _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"fontSizeText\"].length);\n\nfor (var i = 0; i < _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"fontSizeText\"].length; i++) {\n  var element = _enum_core__WEBPACK_IMPORTED_MODULE_2__[\"fontSizeText\"][i];\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontSize\"].child[i].name = 'option';\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontSize\"].child[i].prop.content = element;\n  _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"fontSize\"].child[i].prop.attribute.push(['value', element]);\n}\n\n\n\n//# sourceURL=webpack:///./modules/font_size.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./sass/content_editor.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./sass/content_editor.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".fwt-content {\\n  border-right: 1px solid #000000;\\n  border-left: 1px solid #000000;\\n  border-bottom: 1px solid #000000;\\n  padding: 10px;\\n  font-size: 14px;\\n  color: #222222;\\n  line-height: 1.6em;\\n  min-height: 200px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./sass/content_editor.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./sass/menu_editor.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./sass/menu_editor.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".fwt-editor {\\n  font-family: Georgia, Times, 'Times New Roman', serif; }\\n\\n.fwt-menu {\\n  display: flex;\\n  align-items: center;\\n  border: 1px solid #000000; }\\n\\n.fwt-button,\\n.fwt-select,\\n.fwt-input {\\n  border: none;\\n  padding: 5px 10px;\\n  font-size: 0.8em;\\n  margin: 5px 2px;\\n  border-radius: 3px;\\n  border: 1px solid transparent;\\n  transition: 0.5s; }\\n\\n.fwt-select {\\n  appearance: none;\\n  -moz-appearance: none;\\n  -webkit-appearance: none; }\\n\\n.fwt-button:focus,\\n.fwt-select:focus,\\n.fwt-input:focus,\\n.fwt-content:focus {\\n  outline: 0; }\\n\\n.fwt-button:hover,\\n.fwt-select:hover,\\n.fwt-input:hover {\\n  border: 1px solid #000000;\\n  background-color: #968c80;\\n  cursor: pointer; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./sass/menu_editor.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./sass/content_editor.scss":
/*!**********************************!*\
  !*** ./sass/content_editor.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./content_editor.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./sass/content_editor.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./sass/content_editor.scss?");

/***/ }),

/***/ "./sass/menu_editor.scss":
/*!*******************************!*\
  !*** ./sass/menu_editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./menu_editor.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./sass/menu_editor.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./sass/menu_editor.scss?");

/***/ }),

/***/ "./utils/core.js":
/*!***********************!*\
  !*** ./utils/core.js ***!
  \***********************/
/*! exports provided: createChildElement, detectSelector, initChildElement, initButton, execCommand, execCommandSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChildElement\", function() { return createChildElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectSelector\", function() { return detectSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initChildElement\", function() { return initChildElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initButton\", function() { return initButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"execCommand\", function() { return execCommand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"execCommandSelect\", function() { return execCommandSelect; });\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../enum/element */ \"./enum/element.js\");\n/* harmony import */ var _modules_block_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/block_level */ \"./modules/block_level.js\");\n/* harmony import */ var _modules_font_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../modules/font_name */ \"./modules/font_name.js\");\n/* harmony import */ var _modules_font_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../modules/font_size */ \"./modules/font_size.js\");\n\n\n\n\n\nfunction addProp(obj, element) {\n  Object.keys(obj).forEach(function (key) {\n    var objOfKey = obj[key];\n\n    switch (key) {\n      case 'attribute':\n        for (var i = 0; i < objOfKey.length; i++) {\n          var valueAttr = objOfKey[i];\n          element.setAttribute(valueAttr[0], valueAttr[1]);\n        }\n\n        break;\n\n      case 'dataset':\n        for (var _i = 0; _i < objOfKey.length; _i++) {\n          var _valueAttr = objOfKey[_i];\n          element.dataset[_valueAttr[0]] = _valueAttr[1];\n        }\n\n        break;\n\n      case 'content':\n        element.innerHTML = obj[key];\n    }\n  });\n}\n\nfunction createElement(parent, obj) {\n  if (!obj || !obj.name) return false;\n  var childElement = document.createElement(obj.name);\n\n  if (obj.prop) {\n    addProp(obj.prop, childElement);\n  }\n\n  parent.appendChild(childElement);\n\n  if (obj.child && obj.child.length > 0) {\n    for (var i = 0; i < obj.child.length; i++) {\n      var element = obj.child[i];\n      createChildElement(childElement, element);\n    }\n  }\n\n  return childElement;\n}\n\nfunction createChildElement(parent, data) {\n  // Create many element\n  if (Array.isArray(data)) {\n    for (var i = 0; i < data.length; i++) {\n      var element = data[i];\n      createElement(parent, element);\n    }\n  } // Create single element\n\n\n  return createElement(parent, data);\n}\nfunction detectSelector(selector) {\n  var firstChar = selector.charAt(0);\n\n  switch (firstChar) {\n    case '.':\n      return document.getElementsByClassName(selector.substring(1))[0];\n\n    case '#':\n      return document.getElementById(selector.substring(1));\n\n    default:\n      var onlyLowercase = /^[a-z]+$/;\n\n      if (onlyLowercase.test(firstChar)) {\n        return document.getElementsByTagName(selector)[0];\n      }\n\n  }\n}\nfunction initChildElement(obj, count) {\n  if (!obj.child) obj.child = [];\n\n  for (var i = 0; i < count; i++) {\n    if (!obj.child[i]) obj.child[i] = {};\n    if (!obj.child[i].prop) obj.child[i].prop = {};\n    if (!obj.child[i].prop.attribute) obj.child[i].prop.attribute = [];\n    if (!obj.child[i].prop.dataset) obj.child[i].prop.dataset = [];\n  }\n\n  return obj;\n}\nfunction initButton(obj) {\n  var buttonDefault = [_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"bold\"], _enum_element__WEBPACK_IMPORTED_MODULE_0__[\"underLine\"], _enum_element__WEBPACK_IMPORTED_MODULE_0__[\"insertImage\"], _enum_element__WEBPACK_IMPORTED_MODULE_0__[\"justifyLeft\"], _enum_element__WEBPACK_IMPORTED_MODULE_0__[\"justifyCenter\"], _enum_element__WEBPACK_IMPORTED_MODULE_0__[\"justifyRight\"]];\n  var objBtn = [];\n  if (!obj || !obj.button || obj.button.length === 0) return buttonDefault;\n  var listButton = obj.button;\n\n  for (var i = 0; i < listButton.length; i++) {\n    var element = listButton[i];\n\n    switch (element) {\n      case 'bold':\n        objBtn.push(_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"bold\"]);\n        break;\n\n      case 'underLine':\n        objBtn.push(_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"underLine\"]);\n        break;\n\n      case 'insertImage':\n        objBtn.push(_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"insertImage\"]);\n        break;\n\n      case 'justifyLeft':\n        objBtn.push(_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"justifyLeft\"]);\n        break;\n\n      case 'justifyCenter':\n        objBtn.push(_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"justifyCenter\"]);\n        break;\n\n      case 'justifyRight':\n        objBtn.push(_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"justifyRight\"]);\n        break;\n\n      case 'blockLevel':\n        objBtn.push(_modules_block_level__WEBPACK_IMPORTED_MODULE_1__[\"blockLevel\"]);\n        break;\n\n      case 'fontName':\n        objBtn.push(_modules_font_name__WEBPACK_IMPORTED_MODULE_2__[\"fontName\"]);\n        break;\n\n      case 'fontSize':\n        objBtn.push(_modules_font_size__WEBPACK_IMPORTED_MODULE_3__[\"fontSize\"]);\n        break;\n    }\n  }\n\n  return objBtn;\n}\nfunction execCommand(selector, obj) {\n  if (!obj || obj.length === 0) return false;\n\n  var _loop = function _loop(i) {\n    var element = obj[i];\n    var listTarget = selector.querySelectorAll(element[0]);\n    listTarget.forEach(function (el) {\n      switch (element[1]) {\n        case 'button':\n          el.addEventListener('click', function () {\n            var formatText = el.dataset.cmd;\n\n            if (formatText === 'insertimage') {\n              var image = prompt('image');\n              document.execCommand(formatText, true, image);\n            } else {\n              document.execCommand(formatText, true);\n            }\n          });\n          break;\n\n        case 'select':\n          el.addEventListener('change', function () {\n            var value = el.options[el.selectedIndex].value;\n            document.execCommand(el.dataset.cmd, false, value);\n          });\n\n        case 'input':\n          el.addEventListener('change', function () {\n            document.execCommand(el.dataset.cmd, false, el.value);\n          });\n      }\n    });\n  };\n\n  for (var i = 0; i < obj.length; i++) {\n    _loop(i);\n  }\n}\nfunction execCommandSelect() {}\n\n//# sourceURL=webpack:///./utils/core.js?");

/***/ })

/******/ });