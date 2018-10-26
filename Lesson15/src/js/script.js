import tabs from './parts/tabs';
import timer from './parts/timer';
import softScrollModule from './parts/softScroll';
import overlayModule from './parts/overlayModule';
import telMask from './parts/telMask';
import form from './parts/form';
import slider from './parts/slider';
import calculator from './parts/calculator';

window.addEventListener('DOMContentLoaded', function() {
    
    'use ctrict';
    
    tabs();
    timer(); 
    softScrollModule();
    overlayModule();
    telMask();
    form();
    slider();
    calculator();
});