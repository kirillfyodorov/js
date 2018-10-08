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
        savings: true
    };

    let article;
    let cost;

  

    function chooseExpenses() {
        let i = 0;
        while (i < 2) {
            article = prompt('Введите обязательную статью расходов в этом месяце', '');
            cost = prompt('Во сколько обойдется?', '');
            if ( (article != '') && (cost != '') && (typeof(article) == 'string')
            && (typeof(article) != null) && (typeof(cost) != null) && article.length < 50) {
                mainList.expenses[article] = cost;
                i++;
            } else {
                alert('Данные введены некорректно');
            }
        }
    }
    chooseExpenses();

    function chooseOptExpenses() {
        let i = 1;
        while (i < 4) {
            article = prompt('Статья необязательных расходов?', '');
            if ( (article != '') && (typeof(article) == 'string') &&
            (typeof(article) != null) && article.length < 50) {
                mainList.optionalExpenses[i] = article;
                i++;
            } else {
                alert('Данные введены некорректно');
            }
        }
    }

    function detectDayBudget() {
        mainList.moneyPerDay = +((mainList.budget / 30).toFixed(2));
        alert('Ваш бюджет на день: ' + mainList.moneyPerDay);
    }
    detectDayBudget();
    
    function detectLevel(sum) {
        if (sum < 100) {
            console.log('Минимальный уровень достатка');
        } else if (sum >= 100 && sum < 2000) {
            console.log('Средний уровень достатка');
        } else if (sum >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    }
    detectLevel(mainList.moneyPerDay);

    function checkSavings() {
        if (mainList.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            mainList.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + mainList.monthIncome);
        } 
    }
    checkSavings();

    console.log(mainList); 
}

main();