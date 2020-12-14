// 6. Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

//const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

console.log(isAbove(2, 1)); // true
console.log(isAbove(1, 1)); // false
console.log(isAbove(1, 2)); // false

assert.deepStrictEqual(isAbove(2, 1), true); 
assert.deepStrictEqual(isAbove(1, 1), false); 
assert.deepStrictEqual(isAbove(1, 2), false); 