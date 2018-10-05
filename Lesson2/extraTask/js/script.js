function main() {
    "use strict";
     
    let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
    let today = 'пт';
    let p;
    var parentElem = document.body;

    for (let i = 0; i < 7; i++) {
        if (week[i] == 'сб' || week[i] == 'вск') {
            p = document.createElement('p');
            p.innerHTML = ('<b>' + week[i] + '</b>');
            parentElem.appendChild(p);
        } else if (week[i] == today) {
            p = document.createElement('p');
            p.innerHTML = ('<i>' + week[i] + '</i>');
            parentElem.appendChild(p);
        } else {
            p = document.createElement('p');
            p.innerHTML = ('<span>' + week[i] + '</span>');
            parentElem.appendChild(p);
        }
    }

    let arr = ['42343', '3745654', '6432', '743252', '36754', '04112', '312'];

    for (let i = 0; i < 7; i++) {
        if (arr[i][0] == 3 || arr[i][0] == 7) {
            console.log(arr[i]);
        } 
    }
}

main();