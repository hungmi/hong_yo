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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/*!************************************************!*\
  !*** ./app/javascript/packs/products--show.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

$(document).on('select2:select', "select#product_variety_name", function (e) {
	window.scrollTo(0, document.querySelector("#js-choose-highlight-jump-here").offsetTop);
});

$(document).on("click", ".js-image--thumb", function (e) {
	document.querySelector(".js-image--active").style.backgroundImage = "url('" + e.target.src + "')";
	document.querySelector(".js-image--blur-bg").style.backgroundImage = "url('" + e.target.src + "')";
});

var $product_model = $("select#product_variety_name");
$(document).on('select2:select', $product_model, function (e) {
	console.log(e.params.data);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = document.querySelectorAll(".product-comparison [data-highlight]")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var feature = _step.value;

			feature.classList.remove("feature--highlight");
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = document.querySelectorAll(".product-comparison [data-highlight='" + e.params.data.id + "']:not(.combined)")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _feature = _step2.value;

			_feature.classList.add("feature--highlight");
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
});

document.addEventListener("scroll", function () {
	if (document.querySelector("#products_finder_wrapper") !== null) {
		var starter = document.querySelector("#products_finder_wrapper").getBoundingClientRect().top;
	}
	if (document.querySelector("#products_section") !== null) {
		var ender = document.querySelector("#products_section").getBoundingClientRect().top;
	}
	if (ender >= 210) {
		document.querySelector("body").classList.remove("fixed-finder");
	} else if (starter <= 0) {
		document.querySelector("body").classList.add("fixed-finder");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	// 行動版把圖片移到對的地方
	if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768 || document.querySelector("body").classList.contains("mobile")) {
		var product_images_section = document.querySelector(".js-images-section");
		if (product_images_section !== null) {
			var someHTML = product_images_section.outerHTML;
			product_images_section.parentNode.removeChild(product_images_section);
			document.querySelector("h2.js-product-data__name").insertAdjacentHTML('afterend', someHTML);
		}
	}
});

/***/ })

/******/ });
//# sourceMappingURL=products--show-0c78a4fb3d7c57693f74.js.map