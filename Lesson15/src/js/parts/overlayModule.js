function overlayModule() {
    function getNameBrowser() {
        let ua = navigator.userAgent;
        if (ua.search(/Chrome/) > 0) {
            return 'Google Chrome';
        }
        if (ua.search(/Firefox/) > 0) {
            return 'Firefox';
        }
        if (ua.search(/Opera/) > 0) {
            return 'Opera';
        }
        if (ua.search(/Safari/) > 0) {
            return 'Safari';
        }
        if (ua.search(/Trident/) > 0) {
            return 'Internet Explorer';
        }
        if (ua.search(/Edge/) > 0) {
            return 'Edge';
        }
        return 'Не определен';
    }

    let browser = getNameBrowser();

    let t = 0;

    function popupAnimate() {
        let request = requestAnimationFrame(popupAnimate);
        t = t + 0.05;
        overlay.style.opacity = t;
        console.log(t);
        if (t > 1) {
            t = 0;
            cancelAnimationFrame(request);
        }
    }

    let more = document.querySelector('.more'),
        descrBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function displayModal() {
        if (browser != 'Internet Explorer' && browser != 'Edge') {
            overlay.classList.remove('overlay-display');
            popupAnimate();
        }
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', displayModal);

    descrBtn.forEach(function (elem) {
        elem.addEventListener('click', displayModal);
    });


    close.addEventListener('click', function () {
        overlay.style.display = '';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

export default overlayModule;