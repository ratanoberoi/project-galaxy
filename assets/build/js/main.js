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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/eslint-loader/index.js):\nSyntaxError: Cannot read config file: C:\\MAMP\\htdocs\\project-galaxy\\assets\\.eslintrc.json\nError: Unexpected end of JSON input\n    at JSON.parse (<anonymous>)\n    at loadJSONConfigFile (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config\\config-file.js:114:21)\n    at loadConfigFile (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config\\config-file.js:230:26)\n    at loadFromDisk (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config\\config-file.js:523:18)\n    at Object.load (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config\\config-file.js:587:20)\n    at Config.getLocalConfigHierarchy (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config.js:240:44)\n    at Config.getConfigHierarchy (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config.js:192:43)\n    at Config.getConfigVector (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config.js:299:21)\n    at Config.getConfig (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\config.js:342:29)\n    at processText (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\cli-engine.js:181:33)\n    at CLIEngine.executeOnText (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint\\lib\\cli-engine.js:690:40)\n    at lint (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint-loader\\index.js:278:17)\n    at Object.module.exports (C:\\MAMP\\htdocs\\project-galaxy\\assets\\node_modules\\eslint-loader\\index.js:273:21)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map