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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calsulator.js":
/*!************************************!*\
  !*** ./src/js/parts/calsulator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calsulator() {
  var size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      priceInput = document.querySelector('.calc-price');
  console.log(size.options.selectedIndex);
  size.addEventListener('change', function () {
    console.log(size.options.selectedIndex);
  });
}

module.exports = calsulator;

/***/ }),

/***/ "./src/js/parts/gift.js":
/*!******************************!*\
  !*** ./src/js/parts/gift.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function gift() {
  var btnGift = document.querySelector('.fixed-gift'),
      popupGift = document.querySelector('.popup-gift'),
      btnClose = popupGift.querySelector('.popup-close');
  btnGift.addEventListener('click', function () {
    btnGift.remove();
    popupGift.style.display = 'block';
  });
  popupGift.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      popupGift.style.display = '';
    }
  });
  btnClose.addEventListener('click', function () {
    popupGift.style.display = '';
  });
}

module.exports = gift;

/***/ }),

/***/ "./src/js/parts/mainSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/mainSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mainSlider() {
  var sliderWrapper = document.querySelector('.main-slider'),
      slides = sliderWrapper.querySelectorAll('.main-slider-item'),
      slideIndex = 1,
      preventSlide = 1;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    var top = 0;
    slides[slideIndex - 1].style.top = '-100%';
    var sliderAnimation = setInterval(function () {
      top = top + 5;

      if (preventSlide == slides.length) {
        slides[slides.length - 1].style.top = top + 'px';
      } else {
        slides[slideIndex - 2].style.top = top + 'px';
      }

      slides[slideIndex - 1].style.top = -670 + top + 'px';

      if (top >= 670) {
        preventSlide = slideIndex;
        clearInterval(sliderAnimation);
      }
    }, 5);
  }

  function plusSlides() {
    showSlides(slideIndex += 1);
  }

  var mainSliderTimer = setInterval(function () {
    plusSlides();
  }, 3000);
}

module.exports = mainSlider;

/***/ }),

/***/ "./src/js/parts/modalOrder.js":
/*!************************************!*\
  !*** ./src/js/parts/modalOrder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalOrder() {
  var btnOrder = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      popupClose = popupDesign.querySelector('.popup-close');
  btnOrder.forEach(function (e) {
    e.addEventListener('click', function () {
      popupDesign.style.display = 'block';
    });
  });
  popupDesign.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      popupDesign.style.display = '';
    }
  });
  popupClose.addEventListener('click', function () {
    popupDesign.style.display = '';
  });
}

module.exports = modalOrder;

/***/ }),

/***/ "./src/js/parts/modalСonsultation.js":
/*!*******************************************!*\
  !*** ./src/js/parts/modalСonsultation.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalConsultation() {
  var btnConsultation = document.querySelectorAll('.button-consultation'),
      popupConsultation = document.querySelector('.popup-consultation'),
      popupClose = popupConsultation.querySelector('.popup-close');
  btnConsultation.forEach(function (e) {
    e.addEventListener('click', function () {
      popupConsultation.style.display = 'block';
    });
  });
  popupConsultation.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      popupConsultation.style.display = '';
    }
  });
  popupClose.addEventListener('click', function () {
    popupConsultation.style.display = '';
  });
}

module.exports = modalConsultation;

/***/ }),

/***/ "./src/js/parts/moreStyles.js":
/*!************************************!*\
  !*** ./src/js/parts/moreStyles.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function moreStyles() {
  var hiddenStyles = document.querySelectorAll('.styles-2'),
      btnStyles = document.querySelector('.button-styles');
  btnStyles.addEventListener('click', function () {
    btnStyles.style.display = 'none';
    hiddenStyles.forEach(function (e) {
      e.classList.remove("hidden-lg");
      e.classList.remove("hidden-md");
      e.classList.remove("hidden-sm");
      e.classList.remove("hidden-xs");
      e.classList.add("col-sm-3");
      e.classList.add("col-sm-offset-0");
      e.classList.add("col-xs-10");
      e.classList.add("col-xs-offset-1");
    });
  });
}

module.exports = moreStyles;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var mainSlider = __webpack_require__(/*! ./parts/mainSlider.js */ "./src/js/parts/mainSlider.js"),
      modalOrder = __webpack_require__(/*! ./parts/modalOrder.js */ "./src/js/parts/modalOrder.js"),
      modalConsultation = __webpack_require__(/*! ./parts/modalСonsultation.js */ "./src/js/parts/modalСonsultation.js"),
      gift = __webpack_require__(/*! ./parts/gift.js */ "./src/js/parts/gift.js"),
      moreStyles = __webpack_require__(/*! ./parts/moreStyles.js */ "./src/js/parts/moreStyles.js"),
      calsulator = __webpack_require__(/*! ./parts/calsulator.js */ "./src/js/parts/calsulator.js"); //forms = require('./parts/forms.js');


  mainSlider();
  modalOrder();
  modalConsultation();
  gift();
  moreStyles();
  calsulator(); //forms();
});

/***/ })

/******/ });