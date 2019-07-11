
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
    optionalExpenses: {}
};


function chooseExpenses(){
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
}

chooseExpenses();



function detectDayBudget(){
    appData.moneyPerDay = (appData.budjet / 30).toFixed(2);
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");  
}

detectDayBudget();


function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}


function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
        alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses(){
    for(let i = 1; i <= 3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
    }
    console.log(appData.optionalExpenses);
}

chooseOptExpenses();