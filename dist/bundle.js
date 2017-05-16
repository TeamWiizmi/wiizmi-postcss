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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function() {

  $('[data-toggle="drawer"]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).data('target');
    if ($(target).hasClass('is-active')) {
      $(target).removeClass('is-active');
      $('body').removeClass('u-nbfc');
    } else {
      $(target).addClass('is-active');
      $('body').addClass('u-nbfc');
    }

  });

  $('[data-toggle="dropdown"]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).data('target');
    $(target).toggleClass('is-active');
  });

  $(document).click(function(e) {
    e.stopPropagation();

    if (!$(e.target).is('[data-toggle="dropdown"]')) {
      $('[data-toggle="dropdown"]').each(function() {
        $($(this).data('target')).removeClass('is-active');
      })
    }
  });

  $('[data-toggle="tab"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(this).addClass('is-active').siblings().removeClass('is-active');      
    $(target).addClass('is-active').siblings().removeClass('is-active');      
    
  });    

  $('[data-toggle="dialog"]').each(function(e) {
    var target = $(this).data('target');
    var dialog = document.querySelector(target);
    dialogPolyfill.registerDialog(dialog);

    $(this).on('click', function(e) { dialog.showModal(); });
    $(target).find('.js-close').click(function(e){ 
      e.preventDefault();
      dialog.close(); 
    });
  });

});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_js__);



/***/ })
/******/ ]);