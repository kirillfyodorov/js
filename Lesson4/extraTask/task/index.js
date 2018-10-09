function isInteger(num) {
    return (num ^ 0) === num;
}

function getFriendlyNumber(start, end) {
    if (typeof (start) != 'number' || typeof (end) != 'number' || end < start || end < 1 || start < 1 || !isInteger(start) || !isInteger(end)) {
        return(false);
    } else {
        let arr = [];
        let mas = [];
        for (let i = start; i <= end; i++) {
            mas[i] = 0;
            for (let j = 1; j <= (i / 2 + 1); j++) {
                if (i % j == 0) {
                    mas[i] = mas[i] + j;
                }
            }
        }
        let i = start;
        let j;
        while (i < end) {
            j = i + 1;
            while (j <= end) {
                if ((mas[i] == j) && (mas[j] == i)) {
                    arr.push([i, j]);
                }
                j++;
            }
            i++;
        }
        return (arr);
    }
}

module.exports = {
    firstName: 'Kirill',
    secondName: 'Fyodorov',
    task: getFriendlyNumbers
}