// 4- Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:

const assert = require('assert');

const findTheNeedle = (array, word) => array.indexOf(word);

console.log(findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'needle')) // 3
console.log(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'plant')) // 0
console.log(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'plat')) // -1

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
