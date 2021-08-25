(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/main-v1.js */ "./assets/js/main-v1.js");
/* harmony import */ var _assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // import './styles/_media.scss';
// import './styles/fonts-v1.css';

 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/main-v1.js":
/*!******************************!*\
  !*** ./assets/js/main-v1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var hamburger = document.querySelector('#navbar-mobile-btn');
var menuItems = document.querySelectorAll('.dropdown');
var submenuItems = document.querySelectorAll('.submenu');
var clickCheckMenu = null;
document.addEventListener('click', function (e) {
  // if (!document.getElementById('l2').contains(e.target) && (!document.getElementById('logo-menu').contains(e.target))){
  //     alert("Clicked outside l2 and logo-menu");
  //      document.getElementById('l2').style.height="0px"; //the same code you've used to hide the menu
  //   } 
  var parentNode = e.target.parentNode;

  if (parentNode.classList) {
    if (parentNode.classList.contains('dropdown')) {
      if (!clickCheckMenu) {
        clickCheckMenu = e.target;
        return;
      } else {
        if (!clickCheckMenu == e.target) {
          console.log(clickCheckMenu);
          clickCheckMenu = null;
        }
      }
    }
  }

  submenuItems.forEach(function (s) {
    s.style.display = 'none';
  });
  clickCheckMenu = null;
}); //expand menu items

menuItems.forEach(function (f) {
  f.addEventListener('click', function (e) {
    // e.preventDefault();
    submenuItems.forEach(function (s) {
      s.style.display = 'none';
    });
    qSubmenu = f.querySelector('.submenu');
    qSubmenu.style.display = "flex";
  });
});
hamburger.addEventListener('click', function () {
  navbarUl = document.querySelector('#navbar-ul');
  socialmedia = document.querySelector('#socialmedia');
  console.log(navbarUl.style.display);

  if (navbarUl.style.display == "none" || navbarUl.style.display == "") {
    navbarUl.style.display = "flex";
    socialmedia.style.display = "flex";
  } else {
    navbarUl.style.display = "none";
    socialmedia.style.display = "none";
  }
}); // let main = document.querySelector('#main');
// // let mainMatrix = document.querySelector('#main-matrix');
// let matrixSpans = document.querySelectorAll('.terminal');
// let overlay = document.querySelector('#overlay');
// let checkboxes = document.querySelectorAll('input[type=checkbox]');
// var svgimages = document.querySelectorAll('.svg-image');
// document.addEventListener("DOMContentLoaded", initialanimation);
//  function initialanimation(){
//   window.addEventListener('load', function(f){
//     //display initial homepage
//       tl = gsap.timeline({ defaults:{duration: .5}})
//       tl.to(main, { ease: "expo", opacity: 1});
//     //display monitor animation
//     let imageindex = 0;
//     monitoranimation();
//     function monitoranimation(){
//         f = svgimages[imageindex];
//       console.log(f)
//         chimageinterval = setInterval(changeimage, 5000)
//         function changeimage(f){
//             let elem = svgimages[imageindex];
//             if(f){
//                 if(imageindex == 0)
//                 {
//                     let svgimageslength = svgimages.length;
//                     // let svgimageslenghtminus = svgimageslength - 1
//                     next = svgimages[svgimageslength - 1]
//                     imageindex = svgimageslength  -1;
//                 }else{
//                     next = svgimages[+imageindex-1]
//                     imageindex = +imageindex -1  
//                 }
//             }else{
//                 if(svgimages.length == +imageindex + 1)
//                 {
//                     next = svgimages[0]
//                     imageindex = 0;
//                 }else{
//                     next = svgimages[+imageindex+1]
//                     imageindex = +imageindex +1  
//                 }
//             }
//             carouselanimation()
//             function carouselanimation(){
//                 tl = gsap.timeline({ defaults:{duration: 1}})
//                 tl.to(elem, { ease: "power2", opacity: 0})
//                 tl.to(next, { ease: "power2", opacity: 1, delay: -.9})
//             }
//         }
//       }         
//   });
// }
//  checkboxes.forEach(function(e){
//    e.addEventListener('click', function(){
//        if(e.getAttribute('checked') ==  'checked'){
//            e.setAttribute('checked', null) ;
//        }else{
//            e.setAttribute('checked', 'checked') ;
//        }
//    })
// })

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-5de6b2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFYO0FBQ0FvQixFQUFBQSxXQUFXLEdBQUdyQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZDtBQUNBVyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sUUFBUSxDQUFDSixLQUFULENBQWVDLE9BQTNCOztBQUNBLE1BQUdHLFFBQVEsQ0FBQ0osS0FBVCxDQUFlQyxPQUFmLElBQTBCLE1BQTFCLElBQW9DRyxRQUFRLENBQUNKLEtBQVQsQ0FBZUMsT0FBZixJQUEwQixFQUFqRSxFQUFvRTtBQUNoRUcsSUFBQUEsUUFBUSxDQUFDSixLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDQUksSUFBQUEsV0FBVyxDQUFDTCxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixNQUE1QjtBQUNILEdBSEQsTUFHSztBQUNERyxJQUFBQSxRQUFRLENBQUNKLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNBSSxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0g7QUFDSixDQVhELEdBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xKQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLihqfHQpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLXYxLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gaW1wb3J0ICcuL3N0eWxlcy9fbWVkaWEuc2Nzcyc7XG5cbi8vIGltcG9ydCAnLi9zdHlsZXMvZm9udHMtdjEuY3NzJztcbmltcG9ydCAnL2Fzc2V0cy9qcy9tYWluLXYxLmpzJztcblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwibGV0IGhhbWJ1cmdlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLW1vYmlsZS1idG4nKTtcbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbmxldCBzdWJtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudScpO1xubGV0IGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAvLyBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLW1lbnUnKS5jb250YWlucyhlLnRhcmdldCkpKXtcbiAgICAvLyAgICAgYWxlcnQoXCJDbGlja2VkIG91dHNpZGUgbDIgYW5kIGxvZ28tbWVudVwiKTtcbiAgICAvLyAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLnN0eWxlLmhlaWdodD1cIjBweFwiOyAvL3RoZSBzYW1lIGNvZGUgeW91J3ZlIHVzZWQgdG8gaGlkZSB0aGUgbWVudVxuICAgIC8vICAgfSBcbiAgIFxuICAgIGxldCBwYXJlbnROb2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdCl7XG4gICBcbiAgICAgICAgaWYocGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgKXtcbiAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSl7XG4gICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZighY2xpY2tDaGVja01lbnUgPT0gZS50YXJnZXQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja0NoZWNrTWVudSlcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VibWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24ocyl7XG4gICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuICAgIGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbn0pXG5cbi8vZXhwYW5kIG1lbnUgaXRlbXNcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgcVN1Ym1lbnUgPSBmLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51Jyk7XG4gICAgICAgIHFTdWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxufSlcblxuXG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmF2YmFyVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJyk7XG4gICAgc29jaWFsbWVkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKTtcbiAgICBjb25zb2xlLmxvZyhuYXZiYXJVbC5zdHlsZS5kaXNwbGF5KVxuICAgIGlmKG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgfHwgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9PSBcIlwiKXtcbiAgICAgICAgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfWVsc2V7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuLy8gbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuLy8gLy8gbGV0IG1haW5NYXRyaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1tYXRyaXgnKTtcbi8vIGxldCBtYXRyaXhTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXJtaW5hbCcpO1xuLy8gbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xuLy8gbGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuLy8gdmFyIHN2Z2ltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdmctaW1hZ2UnKTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdGlhbGFuaW1hdGlvbik7XG5cblxuXG4vLyAgZnVuY3Rpb24gaW5pdGlhbGFuaW1hdGlvbigpe1xuXG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZil7XG4vLyAgICAgLy9kaXNwbGF5IGluaXRpYWwgaG9tZXBhZ2Vcbi8vICAgICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogLjV9fSlcbi8vICAgICAgIHRsLnRvKG1haW4sIHsgZWFzZTogXCJleHBvXCIsIG9wYWNpdHk6IDF9KTtcblxuLy8gICAgIC8vZGlzcGxheSBtb25pdG9yIGFuaW1hdGlvblxuLy8gICAgIGxldCBpbWFnZWluZGV4ID0gMDtcbi8vICAgICBtb25pdG9yYW5pbWF0aW9uKCk7XG5cblxuLy8gICAgIGZ1bmN0aW9uIG1vbml0b3JhbmltYXRpb24oKXtcblxuLy8gICAgICAgICBmID0gc3ZnaW1hZ2VzW2ltYWdlaW5kZXhdO1xuLy8gICAgICAgY29uc29sZS5sb2coZilcbi8vICAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG5cbi8vICAgICAgICAgZnVuY3Rpb24gY2hhbmdlaW1hZ2UoZil7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIGxldCBlbGVtID0gc3ZnaW1hZ2VzW2ltYWdlaW5kZXhdO1xuLy8gICAgICAgICAgICAgaWYoZil7XG4vLyAgICAgICAgICAgICAgICAgaWYoaW1hZ2VpbmRleCA9PSAwKVxuLy8gICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IHN2Z2ltYWdlc2xlbmd0aCA9IHN2Z2ltYWdlcy5sZW5ndGg7XG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBzdmdpbWFnZXNsZW5naHRtaW51cyA9IHN2Z2ltYWdlc2xlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc3ZnaW1hZ2VzW3N2Z2ltYWdlc2xlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZWluZGV4ID0gc3ZnaW1hZ2VzbGVuZ3RoICAtMTtcblxuICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBzdmdpbWFnZXNbK2ltYWdlaW5kZXgtMV1cbi8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VpbmRleCA9ICtpbWFnZWluZGV4IC0xICBcbi8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuLy8gICAgICAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgICAgICAgaWYoc3ZnaW1hZ2VzLmxlbmd0aCA9PSAraW1hZ2VpbmRleCArIDEpXG4vLyAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc3ZnaW1hZ2VzWzBdXG4vLyAgICAgICAgICAgICAgICAgICAgIGltYWdlaW5kZXggPSAwO1xuLy8gICAgICAgICAgICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICAgICAgICAgICBuZXh0ID0gc3ZnaW1hZ2VzWytpbWFnZWluZGV4KzFdXG4vLyAgICAgICAgICAgICAgICAgICAgIGltYWdlaW5kZXggPSAraW1hZ2VpbmRleCArMSAgXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgY2Fyb3VzZWxhbmltYXRpb24oKVxuICAgICAgICAgIFxuLy8gICAgICAgICAgICAgZnVuY3Rpb24gY2Fyb3VzZWxhbmltYXRpb24oKXtcbi8vICAgICAgICAgICAgICAgICB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IDF9fSlcbi8vICAgICAgICAgICAgICAgICB0bC50byhlbGVtLCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDB9KVxuLy8gICAgICAgICAgICAgICAgIHRsLnRvKG5leHQsIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMSwgZGVsYXk6IC0uOX0pXG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgfVxuLy8gICAgICAgfSAgICAgICAgIFxuLy8gICB9KTtcblxuICAgICAgICBcblxuLy8gfVxuXG4vLyAgY2hlY2tib3hlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuLy8gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSA9PSAgJ2NoZWNrZWQnKXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBudWxsKSA7XG4gICAgICAgICAgXG4vLyAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA7XG4vLyAgICAgICAgfVxuLy8gICAgfSlcbi8vIH0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3VibWVudUl0ZW1zIiwiY2xpY2tDaGVja01lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBhcmVudE5vZGUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwicyIsInN0eWxlIiwiZGlzcGxheSIsImYiLCJxU3VibWVudSIsIm5hdmJhclVsIiwic29jaWFsbWVkaWEiXSwic291cmNlUm9vdCI6IiJ9