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


appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] 
    = prompt("Во сколько обойдется?", "");
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] 
    = prompt("Во сколько обойдется?", "");

alert(appData.budjet/30);