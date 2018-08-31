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

$(document).on("click", ".dot_wrapper", function (e) {
	console.log(e.target);
	var active_page = e.target.getAttribute("data-page");
	var active_news_group = document.querySelector(".js-news-group[data-page='" + active_page + "']");
	if (document.querySelectorAll(".js-news-group[data-page='" + active_page + "']") !== undefined) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = document.querySelectorAll(".dot_wrapper")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var dot = _step.value;
				dot.classList.remove("active");
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

		e.target.classList.add("active");
		console.log(e.target);
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = document.querySelectorAll(".js-news-group")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var group = _step2.value;
				group.classList.remove("active");
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

		active_news_group.classList.add("active");
	}
});

$(document).on("click", ".red_rec", function (e) {
	e.target.classList.add("active");
	var active_year = e.target.getAttribute("data-year");
	if (historyData[active_year] !== undefined) {
		document.querySelector("#wrapper.history").querySelector(".paragraph_wrapper span.year_active").innerHTML = active_year;
		document.querySelector("#wrapper.history").querySelector(".paragraph_wrapper > p").innerHTML = historyData[active_year];
		document.querySelector("#wrapper.history").querySelector(".years_wrapper .year_anchor").style.top = e.target.style.top;
	}
});

var historyData = {
	en: {
		1998: 'Hongyou Technology Co., Ltd. was founded in 1998 and is the ex&#8208;clusive agent of Japan ASTEC (DNA Amplifier, CO2 Incubator) in Taiwan. The company also represents and sells cutting-edge equipment related to biotechnology/medical research and has obtained various research units in China. The adoption of pharmaceutical related industries. In the field of reproductive centers, we have successfully sold small carbon dioxide / three gas incubators, VOC filters, vitrified rapid freezing / thawing reagents and other related products. Distribution of ADVANTEC filtration related products such as filter membranes, filter paper, filter and pressure tanks and other filtration equipment. In the semiconductor division, we have added various types of PFA products, designed and manufactured stainless steel filtration equipment, various pressure vessels, and agita- tion filtration equipment, and our sales performance customers include major semiconductors, special chemicals, and photovoltaic power plants.',
		2002: 'this is 2002!'
	},
	zh: {
		1998: "1998 弘優科技創立於台北<br>銷售日本ADVANTEC<br>◎ 濾心、濾紙、過濾設備、快速接頭等",
		2002: ""
	}
};

document.addEventListener("turbolinks:load", function () {
	var waitfadeIn = 2000;
	var loopTime = 6000;
	// console.log(window.pagesHomeTimers)
	window.pagesHomeTimers = [];

	setTimeout(function () {
		if (document.querySelectorAll("ul.slider").length > 0 && document.querySelectorAll("#wrapper_home_top > .root").length > 0) {
			document.querySelector("ul.slider > li.index-bg1").classList.remove("fadeIn", "delay-1s");
			document.querySelector("#wrapper_home_top > .root1").classList.remove("fadeInLeft", "delay-1s");
			document.querySelector("ul.slider > li.index-bg1").className += ' fadeOut delay-3s';
			document.querySelector("#wrapper_home_top > .root1").className += ' fadeOutLeft delay-3s';
		}
	}, waitfadeIn);

	var start = 1;
	var fadeInInterval = setInterval(function () {
		console.log("timer is working");
		if (document.querySelectorAll("ul.slider").length > 0 && document.querySelectorAll("#wrapper_home_top > .root").length > 0) {
			start = start % 4 + 1;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = document.querySelectorAll("ul.slider > li")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var indexBg = _step3.value;

					indexBg.classList.remove("fadeIn", "fadeOut", "delay-3s");
					indexBg.classList.add("d-none");
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

			if (document.querySelectorAll("ul.slider > li.index-bg" + start)) {
				document.querySelector("ul.slider > li.index-bg" + start).classList.remove("d-none");
				document.querySelector("ul.slider > li.index-bg" + start).className += ' fadeIn';
			}

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = document.querySelectorAll("#wrapper_home_top > .root")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var root = _step4.value;

					root.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s");
					root.classList.add("d-none");
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			if (document.querySelectorAll("#wrapper_home_top > .root" + start)) {
				document.querySelector("#wrapper_home_top > .root" + start).classList.remove("d-none");
				document.querySelector("#wrapper_home_top > .root" + start).className += ' fadeInLeft';
			}

			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = document.querySelectorAll("#wrapper_home_top > .root" + start + " #see_more_btn")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var seeMoreBtn = _step5.value;

					seeMoreBtn.classList.remove("d-flex", "fadeInLeft", "fadeOutLeft", "delay-3s", "delay-1s", "faster");
					seeMoreBtn.classList.add("d-none");
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			if (document.querySelectorAll("#wrapper_home_top > .root" + start + " #see_more_btn")) {
				document.querySelector("#wrapper_home_top > .root" + start + " #see_more_btn").classList.remove("d-none");
				document.querySelector("#wrapper_home_top > .root" + start + " #see_more_btn").className += ' d-flex fadeInLeft delay-1s faster';
			}

			// 等待兩秒，讓進入的動畫完成後，移除進入 class，加上出去 class 搭配 delay
			setTimeout(function () {
				if (document.querySelectorAll("ul.slider").length > 0 && document.querySelectorAll("#wrapper_home_top > .root").length > 0) {
					document.querySelector("ul.slider > li.index-bg" + start).classList.remove("fadeIn");
					document.querySelector("#wrapper_home_top > .root" + start).classList.remove("fadeInLeft");
					document.querySelector("ul.slider > li.index-bg" + start).className += ' fadeOut delay-3s';
					document.querySelector("#wrapper_home_top > .root" + start).className += ' fadeOutLeft delay-3s';
				}
			}, waitfadeIn);
		} else {
			console.log("clear fade in");
			clearInterval(fadeInInterval);
		}
	}, loopTime);
	window.pagesHomeTimers.push(fadeInInterval);
});

document.addEventListener("turbolinks:before-cache", function () {
	// console.log(window.pagesHomeTimers.length)
	for (var i = 0; i < window.pagesHomeTimers.length; i++) {
		clearInterval(window.pagesHomeTimers[i]);
	}
	if (document.querySelectorAll("ul.slider").length > 0 && document.querySelectorAll("#wrapper_home_top > .root").length > 0) {
		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {
			for (var _iterator6 = document.querySelectorAll("ul.slider > li")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var slide = _step6.value;

				slide.classList.remove("fadeIn", "delay-1s", "fadeOut", "delay-3s", "fadeOutLeft", "fadeInLeft");
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6.return) {
					_iterator6.return();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}
	}
	// console.log(window.pagesHomeTimers)
});

/***/ })

/******/ });
//# sourceMappingURL=pages-91b2b8396ade10a4492c.js.map