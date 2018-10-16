let day = new Date(),
    hour,
    minutes,
    seconds,
    div = document.querySelector('div');


setInterval(function() {
    day = new Date();
    hour = day.getHours();
    minutes = day.getMinutes();
    seconds = day.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    div.textContent = hour + ':' + minutes + ':' + seconds;
}, 1000);
