function main() {
    "use strict";
    let menuItem = document.getElementsByClassName('menu-item'),
        menu = document.querySelector('.menu'),
        body = document.body,
        title = document.getElementById('title'),
        adv = document.getElementsByClassName('adv'),
        column = document.getElementsByClassName('column'),
        classPrompt = document.getElementById('prompt');


    menu.insertBefore(menuItem[2], menuItem[1]);
    let newMenuItem = document.createElement('li');
    newMenuItem.innerHTML = 'Пятый пункт';
    newMenuItem.classList.add('menu-item');
    menu.appendChild(newMenuItem);

    body.style.backgroundImage = 'url(img/apple_true.jpg)';
    title.textContent = 'Мы продаем только подлинную технику Apple';
    column[1].removeChild(adv[0]);
    while (1) {
        let text = prompt('Какое у вас отношение к apple?', '');
        if (text != null && text != '' && typeof(text) == 'string') {
            classPrompt.innerHTML = text;
            break;
        }
    }
}

main();