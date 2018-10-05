function main() {
    "use strict";
     
    let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
    let today = 'пт';
    let p;
    var parentElem = document.body;

    for (let i = 0; i < 7; i++) {
        p = document.createElement('p');
        if (week[i] == 'сб' || week[i] == 'вск') {
            p.innerHTML = ('<b>' + week[i] + '</b>');
        } else if (week[i] == today) {
            p.innerHTML = ('<i>' + week[i] + '</i>');
        } else {
            p.innerHTML = ('<span>' + week[i] + '</span>');
        }
        parentElem.appendChild(p);
    }

    let arr = ['42343', '3745654', '6432', '743252', '36754', '04112', '312'];

    for (let i = 0; i < 7; i++) {
        if (arr[i][0] == 3 || arr[i][0] == 7) {
            console.log(arr[i]);
        } 
    }
}

main();