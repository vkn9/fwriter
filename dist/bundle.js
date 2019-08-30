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
/*! exports provided: heading, fontList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heading\", function() { return heading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontList\", function() { return fontList; });\nvar heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\nvar fontList = ['Arial', 'Comic Sans MS', 'Courier', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'];\n\n//# sourceURL=webpack:///./enum/core.js?");

/***/ }),

/***/ "./enum/element.js":
/*!*************************!*\
  !*** ./enum/element.js ***!
  \*************************/
/*! exports provided: objMenuEditor, ObjHeading, objBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objMenuEditor\", function() { return objMenuEditor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjHeading\", function() { return ObjHeading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objBtn\", function() { return objBtn; });\nvar objMenuEditor = {\n  name: 'div',\n  prop: {\n    attribute: [['id', 'menu-editor']]\n  }\n};\nvar ObjHeading = {\n  name: 'select',\n  prop: {\n    attribute: [['title', 'heading']],\n    dataset: [['cmd', 'formatBlock']]\n  }\n};\nvar objBtn = [{\n  name: 'button',\n  prop: {\n    dataset: [['cmd', 'bold']],\n    content: '<i class=\"fas fa-bold\"></i>'\n  }\n}, {\n  name: 'button',\n  prop: {\n    dataset: [['cmd', 'underline']],\n    content: '<i class=\"fas fa-underline\"></i>'\n  }\n}, {\n  name: 'button',\n  prop: {\n    dataset: [['cmd', 'insertimage']],\n    content: '<i class=\"fas fa-image\"></i>'\n  }\n}, {\n  name: 'button',\n  prop: {\n    dataset: [['cmd', 'justifyLeft']],\n    content: '<i class=\"fas fa-align-left\"></i>'\n  }\n}, {\n  'name': 'button',\n  prop: {\n    dataset: [['cmd', 'justifyCenter']],\n    content: '<i class=\"fas fa-align-center\"></i>'\n  }\n}, {\n  name: 'button',\n  prop: {\n    dataset: [['cmd', 'justifyRight']],\n    content: '<i class=\"fas fa-align-right\"></i>'\n  }\n}];\n\n//# sourceURL=webpack:///./enum/element.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core */ \"./utils/core.js\");\n/* harmony import */ var _enum_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum/core */ \"./enum/core.js\");\n/* harmony import */ var _enum_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enum/element */ \"./enum/element.js\");\n\n\n\nconsole.log(_enum_element__WEBPACK_IMPORTED_MODULE_2__[\"ObjHeading\"]);\n\nwindow.fWrite = function (seletor, obj) {\n  var editor = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"detectSelector\"])(seletor);\n  var menuEditor = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(editor, _enum_element__WEBPACK_IMPORTED_MODULE_2__[\"objMenuEditor\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"initChildElement\"])(_enum_element__WEBPACK_IMPORTED_MODULE_2__[\"ObjHeading\"], _enum_core__WEBPACK_IMPORTED_MODULE_1__[\"heading\"].length);\n\n  for (var i = 0; i < _enum_core__WEBPACK_IMPORTED_MODULE_1__[\"heading\"].length; i++) {\n    var element = _enum_core__WEBPACK_IMPORTED_MODULE_1__[\"heading\"][i];\n    _enum_element__WEBPACK_IMPORTED_MODULE_2__[\"ObjHeading\"].child[i].name = 'option';\n    _enum_element__WEBPACK_IMPORTED_MODULE_2__[\"ObjHeading\"].child[i].prop.content = element;\n    _enum_element__WEBPACK_IMPORTED_MODULE_2__[\"ObjHeading\"].child[i].prop.attribute.push(['value', element]);\n  }\n\n  _enum_element__WEBPACK_IMPORTED_MODULE_2__[\"objBtn\"].push(_enum_element__WEBPACK_IMPORTED_MODULE_2__[\"ObjHeading\"]);\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, _enum_element__WEBPACK_IMPORTED_MODULE_2__[\"objBtn\"]);\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./utils/core.js":
/*!***********************!*\
  !*** ./utils/core.js ***!
  \***********************/
/*! exports provided: createChildElement, detectSelector, initChildElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChildElement\", function() { return createChildElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectSelector\", function() { return detectSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initChildElement\", function() { return initChildElement; });\nfunction addProp(obj, element) {\n  Object.keys(obj).forEach(function (key) {\n    var objOfKey = obj[key];\n\n    switch (key) {\n      case 'attribute':\n        for (var i = 0; i < objOfKey.length; i++) {\n          var valueAttr = objOfKey[i];\n          element.setAttribute(valueAttr[0], valueAttr[1]);\n        }\n\n        break;\n\n      case 'dataset':\n        for (var _i = 0; _i < objOfKey.length; _i++) {\n          var _valueAttr = objOfKey[_i];\n          element.dataset[_valueAttr[0]] = _valueAttr[1];\n        }\n\n        break;\n\n      case 'content':\n        element.innerHTML = obj[key];\n    }\n  });\n}\n\nfunction createElement(parent, obj) {\n  if (!obj || !obj.name) return false;\n  var childElement = document.createElement(obj.name);\n\n  if (obj.prop) {\n    addProp(obj.prop, childElement);\n  }\n\n  parent.appendChild(childElement);\n\n  if (obj.child && obj.child.length > 0) {\n    for (var i = 0; i < obj.child.length; i++) {\n      var element = obj.child[i];\n      createChildElement(childElement, element);\n    }\n  }\n\n  return childElement;\n}\n\nfunction createChildElement(parent, data) {\n  // Tao nhieu element\n  if (Array.isArray(data)) {\n    for (var i = 0; i < data.length; i++) {\n      var element = data[i];\n      createElement(parent, element);\n    }\n  } // Tao mot element\n\n\n  return createElement(parent, data);\n}\nfunction detectSelector(selector) {\n  var firstChar = selector.charAt(0);\n\n  switch (firstChar) {\n    case '.':\n      return document.getElementsByClassName(selector.substring(1))[0];\n\n    case '#':\n      return document.getElementById(selector.substring(1));\n\n    default:\n      var onlyLowercase = /^[a-z]+$/;\n\n      if (onlyLowercase.test(firstChar)) {\n        return document.getElementsByTagName(selector);\n      }\n\n  }\n}\nfunction initChildElement(obj, count) {\n  if (!obj.child) obj.child = [];\n\n  for (var i = 0; i < count; i++) {\n    if (!obj.child[i]) obj.child[i] = {};\n    if (!obj.child[i].prop) obj.child[i].prop = {};\n    if (!obj.child[i].prop.attribute) obj.child[i].prop.attribute = [];\n    if (!obj.child[i].prop.dataset) obj.child[i].prop.dataset = [];\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./utils/core.js?");

/***/ })

/******/ });