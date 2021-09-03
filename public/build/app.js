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
  if (mq.matches) {//phone
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
  e.style.backgroundColor = 'red';
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
    bullet.style.backgroundColor = "#838383";

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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-7db861"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsdUZBQTZCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUE2RDtBQUNqRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDVEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi12MS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gaW1wb3J0ICcuL3N0eWxlcy9fbWVkaWEuc2Nzcyc7XG5cbi8vIGltcG9ydCAnLi9zdHlsZXMvZm9udHMtdjEuY3NzJztcbmltcG9ydCAnL2Fzc2V0cy9qcy9tYWluLXYxLmpzJztcblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwibGV0IGhhbWJ1cmdlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLW1vYmlsZS1idG4nKTtcbmxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbmxldCBzdWJtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudScpO1xubGV0IGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbi8vIHNldCBsaW5rIHRvIHRoZSBsb2dvIGZvciB0aGUgaG9tZXBhZ2VcbmxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28tY29udGFpbmVyJyk7XG4vLyBnZXQgc3VibWVudSBsaW5rc1xubGV0IG1lbnVMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51IGEnKVxuLy9nZXQgdGhlIGhlaWdodCBvZiB0aGUgbmF2YmFyIGZvciB0aGUgc2Nyb2xsaW5nIGVmZmVjdFxud2luZG93LmhlaWdodG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpLnN0eWxlLmhlaWdodDtcbi8vbG9naW5iYXIgbWluaW1pemVcbmxldCBsb2dpbmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbmJhcicpXG5sZXQgbWluaW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluaW1pemUnKVxuXG5cbi8vIGNoZWNrIG1hdGNoIG1lZGlhIHRvIHByZXZlbnQgZWxlbWVudHMgXG5pZiAobWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTg5cHgpXCIpO1xuICAgIFxuICAgIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcbiAgICBXaWR0aENoYW5nZShtcSk7XG4gIH1cbiBcbiAgLy8gbWVkaWEgcXVlcnkgY2hhbmdlXG4gIGZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgICAgLy9waG9uZVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbHBjKCk7XG4gICAgICAvLyBwY1xuICAgIC8vIFxuICAgIH1cblxufVxuZnVuY3Rpb24gaW5pdGlhbHBjKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5Om5vbmVcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2NpYWxtZWRpYScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxufVxuXG5cbmxvZ29Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9ob21lXCI7XG59KVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmKHBhcmVudE5vZGUuY2xhc3NMaXN0KXtcbiAgIFxuICAgICAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSApe1xuICAgICAgICAgICAgaWYoIWNsaWNrQ2hlY2tNZW51KXtcbiAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSA9PSBlLnRhcmdldCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrQ2hlY2tNZW51KVxuICAgICAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG4gICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xufSlcblxuLy9leHBhbmQgbWVudSBpdGVtc1xubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHMpe1xuICAgICAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgICBxU3VibWVudSA9IGYucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKTtcbiAgICAgICAgcVN1Ym1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pXG59KVxuXG5cbi8vIG1vYmlsZSBidG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmF2YmFyVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJyk7XG4gICAgc29jaWFsbWVkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKTtcbiAgICBjb25zb2xlLmxvZyhuYXZiYXJVbC5zdHlsZS5kaXNwbGF5KVxuICAgIGlmKG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgfHwgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9PSBcIlwiKXtcbiAgICAgICAgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfWVsc2V7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuLy91cHNjcmVlblxuY29uc3QgdXBTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXAtc2NyZWVuJylcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gICAgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmKHkgPiAxNTApe1xuICAgICAgICB1cFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuXG4gICAgfWVsc2V7XG4gICAgICAgIHVwU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG59KVxudXBTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KVxufSlcblxuLy8gbWVudSBpdGVtcyBzY3JvbGwgb24gY2xpY2tcbm1lbnVMaS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgIGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGUuZGF0YXNldC5zY3JvbGwpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5rID0gZS5kYXRhc2V0LnNjcm9sbDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKVxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IGUuZGF0YXNldC5yb3V0ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3h4eCcpO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoZWxlbWVudCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGFzZXQucm91dGUpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0LnNjcm9sbClcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gZS5kYXRhc2V0LnJvdXRlICsgZS5kYXRhc2V0LnNjcm9sbFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvdXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoc2Nyb2xsZWRlbGVtZW50KXtcbiAgICBjb25zb2xlLmxvZyhzY3JvbGxlZGVsZW1lbnQpXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgIGxldCBoZWFkZXJPZmZzZXQgPSB3aW5kb3cuaGVpZ2h0bmF2YmFyO1xuICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxlZGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGxldCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbiAtIGhlYWRlck9mZnNldCAtIGJvZHk7XG4gICAgaWYoaGVhZGVyT2Zmc2V0ID09IDAgJiYgc2Nyb2xsZWRlbGVtZW50LmlkID09IFwicy1hY2FzYVwiKXtcbiAgICAgICAgb2Zmc2V0UG9zaXRpb24gPSAwO1xuICAgIH1cblxuXG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgIH0pO1xufVxuXG5taW5pbWl6ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGxldCBlbGVtID0gbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF1cbiAgICAgICAgaWYoZWxlbS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yKCdkaXYgLmJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMV0uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgbG9naW5iYXIucXVlcnlTZWxlY3RvcignZGl2IC5idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgIG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9KVxuXG5sb2dvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvaG9tZVwiO1xufSlcblxuLy9cbi8vIGluaXRpYWxpemUgaG9tZWluaXRpYWwgKHdoZXJlIGFsbCB0aGUgZnVuY3Rpb25zIGFyZSBydW5uaW5nKSBhZnRlciB0aGUgcGFnZSBsb2Fkc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaG9tZWluaXRpYWwpO1xuXG5cblxuZnVuY3Rpb24gaG9tZWluaXRpYWwoKXtcbiAgICAvLyBob21lIGNhcm91c2VsXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFubmVyXCIpXG4gICAgaWYoIWJhbm5lcil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbGV0IGhvbWVjYXJvdXNlbGluZGV4ID0gMDtcbiAgICBsZXQgaG9tZWxlZnRhcnJvdyA9IGJhbm5lci5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtYXJyb3ctbGVmdCcpO1xuICAgIGxldCBob21lcmlnaHRhcnJvdz0gYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy1yaWdodCcpO1xuICAgIGxldCBob21lc2xpZGVyID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1zbGlkZScpO1xuICAgIGxldCBob21lYnVsbGV0ID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1idWxsZXRzJyk7XG4gICAgXG4gICAgY29uc3QgZmlyc3RCdWxsZXRDb2xvciA9IGhvbWVidWxsZXRbMF0uc3R5bGU7XG4gICAgY29uc29sZS5sb2coZmlyc3RCdWxsZXRDb2xvcilcbiAgICBob21lbGVmdGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjbGVhckludGVydmFsKGNoaW1hZ2VpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZWltYWdlKDEpO1xuICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcbiAgICAgICAgXG4gICAgfSlcbiAgICAgICAgXG4gICAgaG9tZXJpZ2h0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hpbWFnZWludGVydmFsKTtcbiAgICAgICAgY2hhbmdlaW1hZ2UoKTtcbiAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG4gICAgfSlcblxuXG4gICAgZiA9IGhvbWVzbGlkZXJbaG9tZWNhcm91c2VsaW5kZXhdO1xuXG4gICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VpbWFnZShmKXtcblxuICAgICAgICBsZXQgZWxlbSA9IGhvbWVzbGlkZXJbaG9tZWNhcm91c2VsaW5kZXhdO1xuICAgICAgICBpZihmKXtcbiAgICAgICAgICAgIGlmKGhvbWVjYXJvdXNlbGluZGV4ID09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGhvbWVzbGlkZXJsZW5ndGggPSBob21lc2xpZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaG9tZXNsaWRlcmxlbmdodG1pbnVzID0gaG9tZXNsaWRlcmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbaG9tZXNsaWRlcmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFtob21lc2xpZGVybGVuZ3RoIC0gMV1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gaG9tZXNsaWRlcmxlbmd0aCAgLTE7XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclsraG9tZWNhcm91c2VsaW5kZXgtMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0Wytob21lY2Fyb3VzZWxpbmRleC0xXVxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gK2hvbWVjYXJvdXNlbGluZGV4IC0xICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoaG9tZXNsaWRlci5sZW5ndGggPT0gK2hvbWVjYXJvdXNlbGluZGV4ICsgMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclswXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbMF1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWytob21lY2Fyb3VzZWxpbmRleCsxXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbK2hvbWVjYXJvdXNlbGluZGV4KzFdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9ICtob21lY2Fyb3VzZWxpbmRleCArMSAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jbGVhciBpbmRleGVzIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmdcbiAgICAgICAgY2xlYXJjYXJvdXNlbGluZGV4ZXMoKVxuXG4gICAgICAgIC8vc3RhcnQgY2Fyb3VzZWwgYW5pbWF0aW9uXG5cbiAgICAgICAgXG4gICAgICAgIGNhcm91c2VsYW5pbWF0aW9uKClcblxuICAgICAgICBob21lYnVsbGV0LmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICBoLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgYnVsbGV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzgzODM4M1wiO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyY2Fyb3VzZWxpbmRleGVzKCl7XG4gICAgICAgICAgICBob21lc2xpZGVyLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS56SW5kZXggPSBcIjlcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYXJvdXNlbGFuaW1hdGlvbigpe1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAvLyB9LCAzMDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG5leHQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBuZXh0LnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBcbiAgICAgICAgICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogMX19KVxuICAgICAgICAgICAgdGwudG8oZWxlbSwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAwfSlcbiAgICAgICAgICAgIHRsLnRvKG5leHQsIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMSwgZGVsYXk6LS45fSlcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyAgY2hlY2tib3hlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuLy8gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSA9PSAgJ2NoZWNrZWQnKXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBudWxsKSA7XG4gICAgICAgICAgXG4vLyAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA7XG4vLyAgICAgICAgfVxuLy8gICAgfSlcbi8vIH0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gc3BlYyByZXF1aXJlbWVudFxuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3VibWVudUl0ZW1zIiwiY2xpY2tDaGVja01lbnUiLCJsb2dvQ29udGFpbmVyIiwibWVudUxpIiwid2luZG93IiwiaGVpZ2h0bmF2YmFyIiwic3R5bGUiLCJoZWlnaHQiLCJsb2dpbmJhciIsIm1pbmltaXplIiwibWF0Y2hNZWRpYSIsIm1xIiwiYWRkTGlzdGVuZXIiLCJXaWR0aENoYW5nZSIsIm1hdGNoZXMiLCJpbml0aWFscGMiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicGFyZW50Tm9kZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJzIiwiZiIsInFTdWJtZW51IiwibmF2YmFyVWwiLCJzb2NpYWxtZWRpYSIsInVwU2NyZWVuIiwieSIsInNjcm9sbFkiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YXNldCIsInNjcm9sbCIsImxpbmsiLCJyb3V0ZSIsInNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQiLCJzY3JvbGxlZGVsZW1lbnQiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVhZGVyT2Zmc2V0IiwiZWxlbWVudFBvc2l0aW9uIiwib2Zmc2V0UG9zaXRpb24iLCJpZCIsImVsZW0iLCJob21laW5pdGlhbCIsImJhbm5lciIsImhvbWVjYXJvdXNlbGluZGV4IiwiaG9tZWxlZnRhcnJvdyIsImhvbWVyaWdodGFycm93IiwiaG9tZXNsaWRlciIsImhvbWVidWxsZXQiLCJmaXJzdEJ1bGxldENvbG9yIiwiY2xlYXJJbnRlcnZhbCIsImNoaW1hZ2VpbnRlcnZhbCIsImNoYW5nZWltYWdlIiwic2V0SW50ZXJ2YWwiLCJob21lc2xpZGVybGVuZ3RoIiwibGVuZ3RoIiwibmV4dCIsImJ1bGxldCIsImNsZWFyY2Fyb3VzZWxpbmRleGVzIiwiY2Fyb3VzZWxhbmltYXRpb24iLCJoIiwiekluZGV4IiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsImR1cmF0aW9uIiwidG8iLCJlYXNlIiwib3BhY2l0eSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==