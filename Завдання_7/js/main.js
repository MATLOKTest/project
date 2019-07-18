let buttonStart = document.getElementById("start")[0],
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName("expenses-item");
    expensesBtn  = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    checkSavings  = document.querySelector("#savings"),
    sumValue  = document.querySelector(".choose-sum"),
    percentValue  = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

    console.log(expensesBtn);
    console.log(optionalExpensesBtn);
    console.log(countBtn);

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == "" || money == null){
        alert("Неверные данные" 
        + "\n - вы ввели буквы"
        + "\n - вы ничего не ввели");
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
}

start();

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");  
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(let i = 1; i <= 3; i++){
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function(){
        
        let item = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if(typeof(item) != "string" && typeof(item) == null && item == ''){
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        }else{
            appData.income = item.split(", ");
            appData.income.push(prompt("Может что-то еще? "));
            appData.income.sort();
        }
        
        appData.income.forEach(function(mass, i){
            alert("Способы доп. заработка " + (i+1) + " - " + mass);
        });

    }
};

// for(key in appData){
//     console.log("Наша программа включает в себя данные:" + key + " - " + appData[key]);
// }
