Agora você já sabe como aplicar desestruturação em objetos e arrays. Entretanto, você já parou para pensar em o que acontece se você tentar obter:

uma propriedade que não existe em um objeto?
um valor em uma posição inexistente em um array?
Ou seja:

Copiar
const person = {
    name: "João",
    lastName: "Jr",
    age: 34
}

const { nationality } = person
Essa desestruturação funciona? E se funciona, qual o valor que aparece se fizer console.log(nationality)? Copie esse código e teste você mesmo. 😉

Você deve ter visto que nationality tem o valor undefined. E se você quisesse dar um valor padrão para nationality, caso essa propriedade não exista no objeto? Você consegue assinalar esse valor padrão via default destructuring:

Copiar
const person = {
    name: "João",
    lastName: "Jr",
    age: 34
}

const { nationality = "Brazilian" } = person
console.log(nationality) // Brazilian
Analogamente, o mesmo pode ser feito na hora de desestruturar um array:

Copiar
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0
Agora, hora de praticar com este exercício de fixação:

Copiar

const nationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))
Do jeito que está, a chamada nationality(person) retorna João is undefined. 😭

Ajuste a arrow function nationality para que a chamada de nationality(person) retorne João is Brazilian.