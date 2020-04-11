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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/form */ \"./js/views/form.js\");\n\n\nvar container = document.querySelectorAll(\".js-cell\");\nvar btnTask = document.querySelector(\".js-task\");\nvar btnProgress = document.querySelector(\".js-progress\");\nvar btnComplete = document.querySelector(\".js-complete\"); // events\n\nbtnTask.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  _views_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showForm(\"taskForm\");\n});\nbtnProgress.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  _views_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showForm(\"progressForm\");\n});\nbtnComplete.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  _views_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showForm(\"activeForm\");\n});\ncontainer.forEach(function (el) {\n  el.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var name = e.target.name;\n    _views_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(name);\n    _views_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTask();\n  });\n}); // Heandlers\n// dragAndDrop();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/store/cardStore.js":
/*!*******************************!*\
  !*** ./js/store/cardStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CardStore = /*#__PURE__*/function () {\n  function CardStore() {\n    _classCallCheck(this, CardStore);\n\n    this.arrTask = [];\n    this.arrProgress = [];\n    this.arrComplete = [];\n  }\n\n  _createClass(CardStore, [{\n    key: \"addArrTask\",\n    value: function addArrTask(card) {\n      this.arrTask.push(card);\n    }\n  }, {\n    key: \"addArrProgress\",\n    value: function addArrProgress(card) {\n      this.arrProgress.push(card);\n    }\n  }, {\n    key: \"addArrComplete\",\n    value: function addArrComplete(card) {\n      this.arrComplete.push(card);\n    }\n  }, {\n    key: \"getArrTask\",\n    value: function getArrTask() {\n      return this.arrTask;\n    }\n  }, {\n    key: \"getArrProgress\",\n    value: function getArrProgress() {\n      return this.arrProgress;\n    }\n  }, {\n    key: \"getArrComplete\",\n    value: function getArrComplete() {\n      return this.arrComplete;\n    }\n  }]);\n\n  return CardStore;\n}();\n\nvar cardStore = new CardStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (cardStore);\n\n//# sourceURL=webpack:///./js/store/cardStore.js?");

/***/ }),

/***/ "./js/views/dragAndDrop.js":
/*!*********************************!*\
  !*** ./js/views/dragAndDrop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction dragAndDrop() {\n  var container = document.querySelectorAll(\".js-cell\");\n  var cards = document.querySelectorAll(\".js-card\");\n  var card; // events\n\n  container.forEach(function (cell) {\n    cell.addEventListener(\"dragover\", dragOver);\n    cell.addEventListener(\"dragenter\", dragEnter);\n    cell.addEventListener(\"dragleave\", dragLeave);\n    cell.addEventListener(\"drop\", dragDrop);\n  });\n  cards.forEach(function (card) {\n    card.addEventListener(\"dragstart\", dragStart);\n    card.addEventListener(\"dragend\", dragEnd);\n  });\n\n  function dragStart() {\n    var _this = this;\n\n    card = this;\n    setTimeout(function () {\n      _this.classList.add(\"hide\");\n    }, 0);\n  }\n\n  function dragEnd() {\n    this.classList.remove(\"hide\");\n    card = 0;\n  }\n\n  function dragOver(e) {\n    e.preventDefault();\n    this.style = \"min-height: 250px\";\n  }\n\n  function dragEnter(e) {\n    e.preventDefault();\n    this.classList.add(\"hovered\");\n  }\n\n  function dragLeave() {\n    this.classList.remove(\"hovered\");\n    this.style = \"height: auto\";\n  }\n\n  function dragDrop() {\n    if (this.id === \"progressC\") {\n      card.classList.remove(\"green\");\n      card.classList.add(\"red\");\n    }\n\n    if (this.id === \"completeC\") {\n      card.classList.remove(\"red\");\n      card.classList.add(\"green\");\n    }\n\n    if (this.id === \"taskC\") {\n      card.classList.remove(\"green\");\n      card.classList.remove(\"red\");\n    }\n\n    this.appendChild(card);\n    this.classList.remove(\"hovered\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dragAndDrop);\n\n//# sourceURL=webpack:///./js/views/dragAndDrop.js?");

/***/ }),

/***/ "./js/views/form.js":
/*!**************************!*\
  !*** ./js/views/form.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_cardStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/cardStore */ \"./js/store/cardStore.js\");\n/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDrop */ \"./js/views/dragAndDrop.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar FormUI = /*#__PURE__*/function () {\n  function FormUI() {\n    _classCallCheck(this, FormUI);\n\n    this.form = null;\n    this.title = null;\n    this.body = null;\n    this.container = null;\n  }\n\n  _createClass(FormUI, [{\n    key: \"init\",\n    value: function init(name) {\n      this.form = document.forms[\"\".concat(name)];\n      this.container = this.form.parentElement;\n      this.title = this.form.elements[\"inputTitle\"];\n      this.body = this.form.elements[\"inputBody\"];\n      this.form.classList.toggle(\"active\");\n    }\n  }, {\n    key: \"pushCardInArr\",\n    value: function pushCardInArr() {\n      if (this.container.id === \"taskC\") {\n        _store_cardStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addArrTask(formUI.transformCardInObj(this.title.value, this.body.value));\n      }\n\n      if (this.container.id === \"progressC\") {\n        _store_cardStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addArrProgress(formUI.transformCardInObj(this.title.value, this.body.value));\n      }\n\n      if (this.container.id === \"completeC\") {\n        _store_cardStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addArrComplete(formUI.transformCardInObj(this.title.value, this.body.value));\n      }\n    }\n  }, {\n    key: \"transformCardInObj\",\n    value: function transformCardInObj(title, body) {\n      return {\n        _id: \"\".concat(Math.random()),\n        title: title,\n        body: body\n      };\n    }\n  }, {\n    key: \"showForm\",\n    value: function showForm(name) {\n      this.form = document.forms[\"\".concat(name)];\n      this.form.classList.toggle(\"active\");\n    }\n  }, {\n    key: \"renderTask\",\n    value: function renderTask() {\n      var title = this.title.value;\n      var body = this.body.value;\n\n      if (!title) {\n        alert(\"Введите название задачи!\");\n        return;\n      }\n\n      if (!body) {\n        alert(\"Введите описание задачи!\");\n        return;\n      }\n\n      var fragment = FormUI.templateTask(title, body);\n      this.container.insertAdjacentHTML(\"beforeend\", fragment);\n      Object(_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      formUI.pushCardInArr();\n    }\n  }], [{\n    key: \"templateTask\",\n    value: function templateTask(title, body) {\n      return \"\\n    <div class=\\\"list-card js-card\\\" draggable=\\\"true\\\">\\n    <div class=\\\"list-card__title\\\">\".concat(title, \"</div>\\n    <div class=\\\"list-card__info\\\">\").concat(body, \"</div>\\n  </div>\\n    \");\n    }\n  }]);\n\n  return FormUI;\n}();\n\nvar formUI = new FormUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (formUI);\n\n//# sourceURL=webpack:///./js/views/form.js?");

/***/ })

/******/ });