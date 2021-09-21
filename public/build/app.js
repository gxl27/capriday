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

var content = document.querySelector('#content');
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
});
logoContainer.addEventListener('click', function (e) {
  window.location.hash = "#";
  window.location.pathname = "/home";
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
      link = e.dataset.scroll; // document.querySelector(link).scrollIntoView();

      if (window.location.pathname == e.dataset.route && link != "#") {
        element = document.querySelector(link);
        scrollToTargetAdjusted(element);
      } else {
        // console.log(e.dataset.route)
        // console.log(e.dataset.scroll)
        // console.log()
        var route = e.dataset.route;

        if (e.dataset.scroll != "#") {
          route = route + e.dataset.scroll;
        }

        window.location = route;
      }
    }
  });
});

function scrollToTargetAdjusted(scrolledelement) {
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
  //create a fade loading page for the body
  window.addEventListener('load', function (f) {
    //display initial homepage
    tl = gsap.timeline({
      defaults: {
        duration: .5
      }
    });
    tl.to(content, {
      ease: "expo",
      opacity: 1
    });
  }); // home carousel

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
    bullet.style.backgroundColor = "#f5deb3";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMLENBQWM7QUFBRUMsUUFBQUEsUUFBUSxFQUFDO0FBQUNDLFVBQUFBLFFBQVEsRUFBRTtBQUFYO0FBQVgsT0FBZCxDQUFMO0FBQ0FKLE1BQUFBLEVBQUUsQ0FBQ0ssRUFBSCxDQUFNUCxJQUFOLEVBQVk7QUFBRVEsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLE9BQU8sRUFBRTtBQUEzQixPQUFaO0FBQ0FQLE1BQUFBLEVBQUUsQ0FBQ0ssRUFBSCxDQUFNZ0IsSUFBTixFQUFZO0FBQUVmLFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxRQUFBQSxPQUFPLEVBQUUsQ0FBM0I7QUFBOEJxQixRQUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFyQyxPQUFaO0FBRUg7QUFDSjtBQUNKLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqVUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi12MS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIGltcG9ydCAnLi9zdHlsZXMvX21lZGlhLnNjc3MnO1xuXG4vLyBpbXBvcnQgJy4vc3R5bGVzL2ZvbnRzLXYxLmNzcyc7XG5pbXBvcnQgJy9hc3NldHMvanMvbWFpbi12MS5qcyc7XG5cblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxubGV0IGhhbWJ1cmdlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLW1vYmlsZS1idG4nKTtcbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbmxldCBzdWJtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudScpO1xubGV0IGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbi8vIHNldCBsaW5rIHRvIHRoZSBsb2dvIGZvciB0aGUgaG9tZXBhZ2VcbmxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28tY29udGFpbmVyJyk7XG4vLyBnZXQgc3VibWVudSBsaW5rc1xubGV0IG1lbnVMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51IGEnKVxuLy9nZXQgdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyIGZvciB0aGUgc2Nyb2xsaW5nIGVmZmVjdFxud2luZG93LmhlaWdodG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLnN0eWxlLmhlaWdodDtcbi8vbG9naW5iYXIgbWluaW1pemVcbmxldCBsb2dpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbmJhcicpXG5sZXQgbWluaW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluaW1pemUnKVxuXG5cbi8vIGNoZWNrIG1hdGNoIG1lZGlhIHRvIHByZXZlbnQgZWxlbWVudHMgXG5pZiAobWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTg5cHgpXCIpO1xuICAgIFxuICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICBXaWR0aENoYW5nZShtcSk7XG4gIH1cbiBcbiAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgICAgLy9waG9uZVxuICAgICAgICBpbml0aWFscGhvbmUoKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxwYygpO1xuICAgICAgLy8gcGNcbiAgICAvLyBcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGluaXRpYWxwYygpe1xuICAgIC8vIHRoaXMgZnVuY3Rpb24gcHJldmVudHMgdGhlIFwiZGlzcGxheTpub25lXCIgaWYgdGhlIHZpZXdwb3J0IGNoYW5nZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItdWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbn1cblxuZnVuY3Rpb24gaW5pdGlhbHBob25lKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5OmZsZXhcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCBwYXJlbnROb2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdCl7XG4gICBcbiAgICAgICAgaWYocGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgKXtcbiAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSl7XG4gICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZighY2xpY2tDaGVja01lbnUgPT0gZS50YXJnZXQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja0NoZWNrTWVudSlcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VibWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24ocyl7XG4gICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuICAgIGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbn0pXG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiI1wiO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2hvbWVcIjtcbiAgICBcbn0pXG5cblxuXG5cbi8vZXhwYW5kIG1lbnUgaXRlbXNcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgcVN1Ym1lbnUgPSBmLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51Jyk7XG4gICAgICAgIHFTdWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxufSlcblxuXG4vLyBtb2JpbGUgYnRuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG5hdmJhclVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpO1xuICAgIHNvY2lhbG1lZGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvY2lhbG1lZGlhJyk7XG4gICAgY29uc29sZS5sb2cobmF2YmFyVWwuc3R5bGUuZGlzcGxheSlcbiAgICBpZihuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiIHx8IG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJcIil7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1lbHNle1xuICAgICAgICBuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pXG5cbi8vdXBzY3JlZW5cbmNvbnN0IHVwU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwLXNjcmVlbicpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xuICAgIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZih5ID4gMTUwKXtcbiAgICAgICAgdXBTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcblxuICAgIH1lbHNle1xuICAgICAgICB1cFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufSlcbnVwU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSlcbn0pXG5cbi8vIG1lbnUgaXRlbXMgc2Nyb2xsIG9uIGNsaWNrXG5tZW51TGkuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZS5kYXRhc2V0LnNjcm9sbCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmsgPSBlLmRhdGFzZXQuc2Nyb2xsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmspLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gZS5kYXRhc2V0LnJvdXRlICYmIGxpbmsgIT0gXCIjXCIpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoZWxlbWVudCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGFzZXQucm91dGUpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0LnNjcm9sbClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gZS5kYXRhc2V0LnJvdXRlXG4gICAgICAgICAgICAgICAgaWYoZS5kYXRhc2V0LnNjcm9sbCAhPSBcIiNcIil7XG4gICAgICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZSArICBlLmRhdGFzZXQuc2Nyb2xsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvdXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoc2Nyb2xsZWRlbGVtZW50KXtcbiAgICBcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgbGV0IGhlYWRlck9mZnNldCA9IHdpbmRvdy5oZWlnaHRuYXZiYXI7XG4gICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbGVkZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgbGV0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gaGVhZGVyT2Zmc2V0IC0gYm9keTtcbiAgICBpZihoZWFkZXJPZmZzZXQgPT0gMCAmJiBzY3JvbGxlZGVsZW1lbnQuaWQgPT0gXCJzLWFjYXNhXCIpe1xuICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IDA7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG59XG5cbm1pbmltaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IGVsZW0gPSBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXVxuICAgICAgICBpZihlbGVtLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgbG9naW5iYXIucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3IoJ2RpdiAuYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVsxXS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yKCdkaXYgLmJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pXG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9ob21lXCI7XG59KVxuXG4vL1xuLy8gaW5pdGlhbGl6ZSBob21laW5pdGlhbCAod2hlcmUgYWxsIHRoZSBmdW5jdGlvbnMgYXJlIHJ1bm5pbmcpIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBob21laW5pdGlhbCk7XG5cblxuXG5mdW5jdGlvbiBob21laW5pdGlhbCgpe1xuICAgIC8vY3JlYXRlIGEgZmFkZSBsb2FkaW5nIHBhZ2UgZm9yIHRoZSBib2R5XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihmKXtcbiAgICAvL2Rpc3BsYXkgaW5pdGlhbCBob21lcGFnZVxuICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogLjV9fSlcbiAgICB0bC50byhjb250ZW50LCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxfSk7XG4gICAgfSlcblxuICAgIC8vIGhvbWUgY2Fyb3VzZWxcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5uZXJcIilcbiAgICBpZighYmFubmVyKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgIGxldCBob21lbGVmdGFycm93ID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy1sZWZ0Jyk7XG4gICAgbGV0IGhvbWVyaWdodGFycm93PSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWFycm93LXJpZ2h0Jyk7XG4gICAgbGV0IGhvbWVzbGlkZXIgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLXNsaWRlJyk7XG4gICAgbGV0IGhvbWVidWxsZXQgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWJ1bGxldHMnKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdEJ1bGxldENvbG9yID0gaG9tZWJ1bGxldFswXS5zdHlsZTtcbiAgICBjb25zb2xlLmxvZyhmaXJzdEJ1bGxldENvbG9yKVxuICAgIGhvbWVsZWZ0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hpbWFnZWludGVydmFsKTtcbiAgICAgICAgY2hhbmdlaW1hZ2UoMSk7XG4gICAgICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuICAgICAgICBcbiAgICB9KVxuICAgICAgICBcbiAgICBob21lcmlnaHRhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGltYWdlaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VpbWFnZSgpO1xuICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcbiAgICB9KVxuXG5cbiAgICBmID0gaG9tZXNsaWRlcltob21lY2Fyb3VzZWxpbmRleF07XG5cbiAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcblxuICAgIGZ1bmN0aW9uIGNoYW5nZWltYWdlKGYpe1xuXG4gICAgICAgIGxldCBlbGVtID0gaG9tZXNsaWRlcltob21lY2Fyb3VzZWxpbmRleF07XG4gICAgICAgIGlmKGYpe1xuICAgICAgICAgICAgaWYoaG9tZWNhcm91c2VsaW5kZXggPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgaG9tZXNsaWRlcmxlbmd0aCA9IGhvbWVzbGlkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIGxldCBob21lc2xpZGVybGVuZ2h0bWludXMgPSBob21lc2xpZGVybGVuZ3RoIC0gMVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlcltob21lc2xpZGVybGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0W2hvbWVzbGlkZXJsZW5ndGggLSAxXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSBob21lc2xpZGVybGVuZ3RoICAtMTtcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWytob21lY2Fyb3VzZWxpbmRleC0xXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbK2hvbWVjYXJvdXNlbGluZGV4LTFdXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAraG9tZWNhcm91c2VsaW5kZXggLTEgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgXG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihob21lc2xpZGVyLmxlbmd0aCA9PSAraG9tZWNhcm91c2VsaW5kZXggKyAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWzBdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFswXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbK2hvbWVjYXJvdXNlbGluZGV4KzFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFsraG9tZWNhcm91c2VsaW5kZXgrMV1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gK2hvbWVjYXJvdXNlbGluZGV4ICsxICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2NsZWFyIGluZGV4ZXMgdG8gcHJldmVudCBvdmVybGFwcGluZ1xuICAgICAgICBjbGVhcmNhcm91c2VsaW5kZXhlcygpXG5cbiAgICAgICAgLy9zdGFydCBjYXJvdXNlbCBhbmltYXRpb25cblxuICAgICAgICBcbiAgICAgICAgY2Fyb3VzZWxhbmltYXRpb24oKVxuXG4gICAgICAgIGhvbWVidWxsZXQuZm9yRWFjaChmdW5jdGlvbihoKXtcbiAgICAgICAgICAgIGguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9KVxuICAgICAgICBidWxsZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjVkZWIzXCI7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJjYXJvdXNlbGluZGV4ZXMoKXtcbiAgICAgICAgICAgIGhvbWVzbGlkZXIuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnpJbmRleCA9IFwiOVwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhcm91c2VsYW5pbWF0aW9uKCl7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIC8vIH0sIDMwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbmV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIG5leHQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIFxuICAgICAgICAgICAgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAxfX0pXG4gICAgICAgICAgICB0bC50byhlbGVtLCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDB9KVxuICAgICAgICAgICAgdGwudG8obmV4dCwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAxLCBkZWxheTotLjl9KVxuICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vICBjaGVja2JveGVzLmZvckVhY2goZnVuY3Rpb24oZSl7XG4vLyAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbi8vICAgICAgICBpZihlLmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpID09ICAnY2hlY2tlZCcpe1xuLy8gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIG51bGwpIDtcbiAgICAgICAgICBcbi8vICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDtcbi8vICAgICAgICB9XG4vLyAgICB9KVxuLy8gfSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1idXJnZXIiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3VibWVudUl0ZW1zIiwiY2xpY2tDaGVja01lbnUiLCJsb2dvQ29udGFpbmVyIiwibWVudUxpIiwid2luZG93IiwiaGVpZ2h0bmF2YmFyIiwic3R5bGUiLCJoZWlnaHQiLCJsb2dpbmJhciIsIm1pbmltaXplIiwibWF0Y2hNZWRpYSIsIm1xIiwiYWRkTGlzdGVuZXIiLCJXaWR0aENoYW5nZSIsIm1hdGNoZXMiLCJpbml0aWFscGhvbmUiLCJpbml0aWFscGMiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInMiLCJsb2NhdGlvbiIsImhhc2giLCJwYXRobmFtZSIsImYiLCJxU3VibWVudSIsIm5hdmJhclVsIiwic29jaWFsbWVkaWEiLCJ1cFNjcmVlbiIsInkiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImRhdGFzZXQiLCJzY3JvbGwiLCJsaW5rIiwicm91dGUiLCJzY3JvbGxUb1RhcmdldEFkanVzdGVkIiwic2Nyb2xsZWRlbGVtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlYWRlck9mZnNldCIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldFBvc2l0aW9uIiwiaWQiLCJlbGVtIiwiaG9tZWluaXRpYWwiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJ0byIsImVhc2UiLCJvcGFjaXR5IiwiYmFubmVyIiwiaG9tZWNhcm91c2VsaW5kZXgiLCJob21lbGVmdGFycm93IiwiaG9tZXJpZ2h0YXJyb3ciLCJob21lc2xpZGVyIiwiaG9tZWJ1bGxldCIsImZpcnN0QnVsbGV0Q29sb3IiLCJjbGVhckludGVydmFsIiwiY2hpbWFnZWludGVydmFsIiwiY2hhbmdlaW1hZ2UiLCJzZXRJbnRlcnZhbCIsImhvbWVzbGlkZXJsZW5ndGgiLCJsZW5ndGgiLCJuZXh0IiwiYnVsbGV0IiwiY2xlYXJjYXJvdXNlbGluZGV4ZXMiLCJjYXJvdXNlbGFuaW1hdGlvbiIsImgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=