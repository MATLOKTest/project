let button2 = document.getElementsByClassName("menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    column = document.getElementsByClassName("column"),
    promptForApple = document.getElementById("prompt"),
    li = document.createElement("li");


menu.insertBefore(button2[2], button2[1]); //переставляємо кнопки

li.classList.add("menu-item"); //жожавання нової кнопки
li.textContent = "Пятый элемент";
menu.appendChild(li);

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; //замінюємо фон

title.textContent = "Мы продаем только подлинную технику Apple"; //виправляємо текст

column[1].removeChild(adv); //видаляємо рекламу
//adv.remove();

let question = prompt("Какое у вас отношение к технике apple?"); //запитання до користувача

promptForApple.textContent = question; //розміщюємо запитання користувача на сторінці