function main() {
    "use strict";
     
    let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
    let today = 'пт';

    for (let i = 0; i < 7; i++) {
        if (week[i] == 'сб' || week[i] == 'вск') {
            document.write('<b>' + week[i] + '</b><br>');
        } else if (week[i] == today) {
            document.write('<i>' + week[i] + '</i><br>');
        } else {
            document.write('<span>' + week[i] + '</span><br>');
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