(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

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

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/admin.scss */ "./assets/styles/admin.scss");
/* harmony import */ var _styles_fonts_v1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/fonts-v1.css */ "./assets/styles/fonts-v1.css");
/* harmony import */ var _assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/js/main-v1.js */ "./assets/js/main-v1.js");
/* harmony import */ var _assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_main_v1_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


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

/***/ "./assets/styles/fonts-v1.css":
/*!************************************!*\
  !*** ./assets/styles/fonts-v1.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin.scss":
/*!**********************************!*\
  !*** ./assets/styles/admin.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-5de6b2"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLXYxLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvZm9udHMtdjEuY3NzP2ZkNmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9mb250cy12MS5jc3MnO1xuaW1wb3J0ICcvYXNzZXRzL2pzL21haW4tdjEuanMnO1xuXG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJsZXQgaGFtYnVyZ2VyID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItbW9iaWxlLWJ0bicpO1xubGV0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xubGV0IHN1Ym1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51Jyk7XG5sZXQgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIC8vIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY29udGFpbnMoZS50YXJnZXQpICYmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28tbWVudScpLmNvbnRhaW5zKGUudGFyZ2V0KSkpe1xuICAgIC8vICAgICBhbGVydChcIkNsaWNrZWQgb3V0c2lkZSBsMiBhbmQgbG9nby1tZW51XCIpO1xuICAgIC8vICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuc3R5bGUuaGVpZ2h0PVwiMHB4XCI7IC8vdGhlIHNhbWUgY29kZSB5b3UndmUgdXNlZCB0byBoaWRlIHRoZSBtZW51XG4gICAgLy8gICB9IFxuICAgXG4gICAgbGV0IHBhcmVudE5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmKHBhcmVudE5vZGUuY2xhc3NMaXN0KXtcbiAgIFxuICAgICAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSApe1xuICAgICAgICAgICAgaWYoIWNsaWNrQ2hlY2tNZW51KXtcbiAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSA9PSBlLnRhcmdldCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrQ2hlY2tNZW51KVxuICAgICAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG4gICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xufSlcblxuLy9leHBhbmQgbWVudSBpdGVtc1xubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHMpe1xuICAgICAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgICBxU3VibWVudSA9IGYucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKTtcbiAgICAgICAgcVN1Ym1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pXG59KVxuXG5cblxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBuYXZiYXJVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItdWwnKTtcbiAgICBzb2NpYWxtZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2NpYWxtZWRpYScpO1xuICAgIGNvbnNvbGUubG9nKG5hdmJhclVsLnN0eWxlLmRpc3BsYXkpXG4gICAgaWYobmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiB8fCBuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID09IFwiXCIpe1xuICAgICAgICBuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHNvY2lhbG1lZGlhLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9ZWxzZXtcbiAgICAgICAgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIHNvY2lhbG1lZGlhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KVxuXG4vLyBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4vLyAvLyBsZXQgbWFpbk1hdHJpeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLW1hdHJpeCcpO1xuLy8gbGV0IG1hdHJpeFNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlcm1pbmFsJyk7XG4vLyBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG4vLyBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4vLyB2YXIgc3ZnaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN2Zy1pbWFnZScpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0aWFsYW5pbWF0aW9uKTtcblxuXG5cbi8vICBmdW5jdGlvbiBpbml0aWFsYW5pbWF0aW9uKCl7XG5cbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihmKXtcbi8vICAgICAvL2Rpc3BsYXkgaW5pdGlhbCBob21lcGFnZVxuLy8gICAgICAgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAuNX19KVxuLy8gICAgICAgdGwudG8obWFpbiwgeyBlYXNlOiBcImV4cG9cIiwgb3BhY2l0eTogMX0pO1xuXG4vLyAgICAgLy9kaXNwbGF5IG1vbml0b3IgYW5pbWF0aW9uXG4vLyAgICAgbGV0IGltYWdlaW5kZXggPSAwO1xuLy8gICAgIG1vbml0b3JhbmltYXRpb24oKTtcblxuXG4vLyAgICAgZnVuY3Rpb24gbW9uaXRvcmFuaW1hdGlvbigpe1xuXG4vLyAgICAgICAgIGYgPSBzdmdpbWFnZXNbaW1hZ2VpbmRleF07XG4vLyAgICAgICBjb25zb2xlLmxvZyhmKVxuLy8gICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcblxuLy8gICAgICAgICBmdW5jdGlvbiBjaGFuZ2VpbWFnZShmKXtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgbGV0IGVsZW0gPSBzdmdpbWFnZXNbaW1hZ2VpbmRleF07XG4vLyAgICAgICAgICAgICBpZihmKXtcbi8vICAgICAgICAgICAgICAgICBpZihpbWFnZWluZGV4ID09IDApXG4vLyAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgc3ZnaW1hZ2VzbGVuZ3RoID0gc3ZnaW1hZ2VzLmxlbmd0aDtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHN2Z2ltYWdlc2xlbmdodG1pbnVzID0gc3ZnaW1hZ2VzbGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBzdmdpbWFnZXNbc3ZnaW1hZ2VzbGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIGltYWdlaW5kZXggPSBzdmdpbWFnZXNsZW5ndGggIC0xO1xuXG4gICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHN2Z2ltYWdlc1sraW1hZ2VpbmRleC0xXVxuLy8gICAgICAgICAgICAgICAgICAgICBpbWFnZWluZGV4ID0gK2ltYWdlaW5kZXggLTEgIFxuLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4vLyAgICAgICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAgICAgICBpZihzdmdpbWFnZXMubGVuZ3RoID09ICtpbWFnZWluZGV4ICsgMSlcbi8vICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBzdmdpbWFnZXNbMF1cbi8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VpbmRleCA9IDA7XG4vLyAgICAgICAgICAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBzdmdpbWFnZXNbK2ltYWdlaW5kZXgrMV1cbi8vICAgICAgICAgICAgICAgICAgICAgaW1hZ2VpbmRleCA9ICtpbWFnZWluZGV4ICsxICBcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBjYXJvdXNlbGFuaW1hdGlvbigpXG4gICAgICAgICAgXG4vLyAgICAgICAgICAgICBmdW5jdGlvbiBjYXJvdXNlbGFuaW1hdGlvbigpe1xuLy8gICAgICAgICAgICAgICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogMX19KVxuLy8gICAgICAgICAgICAgICAgIHRsLnRvKGVsZW0sIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMH0pXG4vLyAgICAgICAgICAgICAgICAgdGwudG8obmV4dCwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAxLCBkZWxheTogLS45fSlcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICB9XG4vLyAgICAgICB9ICAgICAgICAgXG4vLyAgIH0pO1xuXG4gICAgICAgIFxuXG4vLyB9XG5cbi8vICBjaGVja2JveGVzLmZvckVhY2goZnVuY3Rpb24oZSl7XG4vLyAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbi8vICAgICAgICBpZihlLmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpID09ICAnY2hlY2tlZCcpe1xuLy8gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIG51bGwpIDtcbiAgICAgICAgICBcbi8vICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDtcbi8vICAgICAgICB9XG4vLyAgICB9KVxuLy8gfSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdWJtZW51SXRlbXMiLCJjbGlja0NoZWNrTWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicGFyZW50Tm9kZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJzIiwic3R5bGUiLCJkaXNwbGF5IiwiZiIsInFTdWJtZW51IiwibmF2YmFyVWwiLCJzb2NpYWxtZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=