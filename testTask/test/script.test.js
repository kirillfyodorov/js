const sum = require('../sum');
test('Проверка на правильнсть условия суммы', () => {
    expect(sum(2, 2)).not.toBe(true);
});

const num = require('../masI');
test('Проверка на правильнсть значения элемента массива', () => {
	expect(num).toBe(5);
});

const each = require('../sqrt');
test('Проверка на правильнсть выполнения функции', () => {
	expect(each).toEqual([ 8, 7, 6, 5, 4 ]);
    expect(Array.isArray(each)).toBe(true);
    expect(each).toHaveLength(5);
});