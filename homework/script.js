"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "10000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "10000");
    }
};
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = +prompt("Во сколько обойдется?");
            if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        };
    },

    detectDayBudget: function () {
        appData.moneyPerDate = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDate);
    },

    detectLevel: function () {
        if (appData.moneyPerDate <= 100) {
            console.log("Минимальный уровеньд достатка");
        } else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDate >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        };
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = (save / 100 / 12 * percent).toFixed();
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        };
    },

    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExpenses;
        };
    },

    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (через запятую)", "");
        while (typeof (items) != 'string' || items == null || items == "") {
            items = prompt("Что принесет дополнительный доход? (через запятую)", "");
        };
        appData.income = items.split(", ");
        appData.income.push(prompt("Что то ещё?"));
        appData.income.sort();

        console.log("Способы доп. заработка: ");
        appData.income.forEach(function (item, index) {
            console.log(+index + 1 + " - " + item);
        });
    }

};

// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseOptExpenses();
// appData.chooseIncome();

console.log("Наша программа включает в себя данные: ");

for (let i in appData){
    console.log(i);
}