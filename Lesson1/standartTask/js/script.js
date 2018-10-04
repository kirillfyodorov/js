 "use strict";

let money,
    time;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');
console.log(typeof(budget));
let mainList = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let article = prompt('Введите обязательную статью расходов в этом месяце', '');
let cost = prompt('Во сколько обойдется?', '');
mainList.expenses[article] = cost;

alert('Ваш бюджет на день: ' + mainList.money/30);
console.log(mainList);

