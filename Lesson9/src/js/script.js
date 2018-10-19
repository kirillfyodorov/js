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
        if (t == 1) {
            t = 0;
            cancelAnimationFrame(request);
        }
    }

    let more = document.querySelector('.more'),
        descrBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function displayModal() {
        if (document.documentElement.clientWidth < 992) {
            overlay.classList.remove('overlay-display');
        } else {
            this.classList.add('more-splash');
            if (browser != 'Internet Explorer' && browser != 'Edge') {
            overlay.classList.remove('overlay-display');
            popupAnimate();
        }
        }
        overlay.style.display = 'block';
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
    
});

