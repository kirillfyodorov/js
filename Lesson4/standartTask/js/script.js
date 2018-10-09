function main() {
    "use strict";

    let money, time;

    function start() {
        while (isNaN(money) || money == '' || money == null) {
            money = +prompt('Ваш бюджет на месяц?', '');
        }
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
    }
    start();

    let mainList = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
            let i = 0;
            while (i < 2) {
                let article = prompt('Введите обязательную статью расходов в этом месяце', ''),
                    cost = prompt('Во сколько обойдется?', '');
                if ( (article != '') && (cost != '') && (typeof(article) == 'string') && (article != null) && (typeof(cost) != null) && article.length < 50) {
                    mainList.expenses[article] = cost;
                    i++;
                } else {
                    alert('Данные введены некорректно');
                }
            }
        },
        detectDayBudget: function() {
            mainList.moneyPerDay = +((mainList.budget / 30).toFixed(2));
            alert('Ваш бюджет на день: ' + mainList.moneyPerDay);
        },
        detectLevel: function(sum) {
            if (sum < 100) {
                console.log('Минимальный уровень достатка');
            } else if (sum >= 100 && sum < 2000) {
                console.log('Средний уровень достатка');
            } else if (sum >= 2000) {
                console.log('Высокий уровень достатка');
            } else {
                console.log('Произошла ошибка');
            }
        },
        checkSavings: function() {
            if (mainList.savings == true) {
                let save = +prompt('Какова сумма накоплений?'),
                    percent = +prompt('Под какой процент?');

                mainList.monthIncome = save / 100 / 12 * percent;
                alert('Доход в месяц с вашего депозита: ' + mainList.monthIncome);
            }
        },
        chooseOptExpenses: function() {
            let i = 1;
            while (i < 4) {
                let article = prompt('Статья необязательных расходов?', '');
                if ((article != '') && (typeof (article) == 'string') &&
                    (article != null) && article.length < 50) {
                    mainList.optionalExpenses[i] = article;
                    i++;
                } else {
                    alert('Данные введены некорректно');
                }
            }
        },
        chooseIncome: function() {
            let items;
            while (1) {
                items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
                if (items == '' || typeof(items) != 'string' || items == null) {
                    alert('Данные некорректны');
                } else {
                    mainList.income = items.split(', ');
                    break;
                }
            }
            while (1) {
                items = prompt('Может что-то еще?', '');
                if (items == '' || typeof (items) != 'string') {
                    alert('Данные некорректны');
                } else {
                    mainList.income.push(items);
                    break;
                }
            }
            mainList.income.sort();
        }
    };

    console.log(mainList);
    mainList.chooseIncome(); 

    mainList.income.forEach(function(item, i) {
        alert('Способы доп.заработка:\n' + (i+1) + ': ' + item);
    });
    
    console.log("Наша программа включает в себя данные: ");
    for (let key in mainList) {
        console.log(key);
    }
}

main();