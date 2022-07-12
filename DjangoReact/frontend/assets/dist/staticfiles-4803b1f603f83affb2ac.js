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
/******/ 	__webpack_require__.p = "/static/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/src/index.js: Unexpected token (18:37)\\n\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m \\u001b[90m// Learn more about service workers: https://bit.ly/CRA-PWA\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 |\\u001b[39m serviceWorker\\u001b[33m.\\u001b[39munregister()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 |\\u001b[39m devServer\\u001b[33m:\\u001b[39m {historyApiFallback\\u001b[33m:\\u001b[39m \\u001b[36mtrue\\u001b[39m\\u001b[33m,\\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at instantiate (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:72:32)\\n    at constructor (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:359:12)\\n    at Object.raise (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:3339:19)\\n    at Object.unexpected (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:3377:16)\\n    at Object.parseExprAtom (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:13123:22)\\n    at Object.parseExprAtom (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:8039:20)\\n    at Object.parseExprSubscripts (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12648:23)\\n    at Object.parseUpdate (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12627:21)\\n    at Object.parseMaybeUnary (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12598:23)\\n    at Object.parseMaybeUnaryOrPrivate (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12392:61)\\n    at Object.parseExprOps (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12399:23)\\n    at Object.parseMaybeConditional (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12369:23)\\n    at Object.parseMaybeAssign (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12321:21)\\n    at Object.parseExpressionBase (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12264:36)\\n    at /home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12251:39\\n    at Object.allowInAnd (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14346:16)\\n    at Object.parseExpression (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:12251:17)\\n    at Object.parseStatementContent (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14786:23)\\n    at Object.parseStatement (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14643:17)\\n    at Object.parseLabeledStatement (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:15236:22)\\n    at Object.parseStatementContent (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14789:19)\\n    at Object.parseStatement (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14643:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:15286:25)\\n    at Object.parseBlockBody (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:15277:10)\\n    at Object.parseBlock (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:15261:10)\\n    at Object.parseStatementContent (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14727:21)\\n    at Object.parseStatement (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14643:17)\\n    at Object.parseLabeledStatement (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:15236:22)\\n    at Object.parseStatementContent (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14789:19)\\n    at Object.parseStatement (/home/dell/Desktop/Danish/React with Django/django-react-webpack/frontend/node_modules/@babel/parser/lib/index.js:14643:17)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });