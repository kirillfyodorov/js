function gift() {
    let btnGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        btnClose = popupGift.querySelector('.popup-close');

    btnGift.addEventListener('click', function() {
        btnGift.remove();
        popupGift.style.display = 'block';
    });
    popupGift.addEventListener('click', function (e) {
        if (e.currentTarget == e.target) {
            popupGift.style.display = '';
        }
    });
    btnClose.addEventListener('click', function() {
        popupGift.style.display = '';
    });
}

module.exports = gift;