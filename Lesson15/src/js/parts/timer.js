function timer() {
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

        return ({
            'total': t,
            'hours': hours,
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
}

module.exports = timer;