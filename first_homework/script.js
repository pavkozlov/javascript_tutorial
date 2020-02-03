"use strict";

let budget = prompt("Ваш бюджет на месяц?", "10000");
let timeData = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget:budget,
    timeData:timeData,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");

let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

self.alert(appData.budget / 30);

console.log(appData);