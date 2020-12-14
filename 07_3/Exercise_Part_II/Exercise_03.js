// 3- Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:

const assert = require('assert');

const sumAllNumbers = array => {
  let sum = 0;
  for (const item in array) sum += array[item]; 
  return sum;
}

console.log(sumAllNumbers([9, 23, 10, 3, 8])) // 53

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);