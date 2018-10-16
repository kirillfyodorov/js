let div = document.querySelectorAll('.div'),
    btn = document.querySelector('button');

btn.addEventListener('click', function() {
    animate(function (timePassed) {
        if (timePassed < 353) {
            div.forEach(function (elem) {
                elem.style.display = 'block';
            });
            div[0].style.top = 375 - timePassed + 'px';
            div[0].style.left = 375 - timePassed + 'px';

            div[1].style.top = 375 - timePassed + 'px';
            div[1].style.left = 350 + timePassed + 'px';

            div[3].style.top = 350 + timePassed + 'px';
            div[3].style.left = 375 - timePassed + 'px';

            div[2].style.top = 350 + timePassed + 'px';
            div[2].style.left = 350 + timePassed + 'px';
        }
    }, 353);
});

    function animate(draw, duration) {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timePassed = time - start;
            if (timePassed > duration) {
                timePassed = duration;
            }
            draw(timePassed);

            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }

        });
    }
