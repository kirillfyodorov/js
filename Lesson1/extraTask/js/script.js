"use strict";

let num = 33721,
    prod = 1;

while (num>0) {
    prod = prod * (num % 10);
    num = (num - num % 10) / 10;
}

num = 1;
for (var i = 0; i < 3; i++) {
    num = num * prod;
}

num = num + ''
alert(num[0] + num[1]);