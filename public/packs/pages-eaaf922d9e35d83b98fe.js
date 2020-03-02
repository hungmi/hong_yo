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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/*!***************************************!*\
  !*** ./app/javascript/packs/pages.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
	var waitfadeIn = 2000;
	var loopTime = 6000;
	// console.log(window.pagesHomeTimers)
	window.pagesHomeTimers = [];

	setTimeout(function () {
		if (document.querySelectorAll("ul.slider").length > 0 && document.querySelectorAll(".home-top-section > .root").length > 0) {
			document.querySelector("ul.slider > li.index-bg1").classList.remove("fadeIn", "delay-1s");
			document.querySelector(".home-top-section > .root1").classList.remove("fadeInLeft", "delay-1s");
			document.querySelector("ul.slider > li.index-bg1").className += ' fadeOut delay-3s';
			document.querySelector(".home-top-section > .root1").className += ' fadeOutLeft delay-3s';
		}
	}, waitfadeIn);

	var start = 1;
	var fadeInInterval = setInterval(function () {
		console.log("timer is working");
		if (document.querySelectorAll("ul.slider > li").length > 0 && document.querySelectorAll(".home-top-section > .root").length > 0) {
			start = start % document.querySelectorAll("ul.slider > li").length + 1;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = document.querySelectorAll("ul.slider > li")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var indexBg = _step.value;

					indexBg.classList.remove("fadeIn", "fadeOut", "delay-3s");
					indexBg.classList.add("d-none");
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

			if (document.querySelectorAll("ul.slider > li.index-bg" + start) !== null) {
				document.querySelector("ul.slider > li.index-bg" + start).classList.remove("d-none");
				document.querySelector("ul.slider > li.index-bg" + start).className += ' fadeIn';
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = document.querySelectorAll(".home-top-section > .root")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var root = _step2.value;

					root.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s");
					root.classList.add("d-none");
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			if (document.querySelectorAll(".home-top-section > .root" + start)) {
				document.querySelector(".home-top-section > .root" + start).classList.remove("d-none");
				document.querySelector(".home-top-section > .root" + start).className += ' fadeInLeft';
			}

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = document.querySelectorAll(".home-top-section > .root" + start + " #see_more_btn")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var seeMoreBtn = _step3.value;

					seeMoreBtn.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s", "delay-1s", "faster");
					seeMoreBtn.classList.add("d-none");
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			if (document.querySelectorAll(".home-top-section > .root" + start + " #see_more_btn")) {
				document.querySelector(".home-top-section > .root" + start + " #see_more_btn").classList.remove("d-none");
				document.querySelector(".home-top-section > .root" + start + " #see_more_btn").className += ' d-flex fadeInLeft delay-1s faster';
			}

			// 等待兩秒，讓進入的動畫完成後，移除進入 class，加上出去 class 搭配 delay
			setTimeout(function () {
				if (document.querySelectorAll("ul.slider").length > 0 && document.querySelectorAll(".home-top-section > .root").length > 0) {
					document.querySelector("ul.slider > li.index-bg" + start).classList.remove("fadeIn");
					document.querySelector(".home-top-section > .root" + start).classList.remove("fadeInLeft");
					document.querySelector("ul.slider > li.index-bg" + start).className += ' fadeOut delay-3s';
					document.querySelector(".home-top-section > .root" + start).className += ' fadeOutLeft delay-3s';
				}
			}, waitfadeIn);
		} else {
			console.log("clear fade in");
			clearInterval(fadeInInterval);
		}
	}, loopTime);
	window.pagesHomeTimers.push(fadeInInterval);
});

// document.addEventListener("turbolinks:before-cache", function() {
// 	// console.log(window.pagesHomeTimers.length)
// 	for (let i = 0; i < window.pagesHomeTimers.length; i++) {
// 		clearInterval(window.pagesHomeTimers[i]);
// 	}
// 	if (document.querySelectorAll(`ul.slider`).length > 0 && document.querySelectorAll(`.home-top-section > .root`).length > 0) {
// 		for (let slide of document.querySelectorAll(`ul.slider > li`)) {
// 			slide.classList.remove("fadeIn", "delay-1s", "fadeOut", "delay-3s", "fadeOutLeft", "fadeInLeft")
// 		}
// 	}
// 	// console.log(window.pagesHomeTimers)
// })

/***/ })

/******/ });
//# sourceMappingURL=pages-eaaf922d9e35d83b98fe.js.map