function calsulator() {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        priceInput = document.querySelector('.calc-price');

    let sizePrices = {
            1: 500,
            2: 1000,
            3: 1500,
            4: 2000
        },
        materialPrices = {
            1: 500,
            2: 1000,
            3: 1500,
            4: 2000
        },
        optionsPrices = {
            1: 500,
            2: 1000,
            3: 2000
        };
        
    size.addEventListener('change', () => {
        pricingChange();
        console.log(size.options.selectedIndex);
    });

    


}

module.exports = calsulator;