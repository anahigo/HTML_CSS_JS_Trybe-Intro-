# 1 (Antigo 2)
A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr

  * Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
  * Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui

# 2 (Antigo 3)
A função mySum(arr) recebe um array arr e retorna a soma de seus elementos

  * Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
  * Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui

# 3 (Antigo 7) 
Teste se uma variável foi definida

const assert = require('assert');

const thereIs = '';

// implemente seus testes aqui

# 4 (Antigo 8) 
Teste se uma função foi definida

const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui

# 5 (Antigo 9) 
Utilize assert.ok() para testar uma condição

const assert = require('assert');

function change(param) {
  return !param;
}

// implemente seus testes aqui

# 6 (Antigo 11) 
Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui