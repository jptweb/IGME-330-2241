/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n// Fetches data from the Adoptable Creatures API\n// - type: The type of creature to fetch (e.g., \"cats\", \"dogs\", \"dragons\")\n// - callback: Function to run with the fetched data if successful\n// - errorCallback: Function to run with an error message if the request fails\nfunction getData(type, callback, errorCallback) {\n    const API_URL = \"https://people.rit.edu/anwigm/330/practical/api.php\";\n    console.log(\"GET DATA\");\n    \n    let adjusted_api_url = `${API_URL}?type=${type}`\n    fetch(adjusted_api_url) // api for the get request\n    .then(response => response.json())\n    .then(data => callback(data))\n    .catch(error => errorCallback(\"Error fetching data from the server.\"));\n    \n  \n  }\n  \n\n//# sourceURL=webpack://final-practical-betatest-pre-typescript/./js/api.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./js/ui.js\");\n// Import functions from api.js and ui.js\n\n   // ADD TWO LINES OF CODE HERE TO IMPORT THE getData FUNCTION from api.js\n   // AND THE THREE FUNCTIONS IN ui.js\n   \n   \n\n   (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.clearError)();\n\n// Get references to the dropdown and button\nconst creatureTypeSelect = document.querySelector(\"#creatureType\");\nconst getDataButton = document.querySelector(\"#getDataButton\");\n\n// Set up event listener for the \"Get Data\" button\ngetDataButton.addEventListener(\"click\", () => {\n  const selectedType = creatureTypeSelect.value; // Get the selected type\n  (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.clearError)(); // Clear any existing error messages\n\n  // Fetch data for the selected type\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getData)(\n    selectedType,\n    (data) => {\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.renderResults)(data); // Render the results on success\n    },\n    (errorMessage) => {\n      (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.showError)(errorMessage); // Show an error message on failure\n    }\n  );\n});\n\n\n//# sourceURL=webpack://final-practical-betatest-pre-typescript/./js/main.js?");

/***/ }),

/***/ "./js/ui.js":
/*!******************!*\
  !*** ./js/ui.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearError: () => (/* binding */ clearError),\n/* harmony export */   renderResults: () => (/* binding */ renderResults),\n/* harmony export */   showError: () => (/* binding */ showError)\n/* harmony export */ });\n// Updates the DOM to display the fetched data\n// - data: An array of objects containing creature details\nfunction renderResults(data) {\n    const resultsContainer = document.querySelector(\"#results\");\n    resultsContainer.innerHTML = \"\"; // Clear existing results\n\n    let columnContainer = document.createElement(\"div\");\n    columnContainer.className = \"columns\";\n  \n    data.forEach((item) => {\n      const card = document.createElement(\"div\");\n      card.className = \"card column is-one-quarter\";\n  \n      // Add content to the card\n      card.innerHTML = `\n      <div class=\"card-image\">\n        <figure class=\"image is-square\">\n          <img src=\"${item.picture}\" alt=\"${item.name}\">\n        </figure>\n      </div>\n\n      <div class=\"media-content\">\n        <p class=\"title is-4\">${item.name}</p>\n        <p class=\"subtitle is-6\"><strong>Breed:</strong> ${item.breed}</p>\n      </div>\n\n      <div class=\"content\">\n        <p><strong>Location:</strong> ${item.location}</p>\n      </div>\n      `;\n  \n        // ADD THE LINE OF CODE HERE THAT WILL ADD THE CARD \n        // TO END OF THE RESULTS CONTAINER\n        columnContainer.appendChild(card);\n        \n\n      \n    }); \n\n    resultsContainer.appendChild(columnContainer);\n  }\n  \n  // Displays an error message on the page\n  // - message: The error message to show\n  function showError(message) {\n    console.log(\"show error\");\n    const errorMessage = document.querySelector(\"#errorMessage\");\n    errorMessage.textContent = message;\n    errorMessage.classList.remove(\"hidden\"); // Make the error visible\n  }\n  \n  // Clears any visible error message from the page\n  function clearError() {\n    console.log(\"clear error\");\n    const errorMessage = document.querySelector(\"#errorMessage\");\n    errorMessage.textContent = \"\";\n    errorMessage.classList.add(\"hidden\"); // Hide the error\n  }\n  \n\n//# sourceURL=webpack://final-practical-betatest-pre-typescript/./js/ui.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;