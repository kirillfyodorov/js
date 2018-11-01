window.addEventListener('DOMContentLoaded', function() {
    'use ctrict';

    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        softScrollModule = require('./parts/softScroll'),
        overlayModule = require('./parts/overlayModule'),
        telMask = require('./parts/telMask'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        calculator = require('./parts/calculator');
    
    
    
    tabs();
    timer(); 
    softScrollModule();
    overlayModule();
    telMask();
    form();
    slider();
    calculator();
});