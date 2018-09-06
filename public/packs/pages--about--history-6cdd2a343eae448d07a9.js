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

/***/ 15:
/*!*******************************************************!*\
  !*** ./app/javascript/packs/pages--about--history.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector("body").classList.contains("en")) {
		window.locale = "en";
	} else {
		window.locale = "zh";
	}
	if (document.querySelector(".js-rec.active") !== null) document.querySelector(".js-rec.active").click();
});

window.historyData = {
	"en": {
		"1998": 'Hongyou Technology Co., Ltd. was founded in 1998 and is the ex&#8208;clusive agent of Japan ASTEC (DNA Amplifier, CO2 Incubator) in Taiwan. The company also represents and sells cutting-edge equipment related to biotechnology/medical research and has obtained various research units in China. The adoption of pharmaceutical related industries. In the field of reproductive centers, we have successfully sold small carbon dioxide / three gas incubators, VOC filters, vitrified rapid freezing / thawing reagents and other related products. Distribution of ADVANTEC filtration related products such as filter membranes, filter paper, filter and pressure tanks and other filtration equipment. In the semiconductor division, we have added various types of PFA products, designed and manufactured stainless steel filtration equipment, various pressure vessels, and agita- tion filtration equipment, and our sales performance customers include major semiconductors, special chemicals, and photovoltaic power plants.',
		"2002": 'this is 2002!'
	},
	"zh": {
		"1998": "1998 弘優科技創立於台北<br>銷售日本ADVANTEC<br>◎ 濾心、濾紙、過濾設備、快速接頭等",
		"2002": ""
	}
};

$(document).on("click", ".js-rec", function (e) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = document.querySelectorAll(".js-rec.active")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var active_one = _step.value;

			active_one.classList.remove("active");
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
	var active_year = e.target.getAttribute("data-year");
	var historyHTML = window.historyData[window.locale][active_year];
	console.log(active_year);
	console.log(historyHTML);
	if (historyHTML !== undefined && historyHTML.length > 0) {
		document.querySelector(".history-section").querySelector(".year--active").innerHTML = active_year;
		document.querySelector(".history-section").querySelector(".history__text > p").innerHTML = historyHTML;
		document.querySelector(".history-section").querySelector(".years .year_anchor").style.top = e.target.style.top;
	}
});

/***/ })

/******/ });
//# sourceMappingURL=pages--about--history-6cdd2a343eae448d07a9.js.map