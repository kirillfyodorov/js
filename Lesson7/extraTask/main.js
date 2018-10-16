let div = document.querySelectorAll('.div'),
    btn = document.querySelector('button');

let pos = 0;

function step() {
    let request = requestAnimationFrame(step);
    div.forEach(function (elem) {
        elem.style.display = 'block';
    });
    pos += 2.5;
    div[0].style.top = 375 - pos + 'px';
    div[0].style.left = 375 - pos + 'px';
    div[1].style.top = 375 - pos + 'px';
    div[1].style.left = 350 + pos + 'px';
    div[2].style.top = 350 + pos + 'px';
    div[2].style.left = 350 + pos + 'px';
    div[3].style.top = 350 + pos + 'px';
    div[3].style.left = 375 - pos + 'px';

    if (pos == 350) {
        cancelAnimationFrame(request);
    }
}

btn.addEventListener('click', step);