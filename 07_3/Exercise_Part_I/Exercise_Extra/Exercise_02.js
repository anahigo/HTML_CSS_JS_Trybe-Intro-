/* 2. A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
* Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
* Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado */

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

console.log(mySum([1, 2, 3, 4])); //10
console.log(mySum([1, -2, -3, 4])); //0

//Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.equal(mySum([1, 2, 3, 4]), 10); 

//Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado 
assert.deepStrictEqual(mySum([1, -2, -3, 4]), 0);

