function main() {
    "use strict";
    let startBtn = document.getElementById('start'),
        budgetValue = document.querySelector('.budget-value'),
        dayBudgetValue = document.querySelector('.daybudget-value'),
        levelValue = document.querySelector('.level-value'),
        expensesValue = document.querySelector('.expenses-value'),
        optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
        incomeValue = document.querySelector('.income-value'),
        monthSavingsValue = document.querySelector('.monthsavings-value'),
        yearSavingsValue = document.querySelector('.yearsavings-value'),


        expensesItem = document.querySelectorAll('.expenses-item'),
        expensesBtn = document.getElementsByTagName('button')[0],
        optionalExpensesBtn = document.getElementsByTagName('button')[1],
        countBtn = document.getElementsByTagName('button')[2],
        optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
        incomeItem = document.querySelector('#income'),
        checkSavings = document.querySelector('#savings'),
        sumValue = document.querySelector('#sum'),
        percentValue = document.querySelector('#percent'),
        yearValue = document.querySelector('.year-value'),
        monthValue = document.querySelector('.month-value'),
        dayValue = document.querySelector('.day-value'),
        data = document.querySelector('.data'),
        inputs = data.querySelectorAll('input');

        let money, time;

        expensesBtn.disabled = true;
        countBtn.disabled = true;
        optionalExpensesBtn.disabled = true;
        expensesBtn.classList.add('disabledBtn');
        countBtn.classList.add('disabledBtn');
        optionalExpensesBtn.classList.add('disabledBtn');
        inputs.forEach(function (item, i, mas) {
            item.readOnly = true;
        });
        checkSavings.disabled = true;

        startBtn.addEventListener('click', function() {
            while (isNaN(money) || money == '' || money == null) {
                money = +prompt('Ваш бюджет на месяц?', '');
            }
            time = prompt('Введите дату в формате YYYY-MM-DD', '');

            mainList.budget = money;
            mainList.timeData = time;
            budgetValue.textContent = money.toFixed();
            yearValue.value = new Date(Date.parse(time)).getFullYear();
            monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
            dayValue.value = new Date(Date.parse(time)).getDate();

            expensesBtn.disabled = false;
            optionalExpensesBtn.disabled = false;
            checkSavings.disabled = false;
            expensesBtn.classList.remove('disabledBtn');
            optionalExpensesBtn.classList.remove('disabledBtn');
            inputs.forEach(function(item, i, mas) {
                if (i < mas.length - 2) {
                    item.readOnly = false;
                    item.style.opacity = '1';
                    item.style.backgroundColor = '#fff';
                } else {
                    item.readOnly = false;
                }
            });
        });

        
        
        expensesBtn.addEventListener('click', function () {
            let sum = 0;
            let i = 0;
            let log = 1;
            while (i < expensesItem.length) {
                let article = expensesItem[i].value;
                if (article == '') {
                    expensesItem[i].style.border = '1px solid red';
                    log *= 0;
                } else {
                    log *= 1;
                    expensesItem[i].style.border = '1px solid transparent';
                }
                let cost = expensesItem[++i].value;

                if (cost == '') {
                    expensesItem[i].style.border = '1px solid red';
                    log *= 0;
                } else {
                    log *= 1;
                    expensesItem[i].style.border = '1px solid transparent';
                }
                
                mainList.expenses[article] = cost;
                sum += +cost;
                i++;
            }
            if (log == 1) {
                expensesValue.textContent = sum;
                countBtn.classList.remove('disabledBtn');
                countBtn.disabled = false;
            }
        });

        expensesItem.forEach(function (elem, i, mas) {
            if (i % 2 != 0) {
                mas[i].addEventListener('keyup', function () {
                    mas[i].value = mas[i].value.replace(/[^0-9]/ig, '');
                });
            } else {
                mas[i].addEventListener('keyup', function () {
                    mas[i].value = mas[i].value.replace(/[^а-яА-ЯёЁ]/ig, '');
                });
            }
        });

        optionalExpensesItem.forEach(function (elem, i, mas) {
            mas[i].addEventListener('keyup', function () {
                mas[i].value = mas[i].value.replace(/[^а-яА-ЯёЁ]/ig, '');
            });
        });
        
        

        optionalExpensesBtn.addEventListener('click', function() {
            let i = 0;
            optionalExpensesValue.textContent = '';
            while (i < optionalExpensesItem.length) {
                let article = optionalExpensesItem[i].value;
                mainList.optionalExpenses[i] = article;
                optionalExpensesValue.textContent += mainList.optionalExpenses[i] + " ";
                i++;
            }
        });

        countBtn.addEventListener('click', function() {
            if (mainList.budget != undefined) {
                mainList.moneyPerDay = +(((mainList.budget - +expensesValue.textContent) / 30).toFixed(1));
                dayBudgetValue.textContent = mainList.moneyPerDay;
                if (mainList.moneyPerDay < 100) {
                    levelValue.textContent = 'Минимальный уровень достатка. Следует сократить расходы!';
                } else if (mainList.moneyPerDay >= 100 && mainList.moneyPerDay < 2000) {
                    levelValue.textContent = 'Средний уровень достатка';
                } else if (mainList.moneyPerDay >= 2000) {
                    levelValue.textContent = 'Высокий уровень достатка';
                } else {
                    levelValue.textContent = 'Произошла ошибка';
                }
            } else {
                dayBudgetValue.textContent = 'Произошла ошибка';
            }
        });

        

        incomeItem.addEventListener('input', function() {
            incomeItem.addEventListener('keyup', function () {
                incomeItem.value = incomeItem.value.replace(/[^а-яА-ЯёЁ\s,]/ig, '');
            });
            let items = incomeItem.value;
            mainList.income = items.split(', ');
            incomeValue.textContent = mainList.income;
        });

        checkSavings.addEventListener('click', function() {
            if (mainList.savings == true) {
                mainList.savings = false;
                sumValue.style.backgroundColor = '#999';
                sumValue.style.opacity = '0.05';
                percentValue.style.backgroundColor = '#999';
                percentValue.style.opacity = '0.05';
                sumValue.value = '';
                percentValue.value = '';
                monthSavingsValue.textContent = '';
                yearSavingsValue.textContent = '';
            } else {
                mainList.savings = true;
                sumValue.style.backgroundColor = '#fff';
                sumValue.style.opacity = '1';
                percentValue.style.backgroundColor = '#fff';
                percentValue.style.opacity = '1';
                sumValue.value = '';
                percentValue.value = '';
            }
        });

        sumValue.addEventListener('input', function() {
            if (mainList.savings == true) {
                let sum = +sumValue.value,
                    percent = +percentValue.value;

                mainList.monthIncome = sum / 100 / 12 * percent;
                mainList.yearIncome = sum / 100 * percent;

                monthSavingsValue.textContent = mainList.monthIncome.toFixed(1);
                yearSavingsValue.textContent = mainList.yearIncome.toFixed(1);
            }
        });

        sumValue.addEventListener('keyup', function () {
            sumValue.value = sumValue.value.replace(/[^0-9]/ig, '');
        });

        percentValue.addEventListener('keyup', function () {
            percentValue.value = percentValue.value.replace(/[^0-9]/ig, '');
        });

        percentValue.addEventListener('input', function () {
            if (mainList.savings == true) {
                let sum = +sumValue.value,
                    percent = +percentValue.value;

                mainList.monthIncome = sum / 100 / 12 * percent;
                mainList.yearIncome = sum / 100 * percent;

                monthSavingsValue.textContent = mainList.monthIncome.toFixed(1);
                yearSavingsValue.textContent = mainList.yearIncome.toFixed(1);
            }
        });

        let mainList = {
            budget: money,
            timeData: time,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false
        };
        sumValue.style.backgroundColor = '#999';
        sumValue.style.opacity = '0.05';
        percentValue.style.backgroundColor = '#999';
        percentValue.style.opacity = '0.05';
}

main();