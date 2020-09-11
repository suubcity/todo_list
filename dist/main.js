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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* #region css reset */\\nhtml {\\n  box-sizing: border-box;\\n  font-size: 16px;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nol,\\nul {\\n  margin: 0;\\n  padding: 0;\\n  font-weight: normal;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: none;\\n  font: inherit;\\n  color: inherit;\\n  background-color: transparent;\\n  /* show a hand cursor on hover; some argue that we\\n  should keep the default arrow cursor for buttons */\\n  cursor: pointer;\\n}\\n/* #endregion css reset  */\\n\\n/* #region main page   */\\n\\nbody {\\n  background-image: url(\\\"https://res.cloudinary.com/dli7mlkdu/image/upload/c_scale,q_50,w_1920/v1599505389/sharon-mccutcheon-62vi3TG5EDg-unsplash_guyxiy.jpg\\\");\\n  /* Background image is centered vertically and horizontally at all times */\\n  background-position: center center;\\n\\n  /* Background image doesn't tile */\\n  background-repeat: no-repeat;\\n\\n  /* Background image is fixed in the viewport so that it doesn't move when \\n     the content's height is greater than the image's height */\\n  background-attachment: fixed;\\n\\n  /* This is what makes the background image rescale based\\n     on the container's size */\\n  background-size: cover;\\n\\n  /* Set a background color that will be displayed\\n     while the background image is loading */\\n  background-color: whitesmoke;\\n}\\n\\nbody {\\n  font-family: \\\"Inter\\\", sans-serif;\\n  font-weight: bold;\\n}\\n\\n#containerTop {\\n  padding: 1rem;\\n}\\n\\n#container2 {\\n  margin: auto;\\n  background: rgba(243, 243, 243, 0.5);\\n  height: auto;\\n  border-radius: 0 2rem 0 0;\\n  max-width: 800px;\\n  min-height: 93vh;\\n}\\n\\n#header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 1rem;\\n  border-radius: 0 2rem 0 0;\\n  color: black;\\n  background: rgba(220, 220, 220, 0.52);\\n}\\n\\n.button {\\n  padding: 0.2rem;\\n  width: 1.5rem;\\n  height: auto;\\n  cursor: pointer;\\n  filter: invert(0);\\n  transition: filter 0.5s;\\n  opacity: 0.65;\\n}\\n\\n.button:hover {\\n  filter: invert(1);\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  .title {\\n    font-size: 1.5rem;\\n  }\\n  .button {\\n    width: 2rem;\\n    height: auto;\\n  }\\n}\\n\\n.redGlow {\\n  transition: filter 0.5s;\\n  opacity: 0.65;\\n}\\n\\n.redGlow:hover {\\n  filter: invert(1) drop-shadow(0px 0px 5px red);\\n}\\n\\n/* #endregion main page  */\\n\\n/* #region deletePage  */\\n.deletePage {\\n  padding: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 60vh;\\n  /* display: none; */\\n}\\n\\n.deleteMessage {\\n  padding: 1rem;\\n  /* background: rgba(255, 13, 13, 0.3); */\\n}\\n\\np {\\n  font-size: 1.5rem;\\n}\\n\\n\\n\\n.deletePageNav {\\n  padding: 0.2rem 0.5rem;\\n  margin-top: 1rem;\\n  width: 100%;\\n  /* background-color: rgba(0, 0, 0, 0.3); */\\n  display: flex;\\n  justify-content: space-between;\\n  background: rgb(0, 0, 0.3);\\n  background: -moz-linear-gradient(\\n    90deg,\\n    rgba(19, 255, 0, 0.3) 0%,\\n    rgba(255, 0, 0, 0.3) 100%\\n  );\\n  background: -webkit-linear-gradient(\\n    90deg,\\n    rgba(19, 255, 0, 0.3) 0%,\\n    rgba(255, 0, 0, 0.3) 100%\\n  );\\n  background: linear-gradient(\\n    90deg,\\n    rgba(19, 255, 0, 0.3) 0%,\\n    rgba(255, 0, 0, 0.3) 100%\\n  );\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\\\"#13ff00\\\",endColorstr=\\\"#ff0000\\\",GradientType=1);\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\\\"#13ff00\\\",endColorstr=\\\"#ff0000\\\",GradientType=1);\\n}\\n\\n/* #endregion deletePage */\\n\\n/* #region notesPage */\\n#notesPage {\\n  padding: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 60vh;\\n}\\n\\n#notes {\\n  padding: 1rem;\\n}\\n\\n#notes > * {\\n  padding: 0.5rem 0;\\n}\\n\\n#notesNav {\\n  padding: 0.2rem 0.5rem;\\n  background-color: rgba(0, 0, 0, 0.1);\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n/* #endregion notesPage */\\n\\n/* #region todoPage  */\\n\\n#todoPage {\\n  /* display: none; */\\n}\\n\\n#todoNavTop {\\n  font-size: 1rem;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: baseline;\\n  flex-wrap: wrap;\\n  background: rgba(220, 220, 220, 0.52);\\n}\\n#todoNavTop > * {\\n  padding: .2rem .5rem;\\n}\\n\\n.sortButton {\\n  cursor: pointer;\\n  font-weight: 100;\\n  \\n}\\n\\n.sortButton:hover {\\n  font-weight: bold;\\n}\\n\\n#displayByProject {\\n  padding-left: 1rem;\\n  width: 100%;\\n  background: rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: baseline;\\n}\\n#displayByProjectSelect {\\n  margin-left: 1rem;\\n  height: auto;\\n  width: auto;\\n}\\n\\n.todo {\\n  background-color: rgba(100, 6, 6, 0.1);\\n  display: flex;\\n  margin: 0 0 0.2rem 0;\\n}\\n\\n.todoNav {\\n  flex-basis: 7rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 1rem;\\n  /* border: 1px solid black; */\\n}\\n\\n.todoInner {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 1rem 1rem 0.5rem 1rem;\\n  justify-content: space-evenly;\\n  align-items: baseline;\\n  align-content: stretch;\\n}\\n\\n.todoInfo {\\n  padding: 0.2rem 0.4rem;\\n  text-align: left;\\n}\\n\\n.title {\\n  font-size: 1rem;\\n  font-weight: 600;\\n  text-align: center;\\n  flex-basis: 800px;\\n}\\n\\n.priority {\\n  background: rgba(255, 13, 13, 0.3);\\n}\\n\\n/* #endregion to do  */\\n\\n/* #region compleatedTodosPage  */\\n\\n#compleatedTodosPage {\\n  /* display: none; */\\n}\\n\\nhr {\\n  border: 0;\\n  height: 1px;\\n  background: #333;\\n  margin: 1rem 0;\\n}\\n\\n#clearCompleatedTodosNav {\\n  background: rgba(220, 220, 220, 0.52);\\n  padding: 0.2rem 0;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  height: auto;\\n}\\n\\n#clearCompleatedTodosNav > * {\\n  margin: 0 1rem 0 0;\\n}\\n\\n.compleatedTodo {\\n  text-decoration: line-through;\\n}\\n\\n.deleteDoneButton {\\n  transition: filter 0.5s;\\n  opacity: 0.65;\\n}\\n\\n.deleteDoneButton:hover {\\n  filter: invert(1) drop-shadow(0px 0px 5px red);\\n}\\n\\n/* #endregion compleatedTodos */\\n\\n/* #region addEditPage  */\\n#addEditPage {\\n  /* display: none; */\\n  margin: auto;\\n  padding: 1rem;\\n  max-width: 400px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#formContainer {\\n  padding: 0.4rem 0;\\n\\n  line-height: 1.5rem;\\n}\\n\\n#addEditPageNav {\\n  /* background: rgba(0, 0, 0, 0.1); */\\n  width: 100%;\\n  padding: 0.2rem 0.5rem;\\n  display: flex;\\n  justify-content: space-between;\\n\\n  background: rgb(0, 0, 0.3);\\n\\n  background: -moz-linear-gradient(\\n    90deg,\\n    rgba(19, 255, 0, 0.3) 0%,\\n    rgba(0, 0, 0, 0.3) 49%,\\n    rgba(255, 0, 0, 0.3) 100%\\n  );\\n  background: -webkit-linear-gradient(\\n    90deg,\\n    rgba(19, 255, 0, 0.3) 0%,\\n    rgba(0, 0, 0, 0.3) 49%,\\n    rgba(255, 0, 0, 0.3) 100%\\n  );\\n  background: linear-gradient(\\n    90deg,\\n    rgba(19, 255, 0, 0.3) 0%,\\n    rgba(0, 0, 0, 0.3) 49%,\\n    rgba(255, 0, 0, 0.3) 100%\\n  );\\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\\\"#13ff00\\\",endColorstr=\\\"#ff0000\\\",GradientType=1);\\n}\\ninput,\\ntextarea,\\nselect {\\n  background-color: rgba(0, 0, 0, 0.3);\\n  color: white;\\n  border: none;\\n  padding: 0.3rem;\\n  width: 100%;\\n}\\n\\n.buttonContainer {\\n}\\n\\n#saveButton {\\n  transition: filter 0.5s;\\n  opacity: 0.65;\\n}\\n\\n#saveButton:hover {\\n  filter: invert(1) drop-shadow(0px 0px 5px rgba(0, 97, 0, 0.822));\\n}\\n\\n/* #endregion form  */\\n\\n/* css toggles  */\\n\\n.bold {\\n  font-weight: bold;\\n}\\n\\n.hide {\\n  display: none !important;\\n};\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/*! exports provided: displayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayPage\", function() { return displayPage; });\nconst DELETE_TODO_PAGE = document.getElementById(\"deleteTodoPage\");\nconst CLEAR_COMPLEATED_PAGE = document.getElementById(\"clearCompleatedPage\");\nconst NOTES_PAGE = document.getElementById(\"notesPage\");\nconst TODO_PAGE = document.getElementById(\"todoPage\");\nconst ADD_EDIT_PAGE = document.getElementById(\"addEditPage\");\n\nfunction displayPage(pageToDisplay) {\n  let pagesArray = [\n    DELETE_TODO_PAGE,\n    CLEAR_COMPLEATED_PAGE,\n    NOTES_PAGE,\n    TODO_PAGE,\n    ADD_EDIT_PAGE,\n  ];\n  pageToDisplay.classlist.remove(\"hide\");\n  pagesArray.forEach((page) => {\n    if (page !== pageToDisplay) {\n      page.classList.add(\"hide\");\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });