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

/***/ "./src/js/parts/calculator.js":
/*!************************************!*\
  !*** ./src/js/parts/calculator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.querySelector('.total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      prevTotal,
      timerId,
      koef = 1;
  totalValue.textContent = 0;

  function startTimer() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : total;
    clearInterval(timerId);
    var b = +totalValue.textContent;

    if (restDays.value == '' || persons.value == '' || +restDays.value == 0 || +persons.value == 0) {
      total = 0;
      c = 0;
    }

    timerId = setInterval(function () {
      if (b > c) {
        b = b - 50;
        totalValue.textContent = b;

        if (b <= c) {
          clearInterval(timerId);
        }
      } else if (b < c) {
        b = b + 50;
        totalValue.textContent = b;

        if (b >= c) {
          clearInterval(timerId);
        }
      }
    }, 1);
  }

  persons.addEventListener('input', function () {
    prevTotal = total;
    this.value = this.value.replace(/[^0-9]/ig, '');
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000 * koef;
    startTimer();
  });
  restDays.addEventListener('input', function () {
    prevTotal = total;
    this.value = this.value.replace(/[^0-9]/ig, '');
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000 * koef;
    startTimer();
  });
  place.addEventListener('change', function () {
    if (persons.value == '' || restDays.value == '') {
      totalValue.textContent = 0;
    } else {
      var a = total;
      total = a * +this.options[this.selectedIndex].value / koef;
      koef = this.options[this.selectedIndex].value;
      startTimer(total);
    }
  });
}

module.exports = calculator;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  function sendForm(classForm) {
    var form = document.querySelector(classForm),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      function postData() {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest(); // создаем запрос к серверу

          request.open('POST', 'server.php'); // выставляем настройки запроса

          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
          var formData = new FormData(form); //получаем все данные с формы

          var obj = {}; // создаем объект для формата JSON

          for (var i = 0; i < formData.length; i++) {
            obj[formData[i].getAttribute('name')] = formData[i].value;
          }

          request.send(formData); // отправляем данные на сервер

          request.addEventListener('readystatechange', function () {
            // смотрим состояние запроса
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState == 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData().then(function () {
        statusMessage.innerHTML = '<img src=\"img/ajax-loader.gif\">';
      }).then(function () {
        statusMessage.innerHTML = '<img src=\"img/check.svg\">';
      }).catch(function () {
        statusMessage.innerHTML = '<img src=\"img/warning.svg\">';
      }).then(function () {
        return clearInput();
      });
    });
  }

  sendForm('.main-form');
  sendForm('.form-contact');
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/overlayModule.js":
/*!***************************************!*\
  !*** ./src/js/parts/overlayModule.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function overlayModule() {
  function getNameBrowser() {
    var ua = navigator.userAgent;

    if (ua.search(/Chrome/) > 0) {
      return 'Google Chrome';
    }

    if (ua.search(/Firefox/) > 0) {
      return 'Firefox';
    }

    if (ua.search(/Opera/) > 0) {
      return 'Opera';
    }

    if (ua.search(/Safari/) > 0) {
      return 'Safari';
    }

    if (ua.search(/Trident/) > 0) {
      return 'Internet Explorer';
    }

    if (ua.search(/Edge/) > 0) {
      return 'Edge';
    }

    return 'Не определен';
  }

  var browser = getNameBrowser();
  var t = 0;

  function popupAnimate() {
    var request = requestAnimationFrame(popupAnimate);
    t = t + 0.05;
    overlay.style.opacity = t;

    if (t > 1) {
      t = 0;
      cancelAnimationFrame(request);
    }
  }

  var more = document.querySelector('.more'),
      descrBtn = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  function displayModal() {
    if (browser != 'Internet Explorer' && browser != 'Edge') {
      overlay.classList.remove('overlay-display');
      popupAnimate();
    }

    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  more.addEventListener('click', displayModal);
  descrBtn.forEach(function (elem) {
    elem.addEventListener('click', displayModal);
  });
  close.addEventListener('click', function () {
    overlay.style.display = '';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

module.exports = overlayModule;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    dots[slideIndex - 1].classList.add('dot-active');
    slides.forEach(function (item) {
      item.style.display = 'none';
      item.style.opacity = 1;
    });
    slides[slideIndex - 1].style.opacity = 0;
    slides[slideIndex - 1].style.display = 'block';
    var opacity = 0;
    var opacityAnimation = setInterval(function () {
      opacity += 0.05;
      slides[slideIndex - 1].style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(opacityAnimation);
      }
    }, 10);
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    var opacity = 1;
    var sliderAnimation = setInterval(function () {
      opacity -= 0.05;
      slides[slideIndex - 1].style.opacity = opacity;

      if (opacity <= 0) {
        showSlides(slideIndex += n);
        clearInterval(sliderAnimation);
      }
    }, 5);
  }

  function currentSlide(n) {
    var opacity = 1;
    var sliderAnimation = setInterval(function () {
      opacity -= 0.05;
      slides[slideIndex - 1].style.opacity = opacity;

      if (opacity <= 0) {
        showSlides(slideIndex = n);
        clearInterval(sliderAnimation);
      }
    }, 10);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (e) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (e.target && e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/softScroll.js":
/*!************************************!*\
  !*** ./src/js/parts/softScroll.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function softScrollModule() {
  var count = 0;
  var top, id;

  function softScroll() {
    var request = requestAnimationFrame(softScroll);
    count++;
    scrollBy(0, top / 20);

    if (count == 20) {
      count = 0;
      cancelAnimationFrame(request);
    }
  }

  var menu = document.querySelector('nav');
  menu.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.tagName == 'A') {
      e.preventDefault();
      id = target.href.slice(target.href.indexOf('#'), target.href.length);
      top = document.querySelector(id).getBoundingClientRect().top;
      softScroll();
    }
  });
}

module.exports = softScrollModule;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.add('show');
      tabContent[b].classList.remove('hide');
    }
  }

  info.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/telMask.js":
/*!*********************************!*\
  !*** ./src/js/parts/telMask.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function telMask() {
  var telInput = document.querySelectorAll('input[type=tel]');
  telInput.forEach(function (elem) {
    var input = elem,
        startL;
    input.addEventListener('input', function (e) {
      input.value = input.value.replace('+7 (', '');
      input.value = input.value.replace(') ', '');
      input.value = input.value.replace(')', '');
      input.value = input.value.replace('-', '');
      var s = +input.value.slice(-1);

      if ((isNaN(s) || s == ' ') && s != 0) {
        input.value = input.value.slice(0, input.value.length - 1);
      } else if (e.data == null && startL == 3) {
        input.value = input.value.slice(0, input.value.length - 1);
      }

      startL = input.value.length;

      if (input.value.length < 3) {
        input.value = "+7 (".concat(input.value.slice(0, 3), ")");
        input.setSelectionRange(input.value.length - 1, input.value.length - 1);
      } else if (input.value.length == 3) {
        input.value = "+7 (".concat(input.value.slice(0, 3), ")");
      } else if (input.value.length > 3 && input.value.length < 7) {
        input.value = "+7 (".concat(input.value.slice(0, 3), ") ").concat(input.value.slice(3, 6));
      } else if (input.value.length > 6) {
        input.value = "+7 (".concat(input.value.slice(0, 3), ") ").concat(input.value.slice(3, 6), "-").concat(input.value.slice(6, 10));
      }
    });
  });
}

module.exports = telMask;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadLine = '2018-10-30';

  function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60);

    if (Date.parse(endTime) < Date.parse(new Date())) {
      seconds = '00';
      minutes = '00';
      hours = '00';
    }

    if (Math.abs(seconds) < 10) {
      seconds = '0' + Math.abs(seconds);
    } else {
      seconds = '' + Math.abs(seconds);
    }

    if (Math.abs(minutes) < 10) {
      minutes = '0' + Math.abs(minutes);
    } else {
      minutes = '' + Math.abs(minutes);
    }

    if (Math.abs(hours) < 10) {
      hours = '0' + Math.abs(hours);
    } else {
      hours = '' + Math.abs(hours);
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endTime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endTime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;
    }
  }

  setClock('timer', deadLine);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use ctrict';

  var tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js"),
      softScrollModule = __webpack_require__(/*! ./parts/softScroll */ "./src/js/parts/softScroll.js"),
      overlayModule = __webpack_require__(/*! ./parts/overlayModule */ "./src/js/parts/overlayModule.js"),
      telMask = __webpack_require__(/*! ./parts/telMask */ "./src/js/parts/telMask.js"),
      form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
      calculator = __webpack_require__(/*! ./parts/calculator */ "./src/js/parts/calculator.js");

  tabs();
  timer();
  softScrollModule();
  overlayModule();
  telMask();
  form();
  slider();
  calculator();
});

/***/ })

/******/ });