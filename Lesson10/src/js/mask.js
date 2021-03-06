window.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('input'),
        startL, finishL;
    input.addEventListener('input', (e) => {
        input.value = input.value.replace('+7 (', '');
        input.value = input.value.replace(') ', '');
        input.value = input.value.replace(')', '');
        input.value = input.value.replace('-', '');
        let s = +input.value.slice(-1);
        console.log(input.value.length);
        if (isNaN(s) || s == ' ') {
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