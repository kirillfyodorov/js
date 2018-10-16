let div = document.querySelectorAll('.div'),
    btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let pos = 0;
    let w = 50;
    let timer = setInterval(frame, 1);
    function frame() {
        if (pos == 350) {
            if (w == 750) {
                clearInterval(timer);
            } else {
                w++;
                div[0].style.width = w + 'px';
                div[1].style.height = w + 'px';
                div[2].style.width = w + 'px';
                div[2].style.left = 750 - w + 'px';
                div[3].style.height = w + 'px';
                div[3].style.top = 750 - w + 'px';
            }
        } else {
            pos++;
            div.forEach(function(elem) {
                elem.style.display = 'block';
            });
            div[0].style.top = 375 - pos + 'px';
            div[0].style.left = 375 - pos + 'px';

            div[1].style.top = 375 - pos + 'px';
            div[1].style.left = 350 + pos + 'px';

            div[3].style.top = 350 + pos + 'px';
            div[3].style.left = 375 - pos + 'px';

            div[2].style.top = 350 + pos + 'px';
            div[2].style.left = 350 + pos + 'px';
        }
        
    }
});