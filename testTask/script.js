// Функция sum должна возвращать тип данных true. Проверить её на это.
let assert = require('chai').assert;

function sum(a, b) {
	return a + b > 10;
}
sum(2,3);

describe('sum', function () {
	it('Проверка на правильнсть условия суммы', function () {
		assert.notEqual(sum(2, 3), true);
	});
});

// Переменная num должна быть равна 5. Проверить на соответствие.

let mas = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = mas[1][1];

describe('mas[i]', function () {
	it('Проверка на правильнсть значения элемента массива', function () {
		assert.equal(num, 5);
	});
});

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr);};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};
describe('each', function () {
	it('Проверка на правильнсть выполнения функции', function () {
		assert.deepEqual(each(arr, myFunc), [8, 7, 6, 5, 4]);
		assert.typeOf(each(arr, myFunc), 'array');
		assert.lengthOf(each(arr, myFunc), 5);
	});
});