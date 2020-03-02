/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*********************************************!*\
  !*** ./app/javascript/packs/view_helper.js ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
window.simpleFormat = function (str) {
  str = str.replace(/\r\n?/, "\n");
  str = $.trim(str);
  if (str.length > 0) {
    str = str.replace(/\n\n+/g, '</p><p>');
    str = str.replace(/\n/g, '<br />');
    str = '<p>' + str + '</p>';
  }
  return str;
};

function isScrolledIntoView(el) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  var isVisible = elemTop + offset < window.innerHeight && elemBottom - offset >= 0;
  return isVisible;
}

/* harmony default export */ __webpack_exports__["default"] = (isScrolledIntoView);

/***/ }),

/***/ 12:
/*!***************************************************!*\
  !*** ./app/javascript/packs/pages--home--news.js ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packs_view_helper__ = __webpack_require__(/*! packs/view_helper */ 0);


document.addEventListener("scroll", function () {
	// var wrapperTitle = document.querySelector('#wrapper2 .section_title_wrapper')
	var wrapperTitle = document.querySelector('.js-latest-news-section .section_title_wrapper');
	if (wrapperTitle !== null) {
		if (Object(__WEBPACK_IMPORTED_MODULE_0_packs_view_helper__["default"])(wrapperTitle, 200)) {
			wrapperTitle.classList.remove("invisible");
			wrapperTitle.classList.add("fadeIn");
		} else {
			// wrapperTitle.classList.remove("fadeInRight", "fadeInLeft")
		}
	}

	var el = document.querySelector('.js-latest-news-section #see_more_btn');
	if (el !== null) {
		if (Object(__WEBPACK_IMPORTED_MODULE_0_packs_view_helper__["default"])(el, 100)) {
			el.classList.remove("invisible");
			el.classList.add("fadeInLeft");
		} else {
			// el.classList.remove("fadeInRight", "fadeInLeft")
		}
	}
});

/***/ })

/******/ });
//# sourceMappingURL=pages--home--news-86aec24dad26f68d0963.js.map