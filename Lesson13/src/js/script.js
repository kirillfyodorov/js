window.addEventListener('DOMContentLoaded', function() {
    'use ctrict';

    //ТАБЫ
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for (let i = a; i < tabContent.length; i++) {
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
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //ТАЙМЕР
    let deadLine = '2018-10-30';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
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

        return({
            'total' : t,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds
        });
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
        }

    }

    setClock('timer', deadLine);

    //мягкий скролл
    let count = 0;
    let top, id;

    function softScroll() {
        let request = requestAnimationFrame(softScroll);
        count++;
        scrollBy(0, top / 20);
        if (count == 20) {
            count = 0;
            cancelAnimationFrame(request);
        }
    }

    let menu = document.querySelector('nav');
    menu.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.tagName == 'A') {
            e.preventDefault();
            id = target.href.slice(target.href.indexOf('#'), target.href.length);
            top = document.querySelector(id).getBoundingClientRect().top;
            console.log(top);
            softScroll();
        }
    });

    //popup
    function getNameBrowser() {
        let ua = navigator.userAgent;
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

    let browser = getNameBrowser();

    let t = 0;
    function popupAnimate() {
        let request = requestAnimationFrame(popupAnimate);
        t = t + 0.05;
        overlay.style.opacity = t;
        console.log(t);
        if (t > 1) {
            t = 0;
            cancelAnimationFrame(request);
        }
    }

    let more = document.querySelector('.more'),
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

    descrBtn.forEach(function(elem) {
        elem.addEventListener('click', displayModal);
    });


    close.addEventListener('click', function() {
        overlay.style.display = '';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    
    //TEL MASK
    let telInput = document.querySelectorAll('input[type=tel]');
    console.log(telInput);

    telInput.forEach(function(elem) {
        let input = elem,
        startL;
        input.addEventListener('input', (e) => {
            input.value = input.value.replace('+7 (', '');
            input.value = input.value.replace(') ', '');
            input.value = input.value.replace(')', '');
            input.value = input.value.replace('-', '');
            let s = +input.value.slice(-1);
            if (isNaN(s) || s == ' ') {
                input.value = input.value.slice(0, input.value.length - 1);
            } else if (e.data == null && startL == 3) {
                input.value = input.value.slice(0, input.value.length - 1);
            }
            startL = input.value.length;
            if (input.value.length < 3) {
                input.value = `+7 (${input.value.slice(0, 3)})`;
                input.setSelectionRange(input.value.length - 1, input.value.length - 1);
            } else if (input.value.length == 3) {
                input.value = `+7 (${input.value.slice(0, 3)})`;
            } else if (input.value.length > 3 && input.value.length < 7) {
                input.value = `+7 (${input.value.slice(0, 3)}) ${input.value.slice(3, 6)}`;
            } else if (input.value.length > 6) {
                input.value = `+7 (${input.value.slice(0, 3)}) ${input.value.slice(3, 6)}-${input.value.slice(6,10)}`;
            }
        });
    });

    //FORM
    function sendForm(classForm) {
        let form = document.querySelector(classForm),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); // создаем запрос к серверу
                    request.open('POST', 'server.php'); // выставляем настройки запроса
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let formData = new FormData(form); //получаем все данные с формы

                    let obj = {}; // создаем объект для формата JSON
                    for (let i = 0; i < formData.length; i++) {
                        obj[formData[i].getAttribute('name')] = formData[i].value;
                    }

                    request.send(formData); // отправляем данные на сервер

                    request.addEventListener('readystatechange', function () { // смотрим состояние запроса
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
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData()
                .then(() => {
                    statusMessage.innerHTML = '<img src=\"img/ajax-loader.gif\">';
                })
                .then(() => {
                    statusMessage.innerHTML = '<img src=\"img/check.svg\">';
                })
                .catch(() => {
                    statusMessage.textContent = '<img src=\"img/warning.svg\">';
                })
                .then(() => clearInput());
        });
    }
    sendForm('.main-form');
    sendForm('.form-contact');

    //SLIDER

    let slideIndex = 1,
        square = document.querySelectorAll('.square'),
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

        dots.forEach((item) => item.classList.remove('dot-active'));
        dots[slideIndex - 1].classList.add('dot-active');
        slides.forEach((item) => {
            item.style.display = 'none';
            item.style.opacity = 1;
        });
        slides[slideIndex - 1].style.opacity = 0;
        slides[slideIndex - 1].style.display = 'block';

        let opacity = 0;
        let opacityAnimation = setInterval(function () {
            opacity += 0.05;

            slides[slideIndex - 1].style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(opacityAnimation);
            }
        }, 50);
    }
    showSlides(slideIndex);

    function plusSlides(n) {
        let opacity = 1;
        let sliderAnimation = setInterval(function () {
            opacity -= 0.05;

            slides[slideIndex - 1].style.opacity = opacity;
            if (opacity <= 0) {
                showSlides(slideIndex += n);
                clearInterval(sliderAnimation);
            }
        }, 5);
        console.log(opacity);
        
    }
    function currentSlide(n) {
        let opacity = 1;
        let sliderAnimation = setInterval(function () {
            opacity -= 0.05;

            slides[slideIndex - 1].style.opacity = opacity;
            if (opacity <= 0) {
                showSlides(slideIndex = n);
                clearInterval(sliderAnimation);
            }
        }, 20);
        
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', (e) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target && e.target.classList.contains('dot') && e.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    //CALCULATOR

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.querySelector('.total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        prevTotal,
        timerId;

        totalValue.textContent = 0; 

        function startTimer() {
            if (restDays.value == '' || persons.value == '') {
                total = 0;
                totalValue.textContent = 0;
            } else {
                timerId = setInterval(function () {
                    if (prevTotal > total) {
                        prevTotal = prevTotal - 250;
                        totalValue.textContent = prevTotal;

                    } else if (prevTotal < total) {
                        prevTotal = prevTotal + 250;
                        totalValue.textContent = prevTotal;

                    }
                }, 1);
            }
        }

        persons.addEventListener('input', function() {
            prevTotal = total;
            this.value = this.value.replace(/[^0-9]/ig, '');
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            startTimer();
            
        });
        restDays.addEventListener('input', function () {
            prevTotal = total;
            this.value = this.value.replace(/[^0-9]/ig, '');
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            console.log(prevTotal + ' ' + total);
            startTimer();
        });

        place.addEventListener('change', function () {
            if (persons.value == '' || restDays.value == '') {
                totalValue.textContent = 0;
                console.log(1);
            } else {
                let a = total;
                console.log(this.options[this.selectedIndex].value);
                totalValue.textContent = a * this.options[this.selectedIndex].value;
            }
        });
});

