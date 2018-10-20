window.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('input');
    input.value = '+7 (ХХХ) ХХХ ХХ ХХ';
    let k = 4;
    let range = document.createRange();

    input.addEventListener('focus', () => {
        if (input.value.length == 18) {
            input.value = '+7 ()'
        }
        if (input.value.length == 5) {
            input.setSelectionRange(4, 5);
        }
        input.addEventListener('keypress', (e) => {
            
            let s = input.value.slice(-1);
            if (input.value.length > 17 ) {
                input.value = input.value.slice(0, input.value.length - 1);
            } else {
                if (e.keyCode == 8) {
                    k--;
                    if (k < 5) {
                        input.value = '+7 (';
                        k = 4;
                    }
                }
                else {
                    if (!isNaN(s) && s != ' ') {
                    input.value = input.value.slice(0, k) + s + input.value.slice(k + 1, input.value.length - 1);
                    k++;
                    if (k == 7) {
                        input.value = input.value + ") ";
                        k = k + 2;
                    }
                    if (k == 12 || k == 15) {
                        input.value = input.value + " ";
                        k++;
                    }
                    } else {
                        input.value = input.value.slice(0, input.value.length - 1);
                    }
                }
            }
            
        });
    });
    
    
});