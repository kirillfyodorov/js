function main() {
    "use strict";

    let money = +prompt('Ваш бюджет на месяц?', ''),
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        
    let mainList = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    let article;
    let cost;
    

 /* Цикл FOR
    for (let i = 0; i < 2; i++) {
        article = prompt('Введите обязательную статью расходов в этом месяце', '');
        cost = prompt('Во сколько обойдется?', '');
        if ( (article != '') && (cost != '') && (typeof(article) == 'string')
        && (typeof(article) != null) && (typeof(cost) != null) && article.length < 50) {
            mainList.expenses[article] = cost;
        } else {
            i--;
        }
    }*/

    /* Цикл с do
    let i = 0;
    do {
        article = prompt('Введите обязательную статью расходов в этом месяце', '');
        cost = prompt('Во сколько обойдется?', '');
        if ( (article != '') && (cost != '') && (typeof(article) == 'string')
        && (typeof(article) != null) && (typeof(cost) != null) && article.length < 50) {
            mainList.expenses[article] = cost;
            i++;
        }
    }
    while (i < 2);*/

    let i = 0;
    while (i < 2) {
        article = prompt('Введите обязательную статью расходов в этом месяце', '');
        cost = prompt('Во сколько обойдется?', '');
        if ( (article != '') && (cost != '') && (typeof(article) == 'string')
        && (typeof(article) != null) && (typeof(cost) != null) && article.length < 50) {
            mainList.expenses[article] = cost;
            i++;
        }
    }

    mainList.moneyPerDay = mainList.budget/30;
    alert('Ваш бюджет на день: ' + mainList.moneyPerDay);
    console.log(mainList); 
}

main();