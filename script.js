'use strict';

let money, time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};




for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");


    if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != "" &&
     typeof(b) != "" && a.length <= 50 ){
        console.log("good");
        appData.expenses[a] = b;
    }else{
        console.log("beg");
        i--;
    }

}

// while
// let i = 0;
// while(i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");


//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != "" &&
//      typeof(b) != "" && a.length <= 50 ){
//         console.log("good");
//         appData.expenses[a] = b;
        
//     }else{
//         console.log("beg");
//         i--;
//     }
//     i++;
// }

// DO WHILE
// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");


//     if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != "" &&
//      typeof(b) != "" && a.length <= 50 ){
//         console.log("good");
//         appData.expenses[a] = b;
//     }else{
//         console.log("beg");
//         i--;
//     }
//     i++;
// }
// while(i < 0);

appData.moneyPerDay = appData.budjet / 30;
alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}