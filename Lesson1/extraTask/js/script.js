"use strict";

let num = 33721,
    prod = 1;

while (num>0) {
    prod = prod * (num % 10);
    num = (num - num % 10) / 10;
}

prod = prod ** 3;

prod = prod + ''
alert(prod[0] + prod[1]);