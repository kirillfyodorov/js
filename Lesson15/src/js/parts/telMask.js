function telMask() {
    let telInput = document.querySelectorAll('input[type=tel]');

    telInput.forEach(function (elem) {
        let input = elem,
            startL;
        input.addEventListener('input', (e) => {
            input.value = input.value.replace('+7 (', '');
            input.value = input.value.replace(') ', '');
            input.value = input.value.replace(')', '');
            input.value = input.value.replace('-', '');
            let s = +input.value.slice(-1);
            if ((isNaN(s) || s == ' ') && s!= 0) {
                input.value = input.value.slice(0, input.value.length - 1);
            } else if (e.data == null && startL == 3) {
                input.value = input.value.slice(0, input.value.length - 1);
            }
            startL = input.value.length;
            if (input.value.length < 3) {
                input.value = `+7 (${input.value.slice(0, 3)})`;
                input.setSelectionRange(input.value.length - 1, input.value.length - 1);
            } else if (input.value.length == 3) {
                input.value = `+7 (${input.value.slice(0, 3)})`;
            } else if (input.value.length > 3 && input.value.length < 7) {
                input.value = `+7 (${input.value.slice(0, 3)}) ${input.value.slice(3, 6)}`;
            } else if (input.value.length > 6) {
                input.value = `+7 (${input.value.slice(0, 3)}) ${input.value.slice(3, 6)}-${input.value.slice(6,10)}`;
            }
        });
    });
}

module.exports = telMask;