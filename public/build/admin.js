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

__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");

var content = document.querySelector('#content');
var hamburger = document.querySelector('#navbar-mobile-btn');
var menuItems = document.querySelectorAll('.dropdown');
var submenuItems = document.querySelectorAll('.submenu');
var clickCheckMenu = null; // set link to the logo for the homepage

var logoContainer = document.querySelector('#logo-container'); // get submenu links

var menuLi = document.querySelectorAll('.submenu a'); //get the height of the navbar for the scrolling effect

window.heightnavbar = document.querySelector('nav').style.height; //loginbar minimize

var loginbar = document.querySelector('#loginbar');
var minimize = document.querySelector('.minimize'); // close flash msg

var closebtnflash = document.querySelectorAll('.close-btn-flash'); // get all the axios requests with link and id parameters

var axiosIdLink = document.querySelectorAll('.axios-id-link'); // check match media to prevent elements 

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
  window.location.hash = "";
  window.location.pathname = "/admin";
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
// initialize admininitial (where all the functions are running) after the page loads

document.addEventListener("DOMContentLoaded", admininitial);

function admininitial() {
  //create a fade loading page for the body
  window.addEventListener('load', function (f) {
    //display initial panel
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
} //close flash msg


closebtnflash.forEach(function (e) {
  e.addEventListener('click', function () {
    e.parentElement.style.display = 'none';
    e.parentElement.style.opacity = '0';
  });
}); //

if (axiosIdLink) {
  axiosIdLink.forEach(function (f) {
    f.addEventListener('click', function (e) {
      id = f.dataset.id;
      link = f.dataset.link;
      axios.post(link, {
        id: id
      }).then(function (res) {
        location.reload();
      })["catch"](function (err) {
        return console.log(err);
      });
    });
  });
} /// DATEPICKER


var myInput = document.querySelectorAll(".dateinput"); // Create new Date instance
// let date = new Date()
// date.setDate(date.getDate() + 364)

var fp = flatpickr(myInput, {
  altInput: true,
  altFormat: "d F Y",
  dateFormat: "Y-m-d",
  "locale": "ro" // minDate: "today",
  // maxDate:new Date().fp_incr(364),
  // inline: true,

}); // flatpickr
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

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFWLENBQXBCLEVBUUs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM5VUEsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQTs7Ozs7Ozs7Ozs7QUNaQSxZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsSUFBSSx1RUFBdUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4tdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctaHRtbC1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FkbWluLnNjc3MnO1xuXG5pbXBvcnQgJy9hc3NldHMvanMvYWRtaW4tdjEuanMnO1xuXG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbmxldCBoYW1idXJnZXIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci1tb2JpbGUtYnRuJyk7XG5sZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG5sZXQgc3VibWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUnKTtcbmxldCBjbGlja0NoZWNrTWVudSA9IG51bGw7XG4vLyBzZXQgbGluayB0byB0aGUgbG9nbyBmb3IgdGhlIGhvbWVwYWdlXG5sZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvLWNvbnRhaW5lcicpO1xuLy8gZ2V0IHN1Ym1lbnUgbGlua3NcbmxldCBtZW51TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudSBhJylcbi8vZ2V0IHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhciBmb3IgdGhlIHNjcm9sbGluZyBlZmZlY3RcbndpbmRvdy5oZWlnaHRuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5zdHlsZS5oZWlnaHQ7XG4vL2xvZ2luYmFyIG1pbmltaXplXG5sZXQgbG9naW5iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW5iYXInKVxubGV0IG1pbmltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbmltaXplJylcbi8vIGNsb3NlIGZsYXNoIG1zZ1xuY29uc3QgY2xvc2VidG5mbGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZS1idG4tZmxhc2gnKTtcbi8vIGdldCBhbGwgdGhlIGF4aW9zIHJlcXVlc3RzIHdpdGggbGluayBhbmQgaWQgcGFyYW1ldGVyc1xubGV0IGF4aW9zSWRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF4aW9zLWlkLWxpbmsnKTtcblxuLy8gY2hlY2sgbWF0Y2ggbWVkaWEgdG8gcHJldmVudCBlbGVtZW50cyBcbmlmIChtYXRjaE1lZGlhKSB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExODlweClcIik7XG4gICAgXG4gICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgIFdpZHRoQ2hhbmdlKG1xKTtcbiAgfVxuIFxuICAvLyBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgICAvL3Bob25lXG4gICAgICAgIGluaXRpYWxwaG9uZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbHBjKCk7XG4gICAgICAvLyBwY1xuICAgIC8vIFxuICAgIH1cblxufVxuZnVuY3Rpb24gaW5pdGlhbHBjKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5Om5vbmVcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2NpYWxtZWRpYScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxufVxuXG5mdW5jdGlvbiBpbml0aWFscGhvbmUoKXtcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHByZXZlbnRzIHRoZSBcImRpc3BsYXk6ZmxleFwiIGlmIHRoZSB2aWV3cG9ydCBjaGFuZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmKHBhcmVudE5vZGUuY2xhc3NMaXN0KXtcbiAgIFxuICAgICAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSApe1xuICAgICAgICAgICAgaWYoIWNsaWNrQ2hlY2tNZW51KXtcbiAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSA9PSBlLnRhcmdldCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrQ2hlY2tNZW51KVxuICAgICAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG4gICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xufSlcblxuXG5sb2dvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2FkbWluXCI7XG4gICAgXG59KVxuXG5cblxuLy9leHBhbmQgbWVudSBpdGVtc1xubWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHMpe1xuICAgICAgICAgICAgcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KVxuICAgICAgICBxU3VibWVudSA9IGYucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKTtcbiAgICAgICAgcVN1Ym1lbnUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pXG59KVxuXG5cbi8vIG1vYmlsZSBidG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmF2YmFyVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJyk7XG4gICAgc29jaWFsbWVkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsbWVkaWEnKTtcbiAgICBjb25zb2xlLmxvZyhuYXZiYXJVbC5zdHlsZS5kaXNwbGF5KVxuICAgIGlmKG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgfHwgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9PSBcIlwiKXtcbiAgICAgICAgbmF2YmFyVWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfWVsc2V7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBzb2NpYWxtZWRpYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuXG5cblxuLy8gbWVudSBpdGVtcyBzY3JvbGwgb24gY2xpY2tcbm1lbnVMaS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgIFxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpZihlLmRhdGFzZXQuc2Nyb2xsKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGluayA9IGUuZGF0YXNldC5zY3JvbGw7XG4gICAgICAgICAgICBlbGVtZW50ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluaylcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluaykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBlLmRhdGFzZXQucm91dGUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd4eHgnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1RhcmdldEFkanVzdGVkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kYXRhc2V0LnJvdXRlKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YXNldC5zY3JvbGwpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IGUuZGF0YXNldC5yb3V0ZSArIGUuZGF0YXNldC5zY3JvbGxcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByb3V0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuXG59KVxuXG5mdW5jdGlvbiBzY3JvbGxUb1RhcmdldEFkanVzdGVkKHNjcm9sbGVkZWxlbWVudCl7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsZWRlbGVtZW50KVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICBsZXQgaGVhZGVyT2Zmc2V0ID0gd2luZG93LmhlaWdodG5hdmJhcjtcbiAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsZWRlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBsZXQgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBoZWFkZXJPZmZzZXQgLSBib2R5O1xuICAgIGlmKGhlYWRlck9mZnNldCA9PSAwICYmIHNjcm9sbGVkZWxlbWVudC5pZCA9PSBcInMtYWNhc2FcIil7XG4gICAgICAgIG9mZnNldFBvc2l0aW9uID0gMDtcbiAgICB9XG5cblxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbn1cblxuXG5sb2dvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gXCIvYWRtaW5cIjtcbn0pXG5cbi8vXG4vLyBpbml0aWFsaXplIGFkbWluaW5pdGlhbCAod2hlcmUgYWxsIHRoZSBmdW5jdGlvbnMgYXJlIHJ1bm5pbmcpIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhZG1pbmluaXRpYWwpO1xuXG5cblxuZnVuY3Rpb24gYWRtaW5pbml0aWFsKCl7XG4gICAgLy9jcmVhdGUgYSBmYWRlIGxvYWRpbmcgcGFnZSBmb3IgdGhlIGJvZHlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGYpe1xuICAgICAgICAvL2Rpc3BsYXkgaW5pdGlhbCBwYW5lbFxuICAgICAgICB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IC41fX0pXG4gICAgICAgIHRsLnRvKGNvbnRlbnQsIHsgZWFzZTogXCJleHBvXCIsIG9wYWNpdHk6IDF9KTtcbiAgICB9KVxuXG4gICAgLy8gaG9tZSBjYXJvdXNlbFxuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jhbm5lclwiKVxuICAgIGlmKCFiYW5uZXIpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGxldCBob21lY2Fyb3VzZWxpbmRleCA9IDA7XG4gICAgbGV0IGhvbWVsZWZ0YXJyb3cgPSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWFycm93LWxlZnQnKTtcbiAgICBsZXQgaG9tZXJpZ2h0YXJyb3c9IGJhbm5lci5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtYXJyb3ctcmlnaHQnKTtcbiAgICBsZXQgaG9tZXNsaWRlciA9IGJhbm5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcbiAgICBsZXQgaG9tZWJ1bGxldCA9IGJhbm5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtYnVsbGV0cycpO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0QnVsbGV0Q29sb3IgPSBob21lYnVsbGV0WzBdLnN0eWxlO1xuICAgIGNvbnNvbGUubG9nKGZpcnN0QnVsbGV0Q29sb3IpXG4gICAgaG9tZWxlZnRhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGltYWdlaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VpbWFnZSgxKTtcbiAgICAgICAgY2hpbWFnZWludGVydmFsID0gc2V0SW50ZXJ2YWwoY2hhbmdlaW1hZ2UsIDUwMDApXG4gICAgICAgIFxuICAgIH0pXG4gICAgICAgIFxuICAgIGhvbWVyaWdodGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBjbGVhckludGVydmFsKGNoaW1hZ2VpbnRlcnZhbCk7XG4gICAgICAgIGNoYW5nZWltYWdlKCk7XG4gICAgICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuICAgIH0pXG5cblxuICAgIGYgPSBob21lc2xpZGVyW2hvbWVjYXJvdXNlbGluZGV4XTtcblxuICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlaW1hZ2UoZil7XG5cbiAgICAgICAgbGV0IGVsZW0gPSBob21lc2xpZGVyW2hvbWVjYXJvdXNlbGluZGV4XTtcbiAgICAgICAgaWYoZil7XG4gICAgICAgICAgICBpZihob21lY2Fyb3VzZWxpbmRleCA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBob21lc2xpZGVybGVuZ3RoID0gaG9tZXNsaWRlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGhvbWVzbGlkZXJsZW5naHRtaW51cyA9IGhvbWVzbGlkZXJsZW5ndGggLSAxXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyW2hvbWVzbGlkZXJsZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbaG9tZXNsaWRlcmxlbmd0aCAtIDFdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9IGhvbWVzbGlkZXJsZW5ndGggIC0xO1xuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbK2hvbWVjYXJvdXNlbGluZGV4LTFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFsraG9tZWNhcm91c2VsaW5kZXgtMV1cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9ICtob21lY2Fyb3VzZWxpbmRleCAtMSAgXG4gICAgICAgICAgICB9XG4gICAgICAgICBcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKGhvbWVzbGlkZXIubGVuZ3RoID09ICtob21lY2Fyb3VzZWxpbmRleCArIDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbMF1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0WzBdXG5cbiAgICAgICAgICAgICAgICBob21lY2Fyb3VzZWxpbmRleCA9IDA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlclsraG9tZWNhcm91c2VsaW5kZXgrMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0Wytob21lY2Fyb3VzZWxpbmRleCsxXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAraG9tZWNhcm91c2VsaW5kZXggKzEgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vY2xlYXIgaW5kZXhlcyB0byBwcmV2ZW50IG92ZXJsYXBwaW5nXG4gICAgICAgIGNsZWFyY2Fyb3VzZWxpbmRleGVzKClcblxuICAgICAgICAvL3N0YXJ0IGNhcm91c2VsIGFuaW1hdGlvblxuXG4gICAgICAgIFxuICAgICAgICBjYXJvdXNlbGFuaW1hdGlvbigpXG5cbiAgICAgICAgaG9tZWJ1bGxldC5mb3JFYWNoKGZ1bmN0aW9uKGgpe1xuICAgICAgICAgICAgaC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0pXG4gICAgICAgIGJ1bGxldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyZjg2MzhcIjtcblxuICAgICAgICBmdW5jdGlvbiBjbGVhcmNhcm91c2VsaW5kZXhlcygpe1xuICAgICAgICAgICAgaG9tZXNsaWRlci5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuc3R5bGUuekluZGV4ID0gXCI5XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2Fyb3VzZWxhbmltYXRpb24oKXtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgLy8gfSwgMzAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBuZXh0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgbmV4dC5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgXG4gICAgICAgICAgICB0bCA9IGdzYXAudGltZWxpbmUoeyBkZWZhdWx0czp7ZHVyYXRpb246IDF9fSlcbiAgICAgICAgICAgIHRsLnRvKGVsZW0sIHsgZWFzZTogXCJwb3dlcjJcIiwgb3BhY2l0eTogMH0pXG4gICAgICAgICAgICB0bC50byhuZXh0LCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDEsIGRlbGF5Oi0uOX0pXG4gICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9jbG9zZSBmbGFzaCBtc2dcbmNsb3NlYnRuZmxhc2guZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGUucGFyZW50RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuXG4gICAgfSlcbn0pXG5cbi8vXG5cbmlmKGF4aW9zSWRMaW5rKXtcbiAgIFxuICAgIGF4aW9zSWRMaW5rLmZvckVhY2goZnVuY3Rpb24oZil7XG4gICAgICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGlkID0gZi5kYXRhc2V0LmlkXG4gICAgICAgICAgICBsaW5rID0gZi5kYXRhc2V0LmxpbmtcbiAgICAgICAgICAgIGF4aW9zLnBvc3QobGluayx7XG4gICAgICAgICAgICAgICAgaWQ6aWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+Y29uc29sZS5sb2coZXJyKSk7ICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuLy8vIERBVEVQSUNLRVJcbmNvbnN0IG15SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGVpbnB1dFwiKTtcbi8vIENyZWF0ZSBuZXcgRGF0ZSBpbnN0YW5jZVxuLy8gbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4vLyBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAzNjQpXG5jb25zdCBmcCA9IGZsYXRwaWNrcihteUlucHV0LCB7XG4gICAgYWx0SW5wdXQ6IHRydWUsXG4gICAgYWx0Rm9ybWF0OiBcImQgRiBZXCIsXG4gICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgIFwibG9jYWxlXCI6IFwicm9cIixcbiAgICAvLyBtaW5EYXRlOiBcInRvZGF5XCIsXG4gICAgLy8gbWF4RGF0ZTpuZXcgRGF0ZSgpLmZwX2luY3IoMzY0KSxcbiAgICAvLyBpbmxpbmU6IHRydWUsXG59KTsgIC8vIGZsYXRwaWNrclxuXG4vLyAgY2hlY2tib3hlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xuLy8gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgaWYoZS5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSA9PSAgJ2NoZWNrZWQnKXtcbi8vICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBudWxsKSA7XG4gICAgICAgICAgXG4vLyAgICAgICAgfWVsc2V7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA7XG4vLyAgICAgICAgfVxuLy8gICAgfSlcbi8vIH0pIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG5cbi8vIGBDcmVhdGVIVE1MYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlaHRtbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIHRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVIVE1MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1odG1sJyk7XG52YXIgZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctaHRtbC1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubGlua1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ0hUTUxNZXRob2QoJ2xpbmsnKSB9LCB7XG4gIGxpbms6IGZ1bmN0aW9uIGxpbmsodXJsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ2VyIiwibWVudUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInN1Ym1lbnVJdGVtcyIsImNsaWNrQ2hlY2tNZW51IiwibG9nb0NvbnRhaW5lciIsIm1lbnVMaSIsIndpbmRvdyIsImhlaWdodG5hdmJhciIsInN0eWxlIiwiaGVpZ2h0IiwibG9naW5iYXIiLCJtaW5pbWl6ZSIsImNsb3NlYnRuZmxhc2giLCJheGlvc0lkTGluayIsIm1hdGNoTWVkaWEiLCJtcSIsImFkZExpc3RlbmVyIiwiV2lkdGhDaGFuZ2UiLCJtYXRjaGVzIiwiaW5pdGlhbHBob25lIiwiaW5pdGlhbHBjIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicGFyZW50Tm9kZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJzIiwibG9jYXRpb24iLCJoYXNoIiwicGF0aG5hbWUiLCJmIiwicVN1Ym1lbnUiLCJuYXZiYXJVbCIsInNvY2lhbG1lZGlhIiwiZGF0YXNldCIsInNjcm9sbCIsImxpbmsiLCJyb3V0ZSIsInNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQiLCJzY3JvbGxlZGVsZW1lbnQiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaGVhZGVyT2Zmc2V0IiwiZWxlbWVudFBvc2l0aW9uIiwib2Zmc2V0UG9zaXRpb24iLCJpZCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJhZG1pbmluaXRpYWwiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJ0byIsImVhc2UiLCJvcGFjaXR5IiwiYmFubmVyIiwiaG9tZWNhcm91c2VsaW5kZXgiLCJob21lbGVmdGFycm93IiwiaG9tZXJpZ2h0YXJyb3ciLCJob21lc2xpZGVyIiwiaG9tZWJ1bGxldCIsImZpcnN0QnVsbGV0Q29sb3IiLCJjbGVhckludGVydmFsIiwiY2hpbWFnZWludGVydmFsIiwiY2hhbmdlaW1hZ2UiLCJzZXRJbnRlcnZhbCIsImVsZW0iLCJob21lc2xpZGVybGVuZ3RoIiwibGVuZ3RoIiwibmV4dCIsImJ1bGxldCIsImNsZWFyY2Fyb3VzZWxpbmRleGVzIiwiY2Fyb3VzZWxhbmltYXRpb24iLCJoIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiZGVsYXkiLCJwYXJlbnRFbGVtZW50IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsInJlbG9hZCIsImVyciIsIm15SW5wdXQiLCJmcCIsImZsYXRwaWNrciIsImFsdElucHV0IiwiYWx0Rm9ybWF0IiwiZGF0ZUZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=