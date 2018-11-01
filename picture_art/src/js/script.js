window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let mainSlider = require('./parts/mainSlider.js'),
        modalOrder = require('./parts/modalOrder.js'),
        modalConsultation = require('./parts/modalСonsultation.js'),
        gift = require('./parts/gift.js'),
        moreStyles = require('./parts/moreStyles.js'),
        calsulator = require('./parts/calsulator.js');
        //forms = require('./parts/forms.js');

    mainSlider();
    modalOrder();
    modalConsultation();
    gift();
    moreStyles();
    calsulator();
    //forms();
});