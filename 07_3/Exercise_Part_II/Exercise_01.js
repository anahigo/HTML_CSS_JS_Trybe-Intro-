// 1- Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:

const assert = require('assert');

const addOne = array => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) newArray.push(array[i] + 1);
  return newArray;
}

console.log(addOne([31, 57, 12, 5])) // [32, 58, 13, 6]

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];

const output = addOne(myArray);
const expected = [32, 58, 13, 6];

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(myArray, unchanged);
assert.deepStrictEqual(output, expected);

