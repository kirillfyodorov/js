function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.a-slide'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');


    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => {
            item.style.display = 'none';
            item.style.opacity = 1;
        });
        slides[slideIndex - 1].style.opacity = 0;
        slides[slideIndex - 1].style.display = 'block';

        let opacity = 0;
        let opacityAnimation = setInterval(function () {
            opacity += 0.05;

            slides[slideIndex - 1].style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(opacityAnimation);
            }
        }, 10);
    }
    showSlides(slideIndex);

    function plusSlides(n) {
        let opacity = 1;
        let sliderAnimation = setInterval(function () {
            opacity -= 0.05;

            slides[slideIndex - 1].style.opacity = opacity;
            if (opacity <= 0) {
                showSlides(slideIndex += n);
                clearInterval(sliderAnimation);
            }
        }, 5);

    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });
}

module.exports = slider;