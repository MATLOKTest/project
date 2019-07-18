let buttonStart = document.getElementById("start"),
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

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


buttonStart.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == "" || money == null){
        alert("Неверные данные" 
        + "\n - вы ввели буквы"
        + "\n - вы ничего не ввели");
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budjet = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function(){
    sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
    
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && typeof(a) != "" &&
         typeof(b) != "" && a.length <= 50 ){
            console.log("good");
            appData.expenses[a] = b;
            sum += +b;
        }else{
            console.log("beg");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalexpensesItem.length; i++){
        let questionOptExpenses = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " "; 
    }
});

incomeItem.addEventListener('input', function(){
    let item = incomeItem.value;
    appData.income = item.split(", ");
    incomeValue.textContent = appData.income;
});

countBtn.addEventListener('click', function(){
    if(appData.budjet != undefined){
        
        appData.moneyPerDay = ((appData.budjet - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = ("Это высокий уровень достатка!");
        } else {
            levelValue.textContent = ("Произошла ошибка");
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function(){
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function(){
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true  
};

