/* 1 - Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes. */

const assert = require('assert');

const greetPeople = people => {

  // let greeting = 'Hello ';
  const greeting = [];

  for (const person in people) {

    // greeting += people[person];
    greeting.push(`Hello ${people[person]}`);
  }

  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa'])) // ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa']

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result); 
