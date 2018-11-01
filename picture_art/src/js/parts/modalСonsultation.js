function modalConsultation() {
    let btnConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupClose = popupConsultation.querySelector('.popup-close');

    btnConsultation.forEach(function (e) {
        e.addEventListener('click', function () {
            popupConsultation.style.display = 'block';
        });
    });
    popupConsultation.addEventListener('click', function (e) {
        if (e.currentTarget == e.target) {
            popupConsultation.style.display = '';
        }
    });

    popupClose.addEventListener('click', function () {
        popupConsultation.style.display = '';
    });
}

module.exports = modalConsultation;