const assert = require('assert');

const myRemove = (arr, item) => {
    let newArr = arr;
    if (arr.includes(item)) {
        newArr = arr.filter( element => {
            return (element !== item);
        });
    }
    return newArr;
};

const arrayTest = [1, 2, 4, 8, 10];
const test1 = myRemove([1, 2, 3, 4], 3);
const test2 = myRemove([1, 2, 3, 4], 5);
const test3 = myRemove(arrayTest, 8);
const expected1 = [1, 2, 4];
const expected2 = [1, 2, 3, 4];

assert.strictEqual(typeof(myRemove), 'function');


assert.deepStrictEqual(test1, expected1, 'O Array esperado é: [1, 2, 4]');
// assert.strictEqual(test1.join(), expected1.join(), 'O Array esperado é: [1, 2, 4]');
assert.notDeepStrictEqual(test1, expected2, 'Não deve retornar: [1, 2, 3, 4]');
// assert.notStrictEqual(test1.join(), expected2.join(), 'Não deve retornar: [1, 2, 3, 4]');
assert.deepStrictEqual(arrayTest, [1, 2, 4, 8, 10], 'O Array esperado é: [1, 2, 4, 8, 10]')
// assert.strictEqual(arrayTest.join(), [1, 2, 4, 8, 10].join(), 'O Array esperado é: [1, 2, 4, 8, 10]')
assert.deepStrictEqual(test2.join(), expected2.join(), 'O Array esperado é: [1, 2, 3, 4]');
// assert.strictEqual(test2.join(), expected2.join(), 'O Array esperado é: [1, 2, 3, 4]');