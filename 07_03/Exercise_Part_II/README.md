# Praticando TDD
Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!

# Escrevendo código para testes
Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante nunca alterar os testes ou as variáveis já escritas no código:

Copie os testes já implementadas e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

# 1 
Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);

# 2
Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);

# 3
Escreva a função addAllnumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addAllnumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);

# 4
Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função findTheNeedle aqui

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