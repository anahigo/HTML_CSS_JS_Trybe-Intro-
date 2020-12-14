/* 1. A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
* Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
* Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado*/

const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) searchedIndex = i;
  }
  return searchedIndex;
}

console.log(myIndexOf([1, 2, 3, 4], 3)) // 2
console.log(myIndexOf([1, 2, 3, 4], 5)) // -1

//Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.deepStrictEqual(myIndexOf([1, 2, 3, 4], 3), 2); 

//Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.deepStrictEqual(myIndexOf([1, 2, 3, 4], 5), -1); 
