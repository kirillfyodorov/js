function mainSlider() {
    let sliderWrapper = document.querySelector('.main-slider'),
        slides = sliderWrapper.querySelectorAll('.main-slider-item'),
        slideIndex = 1,
        preventSlide = 1;
    
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        let top = 0;
        slides[slideIndex - 1].style.top = '-100%';
        let sliderAnimation = setInterval(function () {
            top = top + 5;
            if (preventSlide == slides.length) {
                slides[slides.length - 1].style.top = top + 'px';
            } else {
                slides[slideIndex - 2].style.top = top + 'px';
            }
            
            slides[slideIndex - 1].style.top = -670 + top + 'px';
            if (top >= 670) {
                preventSlide = slideIndex;
                clearInterval(sliderAnimation);
            }
        }, 5);
    }

    function plusSlides() {
        
        showSlides(slideIndex += 1);
        
    }

    let mainSliderTimer = setInterval(function() {
        plusSlides();
    }, 3000);
}

module.exports = mainSlider;