const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue));

/* const flatten = () => arrays.reduce((previousValue, currentValue) => {
    const arr = previousValue;
    currentValue.forEach((value) => arr.push(value));
    return arr;
}); */

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
