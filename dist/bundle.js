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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/core */ \"./utils/core.js\");\n\nvar objMenuEditor = {\n  attr: [{\n    key: 'id',\n    value: 'menu-editor'\n  }]\n};\nvar objBtn = {\n  bold: {\n    dataset: [{\n      key: 'cmd',\n      value: 'bold'\n    }],\n    content: '<i class=\"fas fa-bold\"></i>'\n  },\n  underline: {\n    dataset: [{\n      key: 'cmd',\n      value: 'underline'\n    }],\n    content: '<i class=\"fas fa-underline\"></i>'\n  },\n  insertimage: {\n    dataset: [{\n      key: 'cmd',\n      value: 'insertimage'\n    }],\n    content: '<i class=\"fas fa-image\"></i>'\n  },\n  alignleft: {\n    dataset: [{\n      key: 'cmd',\n      value: 'justifyLeft'\n    }],\n    content: '<i class=\"fas fa-align-left\"></i>'\n  },\n  aligncenter: {\n    dataset: [{\n      key: 'cmd',\n      value: 'justifyCenter'\n    }],\n    content: '<i class=\"fas fa-align-center\"></i>'\n  },\n  alignright: {\n    attr: [{\n      key: 'title',\n      value: 'Align Right'\n    }],\n    dataset: [{\n      key: 'cmd',\n      value: 'justifyRight'\n    }],\n    content: '<i class=\"fas fa-align-right\"></i>'\n  },\n  formatblock: {\n    attr: [{\n      key: 'title',\n      value: 'Format Header'\n    }],\n    dataset: [{\n      key: 'cmd',\n      value: 'formatBlock'\n    }],\n    child: [{\n      attr: [{\n        key: 'title'\n      }, {\n        key: 'value'\n      }]\n    }]\n  },\n  fontname: {\n    attr: [{\n      key: 'title',\n      value: 'Format Header'\n    }],\n    dataset: [{\n      key: 'cmd',\n      value: 'formatBlock'\n    }],\n    child: {\n      element: 'option',\n      attr: [{\n        key: 'title'\n      }, {\n        key: 'value'\n      }]\n    }\n  }\n};\n\nwindow.fWrite = function (seletor, obj) {\n  var editor = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"detectSelector\"])(seletor);\n  var menuEditor = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(editor, 'div', objMenuEditor); // Create Bold button\n\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'button', objBtn.bold); // Create Underline button\n\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'button', objBtn.underline); // Create Image button\n\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'button', objBtn.insertimage); // Create Align Left button\n\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'button', objBtn.alignleft); // Create Align Center button\n\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'button', objBtn.aligncenter); // Create Align Right button\n\n  Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'button', objBtn.alignright); // Create Header button\n\n  var heading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n\n  for (var i = 0; i < heading.length; i++) {\n    objBtn.formatblock.child.content = heading[i];\n    objBtn.formatblock.child.attr[0].value = heading[i];\n    objBtn.formatblock.child.attr[1].value = heading[i];\n  }\n\n  var header = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'select', objBtn.formatblock); // Create font button\n\n  var fontBtn = Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(menuEditor, 'select', objBtn.fontname);\n  var fontList = ['Arial', 'Comic Sans MS', 'Courier', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'];\n\n  for (var _i = 0; _i < fontList.length; _i++) {\n    objBtn.fontname.child[0].content = fontList[_i];\n    objBtn.fontname.child[0].attr[0].value = fontList[_i];\n    objBtn.fontname.child[0].attr[1].value = fontList[_i];\n    Object(_utils_core__WEBPACK_IMPORTED_MODULE_0__[\"createChildElement\"])(fontBtn, 'option', objBtn.fontname.child[0]);\n  }\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./utils/core.js":
/*!***********************!*\
  !*** ./utils/core.js ***!
  \***********************/
/*! exports provided: createChildElement, detectSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChildElement\", function() { return createChildElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectSelector\", function() { return detectSelector; });\n/**\n * Tạo element con trong DOM\n * @param {*} parent Element cha sẽ bọc element được tạo ra\n * @param {*} element Element con sẽ được tạo ra\n * @param {*} obj Thuộc tính của element con\n */\nfunction createChildElement(parent, element, obj) {\n  // Tao nhieu element\n  if (Array.isArray(obj)) {} // Tao mot element\n\n\n  var childElement = document.createElement(element);\n  Object.keys(obj).forEach(function (key) {\n    var objOfKey = obj[key];\n\n    switch (key) {\n      case 'attr':\n        for (var i = 0; i < objOfKey.length; i++) {\n          var valueAttr = objOfKey[i];\n          childElement.setAttribute(valueAttr.key, valueAttr.value);\n        }\n\n        break;\n\n      case 'dataset':\n        for (var _i = 0; _i < objOfKey.length; _i++) {\n          var _valueAttr = objOfKey[_i];\n          childElement.dataset[_valueAttr.key] = _valueAttr.value;\n        }\n\n        break;\n\n      case 'content':\n        childElement.innerHTML = obj[key];\n\n      case 'child':\n        createChildElement(childElement, objOfKey.element, objOfKey.obj);\n    }\n  });\n  parent.appendChild(childElement);\n  return childElement;\n}\nfunction detectSelector(selector) {\n  var firstChar = selector.charAt(0);\n\n  switch (firstChar) {\n    case '.':\n      return document.getElementsByClassName(selector.substring(1))[0];\n\n    case '#':\n      return document.getElementById(selector.substring(1));\n\n    default:\n      var onlyLowercase = /^[a-z]+$/;\n\n      if (onlyLowercase.test(firstChar)) {\n        return document.getElementsByTagName(selector);\n      }\n\n  }\n}\n\n//# sourceURL=webpack:///./utils/core.js?");

/***/ })

/******/ });