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
var clickCheckMenu = null;
var checkboxes = document.querySelectorAll('input[type=checkbox]'); // set link to the logo for the homepage

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
        scrollToTargetAdjusted(element);
      } else {
        var route = e.dataset.route + e.dataset.scroll;
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

logoContainer.addEventListener('click', function (e) {
  window.location.pathname = "/admin";
});
checkboxes.forEach(function (e) {
  e.addEventListener('click', function () {
    if (e.classList.contains('checkbox-target')) {
      searchElem = "[name='" + e.dataset.target + "']";
      elem = document.querySelector(searchElem);

      if (elem.style.display == "flex") {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'flex';
      }
    }

    if (e.getAttribute('checked') == 'checked') {
      e.setAttribute('checked', null);
    } else {
      e.setAttribute('checked', 'checked');
    }
  });
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
        if (!f.dataset.noreset) {
          location.reload();
        } else {// if the element has data-noreset="true", the page will not be refreshed
        }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-c4ecf0"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0FnRCxNQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV2pELElBQVgsRUFBZ0I7QUFDWlUsUUFBQUEsRUFBRSxFQUFDQTtBQURTLE9BQWhCLEVBRUt3QyxJQUZMLENBRVUsVUFBQUMsR0FBRyxFQUFHO0FBRVIsWUFBRyxDQUFDekQsQ0FBQyxDQUFDSSxPQUFGLENBQVVzRCxPQUFkLEVBQXNCO0FBQ2hCN0QsVUFBQUEsUUFBUSxDQUFDOEQsTUFBVDtBQUVMLFNBSEQsTUFHSyxDQUNEO0FBRUg7QUFFSixPQVpMLFdBYVcsVUFBQUMsR0FBRztBQUFBLGVBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUg7QUFBQSxPQWJkO0FBY0gsS0FqQkQ7QUFrQkgsR0FuQkQ7QUFvQkgsRUFLRDs7O0FBQ0EsSUFBTUcsT0FBTyxHQUFHcEcsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixZQUExQixDQUFoQixFQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNaUcsRUFBRSxHQUFHQyxTQUFTLENBQUNGLE9BQUQsRUFBVTtBQUMxQkcsRUFBQUEsUUFBUSxFQUFFLElBRGdCO0FBRTFCQyxFQUFBQSxTQUFTLEVBQUUsT0FGZTtBQUcxQkMsRUFBQUEsVUFBVSxFQUFFLE9BSGM7QUFJMUIsWUFBVSxJQUpnQixDQUsxQjtBQUNBO0FBQ0E7O0FBUDBCLENBQVYsQ0FBcEIsRUFRSztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM1dBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4tdjEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi5zY3NzJztcblxuaW1wb3J0ICcvYXNzZXRzL2pzL2FkbWluLXYxLmpzJztcblxuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwibGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5sZXQgaGFtYnVyZ2VyID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItbW9iaWxlLWJ0bicpO1xubGV0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xubGV0IHN1Ym1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51Jyk7XG5sZXQgY2xpY2tDaGVja01lbnUgPSBudWxsO1xubGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuLy8gc2V0IGxpbmsgdG8gdGhlIGxvZ28gZm9yIHRoZSBob21lcGFnZVxubGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nby1jb250YWluZXInKTtcbi8vIGdldCBzdWJtZW51IGxpbmtzXG5sZXQgbWVudUxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUgYScpXG4vL2dldCB0aGUgaGVpZ2h0IG9mIHRoZSBuYXZiYXIgZm9yIHRoZSBzY3JvbGxpbmcgZWZmZWN0XG53aW5kb3cuaGVpZ2h0bmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jykuc3R5bGUuaGVpZ2h0O1xuLy9sb2dpbmJhciBtaW5pbWl6ZVxubGV0IGxvZ2luYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luYmFyJylcbmxldCBtaW5pbWl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW5pbWl6ZScpXG4vLyBjbG9zZSBmbGFzaCBtc2dcbmNvbnN0IGNsb3NlYnRuZmxhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UtYnRuLWZsYXNoJyk7XG4vLyBnZXQgYWxsIHRoZSBheGlvcyByZXF1ZXN0cyB3aXRoIGxpbmsgYW5kIGlkIHBhcmFtZXRlcnNcbmxldCBheGlvc0lkTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5heGlvcy1pZC1saW5rJyk7XG5cblxuLy8gY2hlY2sgbWF0Y2ggbWVkaWEgdG8gcHJldmVudCBlbGVtZW50cyBcbmlmIChtYXRjaE1lZGlhKSB7XG4gICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExODlweClcIik7XG4gICAgXG4gICAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xuICAgIFdpZHRoQ2hhbmdlKG1xKTtcbiAgfVxuIFxuICAvLyBtZWRpYSBxdWVyeSBjaGFuZ2VcbiAgZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcbiAgICBpZiAobXEubWF0Y2hlcykge1xuICAgICAgICAvL3Bob25lXG4gICAgICAgIGluaXRpYWxwaG9uZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbHBjKCk7XG4gICAgICAvLyBwY1xuICAgIC8vIFxuICAgIH1cblxufVxuZnVuY3Rpb24gaW5pdGlhbHBjKCl7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiBwcmV2ZW50cyB0aGUgXCJkaXNwbGF5Om5vbmVcIiBpZiB0aGUgdmlld3BvcnQgY2hhbmdlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2NpYWxtZWRpYScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxufVxuXG5mdW5jdGlvbiBpbml0aWFscGhvbmUoKXtcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHByZXZlbnRzIHRoZSBcImRpc3BsYXk6ZmxleFwiIGlmIHRoZSB2aWV3cG9ydCBjaGFuZ2VcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLXVsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmKHBhcmVudE5vZGUuY2xhc3NMaXN0KXtcbiAgIFxuICAgICAgICBpZihwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSApe1xuICAgICAgICAgICAgaWYoIWNsaWNrQ2hlY2tNZW51KXtcbiAgICAgICAgICAgICAgICBjbGlja0NoZWNrTWVudSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKCFjbGlja0NoZWNrTWVudSA9PSBlLnRhcmdldCl7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDaGVja01lbnUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3VibWVudUl0ZW1zLmZvckVhY2goZnVuY3Rpb24ocyl7XG4gICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuICAgIGNsaWNrQ2hlY2tNZW51ID0gbnVsbDtcbn0pXG5cblxubG9nb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcbiAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPSBcIi9hZG1pblwiO1xuICAgIFxufSlcblxuXG5cbi8vZXhwYW5kIG1lbnUgaXRlbXNcbm1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgIGYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgICAgICAgIHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgcVN1Ym1lbnUgPSBmLnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51Jyk7XG4gICAgICAgIHFTdWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KVxufSlcblxuXG4vLyBtb2JpbGUgYnRuXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG5hdmJhclVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci11bCcpO1xuICAgIHNvY2lhbG1lZGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvY2lhbG1lZGlhJyk7XG5cbiAgICBpZihuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiIHx8IG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPT0gXCJcIil7XG4gICAgICAgIG5hdmJhclVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1lbHNle1xuICAgICAgICBuYXZiYXJVbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgc29jaWFsbWVkaWEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pXG5cblxuXG5cbi8vIG1lbnUgaXRlbXMgc2Nyb2xsIG9uIGNsaWNrXG5tZW51TGkuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICBcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoZS5kYXRhc2V0LnNjcm9sbCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxpbmsgPSBlLmRhdGFzZXQuc2Nyb2xsO1xuICAgICAgICAgICAgZWxlbWVudCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmspXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpbmspLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gZS5kYXRhc2V0LnJvdXRlKXtcblxuICAgICAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0QWRqdXN0ZWQoZWxlbWVudCk7XG4gICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgIGxldCByb3V0ZSA9IGUuZGF0YXNldC5yb3V0ZSArIGUuZGF0YXNldC5zY3JvbGxcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByb3V0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9KVxuXG59KVxuXG5mdW5jdGlvbiBzY3JvbGxUb1RhcmdldEFkanVzdGVkKHNjcm9sbGVkZWxlbWVudCl7XG5cbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgbGV0IGhlYWRlck9mZnNldCA9IHdpbmRvdy5oZWlnaHRuYXZiYXI7XG4gICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbGVkZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgbGV0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gaGVhZGVyT2Zmc2V0IC0gYm9keTtcbiAgICBpZihoZWFkZXJPZmZzZXQgPT0gMCAmJiBzY3JvbGxlZGVsZW1lbnQuaWQgPT0gXCJzLWFjYXNhXCIpe1xuICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IDA7XG4gICAgfVxuXG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG59XG5cblxubG9nb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2FkbWluXCI7XG59KVxuXG5jaGVja2JveGVzLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveC10YXJnZXQnKSl7XG4gICAgICAgICAgICBzZWFyY2hFbGVtID0gXCJbbmFtZT0nXCIgKyBlLmRhdGFzZXQudGFyZ2V0ICsgXCInXVwiOyBcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlYXJjaEVsZW0pXG4gICAgICAgICAgICBpZihlbGVtLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpe1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihlLmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpID09ICAnY2hlY2tlZCcpe1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBudWxsKSA7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG4vL1xuLy8gaW5pdGlhbGl6ZSBhZG1pbmluaXRpYWwgKHdoZXJlIGFsbCB0aGUgZnVuY3Rpb25zIGFyZSBydW5uaW5nKSBhZnRlciB0aGUgcGFnZSBsb2Fkc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYWRtaW5pbml0aWFsKTtcblxuXG5cbmZ1bmN0aW9uIGFkbWluaW5pdGlhbCgpe1xuICAgIC8vY3JlYXRlIGEgZmFkZSBsb2FkaW5nIHBhZ2UgZm9yIHRoZSBib2R5XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihmKXtcbiAgICAgICAgLy9kaXNwbGF5IGluaXRpYWwgcGFuZWxcbiAgICAgICAgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAuNX19KVxuICAgICAgICB0bC50byhjb250ZW50LCB7IGVhc2U6IFwiZXhwb1wiLCBvcGFjaXR5OiAxfSk7XG4gICAgfSlcblxuICAgIC8vIGhvbWUgY2Fyb3VzZWxcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYW5uZXJcIilcbiAgICBpZighYmFubmVyKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBsZXQgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgIGxldCBob21lbGVmdGFycm93ID0gYmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1hcnJvdy1sZWZ0Jyk7XG4gICAgbGV0IGhvbWVyaWdodGFycm93PSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWFycm93LXJpZ2h0Jyk7XG4gICAgbGV0IGhvbWVzbGlkZXIgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLXNsaWRlJyk7XG4gICAgbGV0IGhvbWVidWxsZXQgPSBiYW5uZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWJ1bGxldHMnKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdEJ1bGxldENvbG9yID0gaG9tZWJ1bGxldFswXS5zdHlsZTtcblxuICAgIGhvbWVsZWZ0YXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hpbWFnZWludGVydmFsKTtcbiAgICAgICAgY2hhbmdlaW1hZ2UoMSk7XG4gICAgICAgIGNoaW1hZ2VpbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZWltYWdlLCA1MDAwKVxuICAgICAgICBcbiAgICB9KVxuICAgICAgICBcbiAgICBob21lcmlnaHRhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGltYWdlaW50ZXJ2YWwpO1xuICAgICAgICBjaGFuZ2VpbWFnZSgpO1xuICAgICAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcbiAgICB9KVxuXG5cbiAgICBmID0gaG9tZXNsaWRlcltob21lY2Fyb3VzZWxpbmRleF07XG5cbiAgICBjaGltYWdlaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjaGFuZ2VpbWFnZSwgNTAwMClcblxuICAgIGZ1bmN0aW9uIGNoYW5nZWltYWdlKGYpe1xuXG4gICAgICAgIGxldCBlbGVtID0gaG9tZXNsaWRlcltob21lY2Fyb3VzZWxpbmRleF07XG4gICAgICAgIGlmKGYpe1xuICAgICAgICAgICAgaWYoaG9tZWNhcm91c2VsaW5kZXggPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgaG9tZXNsaWRlcmxlbmd0aCA9IGhvbWVzbGlkZXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIC8vIGxldCBob21lc2xpZGVybGVuZ2h0bWludXMgPSBob21lc2xpZGVybGVuZ3RoIC0gMVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXh0ID0gaG9tZXNsaWRlcltob21lc2xpZGVybGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBidWxsZXQgPSBob21lYnVsbGV0W2hvbWVzbGlkZXJsZW5ndGggLSAxXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSBob21lc2xpZGVybGVuZ3RoICAtMTtcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWytob21lY2Fyb3VzZWxpbmRleC0xXVxuICAgICAgICAgICAgICAgIGJ1bGxldCA9IGhvbWVidWxsZXRbK2hvbWVjYXJvdXNlbGluZGV4LTFdXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAraG9tZWNhcm91c2VsaW5kZXggLTEgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgXG5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihob21lc2xpZGVyLmxlbmd0aCA9PSAraG9tZWNhcm91c2VsaW5kZXggKyAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHQgPSBob21lc2xpZGVyWzBdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFswXVxuXG4gICAgICAgICAgICAgICAgaG9tZWNhcm91c2VsaW5kZXggPSAwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbmV4dCA9IGhvbWVzbGlkZXJbK2hvbWVjYXJvdXNlbGluZGV4KzFdXG4gICAgICAgICAgICAgICAgYnVsbGV0ID0gaG9tZWJ1bGxldFsraG9tZWNhcm91c2VsaW5kZXgrMV1cblxuICAgICAgICAgICAgICAgIGhvbWVjYXJvdXNlbGluZGV4ID0gK2hvbWVjYXJvdXNlbGluZGV4ICsxICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2NsZWFyIGluZGV4ZXMgdG8gcHJldmVudCBvdmVybGFwcGluZ1xuICAgICAgICBjbGVhcmNhcm91c2VsaW5kZXhlcygpXG5cbiAgICAgICAgLy9zdGFydCBjYXJvdXNlbCBhbmltYXRpb25cblxuICAgICAgICBcbiAgICAgICAgY2Fyb3VzZWxhbmltYXRpb24oKVxuXG4gICAgICAgIGhvbWVidWxsZXQuZm9yRWFjaChmdW5jdGlvbihoKXtcbiAgICAgICAgICAgIGguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9KVxuICAgICAgICBidWxsZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMmY4NjM4XCI7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJjYXJvdXNlbGluZGV4ZXMoKXtcbiAgICAgICAgICAgIGhvbWVzbGlkZXIuZm9yRWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnpJbmRleCA9IFwiOVwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNhcm91c2VsYW5pbWF0aW9uKCl7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIC8vIH0sIDMwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbmV4dC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIG5leHQuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIFxuICAgICAgICAgICAgdGwgPSBnc2FwLnRpbWVsaW5lKHsgZGVmYXVsdHM6e2R1cmF0aW9uOiAxfX0pXG4gICAgICAgICAgICB0bC50byhlbGVtLCB7IGVhc2U6IFwicG93ZXIyXCIsIG9wYWNpdHk6IDB9KVxuICAgICAgICAgICAgdGwudG8obmV4dCwgeyBlYXNlOiBcInBvd2VyMlwiLCBvcGFjaXR5OiAxLCBkZWxheTotLjl9KVxuICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vY2xvc2UgZmxhc2ggbXNnXG5jbG9zZWJ0bmZsYXNoLmZvckVhY2goZnVuY3Rpb24oZSl7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlLnBhcmVudEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgIH0pXG59KVxuXG4vL1xuXG5pZihheGlvc0lkTGluayl7XG4gICBcbiAgICBheGlvc0lkTGluay5mb3JFYWNoKGZ1bmN0aW9uKGYpe1xuICAgICAgICBmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZCA9IGYuZGF0YXNldC5pZFxuICAgICAgICAgICAgbGluayA9IGYuZGF0YXNldC5saW5rXG4gICAgICAgICAgICBheGlvcy5wb3N0KGxpbmsse1xuICAgICAgICAgICAgICAgIGlkOmlkfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT57XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIWYuZGF0YXNldC5ub3Jlc2V0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyBkYXRhLW5vcmVzZXQ9XCJ0cnVlXCIsIHRoZSBwYWdlIHdpbGwgbm90IGJlIHJlZnJlc2hlZFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+Y29uc29sZS5sb2coZXJyKSk7ICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG5cbi8vLyBEQVRFUElDS0VSXG5jb25zdCBteUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlaW5wdXRcIik7XG4vLyBDcmVhdGUgbmV3IERhdGUgaW5zdGFuY2Vcbi8vIGxldCBkYXRlID0gbmV3IERhdGUoKVxuLy8gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMzY0KVxuY29uc3QgZnAgPSBmbGF0cGlja3IobXlJbnB1dCwge1xuICAgIGFsdElucHV0OiB0cnVlLFxuICAgIGFsdEZvcm1hdDogXCJkIEYgWVwiLFxuICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcbiAgICBcImxvY2FsZVwiOiBcInJvXCIsXG4gICAgLy8gbWluRGF0ZTogXCJ0b2RheVwiLFxuICAgIC8vIG1heERhdGU6bmV3IERhdGUoKS5mcF9pbmNyKDM2NCksXG4gICAgLy8gaW5saW5lOiB0cnVlLFxufSk7ICAvLyBmbGF0cGlja3JcblxuLy8gIGNoZWNrYm94ZXMuZm9yRWFjaChmdW5jdGlvbihlKXtcbi8vICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICAgIGlmKGUuZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgPT0gICdjaGVja2VkJyl7XG4vLyAgICAgICAgICAgIGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgbnVsbCkgO1xuICAgICAgICAgIFxuLy8gICAgICAgIH1lbHNle1xuLy8gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgO1xuLy8gICAgICAgIH1cbi8vICAgIH0pXG4vLyB9KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhhbWJ1cmdlciIsIm1lbnVJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdWJtZW51SXRlbXMiLCJjbGlja0NoZWNrTWVudSIsImNoZWNrYm94ZXMiLCJsb2dvQ29udGFpbmVyIiwibWVudUxpIiwid2luZG93IiwiaGVpZ2h0bmF2YmFyIiwic3R5bGUiLCJoZWlnaHQiLCJsb2dpbmJhciIsIm1pbmltaXplIiwiY2xvc2VidG5mbGFzaCIsImF4aW9zSWRMaW5rIiwibWF0Y2hNZWRpYSIsIm1xIiwiYWRkTGlzdGVuZXIiLCJXaWR0aENoYW5nZSIsIm1hdGNoZXMiLCJpbml0aWFscGhvbmUiLCJpbml0aWFscGMiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJmb3JFYWNoIiwicyIsImxvY2F0aW9uIiwiaGFzaCIsInBhdGhuYW1lIiwiZiIsInFTdWJtZW51IiwibmF2YmFyVWwiLCJzb2NpYWxtZWRpYSIsImRhdGFzZXQiLCJzY3JvbGwiLCJsaW5rIiwicm91dGUiLCJzY3JvbGxUb1RhcmdldEFkanVzdGVkIiwic2Nyb2xsZWRlbGVtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImhlYWRlck9mZnNldCIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldFBvc2l0aW9uIiwiaWQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwic2VhcmNoRWxlbSIsImVsZW0iLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhZG1pbmluaXRpYWwiLCJ0bCIsImdzYXAiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJ0byIsImVhc2UiLCJvcGFjaXR5IiwiYmFubmVyIiwiaG9tZWNhcm91c2VsaW5kZXgiLCJob21lbGVmdGFycm93IiwiaG9tZXJpZ2h0YXJyb3ciLCJob21lc2xpZGVyIiwiaG9tZWJ1bGxldCIsImZpcnN0QnVsbGV0Q29sb3IiLCJjbGVhckludGVydmFsIiwiY2hpbWFnZWludGVydmFsIiwiY2hhbmdlaW1hZ2UiLCJzZXRJbnRlcnZhbCIsImhvbWVzbGlkZXJsZW5ndGgiLCJsZW5ndGgiLCJuZXh0IiwiYnVsbGV0IiwiY2xlYXJjYXJvdXNlbGluZGV4ZXMiLCJjYXJvdXNlbGFuaW1hdGlvbiIsImgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJkZWxheSIsInBhcmVudEVsZW1lbnQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwibm9yZXNldCIsInJlbG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJteUlucHV0IiwiZnAiLCJmbGF0cGlja3IiLCJhbHRJbnB1dCIsImFsdEZvcm1hdCIsImRhdGVGb3JtYXQiXSwic291cmNlUm9vdCI6IiJ9