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

/***/ "./enum/element.js":
/*!*************************!*\
  !*** ./enum/element.js ***!
  \*************************/
/*! exports provided: bold, underLine, justifyLeft, justifyCenter, justifyRight, insertImage, blockLevel, fontName, fontSize, foreColor, content, editor, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bold\", function() { return bold; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"underLine\", function() { return underLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"justifyLeft\", function() { return justifyLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"justifyCenter\", function() { return justifyCenter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"justifyRight\", function() { return justifyRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertImage\", function() { return insertImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockLevel\", function() { return blockLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontName\", function() { return fontName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontSize\", function() { return fontSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"foreColor\", function() { return foreColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editor\", function() { return editor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\nvar bold = {\n  name: 'button',\n  prop: {\n    attribute: [['title', 'Strong'], ['class', 'fwt-button fwt-strong-button']],\n    content: '<i class=\"fas fa-bold\"></i>',\n    exec: 'bold'\n  }\n};\nvar underLine = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button fwt-underline-button']],\n    content: '<i class=\"fas fa-underline\"></i>',\n    exec: 'underline'\n  }\n};\nvar justifyLeft = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    content: '<i class=\"fas fa-align-left\"></i>',\n    exec: 'justifyLeft'\n  }\n};\nvar justifyCenter = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    content: '<i class=\"fas fa-align-center\"></i>',\n    exec: 'justifyCenter'\n  }\n};\nvar justifyRight = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    content: '<i class=\"fas fa-align-right\"></i>',\n    exec: 'justifyRight'\n  }\n};\nvar insertImage = {\n  name: 'button',\n  prop: {\n    attribute: [['class', 'fwt-button']],\n    content: '<i class=\"fas fa-image\"></i>'\n  }\n};\nvar blockLevel = {\n  name: 'select',\n  prop: {\n    attribute: [['class', 'fwt-select'], ['title', 'heading']],\n    dataset: [['cmd', 'formatBlock']]\n  }\n};\nvar fontName = {\n  name: 'select',\n  prop: {\n    attribute: [['class', 'fwt-select'], ['title', 'Font Name']],\n    dataset: [['cmd', 'fontName']]\n  }\n};\nvar fontSize = {\n  name: 'select',\n  prop: {\n    attribute: [['class', 'fwt-select'], ['title', 'Font Size']],\n    dataset: [['cmd', 'fontSize']]\n  }\n};\nvar foreColor = {\n  name: 'input',\n  prop: {\n    attribute: [['class', 'fwt-input'], ['type', 'color'], ['title', 'Color']],\n    dataset: [['cmd', 'foreColor']]\n  }\n};\nvar content = {\n  name: 'div',\n  prop: {\n    attribute: [['class', 'fwt-content'], ['contenteditable', true], ['spellcheck', false]]\n  }\n};\nvar editor = {\n  name: 'div',\n  prop: {\n    attribute: [['class', 'fwt-editor']]\n  }\n};\nvar menu = {\n  name: 'div',\n  prop: {\n    attribute: [['class', 'fwt-menu']]\n  }\n};\n\n//# sourceURL=webpack:///./enum/element.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core */ \"./utils/core.js\");\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum/element */ \"./enum/element.js\");\n/* harmony import */ var _modules_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/image */ \"./modules/image.js\");\n/* harmony import */ var _sass_menu_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sass/menu_editor.scss */ \"./sass/menu_editor.scss\");\n/* harmony import */ var _sass_menu_editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_menu_editor_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sass_content_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sass/content_editor.scss */ \"./sass/content_editor.scss\");\n/* harmony import */ var _sass_content_editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_content_editor_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nwindow.fWrite = function (seletor, obj) {\n  var inject = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"getSelector\"])(seletor);\n  var createEditor = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(inject, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"editor\"]);\n  var createMenu = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(createEditor, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"menu\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(createEditor, _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"content\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(createMenu, [_enum_element__WEBPACK_IMPORTED_MODULE_1__[\"bold\"], _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"underLine\"], _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"justifyLeft\"], _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"justifyCenter\"], _enum_element__WEBPACK_IMPORTED_MODULE_1__[\"justifyRight\"], _modules_image__WEBPACK_IMPORTED_MODULE_2__[\"insertImage\"]]);\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/image.js":
/*!**************************!*\
  !*** ./modules/image.js ***!
  \**************************/
/*! exports provided: insertImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../enum/element */ \"./enum/element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insertImage\", function() { return _enum_element__WEBPACK_IMPORTED_MODULE_0__[\"insertImage\"]; });\n\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/core */ \"./utils/core.js\");\n\n\nvar selectCurrent = null;\n\nfunction dd() {\n  var range;\n\n  if (window.getSelection && window.getSelection().getRangeAt) {\n    range = window.getSelection().getRangeAt(0);\n    selectCurrent = range;\n  }\n}\n\nfunction handler(e) {\n  console.log(selectCurrent);\n  var image = prompt('image');\n  return document.execCommand('insertImage', false, 'https://kenh14cdn.com/thumb_w/620/2019/9/4/goo-hye-sun-ahn-jae-hyun-1567411597981712284395-1567567724940533410690.jpg');\n  var images = {\n    name: 'img',\n    prop: {\n      attribute: [['src', image]]\n    }\n  };\n  var ig = Object(_utils_core__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(document.body, images);\n  selectCurrent.insertNode(ig);\n}\n\nfunction imageSelectHandler(e) {\n  var image = e.path[0];\n\n  if (e.target.nodeName === 'IMG') {\n    var selection = window.getSelection();\n    var range = document.createRange();\n    range.selectNode(image);\n    selection.removeAllRanges();\n    selection.addRange(range);\n  }\n}\n\n_enum_element__WEBPACK_IMPORTED_MODULE_0__[\"insertImage\"].prop.event = [['click', 1, handler], ['click', 0, imageSelectHandler], ['mouseup', 0, dd]];\n\n\n//# sourceURL=webpack:///./modules/image.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/content_editor.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/content_editor.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".fwt-content {\\n  border-right: 1px solid #d7e0e2;\\n  border-left: 1px solid #d7e0e2;\\n  border-bottom: 1px solid #d7e0e2;\\n  padding: 10px;\\n  font-size: 14px;\\n  color: #222222;\\n  line-height: 1.6em;\\n  min-height: 200px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./sass/content_editor.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu_editor.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu_editor.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".fwt-editor {\\n  font-family: Georgia, Times, 'Times New Roman', serif; }\\n\\n.fwt-menu {\\n  background: #ecf0f1;\\n  display: flex;\\n  align-items: center;\\n  border: 1px solid #d7e0e2; }\\n\\n.fwt-button,\\n.fwt-select,\\n.fwt-input {\\n  background: #ecf0f1;\\n  border: none;\\n  padding: 5px 10px;\\n  font-size: 0.8em;\\n  margin: 5px 2px;\\n  border-radius: 3px;\\n  border: 1px solid transparent;\\n  transition: 0.5s; }\\n\\n.fwt-select {\\n  appearance: none;\\n  -moz-appearance: none;\\n  -webkit-appearance: none; }\\n\\n.fwt-button:focus,\\n.fwt-select:focus,\\n.fwt-input:focus,\\n.fwt-content:focus {\\n  outline: 0; }\\n\\n.fwt-button:hover,\\n.fwt-select:hover,\\n.fwt-input:hover {\\n  background-color: #fff;\\n  cursor: pointer; }\\n\\n.fwt-active-button {\\n  background-color: #fff; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./sass/menu_editor.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./content_editor.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/content_editor.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./sass/content_editor.scss?");

/***/ }),

/***/ "./sass/menu_editor.scss":
/*!*******************************!*\
  !*** ./sass/menu_editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./menu_editor.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/menu_editor.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./sass/menu_editor.scss?");

/***/ }),

/***/ "./utils/core.js":
/*!***********************!*\
  !*** ./utils/core.js ***!
  \***********************/
/*! exports provided: exec, createElement, getSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exec\", function() { return exec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSelector\", function() { return getSelector; });\nfunction exec(command) {\n  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  document.execCommand(command, false, value);\n}\n\nfunction stateHandler(select, command) {\n  var check = document.queryCommandState(command);\n\n  if (check) {\n    select.classList['add']('fwt-active-button');\n  } else {\n    return select.classList['remove']('fwt-active-button');\n  }\n}\n\nfunction addEventListener(select1, type, select2, command, cb) {\n  if (command) {\n    return select1.addEventListener(type, function () {\n      return stateHandler(select2, command);\n    });\n  }\n\n  return select1.addEventListener(type, function (e) {\n    return cb(e);\n  });\n}\n\nfunction elementHandler(parent, obj) {\n  var content = document.querySelectorAll('.fwt-content')[0];\n  var element = document.createElement(obj.name);\n  var prop = obj.prop;\n  Object.keys(prop).forEach(function (key) {\n    var objOfKey = prop[key];\n\n    switch (key) {\n      case 'attribute':\n        for (var i = 0; i < objOfKey.length; i++) {\n          var valueAttr = objOfKey[i];\n          element.setAttribute(valueAttr[0], valueAttr[1]);\n        }\n\n        break;\n\n      case 'dataset':\n        for (var _i = 0; _i < objOfKey.length; _i++) {\n          var _valueAttr = objOfKey[_i];\n          element.dataset[_valueAttr[0]] = _valueAttr[1];\n        }\n\n        break;\n\n      case 'content':\n        element.innerHTML = prop[key];\n        break;\n\n      case 'exec':\n        var command = prop[key];\n\n        element.onclick = function () {\n          return exec(command);\n        };\n\n        addEventListener(content, 'keyup', element, command);\n        addEventListener(content, 'mouseup', element, command);\n        addEventListener(element, 'click', element, command);\n        break;\n\n      case 'event':\n        var listEvent = prop[key];\n\n        var _loop = function _loop(_i2) {\n          var event = listEvent[_i2]; // event[1] = 1 => element\n          // event[1] = 0 => content\n\n          if (event[1]) {\n            addEventListener(element, event[0], null, null, function (e) {\n              return event[2](e);\n            });\n          } else {\n            addEventListener(content, event[0], null, null, function (e) {\n              return event[2](e);\n            });\n          }\n        };\n\n        for (var _i2 = 0; _i2 < listEvent.length; _i2++) {\n          _loop(_i2);\n        }\n\n    }\n  });\n  if (!parent) return element;\n  parent.appendChild(element);\n  return element;\n}\n\nfunction createElement(parent, data) {\n  if (Array.isArray(data)) {\n    for (var i = 0; i < data.length; i++) {\n      var element = data[i];\n      elementHandler(parent, element);\n    }\n\n    return;\n  }\n\n  return elementHandler(parent, data);\n}\nfunction getSelector(selector) {\n  var check = selector.charAt(0);\n\n  switch (check) {\n    case '.':\n      return document.getElementsByClassName(selector.substring(1))[0];\n\n    case '#':\n      return document.getElementById(selector.substring(1));\n\n    default:\n      var regex = /^[a-z]+$/;\n\n      if (regex.test(firstChar)) {\n        return document.getElementsByTagName(selector)[0];\n      }\n\n  }\n}\n\n//# sourceURL=webpack:///./utils/core.js?");

/***/ })

/******/ });