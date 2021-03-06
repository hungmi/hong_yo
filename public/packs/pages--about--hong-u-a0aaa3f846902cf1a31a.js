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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

/***/ 15:
/*!******************************************************!*\
  !*** ./app/javascript/packs/pages--about--hong-u.js ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packs_view_helper__ = __webpack_require__(/*! packs/view_helper */ 0);


document.addEventListener("scroll", function () {
	var els = document.querySelectorAll('[data-animated]');
	if (els !== null) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var el = _step.value;

				if (Object(__WEBPACK_IMPORTED_MODULE_0_packs_view_helper__["default"])(el, 100)) {
					el.classList.remove("invisible");
					el.classList.add(el.getAttribute("data-animated"));
				} else {
					// el.classList.remove("fadeInRight", "fadeInLeft")
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
	// var els = document.querySelectorAll('.about-hong-u1__text')
	// if (els !== null) {
	// 	for (let el of els) {
	// 		if ( isScrolledIntoView(el, 100) ) {
	// 			el.classList.remove("invisible")
	// 			el.classList.add("fadeInRight")
	// 		} else {
	// 			// el.classList.remove("fadeInRight", "fadeInLeft")
	// 		}
	// 	}
	// }
	// var els = document.querySelectorAll('.about-hong-u1__img')
	// if (els !== null) {
	// 	for (let el of els) {
	// 		if ( isScrolledIntoView(el, 100) ) {
	// 			el.classList.remove("invisible")
	// 			el.classList.add("fadeIn")
	// 		} else {
	// 			// el.classList.remove("fadeInRight", "fadeInLeft")
	// 		}
	// 	}
	// }
	// var els = document.querySelectorAll('.about-hong-u1__red-bg')
	// if (els !== null) {
	// 	for (let el of els) {
	// 		if ( isScrolledIntoView(el, 100) ) {
	// 			el.classList.remove("invisible")
	// 			el.classList.add("fadeInLeft")
	// 		} else {
	// 			// el.classList.remove("fadeInRight", "fadeInLeft")
	// 		}
	// 	}
	// }
});

/***/ })

/******/ });
//# sourceMappingURL=pages--about--hong-u-a0aaa3f846902cf1a31a.js.map