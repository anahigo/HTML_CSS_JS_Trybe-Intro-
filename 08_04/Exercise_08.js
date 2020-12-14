// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:  - Dica: use default params.
const assert = require('assert')

const greet = (name, msg = "Hi") => `${msg} ${name}`

console.log(greet("John")) 
assert.equal(greet("John"), "Hi John")

console.log(greet("John", "Good morning")) 
assert.equal(greet("John", "Good morning"), "Good morning John")

console.log(greet("Isabela", "Oi")) 
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")
