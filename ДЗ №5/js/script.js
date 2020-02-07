"use strict";

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    prompt_field = document.querySelector('#prompt'),
    newLi = document.createElement('li');

newLi.classList.add('menu-item');
newLi.textContent = 'Пятый пункт';
menu.appendChild(newLi);

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let prompt_text = prompt("Как вы относитесь к нашей технике?");
prompt_field.textContent = prompt_text;