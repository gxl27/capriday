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

__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");

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
var closebtnflash = document.querySelectorAll('.close-btn-flash'); //expand text

var textExpand = document.querySelectorAll('.text-expand');
var textExpandButton = document.querySelectorAll('.text-expand-button');
var galleryCard = document.querySelectorAll('.gallery-card'); // check match media to prevent elements 

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
  document.querySelector('#navbar-ul').style.opacity = 1;
  document.querySelector('#socialmedia').style.display = "flex";
}

function initialphone() {
  // this function prevents the "display:flex" if the viewport change
  document.querySelector('#navbar-ul').style.display = "none";
  document.querySelector('#navbar-ul').style.opacity = 0;
} // key press function


keypressdocument(); // document.addEventListener('click', function(e){
//     let parentNode = e.target.parentNode;
//     if(parentNode.classList){
//         if(parentNode.classList.contains('dropdown') ){
//             if(!clickCheckMenu){
//                 clickCheckMenu = e.target;
//                 return;
//             }else{
//                 if(!clickCheckMenu == e.target){
//                     clickCheckMenu = null;
//                 }
//             }
//         }
//     }
//     submenuItems.forEach(function(s){
//         s.style.display = 'none';
//     })
//     clickCheckMenu = null;
// })

logoContainer.addEventListener('click', function (e) {
  window.location.hash = "#";
  window.location.pathname = "/home";
}); // mobile btn

hamburger.addEventListener('click', function () {
  navbarUl = document.querySelector('#navbar-ul');
  socialmedia = document.querySelector('#socialmedia');
  var opacityValue;
  var tl = gsap.timeline({
    defaults: {
      duration: .3
    }
  });

  if (navbarUl.style.display == "none" || navbarUl.style.display == "") {
    navbarUl.style.display = "flex";
    socialmedia.style.display = "flex";
    opacityValue = 1;
  } else {
    navbarUl.style.display = "none";
    socialmedia.style.display = "none";
    opacityValue = 0;
  }

  tl.to(navbarUl, {
    ease: "power2",
    opacity: opacityValue
  });
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
    } else {
      e.setAttribute('checked', 'checked');
    }
  });
}); //expand menu items

menuItems.forEach(function (f) {
  f.addEventListener('click', function (e) {
    var selectedMenu = f.querySelector('.submenu');
    var check = selectedMenu.style.display;
    var opacityValue;
    var tl = gsap.timeline({
      defaults: {
        duration: .3
      }
    });
    submenuItems.forEach(function (s) {
      if (s.style.display == 'flex') {
        s.style.display = 'none';
      }
    });

    if (check == "flex") {
      selectedMenu.style.display = "none";
      opacityValue = 0;
    } else {
      selectedMenu.style.display = "flex";
      opacityValue = 1;
    }

    tl.to(selectedMenu, {
      ease: "power2",
      opacity: opacityValue
    });
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
    opacityValue = 0;
  } else {
    loginbar.querySelectorAll('div')[0].style.display = 'initial';
    loginbar.querySelector('div .btn').style.display = 'initial';
    minimize.querySelectorAll('div')[0].style.display = 'initial';
    minimize.querySelectorAll('div')[1].style.display = 'none';
    opacityValue = 1;
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
});
closebtnflash.forEach(function (e) {
  e.addEventListener('click', function () {
    e.parentElement.style.display = 'none';
    e.parentElement.style.opacity = '0';
  });
}); // add transparent background for "read more" expandable text

function createTransparentBg(expandElement) {
  var transparentBg = document.createElement('div');
  transparentBg.classList.add('transparentBg');
  expandElement.appendChild(transparentBg);
}

function removeTransparentBg(expandElement) {
  transparentBg = expandElement.querySelector('.transparentBg');
  transparentBg.remove();
}

textExpand.forEach(function (f) {
  var children = f.querySelector('div');
  var childrenHeight = children.clientHeight;
  var elementHeight = f.clientHeight;
  var expand = f.parentNode.querySelector('.text-expand-button');

  if (childrenHeight > elementHeight) {
    createTransparentBg(f);
    expand.style.display = 'flex';
    expand.dataset.click = "0";
    expand.innerHTML = "<b>... more</b>";
  }

  expand.addEventListener('click', function (e) {
    var tl = gsap.timeline({
      defaults: {
        duration: .3
      }
    });
    var heightMax;
    var overflowValue;
    var delayValue;

    if (expand.dataset.click == 0) {
      removeTransparentBg(f);
      expand.dataset.click = "1";
      expand.innerHTML = "<b>less</b>";
      overflowValue = "initial";
      newheight = children.clientHeight;
      heightMax = +50 + newheight + "px";
      delayValue = "0";
      f.style.position = "relative";
    } else {
      createTransparentBg(f);
      expand.dataset.click = "0";
      expand.innerHTML = "<b>... more</b>";
      overflowValue = "hidden";
      heightMax = elementHeight + "px";
      delayValue = "-.3";
    }

    tl.to(f, {
      ease: "power2",
      maxHeight: heightMax
    }).to(f, {
      ease: "power2",
      overflow: overflowValue,
      delay: delayValue
    });
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
    bullet.style.backgroundColor = "#395531";

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
}

function keypressdocument() {
  document.onkeydown = function (event) {
    if (event.keyCode == 27) {
      var selectedMenu = document.querySelectorAll('.submenu');
      selectedMenu.forEach(function (s) {
        if (s.style.display == 'flex') {
          s.style.display = 'none';
        }
      });
    }
  }; // closebtn.forEach(function(e){
  //     e.parentElement.parentElement.parentElement.style.display = 'none'
  //     e.parentElement.parentElement.parentElement.style.opacity = '0'
  // })
  // closebtnflash.forEach(function(e){
  //     e.parentElement.style.display = 'none'
  //     e.parentElement.style.opacity = '0';
  // })
  // closebtnsq.forEach(function(e){
  //     e.parentElement.parentElement.parentElement.style.display = 'none'
  //     e.parentElement.parentElement.parentElement.style.opacity = '0'
  // })
  // }
  // if (event.keyCode == 13){
  //     acceptbtn.forEach(function(e){
  //         e.parentElement.style.display = 'none'
  //         e.parentElement.style.opacity = '0';
  //     })
  // }

}

if (galleryCard) {
  galleryCard.forEach(function (f) {
    f.addEventListener('click', function () {
      window.location = f.dataset.link;
    });
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-c4ecf0","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-b5bccd"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBCLENBQVA7QUFBQSxDQUF4Qjs7QUFDQSxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBTUgsV0FBVyxDQUFDSCxPQUFaLENBQW9CSSxtQkFBcEIsRUFBeUMsSUFBekMsRUFBK0MsUUFBL0MsQ0FBTjtBQUFBLENBQXRCLEVBQ0E7OztBQUNBL0gsTUFBTSxDQUFDa0ksTUFBUCxHQUFnQixZQUFNO0FBRWxCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUF0QixLQUFLLEVBQUk7QUFDdEJvQixJQUFBQSxhQUFhLENBQUNILFdBQUQsQ0FBYjtBQUNBTSxJQUFBQSxZQUFZLENBQUNsRSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixNQUEzQjtBQUNILEdBSEQ7O0FBSUEsTUFBTWlFLFlBQVksR0FBRzlJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxNQUFNOEksU0FBUyxHQUFHL0ksUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFsQjtBQUNBOEksRUFBQUEsU0FBUyxDQUFDakgsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MrRyxRQUFwQzs7QUFFQSxNQUFJSCxlQUFlLENBQUNGLFdBQUQsQ0FBbkIsRUFBa0M7QUFDOUJRLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2JGLE1BQUFBLFlBQVksQ0FBQ2xFLFNBQWIsQ0FBdUJJLE1BQXZCLENBQThCLE1BQTlCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBRUosQ0FoQkQ7Ozs7Ozs7Ozs7OztBQ3BCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLihqfHQpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLXYxLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy91bmxpbmtlZEpzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vLyBpbXBvcnQgJy4vc3R5bGVzL19tZWRpYS5zY3NzJztcblxuLy8gaW1wb3J0ICcuL3N0eWxlcy9mb250cy12MS5jc3MnO1xuaW1wb3J0ICcvYXNzZXRzL2pzL21haW4tdjEuanMnO1xuaW1wb3J0ICcvcHVibGljL3VubGlua2VkSnMvY29va2llcy5qcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbmxldCBoYW1idXJnZXIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci1tb2JpbGUtYnRuJyk7XG5sZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG5sZXQgc3VibWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUnKTtcbmxldCBjbGlja0NoZWNrTWVudSA9IG51bGw7XG5sZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4vLyBzZXQgbGluayB0byB0aGUgbG9nbyBmb3IgdGhlIGhvbWVwYWdlXG5sZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvLWNvbnRhaW5lcicpO1xuLy8gZ2V0IHN1Ym1lbnUgbGlua3NcbmxldCBtZW51TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudSBhJylcbi8vZ2V0IHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhciBmb3IgdGhlIHNjcm9sbGluZyBlZmZlY3RcbndpbmRvdy5oZWlnaHRuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5zdHlsZS5oZWlnaHQ7XG4vL2xvZ2luYmFyIG1pbmltaXplXG5sZXQgbG9naW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW5iYXInKVxubGV0IG1pbmltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmltaXplJylcbmNvbnN0IGNsb3NlYnRuZmxhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnRuLWZsYXNoJyk7XG5cbi8vZXhwYW5kIHRleHRcbmxldCB0ZXh0RXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZXhwYW5kJylcbmxldCB0ZXh0RXhwYW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtZXhwYW5kLWJ1dHRvbicpXG5cbmxldCBnYWxsZXJ5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5LWNhcmQnKVxuXG4vLyBjaGVjayBtYXRjaCBtZWRpYSB0byBwcmV2ZW50IGVsZW1lbnRzIFxuaWYgKG1hdGNoTWVkaWEpIHtcbiAgICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE4OXB4KVwiKTtcbiAgICBcbiAgICBtcS5hZGRMaXN0ZW5lcihXaWR0aENoYW5nZSk7XG4gICAgV2lkdGhDaGFuZ2UobXEpO1xuICB9XG4gXG4gIC8vIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICBmdW5jdGlvbiBXaWR0aENoYW5nZShtcSkge1xuICAgIGlmIChtcS5tYXRjaGVzKSB7XG4gICAgICAgIC8vcGhvbmVcbiAgICAgICAgaW5pdGlhbHBob25lKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFscGMoKTtcbiAgICAgIC8vIHBjXG4gICAgLy8gXG4gICAgfVxuXG59XG5mdW5jdGlvbiBpbml0aWFscGMoKXtcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHByZXZlbnRzIHRoZSBcImRpc3BsYXk6bm9uZVwiIGlmIHRoZSB2aWV3cG9ydCBjaGFuZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvY2lhbG1lZGlhJykuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxwaG9uZSgpe1xuICAgIC8vIHRoaXMgZnVuY3Rpb24gcHJldmVudHMgdGhlIFwiZGlzcGxheTpmbGV4XCIgaWYgdGhlIHZpZXdwb3J0IGNoYW5nZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItdWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJykuc3R5bGUub3BhY2l0eSA9IDBcbn1cblxuLy8ga2V5IHByZXNzIGZ1bmN0aW9uXG5cbmtleXByZXNzZG9jdW1lbnQoKTtcblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGxldCBwYXJlbnROb2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbi8vICAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdCl7XG4gICBcbi8vICAgICAgICAgaWYocGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duJykgKXtcbi8vICAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSl7XG4vLyAgICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBlLnRhcmdldDtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICB9ZWxzZXtcbi8vICAgICAgICAgICAgICAgICBpZighY2xpY2tDaGVja01lbnUgPT0gZS50YXJnZXQpe1xuLy8gICAgICAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbi8vICAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgIH0pXG4vLyAgICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuLy8gfSlcblxubG9nb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCIjXCI7XG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvaG9tZVwiO1xuICAgIFxufSlcblxuXG5cbi8vIG1vYmlsZSBidG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmF2YmFyVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJyk7XG4gICAgc29jaWFsbWVkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKTtcbiAgICBsZXQgb3BhY2l0eVZhbHVlO1xuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IC4zfX0pXG5cbiAgICBpZihuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiIHx8IG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJcIil7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBvcGFjaXR5VmFsdWUgPSAxO1xuXG4gICAgfWVsc2V7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG9wYWNpdHlWYWx1ZSA9IDA7XG5cbiAgICB9XG4gICAgdGwudG8obmF2YmFyVWwsIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogb3BhY2l0eVZhbHVlfSlcbiAgXG4gICBcbn0pXG5cbi8vdXBzY3JlZW5cbmNvbnN0IHVwU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwLXNjcmVlbicpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oZSkge1xuICAgIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBpZih5ID4gMTUwKXtcbiAgICAgICAgdXBTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdpbml0aWFsJztcblxuICAgIH1lbHNle1xuICAgICAgICB1cFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxufSlcbnVwU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSlcbn0pXG5cbi8vIEJVVFRPTlNcbmNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSA9PSAgJ2NoZWNrZWQnKXtcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgbnVsbCkgO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuLy9leHBhbmQgbWVudSBpdGVtc1xubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRNZW51ID0gZi5xdWVyeVNlbGVjdG9yKCcuc3VibWVudScpO1xuICAgICAgICBsZXQgY2hlY2sgPSBzZWxlY3RlZE1lbnUuc3R5bGUuZGlzcGxheTtcblxuICAgICAgICBsZXQgb3BhY2l0eVZhbHVlO1xuICAgICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAuM319KVxuICAgICAgICBcblxuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIGlmKHMuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xuICAgICAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoY2hlY2sgPT0gXCJmbGV4XCIpe1xuICAgICAgICAgICAgc2VsZWN0ZWRNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG9wYWNpdHlWYWx1ZSA9IDA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2VsZWN0ZWRNZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIG9wYWNpdHlWYWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGwudG8oc2VsZWN0ZWRNZW51LCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZX0pXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbn0pXG5cbi8vIG1lbnUgaXRlbXMgc2Nyb2xsIG9uIGNsaWNrXG5tZW51TGkuZm9yRWFjaChmdW5jdGlvbihlKXsgIFxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpZihlLmRhdGFzZXQuc2Nyb2xsKXtcbiAgICAgICAgICAgIGxpbmsgPSBlLmRhdGFzZXQuc2Nyb2xsO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihsaW5rKS5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IGUuZGF0YXNldC5yb3V0ZSAmJiBsaW5rICE9IFwiI1wiKXtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluaylcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1RhcmdldEFkanVzdGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gZS5kYXRhc2V0LnJvdXRlXG4gICAgICAgICAgICAgICAgaWYoZS5kYXRhc2V0LnNjcm9sbCAhPSBcIiNcIil7XG4gICAgICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZSArICBlLmRhdGFzZXQuc2Nyb2xsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJvdXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoc2Nyb2xsZWRlbGVtZW50KXtcbiAgICBcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgbGV0IGhlYWRlck9mZnNldCA9IHdpbmRvdy5oZWlnaHRuYXZiYXI7XG4gICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbGVkZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgbGV0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gaGVhZGVyT2Zmc2V0IC0gYm9keTtcbiAgICBpZihoZWFkZXJPZmZzZXQgPT0gMCAmJiBzY3JvbGxlZGVsZW1lbnQuaWQgPT0gXCJzLWFjYXNhXCIpe1xuICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IDA7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG59XG5cbm1pbmltaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IGVsZW0gPSBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXVxuXG4gICAgICAgIGlmKGVsZW0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbG9naW5iYXIucXVlcnlTZWxlY3RvcignZGl2IC5idG4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG1pbmltaXplLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzFdLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBvcGFjaXR5VmFsdWUgPSAwO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxvZ2luYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBsb2dpbmJhci5xdWVyeVNlbGVjdG9yKCdkaXYgLmJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnaW5pdGlhbCc7XG4gICAgICAgICAgICBtaW5pbWl6ZS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2luaXRpYWwnO1xuICAgICAgICAgICAgbWluaW1pemUucXVlcnlTZWxlY3RvckFsbCgnZGl2JylbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG9wYWNpdHlWYWx1ZSA9IDE7XG4gICAgICAgIH1cbiBcbiAgICB9KVxuXG5sb2dvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvaG9tZVwiO1xufSlcblxuLy9jbG9zZSBmbGFzaCBtc2dcbmNsb3NlYnRuZmxhc2guZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGUucGFyZW50RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgfSlcbn0pXG5cbmNsb3NlYnRuZmxhc2guZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGUucGFyZW50RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgfSlcbn0pXG5cbi8vIGFkZCB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kIGZvciBcInJlYWQgbW9yZVwiIGV4cGFuZGFibGUgdGV4dFxuZnVuY3Rpb24gY3JlYXRlVHJhbnNwYXJlbnRCZyhleHBhbmRFbGVtZW50KXtcbiAgICBsZXQgdHJhbnNwYXJlbnRCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYW5zcGFyZW50QmcuY2xhc3NMaXN0LmFkZCgndHJhbnNwYXJlbnRCZycpO1xuICAgIGV4cGFuZEVsZW1lbnQuYXBwZW5kQ2hpbGQodHJhbnNwYXJlbnRCZyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYW5zcGFyZW50QmcoZXhwYW5kRWxlbWVudCl7XG4gICAgdHJhbnNwYXJlbnRCZyA9IGV4cGFuZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRyYW5zcGFyZW50QmcnKTtcbiAgICB0cmFuc3BhcmVudEJnLnJlbW92ZSgpO1xufVxuXG50ZXh0RXhwYW5kLmZvckVhY2goZnVuY3Rpb24oZil7XG5cbiAgICBsZXQgY2hpbGRyZW4gPSBmLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpXG4gICAgbGV0IGNoaWxkcmVuSGVpZ2h0ID0gY2hpbGRyZW4uY2xpZW50SGVpZ2h0IDtcbiAgICBsZXQgZWxlbWVudEhlaWdodCA9IGYuY2xpZW50SGVpZ2h0IDtcbiAgICBsZXQgZXhwYW5kID0gZi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWV4cGFuZC1idXR0b24nKTtcbiAgICBpZihjaGlsZHJlbkhlaWdodCA+IGVsZW1lbnRIZWlnaHQpe1xuICAgICAgICBjcmVhdGVUcmFuc3BhcmVudEJnKGYpXG4gICAgICAgIGV4cGFuZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBleHBhbmQuZGF0YXNldC5jbGljayA9IFwiMFwiO1xuICAgICAgICBleHBhbmQuaW5uZXJIVE1MID0gXCI8Yj4uLi4gbW9yZTwvYj5cIjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IC4zfX0pXG4gICAgICAgIGxldCBoZWlnaHRNYXg7XG4gICAgICAgIGxldCBvdmVyZmxvd1ZhbHVlO1xuICAgICAgICBsZXQgZGVsYXlWYWx1ZTtcbiAgICAgICBcbiAgICAgICAgaWYoZXhwYW5kLmRhdGFzZXQuY2xpY2sgPT0gMCl7XG4gICAgICAgICAgXG4gICAgICAgICAgICByZW1vdmVUcmFuc3BhcmVudEJnKGYpXG4gICAgICAgICAgICBleHBhbmQuZGF0YXNldC5jbGljayA9IFwiMVwiO1xuICAgICAgICAgICAgZXhwYW5kLmlubmVySFRNTCA9IFwiPGI+bGVzczwvYj5cIjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgb3ZlcmZsb3dWYWx1ZSA9IFwiaW5pdGlhbFwiXG4gICAgICAgICAgICBuZXdoZWlnaHQgPSBjaGlsZHJlbi5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIGhlaWdodE1heCA9ICs1MCtuZXdoZWlnaHQgK1wicHhcIjtcbiAgICAgICAgICAgIGRlbGF5VmFsdWUgPSBcIjBcIlxuICAgICAgICAgICAgZi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc3BhcmVudEJnKGYpXG4gICAgICAgICAgICBleHBhbmQuZGF0YXNldC5jbGljayA9IFwiMFwiO1xuICAgICAgICAgICAgZXhwYW5kLmlubmVySFRNTCA9IFwiPGI+Li4uIG1vcmU8L2I+XCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG92ZXJmbG93VmFsdWUgPSBcImhpZGRlblwiXG4gICAgICAgICAgICBoZWlnaHRNYXggPSBlbGVtZW50SGVpZ2h0K1wicHhcIjtcbiAgICAgICAgICAgIGRlbGF5VmFsdWUgPVwiLS4zXCI7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRsLnRvKGYsIHsgZWFzZTogXCJwb3dlcjJcIiwgbWF4SGVpZ2h0OiBoZWlnaHRNYXh9KVxuICAgICAgICAudG8oZiwge2Vhc2U6XCJwb3dlcjJcIiwgb3ZlcmZsb3c6IG92ZXJmbG93VmFsdWUsIGRlbGF5OmRlbGF5VmFsdWV9KTtcbiAgICB9KVxuXG4gICBcblxufSlcblxuLy9cblxuXG4vL1xuLy8gaW5pdGlhbGl6ZSBob21laW5pdGlhbCAod2hlcmUgYWxsIHRoZSBmdW5jdGlvbnMgYXJlIHJ1bm5pbmcpIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBob21laW5pdGlhbCk7XG5cblxuXG5mdW5jdGlvbiBob21laW5pdGlhbCgpe1xuICAgIC8vY3JlYXRlIGEgZmFkZSBsb2FkaW5nIHBhZ2UgZm9yIHRoZSBib2R5XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihmKXtcbiAgICAvL2Rpc3BsYXkgaW5pdGlhbCBob21lcGFnZVxuICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogLjV9fSlcbiAgICB0bC50byhjb250ZW50LCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxfSk7XG4gICAgfSlcblxuICAgIC8vIGhvbWUgY2Fyb3VzZWxcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5uZXJcIilcbiAgICBpZighYmFubmVyKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgIGxldCBob21lbGVmdGFycm93ID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy1sZWZ0Jyk7XG4gICAgbGV0IGhvbWVyaWdodGFycm93PSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWFycm93LXJpZ2h0Jyk7XG4gICAgbGV0IGhvbWVzbGlkZXIgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLXNsaWRlJyk7XG4gICAgbGV0IGhvbWVidWxsZXQgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWJ1bGxldHMnKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdEJ1bGxldENvbG9yID0gaG9tZWJ1bGxldFswXS5zdHlsZTtcbiAgICBob21lbGVmdGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjbGVhckludGVydmFsKGNoaW1hZ2VpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZWltYWdlKDEpO1xuICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcbiAgICAgICAgXG4gICAgfSlcbiAgICAgICAgXG4gICAgaG9tZXJpZ2h0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hpbWFnZWludGVydmFsKTtcbiAgICAgICAgY2hhbmdlaW1hZ2UoKTtcbiAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG4gICAgfSlcblxuXG4gICAgZiA9IGhvbWVzbGlkZXJbaG9tZWNhcm91c2VsaW5kZXhdO1xuXG4gICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VpbWFnZShmKXtcblxuICAgICAgICBsZXQgZWxlbSA9IGhvbWVzbGlkZXJbaG9tZWNhcm91c2VsaW5kZXhdO1xuICAgICAgICBpZihmKXtcbiAgICAgICAgICAgIGlmKGhvbWVjYXJvdXNlbGluZGV4ID09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGhvbWVzbGlkZXJsZW5ndGggPSBob21lc2xpZGVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBsZXQgaG9tZXNsaWRlcmxlbmdodG1pbnVzID0gaG9tZXNsaWRlcmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbaG9tZXNsaWRlcmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFtob21lc2xpZGVybGVuZ3RoIC0gMV1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gaG9tZXNsaWRlcmxlbmd0aCAgLTE7XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclsraG9tZWNhcm91c2VsaW5kZXgtMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0Wytob21lY2Fyb3VzZWxpbmRleC0xXVxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gK2hvbWVjYXJvdXNlbGluZGV4IC0xICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoaG9tZXNsaWRlci5sZW5ndGggPT0gK2hvbWVjYXJvdXNlbGluZGV4ICsgMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclswXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbMF1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWytob21lY2Fyb3VzZWxpbmRleCsxXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbK2hvbWVjYXJvdXNlbGluZGV4KzFdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9ICtob21lY2Fyb3VzZWxpbmRleCArMSAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jbGVhciBpbmRleGVzIHRvIHByZXZlbnQgb3ZlcmxhcHBpbmdcbiAgICAgICAgY2xlYXJjYXJvdXNlbGluZGV4ZXMoKVxuXG4gICAgICAgIC8vc3RhcnQgY2Fyb3VzZWwgYW5pbWF0aW9uXG5cbiAgICAgICAgXG4gICAgICAgIGNhcm91c2VsYW5pbWF0aW9uKClcblxuICAgICAgICBob21lYnVsbGV0LmZvckVhY2goZnVuY3Rpb24oaCl7XG4gICAgICAgICAgICBoLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfSlcbiAgICAgICAgYnVsbGV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzM5NTUzMVwiO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyY2Fyb3VzZWxpbmRleGVzKCl7XG4gICAgICAgICAgICBob21lc2xpZGVyLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS56SW5kZXggPSBcIjlcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYXJvdXNlbGFuaW1hdGlvbigpe1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAvLyB9LCAzMDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG5leHQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBuZXh0LnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBcbiAgICAgICAgICAgIHRsID0gZ3NhcC50aW1lbGluZSh7IGRlZmF1bHRzOntkdXJhdGlvbjogMX19KVxuICAgICAgICAgICAgdGwudG8oZWxlbSwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAwfSlcbiAgICAgICAgICAgIHRsLnRvKG5leHQsIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMSwgZGVsYXk6LS45fSlcbiAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGtleXByZXNzZG9jdW1lbnQoKXtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNyl7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUnKTtcblxuICAgICAgICAgICAgc2VsZWN0ZWRNZW51LmZvckVhY2goZnVuY3Rpb24ocyl7XG4gICAgICAgICAgICAgICAgaWYocy5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jyl7XG4gICAgICAgICAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgICAgICAvLyBjbG9zZWJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyAgICAgZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vICAgICBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gY2xvc2VidG5mbGFzaC5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyAgICAgZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gICAgIGUucGFyZW50RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBjbG9zZWJ0bnNxLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vICAgICBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgLy8gICAgIGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgICAgICAvLyB9KVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChldmVudC5rZXlDb2RlID09IDEzKXtcbiAgICAgICAgLy8gICAgIGFjY2VwdGJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyAgICAgICAgIGUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIC8vICAgICAgICAgZS5wYXJlbnRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICBcbn1cblxuaWYoZ2FsbGVyeUNhcmQpe1xuICAgIGdhbGxlcnlDYXJkLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZi5kYXRhc2V0LmxpbmtcbiAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuLy8gIGNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbi8vICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICAgIGlmKGUuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgPT0gICdjaGVja2VkJyl7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgbnVsbCkgO1xuICAgICAgICAgIFxuLy8gICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgO1xuLy8gICAgICAgIH1cbi8vICAgIH0pXG4vLyB9KSIsIiBcbmNvbnN0IGNvb2tpZVN0b3JhZ2UgPSB7XG4gICAgZ2V0SXRlbTogKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAgICAgLnNwbGl0KCc7JylcbiAgICAgICAgICAgIC5tYXAoY29va2llID0+IGNvb2tpZS5zcGxpdCgnPScpKVxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+ICh7IC4uLmFjYywgW2tleS50cmltKCldOiB2YWx1ZSB9KSwge30pO1xuICAgICAgICByZXR1cm4gY29va2llc1tpdGVtXTtcbiAgICB9LFxuICAgIHNldEl0ZW06IChpdGVtLCB2YWx1ZSwgZXhwaXJlKSA9PiB7XG4gICAgICAgIE1heEFnZSA9IFwibWF4LWFnZT1cIisgZXhwaXJlXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2l0ZW19PSR7dmFsdWV9O2ArTWF4QWdlO1xuICAgIH1cbn1cblxuY29uc3Qgc3RvcmFnZVR5cGUgPSBjb29raWVTdG9yYWdlO1xuY29uc3QgY29uc2VudFByb3BlcnR5TmFtZSA9ICdjb29raWVzX2NvbnNlbnQnO1xuY29uc3Qgc2hvdWxkU2hvd1BvcHVwID0gKCkgPT4gIXN0b3JhZ2VUeXBlLmdldEl0ZW0oY29uc2VudFByb3BlcnR5TmFtZSk7XG5jb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4gc3RvcmFnZVR5cGUuc2V0SXRlbShjb25zZW50UHJvcGVydHlOYW1lLCB0cnVlLCAzMTUzNjAwMCk7XG4vLyAxIHllYXJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBhY2NlcHRGbiA9IGV2ZW50ID0+IHtcbiAgICAgICAgc2F2ZVRvU3RvcmFnZShzdG9yYWdlVHlwZSk7XG4gICAgICAgIGNvbnNlbnRQb3B1cC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnNlbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25zZW50LXBvcHVwJyk7XG4gICAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnNlbnQtYWNjZXB0Jyk7XG4gICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWNjZXB0Rm4pO1xuXG4gICAgaWYgKHNob3VsZFNob3dQb3B1cChzdG9yYWdlVHlwZSkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1idXJnZXIiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3VibWVudUl0ZW1zIiwiY2xpY2tDaGVja01lbnUiLCJjaGVja2JveGVzIiwibG9nb0NvbnRhaW5lciIsIm1lbnVMaSIsIndpbmRvdyIsImhlaWdodG5hdmJhciIsInN0eWxlIiwiaGVpZ2h0IiwibG9naW5iYXIiLCJtaW5pbWl6ZSIsImNsb3NlYnRuZmxhc2giLCJ0ZXh0RXhwYW5kIiwidGV4dEV4cGFuZEJ1dHRvbiIsImdhbGxlcnlDYXJkIiwibWF0Y2hNZWRpYSIsIm1xIiwiYWRkTGlzdGVuZXIiLCJXaWR0aENoYW5nZSIsIm1hdGNoZXMiLCJpbml0aWFscGhvbmUiLCJpbml0aWFscGMiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImtleXByZXNzZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImxvY2F0aW9uIiwiaGFzaCIsInBhdGhuYW1lIiwibmF2YmFyVWwiLCJzb2NpYWxtZWRpYSIsIm9wYWNpdHlWYWx1ZSIsInRsIiwiZ3NhcCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJkdXJhdGlvbiIsInRvIiwiZWFzZSIsInVwU2NyZWVuIiwieSIsInNjcm9sbFkiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiZm9yRWFjaCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImYiLCJzZWxlY3RlZE1lbnUiLCJjaGVjayIsInMiLCJkYXRhc2V0Iiwic2Nyb2xsIiwibGluayIsInJvdXRlIiwic2Nyb2xsVG9UYXJnZXRBZGp1c3RlZCIsInNjcm9sbGVkZWxlbWVudCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWFkZXJPZmZzZXQiLCJlbGVtZW50UG9zaXRpb24iLCJvZmZzZXRQb3NpdGlvbiIsImlkIiwiZWxlbSIsInBhcmVudEVsZW1lbnQiLCJjcmVhdGVUcmFuc3BhcmVudEJnIiwiZXhwYW5kRWxlbWVudCIsInRyYW5zcGFyZW50QmciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVUcmFuc3BhcmVudEJnIiwicmVtb3ZlIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkhlaWdodCIsImNsaWVudEhlaWdodCIsImVsZW1lbnRIZWlnaHQiLCJleHBhbmQiLCJwYXJlbnROb2RlIiwiY2xpY2siLCJpbm5lckhUTUwiLCJoZWlnaHRNYXgiLCJvdmVyZmxvd1ZhbHVlIiwiZGVsYXlWYWx1ZSIsIm5ld2hlaWdodCIsInBvc2l0aW9uIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJkZWxheSIsImhvbWVpbml0aWFsIiwiYmFubmVyIiwiaG9tZWNhcm91c2VsaW5kZXgiLCJob21lbGVmdGFycm93IiwiaG9tZXJpZ2h0YXJyb3ciLCJob21lc2xpZGVyIiwiaG9tZWJ1bGxldCIsImZpcnN0QnVsbGV0Q29sb3IiLCJjbGVhckludGVydmFsIiwiY2hpbWFnZWludGVydmFsIiwiY2hhbmdlaW1hZ2UiLCJzZXRJbnRlcnZhbCIsImhvbWVzbGlkZXJsZW5ndGgiLCJsZW5ndGgiLCJuZXh0IiwiYnVsbGV0IiwiY2xlYXJjYXJvdXNlbGluZGV4ZXMiLCJjYXJvdXNlbGFuaW1hdGlvbiIsImgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJvbmtleWRvd24iLCJldmVudCIsImtleUNvZGUiLCJjb29raWVTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW0iLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJtYXAiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJ2YWx1ZSIsInRyaW0iLCJzZXRJdGVtIiwiZXhwaXJlIiwiTWF4QWdlIiwic3RvcmFnZVR5cGUiLCJjb25zZW50UHJvcGVydHlOYW1lIiwic2hvdWxkU2hvd1BvcHVwIiwic2F2ZVRvU3RvcmFnZSIsIm9ubG9hZCIsImFjY2VwdEZuIiwiY29uc2VudFBvcHVwIiwiYWNjZXB0QnRuIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=