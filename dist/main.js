/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_histogram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/histogram */ \"./src/scripts/histogram.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let testHistogram = new _scripts_histogram__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  console.log(\"Hello world\");\n  console.log(testHistogram.dataPoints);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ0k7QUFFM0NFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxJQUFJQyxhQUFhLEdBQUcsSUFBSUgsMERBQVMsQ0FBQyxDQUFDO0VBQ25DSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDMUJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixhQUFhLENBQUNHLFVBQVUsQ0FBQztBQUN6QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItam9iLW1hcmtldC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiXHJcbmltcG9ydCBIaXN0b2dyYW0gZnJvbSBcIi4vc2NyaXB0cy9oaXN0b2dyYW1cIlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHRlc3RIaXN0b2dyYW0gPSBuZXcgSGlzdG9ncmFtKClcclxuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gd29ybGRcIilcclxuICAgIGNvbnNvbGUubG9nKHRlc3RIaXN0b2dyYW0uZGF0YVBvaW50cylcclxufSkiXSwibmFtZXMiOlsiRXhhbXBsZSIsIkhpc3RvZ3JhbSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RIaXN0b2dyYW0iLCJjb25zb2xlIiwibG9nIiwiZGF0YVBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(htmlElement) {\n    this.htmlElement = htmlElement;\n    this.htmlElement.innerHtml = \"<h1>It's alive!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.htmlElement.addEventListener('click', this.handleClick);\n    this.htmlElement.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.htmlElement.children[0].innerText = \"Ouch\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3JCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxTQUFTLEdBQUcsc0JBQXNCO0lBRW5ELElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7SUFDNUQsSUFBSSxDQUFDRixXQUFXLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNGLFdBQVcsQ0FBQztFQUNoRTtFQUVBQSxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNGLFdBQVcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsTUFBTTtFQUNuRDtBQUNKO0FBRUEsK0RBQWVSLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItam9iLW1hcmtldC8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGh0bWxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50XHJcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckh0bWwgPSBcIjxoMT5JdCdzIGFsaXZlITwvaDE+XCJcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaylcclxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcclxuXHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJodG1sRWxlbWVudCIsImlubmVySHRtbCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/histogram.js":
/*!**********************************!*\
  !*** ./src/scripts/histogram.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// this is used to fetch and organize json data\nlet testUrl = \"http://api.adzuna.com/v1/api/jobs/gb/histogram?app_id=d536b8fb&app_key=6cecd9ddc0c642bdadfba824e14d21e3&location0=UK&location1=London&what=finance%20officer&content-type=application/json\";\nclass Histogram {\n  constructor() {\n    this.dataPoints = getHistogramData();\n  }\n\n  // get dataPoints() {\n  //     return this.dataPoints\n  // }\n}\n\nasync function getHistogramData() {\n  const response = await fetch(testUrl, {\n    method: \"GET\"\n    // mode: \"no-cors\"\n  });\n\n  const jsonData = await response.json();\n  return jsonData;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Histogram);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oaXN0b2dyYW0uanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHLDRMQUE0TDtBQUUxTSxNQUFNQyxTQUFTLENBQUM7RUFFWkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLGdCQUFnQixDQUFDLENBQUM7RUFDeEM7O0VBRUE7RUFDQTtFQUNBO0FBR0o7O0FBRUEsZUFBZUEsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDOUIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sT0FBTyxFQUFFO0lBQ2xDTyxNQUFNLEVBQUU7SUFDUjtFQUNKLENBQUMsQ0FBQzs7RUFFRixNQUFNQyxRQUFRLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztFQUN0QyxPQUFPRCxRQUFRO0FBQ25CO0FBRUEsK0RBQWVQLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItam9iLW1hcmtldC8uL3NyYy9zY3JpcHRzL2hpc3RvZ3JhbS5qcz8xZmZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaXMgdXNlZCB0byBmZXRjaCBhbmQgb3JnYW5pemUganNvbiBkYXRhXHJcbmxldCB0ZXN0VXJsID0gXCJodHRwOi8vYXBpLmFkenVuYS5jb20vdjEvYXBpL2pvYnMvZ2IvaGlzdG9ncmFtP2FwcF9pZD1kNTM2YjhmYiZhcHBfa2V5PTZjZWNkOWRkYzBjNjQyYmRhZGZiYTgyNGUxNGQyMWUzJmxvY2F0aW9uMD1VSyZsb2NhdGlvbjE9TG9uZG9uJndoYXQ9ZmluYW5jZSUyMG9mZmljZXImY29udGVudC10eXBlPWFwcGxpY2F0aW9uL2pzb25cIlxyXG5cclxuY2xhc3MgSGlzdG9ncmFtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRhdGFQb2ludHMgPSBnZXRIaXN0b2dyYW1EYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgZGF0YVBvaW50cygpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5kYXRhUG9pbnRzXHJcbiAgICAvLyB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEhpc3RvZ3JhbURhdGEoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRlc3RVcmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgICAgICAvLyBtb2RlOiBcIm5vLWNvcnNcIlxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbkRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhpc3RvZ3JhbTsiXSwibmFtZXMiOlsidGVzdFVybCIsIkhpc3RvZ3JhbSIsImNvbnN0cnVjdG9yIiwiZGF0YVBvaW50cyIsImdldEhpc3RvZ3JhbURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwianNvbkRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/histogram.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItam9iLW1hcmtldC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;