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
/* harmony import */ var _public_unlinkedJs_cookies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/unlinkedJs/cookies.js */ "./public/unlinkedJs/cookies.js");
/* harmony import */ var _public_unlinkedJs_cookies_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_unlinkedJs_cookies_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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
var clickCheckMenu = null;
var checkboxes = document.querySelectorAll('input[type=checkbox]'); // set link to the logo for the homepage

var logoContainer = document.querySelector('#logo-container'); // get submenu links

var menuLi = document.querySelectorAll('.submenu a'); //get the height of the navbar for the scrolling effect

window.heightnavbar = document.querySelector('nav').style.height; //loginbar minimize

var loginbar = document.querySelector('#loginbar');
var minimize = document.querySelector('.minimize');
var closebtnflash = document.querySelectorAll('.close-btn-flash'); // check match media to prevent elements 

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
}); // BUTTONS

checkboxes.forEach(function (e) {
  e.addEventListener('click', function () {
    if (e.getAttribute('checked') == 'checked') {
      e.setAttribute('checked', null);
      console.log('xxx');
    } else {
      e.setAttribute('checked', 'checked');
    }
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
}); //close flash msg

closebtnflash.forEach(function (e) {
  e.addEventListener('click', function () {
    e.parentElement.style.display = 'none';
    e.parentElement.style.opacity = '0';
  });
}); //
//
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

/***/ "./public/unlinkedJs/cookies.js":
/*!**************************************!*\
  !*** ./public/unlinkedJs/cookies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

var cookieStorage = {
  getItem: function getItem(item) {
    var cookies = document.cookie.split(';').map(function (cookie) {
      return cookie.split('=');
    }).reduce(function (acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key.trim(), value));
    }, {});
    return cookies[item];
  },
  setItem: function setItem(item, value, expire) {
    MaxAge = "max-age=" + expire;
    document.cookie = "".concat(item, "=").concat(value, ";") + MaxAge;
  }
};
var storageType = cookieStorage;
var consentPropertyName = 'cookies_consent';

var shouldShowPopup = function shouldShowPopup() {
  return !storageType.getItem(consentPropertyName);
};

var saveToStorage = function saveToStorage() {
  return storageType.setItem(consentPropertyName, true, 31536000);
}; // 1 year


window.onload = function () {
  var acceptFn = function acceptFn(event) {
    saveToStorage(storageType);
    consentPopup.classList.add('none');
  };

  var consentPopup = document.querySelector('.consent-popup');
  var acceptBtn = document.querySelector('.consent-accept');
  acceptBtn.addEventListener('click', acceptFn);

  if (shouldShowPopup(storageType)) {
    setTimeout(function () {
      consentPopup.classList.remove('none');
    }, 2000);
  }
};

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-416949","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-b5bccd"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHZixhQUFwQjtBQUNBLElBQU1nQixtQkFBbUIsR0FBRyxpQkFBNUI7O0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU0sQ0FBQ0YsV0FBVyxDQUFDZCxPQUFaLENBQW9CZSxtQkFBcEIsQ0FBUDtBQUFBLENBQXhCOztBQUNBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxTQUFNSCxXQUFXLENBQUNILE9BQVosQ0FBb0JJLG1CQUFwQixFQUF5QyxJQUF6QyxFQUErQyxRQUEvQyxDQUFOO0FBQUEsQ0FBdEIsRUFDQTs7O0FBQ0FwRyxNQUFNLENBQUN1RyxNQUFQLEdBQWdCLFlBQU07QUFFbEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSyxFQUFJO0FBQ3RCSCxJQUFBQSxhQUFhLENBQUNILFdBQUQsQ0FBYjtBQUNBTyxJQUFBQSxZQUFZLENBQUN2RixTQUFiLENBQXVCd0YsR0FBdkIsQ0FBMkIsTUFBM0I7QUFDSCxHQUhEOztBQUlBLE1BQU1ELFlBQVksR0FBR3BILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxNQUFNcUgsU0FBUyxHQUFHdEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFsQjtBQUNBcUgsRUFBQUEsU0FBUyxDQUFDN0YsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0N5RixRQUFwQzs7QUFFQSxNQUFJSCxlQUFlLENBQUNGLFdBQUQsQ0FBbkIsRUFBa0M7QUFDOUJVLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2JILE1BQUFBLFlBQVksQ0FBQ3ZGLFNBQWIsQ0FBdUIyRixNQUF2QixDQUE4QixNQUE5QjtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDtBQUVKLENBaEJEOzs7Ozs7Ozs7Ozs7QUNwQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi12MS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdW5saW5rZWRKcy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gaW1wb3J0ICcuL3N0eWxlcy9fbWVkaWEuc2Nzcyc7XG5cbi8vIGltcG9ydCAnLi9zdHlsZXMvZm9udHMtdjEuY3NzJztcbmltcG9ydCAnL2Fzc2V0cy9qcy9tYWluLXYxLmpzJztcbmltcG9ydCAnL3B1YmxpYy91bmxpbmtlZEpzL2Nvb2tpZXMuanMnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwibGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5sZXQgaGFtYnVyZ2VyID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItbW9iaWxlLWJ0bicpO1xubGV0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xubGV0IHN1Ym1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51Jyk7XG5sZXQgY2xpY2tDaGVja01lbnUgPSBudWxsO1xubGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuLy8gc2V0IGxpbmsgdG8gdGhlIGxvZ28gZm9yIHRoZSBob21lcGFnZVxubGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nby1jb250YWluZXInKTtcbi8vIGdldCBzdWJtZW51IGxpbmtzXG5sZXQgbWVudUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUgYScpXG4vL2dldCB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXIgZm9yIHRoZSBzY3JvbGxpbmcgZWZmZWN0XG53aW5kb3cuaGVpZ2h0bmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jykuc3R5bGUuaGVpZ2h0O1xuLy9sb2dpbmJhciBtaW5pbWl6ZVxubGV0IGxvZ2luYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luYmFyJylcbmxldCBtaW5pbWl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pbWl6ZScpXG5jb25zdCBjbG9zZWJ0bmZsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bi1mbGFzaCcpO1xuXG5cbi8vIGNoZWNrIG1hdGNoIG1lZGlhIHRvIHByZXZlbnQgZWxlbWVudHMgXG5pZiAobWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTg5cHgpXCIpO1xuICAgIFxuICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICBXaWR0aENoYW5nZShtcSk7XG4gIH1cbiBcbiAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgICAgLy9waG9uZVxuICAgICAgICBpbml0aWFscGhvbmUoKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxwYygpO1xuICAgICAgLy8gcGNcbiAgICAvLyBcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGluaXRpYWxwYygpe1xuICAgIC8vIHRoaXMgZnVuY3Rpb24gcHJldmVudHMgdGhlIFwiZGlzcGxheTpub25lXCIgaWYgdGhlIHZpZXdwb3J0IGNoYW5nZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItdWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbn1cblxuZnVuY3Rpb24gaW5pdGlhbHBob25lKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5OmZsZXhcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCBwYXJlbnROb2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdCl7XG4gICBcbiAgICAgICAgaWYocGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgKXtcbiAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSl7XG4gICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZighY2xpY2tDaGVja01lbnUgPT0gZS50YXJnZXQpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja0NoZWNrTWVudSlcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VibWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24ocyl7XG4gICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuICAgIGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbn0pXG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiI1wiO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2hvbWVcIjtcbiAgICBcbn0pXG5cblxuXG5cbi8vZXhwYW5kIG1lbnUgaXRlbXNcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgcVN1Ym1lbnUgPSBmLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51Jyk7XG4gICAgICAgIHFTdWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxufSlcblxuXG4vLyBtb2JpbGUgYnRuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG5hdmJhclVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpO1xuICAgIHNvY2lhbG1lZGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvY2lhbG1lZGlhJyk7XG4gICAgY29uc29sZS5sb2cobmF2YmFyVWwuc3R5bGUuZGlzcGxheSlcbiAgICBpZihuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiIHx8IG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJcIil7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1lbHNle1xuICAgICAgICBuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pXG5cbi8vdXBzY3JlZW5cbmNvbnN0IHVwU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwLXNjcmVlbicpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xuICAgIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZih5ID4gMTUwKXtcbiAgICAgICAgdXBTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcblxuICAgIH1lbHNle1xuICAgICAgICB1cFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufSlcbnVwU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSlcbn0pXG5cbi8vIEJVVFRPTlNcbmNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSA9PSAgJ2NoZWNrZWQnKXtcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgbnVsbCkgO1xuICAgICAgICAgICBjb25zb2xlLmxvZygneHh4JylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbi8vIG1lbnUgaXRlbXMgc2Nyb2xsIG9uIGNsaWNrXG5tZW51TGkuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZS5kYXRhc2V0LnNjcm9sbCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmsgPSBlLmRhdGFzZXQuc2Nyb2xsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmspLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gZS5kYXRhc2V0LnJvdXRlICYmIGxpbmsgIT0gXCIjXCIpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoZWxlbWVudCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGFzZXQucm91dGUpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0LnNjcm9sbClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gZS5kYXRhc2V0LnJvdXRlXG4gICAgICAgICAgICAgICAgaWYoZS5kYXRhc2V0LnNjcm9sbCAhPSBcIiNcIil7XG4gICAgICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZSArICBlLmRhdGFzZXQuc2Nyb2xsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvdXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoc2Nyb2xsZWRlbGVtZW50KXtcbiAgICBcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgbGV0IGhlYWRlck9mZnNldCA9IHdpbmRvdy5oZWlnaHRuYXZiYXI7XG4gICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbGVkZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgbGV0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gaGVhZGVyT2Zmc2V0IC0gYm9keTtcbiAgICBpZihoZWFkZXJPZmZzZXQgPT0gMCAmJiBzY3JvbGxlZGVsZW1lbnQuaWQgPT0gXCJzLWFjYXNhXCIpe1xuICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IDA7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG59XG5cbm1pbmltaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IGVsZW0gPSBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXVxuICAgICAgICBpZihlbGVtLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgbG9naW5iYXIucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3IoJ2RpdiAuYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVsxXS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yKCdkaXYgLmJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pXG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9ob21lXCI7XG59KVxuXG4vL2Nsb3NlIGZsYXNoIG1zZ1xuY2xvc2VidG5mbGFzaC5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBlLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZS5wYXJlbnRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICB9KVxufSlcblxuLy9cblxuXG4vL1xuLy8gaW5pdGlhbGl6ZSBob21laW5pdGlhbCAod2hlcmUgYWxsIHRoZSBmdW5jdGlvbnMgYXJlIHJ1bm5pbmcpIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBob21laW5pdGlhbCk7XG5cblxuXG5mdW5jdGlvbiBob21laW5pdGlhbCgpe1xuICAgIC8vY3JlYXRlIGEgZmFkZSBsb2FkaW5nIHBhZ2UgZm9yIHRoZSBib2R5XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihmKXtcbiAgICAvL2Rpc3BsYXkgaW5pdGlhbCBob21lcGFnZVxuICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogLjV9fSlcbiAgICB0bC50byhjb250ZW50LCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxfSk7XG4gICAgfSlcblxuICAgIC8vIGhvbWUgY2Fyb3VzZWxcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5uZXJcIilcbiAgICBpZighYmFubmVyKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgIGxldCBob21lbGVmdGFycm93ID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy1sZWZ0Jyk7XG4gICAgbGV0IGhvbWVyaWdodGFycm93PSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWFycm93LXJpZ2h0Jyk7XG4gICAgbGV0IGhvbWVzbGlkZXIgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLXNsaWRlJyk7XG4gICAgbGV0IGhvbWVidWxsZXQgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWJ1bGxldHMnKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdEJ1bGxldENvbG9yID0gaG9tZWJ1bGxldFswXS5zdHlsZTtcbiAgICBjb25zb2xlLmxvZyhmaXJzdEJ1bGxldENvbG9yKVxuICAgIGhvbWVsZWZ0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hpbWFnZWludGVydmFsKTtcbiAgICAgICAgY2hhbmdlaW1hZ2UoMSk7XG4gICAgICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuICAgICAgICBcbiAgICB9KVxuICAgICAgICBcbiAgICBob21lcmlnaHRhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGltYWdlaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VpbWFnZSgpO1xuICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcbiAgICB9KVxuXG5cbiAgICBmID0gaG9tZXNsaWRlcltob21lY2Fyb3VzZWxpbmRleF07XG5cbiAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcblxuICAgIGZ1bmN0aW9uIGNoYW5nZWltYWdlKGYpe1xuXG4gICAgICAgIGxldCBlbGVtID0gaG9tZXNsaWRlcltob21lY2Fyb3VzZWxpbmRleF07XG4gICAgICAgIGlmKGYpe1xuICAgICAgICAgICAgaWYoaG9tZWNhcm91c2VsaW5kZXggPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgaG9tZXNsaWRlcmxlbmd0aCA9IGhvbWVzbGlkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIGxldCBob21lc2xpZGVybGVuZ2h0bWludXMgPSBob21lc2xpZGVybGVuZ3RoIC0gMVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlcltob21lc2xpZGVybGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0W2hvbWVzbGlkZXJsZW5ndGggLSAxXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSBob21lc2xpZGVybGVuZ3RoICAtMTtcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWytob21lY2Fyb3VzZWxpbmRleC0xXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbK2hvbWVjYXJvdXNlbGluZGV4LTFdXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAraG9tZWNhcm91c2VsaW5kZXggLTEgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgXG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihob21lc2xpZGVyLmxlbmd0aCA9PSAraG9tZWNhcm91c2VsaW5kZXggKyAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWzBdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFswXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbK2hvbWVjYXJvdXNlbGluZGV4KzFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFsraG9tZWNhcm91c2VsaW5kZXgrMV1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gK2hvbWVjYXJvdXNlbGluZGV4ICsxICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2NsZWFyIGluZGV4ZXMgdG8gcHJldmVudCBvdmVybGFwcGluZ1xuICAgICAgICBjbGVhcmNhcm91c2VsaW5kZXhlcygpXG5cbiAgICAgICAgLy9zdGFydCBjYXJvdXNlbCBhbmltYXRpb25cblxuICAgICAgICBcbiAgICAgICAgY2Fyb3VzZWxhbmltYXRpb24oKVxuXG4gICAgICAgIGhvbWVidWxsZXQuZm9yRWFjaChmdW5jdGlvbihoKXtcbiAgICAgICAgICAgIGguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9KVxuICAgICAgICBidWxsZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjVkZWIzXCI7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJjYXJvdXNlbGluZGV4ZXMoKXtcbiAgICAgICAgICAgIGhvbWVzbGlkZXIuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnpJbmRleCA9IFwiOVwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhcm91c2VsYW5pbWF0aW9uKCl7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIC8vIH0sIDMwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbmV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIG5leHQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIFxuICAgICAgICAgICAgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAxfX0pXG4gICAgICAgICAgICB0bC50byhlbGVtLCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDB9KVxuICAgICAgICAgICAgdGwudG8obmV4dCwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAxLCBkZWxheTotLjl9KVxuICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vICBjaGVja2JveGVzLmZvckVhY2goZnVuY3Rpb24oZSl7XG4vLyAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbi8vICAgICAgICBpZihlLmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpID09ICAnY2hlY2tlZCcpe1xuLy8gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIG51bGwpIDtcbiAgICAgICAgICBcbi8vICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDtcbi8vICAgICAgICB9XG4vLyAgICB9KVxuLy8gfSkiLCIgXG5jb25zdCBjb29raWVTdG9yYWdlID0ge1xuICAgIGdldEl0ZW06IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWVcbiAgICAgICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgICAgICAubWFwKGNvb2tpZSA9PiBjb29raWUuc3BsaXQoJz0nKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiAoeyAuLi5hY2MsIFtrZXkudHJpbSgpXTogdmFsdWUgfSksIHt9KTtcbiAgICAgICAgcmV0dXJuIGNvb2tpZXNbaXRlbV07XG4gICAgfSxcbiAgICBzZXRJdGVtOiAoaXRlbSwgdmFsdWUsIGV4cGlyZSkgPT4ge1xuICAgICAgICBNYXhBZ2UgPSBcIm1heC1hZ2U9XCIrIGV4cGlyZVxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtpdGVtfT0ke3ZhbHVlfTtgK01heEFnZTtcbiAgICB9XG59XG5cbmNvbnN0IHN0b3JhZ2VUeXBlID0gY29va2llU3RvcmFnZTtcbmNvbnN0IGNvbnNlbnRQcm9wZXJ0eU5hbWUgPSAnY29va2llc19jb25zZW50JztcbmNvbnN0IHNob3VsZFNob3dQb3B1cCA9ICgpID0+ICFzdG9yYWdlVHlwZS5nZXRJdGVtKGNvbnNlbnRQcm9wZXJ0eU5hbWUpO1xuY29uc3Qgc2F2ZVRvU3RvcmFnZSA9ICgpID0+IHN0b3JhZ2VUeXBlLnNldEl0ZW0oY29uc2VudFByb3BlcnR5TmFtZSwgdHJ1ZSwgMzE1MzYwMDApO1xuLy8gMSB5ZWFyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYWNjZXB0Rm4gPSBldmVudCA9PiB7XG4gICAgICAgIHNhdmVUb1N0b3JhZ2Uoc3RvcmFnZVR5cGUpO1xuICAgICAgICBjb25zZW50UG9wdXAuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICAgIH1cbiAgICBjb25zdCBjb25zZW50UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uc2VudC1wb3B1cCcpO1xuICAgIGNvbnN0IGFjY2VwdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zZW50LWFjY2VwdCcpO1xuICAgIGFjY2VwdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjY2VwdEZuKTtcblxuICAgIGlmIChzaG91bGRTaG93UG9wdXAoc3RvcmFnZVR5cGUpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc2VudFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ2VyIiwibWVudUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInN1Ym1lbnVJdGVtcyIsImNsaWNrQ2hlY2tNZW51IiwiY2hlY2tib3hlcyIsImxvZ29Db250YWluZXIiLCJtZW51TGkiLCJ3aW5kb3ciLCJoZWlnaHRuYXZiYXIiLCJzdHlsZSIsImhlaWdodCIsImxvZ2luYmFyIiwibWluaW1pemUiLCJjbG9zZWJ0bmZsYXNoIiwibWF0Y2hNZWRpYSIsIm1xIiwiYWRkTGlzdGVuZXIiLCJXaWR0aENoYW5nZSIsIm1hdGNoZXMiLCJpbml0aWFscGhvbmUiLCJpbml0aWFscGMiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInMiLCJsb2NhdGlvbiIsImhhc2giLCJwYXRobmFtZSIsImYiLCJxU3VibWVudSIsIm5hdmJhclVsIiwic29jaWFsbWVkaWEiLCJ1cFNjcmVlbiIsInkiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImRhdGFzZXQiLCJzY3JvbGwiLCJsaW5rIiwicm91dGUiLCJzY3JvbGxUb1RhcmdldEFkanVzdGVkIiwic2Nyb2xsZWRlbGVtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlYWRlck9mZnNldCIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldFBvc2l0aW9uIiwiaWQiLCJlbGVtIiwicGFyZW50RWxlbWVudCIsIm9wYWNpdHkiLCJob21laW5pdGlhbCIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJkdXJhdGlvbiIsInRvIiwiZWFzZSIsImJhbm5lciIsImhvbWVjYXJvdXNlbGluZGV4IiwiaG9tZWxlZnRhcnJvdyIsImhvbWVyaWdodGFycm93IiwiaG9tZXNsaWRlciIsImhvbWVidWxsZXQiLCJmaXJzdEJ1bGxldENvbG9yIiwiY2xlYXJJbnRlcnZhbCIsImNoaW1hZ2VpbnRlcnZhbCIsImNoYW5nZWltYWdlIiwic2V0SW50ZXJ2YWwiLCJob21lc2xpZGVybGVuZ3RoIiwibGVuZ3RoIiwibmV4dCIsImJ1bGxldCIsImNsZWFyY2Fyb3VzZWxpbmRleGVzIiwiY2Fyb3VzZWxhbmltYXRpb24iLCJoIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiZGVsYXkiLCJjb29raWVTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJtYXAiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJ2YWx1ZSIsInRyaW0iLCJzZXRJdGVtIiwiZXhwaXJlIiwiTWF4QWdlIiwic3RvcmFnZVR5cGUiLCJjb25zZW50UHJvcGVydHlOYW1lIiwic2hvdWxkU2hvd1BvcHVwIiwic2F2ZVRvU3RvcmFnZSIsIm9ubG9hZCIsImFjY2VwdEZuIiwiZXZlbnQiLCJjb25zZW50UG9wdXAiLCJhZGQiLCJhY2NlcHRCdG4iLCJzZXRUaW1lb3V0IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==