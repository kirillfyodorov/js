"use strict";

let budget,
    shopName;

budget = +prompt('Ваш бюджет на месяц?', '');
shopName = prompt('Название вашего магазина?', '');
console.log(typeof(budget));
let mainList = {
    budget: budget,
    shopName: shopName,
    shopGoods: [],
    employers: {},
    open: true
};

for (var i = 0; i < 3; i++) {
    mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
}

alert('Ваш бюджет на день: ' + mainList.budget/30);
console.log(mainList);

