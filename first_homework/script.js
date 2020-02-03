"use strict";

let budget = +prompt("Ваш бюджет на месяц?", "10000"),
    timeData = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget: budget,
    timeData: timeData,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
    if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//     if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } while (i<2);

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = +prompt("Во сколько обойдется?");
//     if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }

appData.moneyPerDate = appData.budget / 30;

self.alert("Ежедневный бюджет: " + appData.moneyPerDate);

if (appData.moneyPerDate < 100) {
    console.log("Минимальный уровеньд достатка");
} else if (appData.moneyPerDate > 100 && appData.moneyPerDate < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDate > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};