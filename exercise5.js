const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  return (names.reduce((previousValue, currentValue) => `${previousValue}${currentValue}`)).match(/a/ig).length;
};

assert.deepStrictEqual(containsA(), 20);
