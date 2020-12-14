// 3- Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

const greaterThanTen = array => {
  // let results = 0;
  const results = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {

      // results += array[i];
      results.push(array[i]);
    }
  }

  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

console.log(greaterThanTen([4, 10, 32, 9, 21])) // [ 32, 21 ]

assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);