function calculator() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.querySelector('.total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        prevTotal,
        timerId,
        koef = 1;

    totalValue.textContent = 0;

    function startTimer(b = prevTotal, c = total) {
        clearInterval(timerId);
        if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
            total = 0;
            c = 0;
        }
        timerId = setInterval(function () {
            if (b > c) {
                b = b - 100;
                totalValue.textContent = b;
                if (b <= c) {
                    clearInterval(timerId);
                }

            } else if (b < c) {
                b = b + 100;
                totalValue.textContent = b;
                if (b >= c) {
                    clearInterval(timerId);
                }

            }
        }, 1);
    }

    persons.addEventListener('input', function () {
        prevTotal = total;
        this.value = this.value.replace(/[^0-9]/ig, '');
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        place.selectedIndex = 0;
        startTimer();

    });
    restDays.addEventListener('input', function () {
        prevTotal = total;
        this.value = this.value.replace(/[^0-9]/ig, '');
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        place.selectedIndex = 0;
        startTimer();
    });

    place.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total;
            total = a * +this.options[this.selectedIndex].value / koef;
            koef = this.options[this.selectedIndex].value;
            startTimer(a, total);
        }
    });
}
export default calculator;