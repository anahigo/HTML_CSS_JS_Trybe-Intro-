/* Pratique um pouco, escreva funções simples (soma, concatenação de strings etc.) e crie testes utilizando os vários métodos disponíveis no módulo assert. */

var assert = require('assert');

function add(a,b){
  return a+b
}

var expected = add(1,3);

// assert(expected === 4, 'One plus three = 4')
// assert(expected === 5, 'One plus three = 4')
// assert.ok(expected === 4, 'One plus three = 4')
// assert.ok(expected === 5, 'One plus three = 4')
// assert.equal(expected, 4, 'One plus three = 4')
// assert.equal(expected, 5, 'One plus three = 4')
//assert.notEqual(expected, 4, 'One plus three = 4')
assert.notEqual(expected, 5, 'One plus three = 4')