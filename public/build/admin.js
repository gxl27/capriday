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
/* harmony import */ var _assets_js_admin_v1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/admin-v1.js */ "./assets/js/admin-v1.js");
/* harmony import */ var _assets_js_admin_v1_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_admin_v1_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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

/***/ "./assets/js/admin-v1.js":
/*!*******************************!*\
  !*** ./assets/js/admin-v1.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

var hamburger = document.querySelector('#navbar-mobile-btn');
var menuItems = document.querySelectorAll('.dropdown');
var submenuItems = document.querySelectorAll('.submenu');
var clickCheckMenu = null; // set link to the logo for the homepage

var logoContainer = document.querySelector('#logo-container'); // get submenu links

var menuLi = document.querySelectorAll('.submenu a'); //get the height of the navbar for the scrolling effect

window.heightnavbar = document.querySelector('nav').style.height; //loginbar minimize

var loginbar = document.querySelector('#loginbar');
var minimize = document.querySelector('.minimize'); // check match media to prevent elements 

if (matchMedia) {
  var mq = window.matchMedia("(max-width: 1189px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
} // media query change


function WidthChange(mq) {
  if (mq.matches) {
    //phone
    initialphone();
  } else {
    initialpc(); // pc
    // 
  }
}

function initialpc() {
  // this function prevents the "display:none" if the viewport change
  document.querySelector('#navbar-ul').style.display = "flex";
  document.querySelector('#socialmedia').style.display = "flex";
}

function initialphone() {
  // this function prevents the "display:flex" if the viewport change
  document.querySelector('#navbar-ul').style.display = "none";
}

logoContainer.addEventListener('click', function (e) {
  window.location.pathname = "/home";
});
document.addEventListener('click', function (e) {
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
}); // mobile btn

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
}); //upscreen

var upScreen = document.querySelector('#up-screen');
window.addEventListener('scroll', function (e) {
  y = window.scrollY;

  if (y > 150) {
    upScreen.style.display = 'initial';
  } else {
    upScreen.style.display = 'none';
  }
}); // menu items scroll on click

menuLi.forEach(function (e) {
  e.addEventListener('click', function () {
    if (e.dataset.scroll) {
      link = e.dataset.scroll;
      element = document.querySelector(link); // document.querySelector(link).scrollIntoView();

      if (window.location.pathname == e.dataset.route) {
        console.log('xxx');
        scrollToTargetAdjusted(element);
      } else {
        // console.log(e.dataset.route)
        // console.log(e.dataset.scroll)
        // console.log()
        var route = e.dataset.route + e.dataset.scroll;
        window.location = route;
      }
    }
  });
});

function scrollToTargetAdjusted(scrolledelement) {
  console.log(scrolledelement);
  var body = document.body.getBoundingClientRect().top;
  var headerOffset = window.heightnavbar;
  var elementPosition = scrolledelement.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset - body;

  if (headerOffset == 0 && scrolledelement.id == "s-acasa") {
    offsetPosition = 0;
  }

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

logoContainer.addEventListener('click', function (e) {
  window.location.pathname = "/admin";
}); //
// initialize homeinitial (where all the functions are running) after the page loads

document.addEventListener("DOMContentLoaded", homeinitial);

function homeinitial() {
  // home carousel
  var banner = document.querySelector("#banner");

  if (!banner) {
    return;
  }

  var homecarouselindex = 0;
  var homeleftarrow = banner.querySelector('.carousel-arrow-left');
  var homerightarrow = banner.querySelector('.carousel-arrow-right');
  var homeslider = banner.querySelectorAll('.carousel-slide');
  var homebullet = banner.querySelectorAll('.carousel-bullets');
  var firstBulletColor = homebullet[0].style;
  console.log(firstBulletColor);
  homeleftarrow.addEventListener('click', function () {
    clearInterval(chimageinterval);
    changeimage(1);
    chimageinterval = setInterval(changeimage, 5000);
  });
  homerightarrow.addEventListener('click', function () {
    clearInterval(chimageinterval);
    changeimage();
    chimageinterval = setInterval(changeimage, 5000);
  });
  f = homeslider[homecarouselindex];
  chimageinterval = setInterval(changeimage, 5000);

  function changeimage(f) {
    var elem = homeslider[homecarouselindex];

    if (f) {
      if (homecarouselindex == 0) {
        var homesliderlength = homeslider.length; // let homesliderlenghtminus = homesliderlength - 1

        next = homeslider[homesliderlength - 1];
        bullet = homebullet[homesliderlength - 1];
        homecarouselindex = homesliderlength - 1;
      } else {
        next = homeslider[+homecarouselindex - 1];
        bullet = homebullet[+homecarouselindex - 1];
        homecarouselindex = +homecarouselindex - 1;
      }
    } else {
      if (homeslider.length == +homecarouselindex + 1) {
        next = homeslider[0];
        bullet = homebullet[0];
        homecarouselindex = 0;
      } else {
        next = homeslider[+homecarouselindex + 1];
        bullet = homebullet[+homecarouselindex + 1];
        homecarouselindex = +homecarouselindex + 1;
      }
    } //clear indexes to prevent overlapping


    clearcarouselindexes(); //start carousel animation

    carouselanimation();
    homebullet.forEach(function (h) {
      h.style.backgroundColor = "white";
    });
    bullet.style.backgroundColor = "#2f8638";

    function clearcarouselindexes() {
      homeslider.forEach(function (e) {
        e.style.zIndex = "9";
      });
    }

    function carouselanimation() {
      // setTimeout(function(){
      //     elem.style.opacity = 0;
      // }, 300)
      // next.style.opacity = 1;
      next.style.zIndex = 10;
      tl = gsap.timeline({
        defaults: {
          duration: 1
        }
      });
      tl.to(elem, {
        ease: "power2",
        opacity: 0
      });
      tl.to(next, {
        ease: "power2",
        opacity: 1,
        delay: -.9
      });
    }
  }
} //  checkboxes.forEach(function(e){
//    e.addEventListener('click', function(){
//        if(e.getAttribute('checked') ==  'checked'){
//            e.setAttribute('checked', null) ;
//        }else{
//            e.setAttribute('checked', 'checked') ;
//        }
//    })
// })

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-416949"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFYLENBQW1CLFVBQVNULENBQVQsRUFBVztBQUMxQkEsUUFBQUEsQ0FBQyxDQUFDYixLQUFGLENBQVFtRSxNQUFSLEdBQWlCLEdBQWpCO0FBQ0gsT0FGRDtBQUdIOztBQUVELGFBQVNILGlCQUFULEdBQTRCO0FBQ3hCO0FBQ0E7QUFDQTtBQUVBO0FBQ0FILE1BQUFBLElBQUksQ0FBQzdELEtBQUwsQ0FBV21FLE1BQVgsR0FBb0IsRUFBcEI7QUFFQUMsTUFBQUEsRUFBRSxHQUFHQyxJQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFQyxRQUFBQSxRQUFRLEVBQUM7QUFBQ0MsVUFBQUEsUUFBUSxFQUFFO0FBQVg7QUFBWCxPQUFkLENBQUw7QUFDQUosTUFBQUEsRUFBRSxDQUFDSyxFQUFILENBQU1mLElBQU4sRUFBWTtBQUFFZ0IsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLE9BQU8sRUFBRTtBQUEzQixPQUFaO0FBQ0FQLE1BQUFBLEVBQUUsQ0FBQ0ssRUFBSCxDQUFNWixJQUFOLEVBQVk7QUFBRWEsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLE9BQU8sRUFBRSxDQUEzQjtBQUE4QkMsUUFBQUEsS0FBSyxFQUFDLENBQUM7QUFBckMsT0FBWjtBQUVIO0FBQ0o7QUFDSixFQUVEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4tdjEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuaW1wb3J0ICcvYXNzZXRzL2pzL2FkbWluLXYxLmpzJztcblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwibGV0IGhhbWJ1cmdlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLW1vYmlsZS1idG4nKTtcbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbmxldCBzdWJtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudScpO1xubGV0IGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbi8vIHNldCBsaW5rIHRvIHRoZSBsb2dvIGZvciB0aGUgaG9tZXBhZ2VcbmxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28tY29udGFpbmVyJyk7XG4vLyBnZXQgc3VibWVudSBsaW5rc1xubGV0IG1lbnVMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51IGEnKVxuLy9nZXQgdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyIGZvciB0aGUgc2Nyb2xsaW5nIGVmZmVjdFxud2luZG93LmhlaWdodG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLnN0eWxlLmhlaWdodDtcbi8vbG9naW5iYXIgbWluaW1pemVcbmxldCBsb2dpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbmJhcicpXG5sZXQgbWluaW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluaW1pemUnKVxuXG5cbi8vIGNoZWNrIG1hdGNoIG1lZGlhIHRvIHByZXZlbnQgZWxlbWVudHMgXG5pZiAobWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTg5cHgpXCIpO1xuICAgIFxuICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICBXaWR0aENoYW5nZShtcSk7XG4gIH1cbiBcbiAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgICAgLy9waG9uZVxuICAgICAgICBpbml0aWFscGhvbmUoKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxwYygpO1xuICAgICAgLy8gcGNcbiAgICAvLyBcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGluaXRpYWxwYygpe1xuICAgIC8vIHRoaXMgZnVuY3Rpb24gcHJldmVudHMgdGhlIFwiZGlzcGxheTpub25lXCIgaWYgdGhlIHZpZXdwb3J0IGNoYW5nZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItdWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbn1cblxuZnVuY3Rpb24gaW5pdGlhbHBob25lKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5OmZsZXhcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxufVxuXG5sb2dvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvaG9tZVwiO1xufSlcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCBwYXJlbnROb2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdCl7XG4gICBcbiAgICAgICAgaWYocGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgKXtcbiAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSl7XG4gICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZighY2xpY2tDaGVja01lbnUgPT0gZS50YXJnZXQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja0NoZWNrTWVudSlcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VibWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24ocyl7XG4gICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuICAgIGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbn0pXG5cbi8vZXhwYW5kIG1lbnUgaXRlbXNcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgcVN1Ym1lbnUgPSBmLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51Jyk7XG4gICAgICAgIHFTdWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxufSlcblxuXG4vLyBtb2JpbGUgYnRuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG5hdmJhclVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpO1xuICAgIHNvY2lhbG1lZGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvY2lhbG1lZGlhJyk7XG4gICAgY29uc29sZS5sb2cobmF2YmFyVWwuc3R5bGUuZGlzcGxheSlcbiAgICBpZihuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiIHx8IG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJcIil7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1lbHNle1xuICAgICAgICBuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pXG5cbi8vdXBzY3JlZW5cbmNvbnN0IHVwU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwLXNjcmVlbicpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xuICAgIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZih5ID4gMTUwKXtcbiAgICAgICAgdXBTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcblxuICAgIH1lbHNle1xuICAgICAgICB1cFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufSlcblxuXG4vLyBtZW51IGl0ZW1zIHNjcm9sbCBvbiBjbGlja1xubWVudUxpLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGUuZGF0YXNldC5zY3JvbGwpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5rID0gZS5kYXRhc2V0LnNjcm9sbDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IGUuZGF0YXNldC5yb3V0ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3h4eCcpO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoZWxlbWVudCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGFzZXQucm91dGUpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0LnNjcm9sbClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gZS5kYXRhc2V0LnJvdXRlICsgZS5kYXRhc2V0LnNjcm9sbFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvdXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoc2Nyb2xsZWRlbGVtZW50KXtcbiAgICBjb25zb2xlLmxvZyhzY3JvbGxlZGVsZW1lbnQpXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgIGxldCBoZWFkZXJPZmZzZXQgPSB3aW5kb3cuaGVpZ2h0bmF2YmFyO1xuICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxlZGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGxldCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbiAtIGhlYWRlck9mZnNldCAtIGJvZHk7XG4gICAgaWYoaGVhZGVyT2Zmc2V0ID09IDAgJiYgc2Nyb2xsZWRlbGVtZW50LmlkID09IFwicy1hY2FzYVwiKXtcbiAgICAgICAgb2Zmc2V0UG9zaXRpb24gPSAwO1xuICAgIH1cblxuXG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgIH0pO1xufVxuXG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9hZG1pblwiO1xufSlcblxuLy9cbi8vIGluaXRpYWxpemUgaG9tZWluaXRpYWwgKHdoZXJlIGFsbCB0aGUgZnVuY3Rpb25zIGFyZSBydW5uaW5nKSBhZnRlciB0aGUgcGFnZSBsb2Fkc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaG9tZWluaXRpYWwpO1xuXG5cblxuZnVuY3Rpb24gaG9tZWluaXRpYWwoKXtcbiAgICAvLyBob21lIGNhcm91c2VsXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFubmVyXCIpXG4gICAgaWYoIWJhbm5lcil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGhvbWVjYXJvdXNlbGluZGV4ID0gMDtcbiAgICBsZXQgaG9tZWxlZnRhcnJvdyA9IGJhbm5lci5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtYXJyb3ctbGVmdCcpO1xuICAgIGxldCBob21lcmlnaHRhcnJvdz0gYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy1yaWdodCcpO1xuICAgIGxldCBob21lc2xpZGVyID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1zbGlkZScpO1xuICAgIGxldCBob21lYnVsbGV0ID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1idWxsZXRzJyk7XG4gICAgXG4gICAgY29uc3QgZmlyc3RCdWxsZXRDb2xvciA9IGhvbWVidWxsZXRbMF0uc3R5bGU7XG4gICAgY29uc29sZS5sb2coZmlyc3RCdWxsZXRDb2xvcilcbiAgICBob21lbGVmdGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjbGVhckludGVydmFsKGNoaW1hZ2VpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZWltYWdlKDEpO1xuICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcbiAgICAgICAgXG4gICAgfSlcbiAgICAgICAgXG4gICAgaG9tZXJpZ2h0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hpbWFnZWludGVydmFsKTtcbiAgICAgICAgY2hhbmdlaW1hZ2UoKTtcbiAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG4gICAgfSlcblxuXG4gICAgZiA9IGhvbWVzbGlkZXJbaG9tZWNhcm91c2VsaW5kZXhdO1xuXG4gICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VpbWFnZShmKXtcblxuICAgICAgICBsZXQgZWxlbSA9IGhvbWVzbGlkZXJbaG9tZWNhcm91c2VsaW5kZXhdO1xuICAgICAgICBpZihmKXtcbiAgICAgICAgICAgIGlmKGhvbWVjYXJvdXNlbGluZGV4ID09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGhvbWVzbGlkZXJsZW5ndGggPSBob21lc2xpZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaG9tZXNsaWRlcmxlbmdodG1pbnVzID0gaG9tZXNsaWRlcmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbaG9tZXNsaWRlcmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFtob21lc2xpZGVybGVuZ3RoIC0gMV1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gaG9tZXNsaWRlcmxlbmd0aCAgLTE7XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclsraG9tZWNhcm91c2VsaW5kZXgtMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0Wytob21lY2Fyb3VzZWxpbmRleC0xXVxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gK2hvbWVjYXJvdXNlbGluZGV4IC0xICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoaG9tZXNsaWRlci5sZW5ndGggPT0gK2hvbWVjYXJvdXNlbGluZGV4ICsgMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclswXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbMF1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWytob21lY2Fyb3VzZWxpbmRleCsxXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbK2hvbWVjYXJvdXNlbGluZGV4KzFdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9ICtob21lY2Fyb3VzZWxpbmRleCArMSAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jbGVhciBpbmRleGVzIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmdcbiAgICAgICAgY2xlYXJjYXJvdXNlbGluZGV4ZXMoKVxuXG4gICAgICAgIC8vc3RhcnQgY2Fyb3VzZWwgYW5pbWF0aW9uXG5cbiAgICAgICAgXG4gICAgICAgIGNhcm91c2VsYW5pbWF0aW9uKClcblxuICAgICAgICBob21lYnVsbGV0LmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICBoLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgYnVsbGV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJmODYzOFwiO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyY2Fyb3VzZWxpbmRleGVzKCl7XG4gICAgICAgICAgICBob21lc2xpZGVyLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS56SW5kZXggPSBcIjlcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYXJvdXNlbGFuaW1hdGlvbigpe1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAvLyB9LCAzMDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG5leHQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBuZXh0LnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBcbiAgICAgICAgICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogMX19KVxuICAgICAgICAgICAgdGwudG8oZWxlbSwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAwfSlcbiAgICAgICAgICAgIHRsLnRvKG5leHQsIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMSwgZGVsYXk6LS45fSlcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyAgY2hlY2tib3hlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuLy8gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSA9PSAgJ2NoZWNrZWQnKXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBudWxsKSA7XG4gICAgICAgICAgXG4vLyAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA7XG4vLyAgICAgICAgfVxuLy8gICAgfSlcbi8vIH0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3VibWVudUl0ZW1zIiwiY2xpY2tDaGVja01lbnUiLCJsb2dvQ29udGFpbmVyIiwibWVudUxpIiwid2luZG93IiwiaGVpZ2h0bmF2YmFyIiwic3R5bGUiLCJoZWlnaHQiLCJsb2dpbmJhciIsIm1pbmltaXplIiwibWF0Y2hNZWRpYSIsIm1xIiwiYWRkTGlzdGVuZXIiLCJXaWR0aENoYW5nZSIsIm1hdGNoZXMiLCJpbml0aWFscGhvbmUiLCJpbml0aWFscGMiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFyZW50Tm9kZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJzIiwiZiIsInFTdWJtZW51IiwibmF2YmFyVWwiLCJzb2NpYWxtZWRpYSIsInVwU2NyZWVuIiwieSIsInNjcm9sbFkiLCJkYXRhc2V0Iiwic2Nyb2xsIiwibGluayIsInJvdXRlIiwic2Nyb2xsVG9UYXJnZXRBZGp1c3RlZCIsInNjcm9sbGVkZWxlbWVudCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJoZWFkZXJPZmZzZXQiLCJlbGVtZW50UG9zaXRpb24iLCJvZmZzZXRQb3NpdGlvbiIsImlkIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhvbWVpbml0aWFsIiwiYmFubmVyIiwiaG9tZWNhcm91c2VsaW5kZXgiLCJob21lbGVmdGFycm93IiwiaG9tZXJpZ2h0YXJyb3ciLCJob21lc2xpZGVyIiwiaG9tZWJ1bGxldCIsImZpcnN0QnVsbGV0Q29sb3IiLCJjbGVhckludGVydmFsIiwiY2hpbWFnZWludGVydmFsIiwiY2hhbmdlaW1hZ2UiLCJzZXRJbnRlcnZhbCIsImVsZW0iLCJob21lc2xpZGVybGVuZ3RoIiwibGVuZ3RoIiwibmV4dCIsImJ1bGxldCIsImNsZWFyY2Fyb3VzZWxpbmRleGVzIiwiY2Fyb3VzZWxhbmltYXRpb24iLCJoIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwidG8iLCJlYXNlIiwib3BhY2l0eSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==