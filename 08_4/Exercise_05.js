//5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só: - Dica: use array destructuring.

const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a]

const swappedList = swap(myList)

console.log(swappedList[0]) 
assert.equal(swappedList[0], 3)

console.log(swappedList[1]) 
assert.equal(swappedList[1], 2)

console.log(swappedList[2]) 
assert.equal(swappedList[2], 1)
       
