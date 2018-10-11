function main() {
    "use strict";
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        day = date.getUTCDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        dayNumber = date.getUTCDay(),
        dayName,
        dateStr = '' + hours + ':' + minutes + ':' + seconds + ' ';

    if (day < 10) {
        dateStr = dateStr + '0' + day + '.';
    } else {
        dateStr = dateStr + day + '.';
    }
    if (month < 10) {
        dateStr = dateStr + '0' + month + '.';
    } else {
        dateStr = dateStr + month + '.';
    }
    dateStr = dateStr + year;

    console.log(dateStr);

    switch (dayNumber) {
        case 1:
            dayName = 'Понедельник';
            break;
        case 2:
            dayName = 'Вторник';
            break;
        case 3:
            dayName = 'Среда';
            break;
        case 4:
            dayName = 'Четверг';
            break;
        case 5:
            dayName = 'Пятница';
            break;
        case 6:
            dayName = 'Суббота';
            break;
        case 0:
            dayName = 'Воскресенье';
            break;
    }
    console.log(dayName);

    let today = document.createElement('div');
    today.innerHTML = dateStr + ' - ' + dayName + '<br>';
    document.body.appendChild(today);

    

    let startDay,
        finishDay,
        text = document.createElement('p');
    
    text.textContent = 'Введите в первое поле начальную дату, а во второе - конечную дату в формате ДД.ММ.ГГГГ';
    document.body.appendChild(text);

    for (let i = 0; i < 2; i++) {
        document.body.appendChild(document.createElement('input'));
        document.body.appendChild(document.createElement('br'));
    }

    

    let btn = document.createElement('button');
    btn.innerHTML = 'Рассчитать';
    document.body.appendChild(btn);
    document.body.appendChild(document.createElement('input'));

    btn.onclick = function () {
        startDay = document.getElementsByTagName('input')[0].value;
        console.log(startDay);
        finishDay = document.getElementsByTagName('input')[1].value;
        console.log(startDay);
        let difference = new Date(+startDay.slice(6, 10), +startDay.slice(3, 5), +startDay.slice(0, 2), 0, 0, 0, 0) - new Date(+finishDay.slice(6, 10), +finishDay.slice(3, 5), +finishDay.slice(0, 2), 0, 0, 0, 0);
        difference = Math.abs(difference / 1000 / 60 / 60 / 24);
        document.getElementsByTagName('input')[2].value = difference;
    };
}

main();