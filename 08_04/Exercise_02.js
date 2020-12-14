// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:  - Dica: use parâmetro rest

const assert = require('assert')


const sum = (...numbers) => {
    let total = 0
    for (number of numbers) total += number
    return total
}

console.log(sum())
assert.equal(sum(), 0)

console.log(sum(1))
assert.equal(sum(1), 1)

console.log(sum(1, 2))
assert.equal(sum(1, 2), 3)

console.log(sum(1, 2, 3))
assert.equal(sum(1, 2, 3), 6)

console.log(sum(1, 2, 3, 4))
assert.equal(sum(1, 2, 3, 4), 10)