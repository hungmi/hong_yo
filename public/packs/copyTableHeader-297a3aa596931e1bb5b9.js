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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/*!*************************************************!*\
  !*** ./app/javascript/packs/copyTableHeader.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// document.addEventListener("turbolinks:before-cache", function() {
// 	let copied_header = document.querySelector(".js-product-comparison__table-wrapper table.table.copied_header")
// 	if (copied_header !== null) {
// 		copied_header.parentNode.removeChild(copied_header)	
// 		console.log("silently remove!")
// 	}
// })

["DOMContentLoaded", "turbolinks:load"].forEach(function (e) {
	document.addEventListener(e, function () {
		// 要記得不要把複製好的 table header 放在同一個 webkit touch 內，要分開，然後另加 z-index
		var target_table = document.querySelector(".js-product-comparison__table-wrapper");
		if (target_table !== null) {
			copyTableHeader(target_table);
		}
	});
});

function copyTableHeader(target_table) {
	var first_tr = target_table.querySelector("tr.attribute_names th:first-child");
	if (first_tr !== null) {
		var header_width = first_tr.clientWidth;
		var copied_header_html = "";
		if (header_width !== undefined && header_width > 0) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = target_table.querySelectorAll("tr")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					tr = _step.value;

					copied_header_html += "<tr style=\"height: " + tr.clientHeight + "px;\">" + tr.querySelector("th").outerHTML + "</tr>";
					tr.querySelector("th").style.visibility = 'hidden';
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

			copied_header_html = "<table class=\"table copied_header text-center\" style=\"max-width: " + (header_width + 9) + "px;\">" + copied_header_html + "</table>";
		}
		target_table.insertAdjacentHTML('beforebegin', copied_header_html);
	}
}

/***/ })

/******/ });
//# sourceMappingURL=copyTableHeader-297a3aa596931e1bb5b9.js.map