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
    let deadLine = '2018-10-21';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);

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

        if (Date.parse(endTime) < Date.parse(new Date())) {
            seconds = '-' + seconds;
            minutes = '-' + minutes;
            hours = '-' + hours;
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
});

