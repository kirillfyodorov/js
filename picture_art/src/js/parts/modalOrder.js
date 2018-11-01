function modalOrder() {
    let btnOrder = document.querySelectorAll('.button-design'),
        popupDesign = document.querySelector('.popup-design'),
        popupClose = popupDesign.querySelector('.popup-close');

    btnOrder.forEach(function(e) {
        e.addEventListener('click', function () {
            popupDesign.style.display = 'block';
        });
    });
    popupDesign.addEventListener('click', function(e) {
        if (e.currentTarget == e.target) {
            popupDesign.style.display = '';
        }
    });

    popupClose.addEventListener('click', function () {
        popupDesign.style.display = '';
    });
}

module.exports = modalOrder;