// 2- Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:

const assert = require('assert');

const wordLengths = array => { 
  const newArray = [];
  for (let i = 0; i < array.length; i++) newArray.push(array[i].length);
  return newArray;
}

console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza'])) // [ 3, 6, 10, 5 ]

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
