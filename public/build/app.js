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
});
upScreen.addEventListener("click", function () {
  document.querySelector('html').scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

minimize.addEventListener('click', function (e) {
  var elem = minimize.querySelectorAll('div')[0];

  if (elem.style.display !== 'none') {
    loginbar.querySelectorAll('div')[0].style.display = 'none';
    loginbar.querySelector('div .btn').style.display = 'none';
    minimize.querySelectorAll('div')[0].style.display = 'none';
    minimize.querySelectorAll('div')[1].style.display = 'initial';
  } else {
    loginbar.querySelectorAll('div')[0].style.display = 'initial';
    loginbar.querySelector('div .btn').style.display = 'initial';
    minimize.querySelectorAll('div')[0].style.display = 'initial';
    minimize.querySelectorAll('div')[1].style.display = 'none';
  }
});
logoContainer.addEventListener('click', function (e) {
  window.location.pathname = "/home";
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-416949"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4tdjEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBpbXBvcnQgJy4vc3R5bGVzL19tZWRpYS5zY3NzJztcblxuLy8gaW1wb3J0ICcuL3N0eWxlcy9mb250cy12MS5jc3MnO1xuaW1wb3J0ICcvYXNzZXRzL2pzL21haW4tdjEuanMnO1xuXG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJsZXQgaGFtYnVyZ2VyID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItbW9iaWxlLWJ0bicpO1xubGV0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xubGV0IHN1Ym1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51Jyk7XG5sZXQgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuLy8gc2V0IGxpbmsgdG8gdGhlIGxvZ28gZm9yIHRoZSBob21lcGFnZVxubGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nby1jb250YWluZXInKTtcbi8vIGdldCBzdWJtZW51IGxpbmtzXG5sZXQgbWVudUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUgYScpXG4vL2dldCB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXIgZm9yIHRoZSBzY3JvbGxpbmcgZWZmZWN0XG53aW5kb3cuaGVpZ2h0bmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jykuc3R5bGUuaGVpZ2h0O1xuLy9sb2dpbmJhciBtaW5pbWl6ZVxubGV0IGxvZ2luYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luYmFyJylcbmxldCBtaW5pbWl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pbWl6ZScpXG5cblxuLy8gY2hlY2sgbWF0Y2ggbWVkaWEgdG8gcHJldmVudCBlbGVtZW50cyBcbmlmIChtYXRjaE1lZGlhKSB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExODlweClcIik7XG4gICAgXG4gICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgIFdpZHRoQ2hhbmdlKG1xKTtcbiAgfVxuIFxuICAvLyBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgICAvL3Bob25lXG4gICAgICAgIGluaXRpYWxwaG9uZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbHBjKCk7XG4gICAgICAvLyBwY1xuICAgIC8vIFxuICAgIH1cblxufVxuZnVuY3Rpb24gaW5pdGlhbHBjKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5Om5vbmVcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2NpYWxtZWRpYScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxufVxuXG5mdW5jdGlvbiBpbml0aWFscGhvbmUoKXtcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHByZXZlbnRzIHRoZSBcImRpc3BsYXk6ZmxleFwiIGlmIHRoZSB2aWV3cG9ydCBjaGFuZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG59XG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9ob21lXCI7XG59KVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmKHBhcmVudE5vZGUuY2xhc3NMaXN0KXtcbiAgIFxuICAgICAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSApe1xuICAgICAgICAgICAgaWYoIWNsaWNrQ2hlY2tNZW51KXtcbiAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSA9PSBlLnRhcmdldCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrQ2hlY2tNZW51KVxuICAgICAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG4gICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xufSlcblxuLy9leHBhbmQgbWVudSBpdGVtc1xubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHMpe1xuICAgICAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgICBxU3VibWVudSA9IGYucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKTtcbiAgICAgICAgcVN1Ym1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pXG59KVxuXG5cbi8vIG1vYmlsZSBidG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmF2YmFyVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJyk7XG4gICAgc29jaWFsbWVkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKTtcbiAgICBjb25zb2xlLmxvZyhuYXZiYXJVbC5zdHlsZS5kaXNwbGF5KVxuICAgIGlmKG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgfHwgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9PSBcIlwiKXtcbiAgICAgICAgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfWVsc2V7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuLy91cHNjcmVlblxuY29uc3QgdXBTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXAtc2NyZWVuJylcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gICAgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmKHkgPiAxNTApe1xuICAgICAgICB1cFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuXG4gICAgfWVsc2V7XG4gICAgICAgIHVwU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG59KVxudXBTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KVxufSlcblxuLy8gbWVudSBpdGVtcyBzY3JvbGwgb24gY2xpY2tcbm1lbnVMaS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgIFxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpZihlLmRhdGFzZXQuc2Nyb2xsKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGluayA9IGUuZGF0YXNldC5zY3JvbGw7XG4gICAgICAgICAgICBlbGVtZW50ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluaylcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluaykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBlLmRhdGFzZXQucm91dGUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd4eHgnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1RhcmdldEFkanVzdGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0LnJvdXRlKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YXNldC5zY3JvbGwpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IGUuZGF0YXNldC5yb3V0ZSArIGUuZGF0YXNldC5zY3JvbGxcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByb3V0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuXG59KVxuXG5mdW5jdGlvbiBzY3JvbGxUb1RhcmdldEFkanVzdGVkKHNjcm9sbGVkZWxlbWVudCl7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsZWRlbGVtZW50KVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICBsZXQgaGVhZGVyT2Zmc2V0ID0gd2luZG93LmhlaWdodG5hdmJhcjtcbiAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsZWRlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBsZXQgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBoZWFkZXJPZmZzZXQgLSBib2R5O1xuICAgIGlmKGhlYWRlck9mZnNldCA9PSAwICYmIHNjcm9sbGVkZWxlbWVudC5pZCA9PSBcInMtYWNhc2FcIil7XG4gICAgICAgIG9mZnNldFBvc2l0aW9uID0gMDtcbiAgICB9XG5cblxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbn1cblxubWluaW1pemUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBsZXQgZWxlbSA9IG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdXG4gICAgICAgIGlmKGVsZW0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbG9naW5iYXIucXVlcnlTZWxlY3RvcignZGl2IC5idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzFdLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbG9naW5iYXIucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3IoJ2RpdiAuYnRuJykuc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVsxXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSlcblxubG9nb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2hvbWVcIjtcbn0pXG5cbi8vXG4vLyBpbml0aWFsaXplIGhvbWVpbml0aWFsICh3aGVyZSBhbGwgdGhlIGZ1bmN0aW9ucyBhcmUgcnVubmluZykgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGhvbWVpbml0aWFsKTtcblxuXG5cbmZ1bmN0aW9uIGhvbWVpbml0aWFsKCl7XG4gICAgLy8gaG9tZSBjYXJvdXNlbFxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhbm5lclwiKVxuICAgIGlmKCFiYW5uZXIpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGxldCBob21lY2Fyb3VzZWxpbmRleCA9IDA7XG4gICAgbGV0IGhvbWVsZWZ0YXJyb3cgPSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWFycm93LWxlZnQnKTtcbiAgICBsZXQgaG9tZXJpZ2h0YXJyb3c9IGJhbm5lci5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtYXJyb3ctcmlnaHQnKTtcbiAgICBsZXQgaG9tZXNsaWRlciA9IGJhbm5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcbiAgICBsZXQgaG9tZWJ1bGxldCA9IGJhbm5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtYnVsbGV0cycpO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0QnVsbGV0Q29sb3IgPSBob21lYnVsbGV0WzBdLnN0eWxlO1xuICAgIGNvbnNvbGUubG9nKGZpcnN0QnVsbGV0Q29sb3IpXG4gICAgaG9tZWxlZnRhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGltYWdlaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VpbWFnZSgxKTtcbiAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG4gICAgICAgIFxuICAgIH0pXG4gICAgICAgIFxuICAgIGhvbWVyaWdodGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjbGVhckludGVydmFsKGNoaW1hZ2VpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZWltYWdlKCk7XG4gICAgICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuICAgIH0pXG5cblxuICAgIGYgPSBob21lc2xpZGVyW2hvbWVjYXJvdXNlbGluZGV4XTtcblxuICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlaW1hZ2UoZil7XG5cbiAgICAgICAgbGV0IGVsZW0gPSBob21lc2xpZGVyW2hvbWVjYXJvdXNlbGluZGV4XTtcbiAgICAgICAgaWYoZil7XG4gICAgICAgICAgICBpZihob21lY2Fyb3VzZWxpbmRleCA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBob21lc2xpZGVybGVuZ3RoID0gaG9tZXNsaWRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGhvbWVzbGlkZXJsZW5naHRtaW51cyA9IGhvbWVzbGlkZXJsZW5ndGggLSAxXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyW2hvbWVzbGlkZXJsZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbaG9tZXNsaWRlcmxlbmd0aCAtIDFdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9IGhvbWVzbGlkZXJsZW5ndGggIC0xO1xuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbK2hvbWVjYXJvdXNlbGluZGV4LTFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFsraG9tZWNhcm91c2VsaW5kZXgtMV1cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9ICtob21lY2Fyb3VzZWxpbmRleCAtMSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICBcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKGhvbWVzbGlkZXIubGVuZ3RoID09ICtob21lY2Fyb3VzZWxpbmRleCArIDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbMF1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0WzBdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9IDA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclsraG9tZWNhcm91c2VsaW5kZXgrMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0Wytob21lY2Fyb3VzZWxpbmRleCsxXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAraG9tZWNhcm91c2VsaW5kZXggKzEgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vY2xlYXIgaW5kZXhlcyB0byBwcmV2ZW50IG92ZXJsYXBwaW5nXG4gICAgICAgIGNsZWFyY2Fyb3VzZWxpbmRleGVzKClcblxuICAgICAgICAvL3N0YXJ0IGNhcm91c2VsIGFuaW1hdGlvblxuXG4gICAgICAgIFxuICAgICAgICBjYXJvdXNlbGFuaW1hdGlvbigpXG5cbiAgICAgICAgaG9tZWJ1bGxldC5mb3JFYWNoKGZ1bmN0aW9uKGgpe1xuICAgICAgICAgICAgaC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0pXG4gICAgICAgIGJ1bGxldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyZjg2MzhcIjtcblxuICAgICAgICBmdW5jdGlvbiBjbGVhcmNhcm91c2VsaW5kZXhlcygpe1xuICAgICAgICAgICAgaG9tZXNsaWRlci5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuc3R5bGUuekluZGV4ID0gXCI5XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2Fyb3VzZWxhbmltYXRpb24oKXtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgLy8gfSwgMzAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBuZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgbmV4dC5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgXG4gICAgICAgICAgICB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IDF9fSlcbiAgICAgICAgICAgIHRsLnRvKGVsZW0sIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMH0pXG4gICAgICAgICAgICB0bC50byhuZXh0LCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDEsIGRlbGF5Oi0uOX0pXG4gICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gIGNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbi8vICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICAgIGlmKGUuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgPT0gICdjaGVja2VkJyl7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgbnVsbCkgO1xuICAgICAgICAgIFxuLy8gICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgO1xuLy8gICAgICAgIH1cbi8vICAgIH0pXG4vLyB9KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiaGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInN1Ym1lbnVJdGVtcyIsImNsaWNrQ2hlY2tNZW51IiwibG9nb0NvbnRhaW5lciIsIm1lbnVMaSIsIndpbmRvdyIsImhlaWdodG5hdmJhciIsInN0eWxlIiwiaGVpZ2h0IiwibG9naW5iYXIiLCJtaW5pbWl6ZSIsIm1hdGNoTWVkaWEiLCJtcSIsImFkZExpc3RlbmVyIiwiV2lkdGhDaGFuZ2UiLCJtYXRjaGVzIiwiaW5pdGlhbHBob25lIiwiaW5pdGlhbHBjIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhcmVudE5vZGUiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwicyIsImYiLCJxU3VibWVudSIsIm5hdmJhclVsIiwic29jaWFsbWVkaWEiLCJ1cFNjcmVlbiIsInkiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImRhdGFzZXQiLCJzY3JvbGwiLCJsaW5rIiwicm91dGUiLCJzY3JvbGxUb1RhcmdldEFkanVzdGVkIiwic2Nyb2xsZWRlbGVtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlYWRlck9mZnNldCIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldFBvc2l0aW9uIiwiaWQiLCJlbGVtIiwiaG9tZWluaXRpYWwiLCJiYW5uZXIiLCJob21lY2Fyb3VzZWxpbmRleCIsImhvbWVsZWZ0YXJyb3ciLCJob21lcmlnaHRhcnJvdyIsImhvbWVzbGlkZXIiLCJob21lYnVsbGV0IiwiZmlyc3RCdWxsZXRDb2xvciIsImNsZWFySW50ZXJ2YWwiLCJjaGltYWdlaW50ZXJ2YWwiLCJjaGFuZ2VpbWFnZSIsInNldEludGVydmFsIiwiaG9tZXNsaWRlcmxlbmd0aCIsImxlbmd0aCIsIm5leHQiLCJidWxsZXQiLCJjbGVhcmNhcm91c2VsaW5kZXhlcyIsImNhcm91c2VsYW5pbWF0aW9uIiwiaCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJkdXJhdGlvbiIsInRvIiwiZWFzZSIsIm9wYWNpdHkiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=