let str = 'урок-3-был слишком легким';
str = str[0].toUpperCase() + str.slice(1);
console.log(str);

let i = 0;
while (i < str.length) {
    if (str[i] == '-') {
        str = str.slice(0,i) + ' ' + str.slice(i+1, str.length);
    }
    i++;
}
console.log(str);

str = str.slice(0, -6) + "легко";
console.log(str);

let arr = [20, 33, 1, 'Человек', 2, 3];
let exp = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'number') {
        exp = exp + arr[i] ** 3;
    }
}
exp = Math.sqrt(exp);
console.log(exp);

function strFunc(s) {
    if (typeof(s) != 'string') {
        return('Неверные данные');
    } else {
        let i = 0;
        while (true) {
            if (s[i] == ' ') {
                s = s.slice(1, s.length);
            } else {
                break;
            }
        }
        while (true) {
            if (s[s.length-1] == ' ') {
                s = s.slice(0, s.length-1);
            } else {
                break;
            }
        }
    }
    if (s.length > 50) {
        s = s.slice(0, 50) + '...';
    }
    console.log(s);
}

strFunc('       fsdffsdfsdfdsfsdfdsfdsfdsfsdfdsfdsvsfdsfsdfsdsdfsdfsd     ');