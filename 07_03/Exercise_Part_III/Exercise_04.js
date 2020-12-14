/* 4- Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes. */

const assert = require('assert');

function secondThirdSmallest(array) {
    // let results = []
    const results = []

    // array.sort(function (x, y) {
    //     return x + y;
    // });
    array.sort((item1, item2) => item1 - item2);

    // results = [array[1], array[2]];
    results.push(array[1], array[2]);

    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

console.log(secondThirdSmallest([4, 10, 32, 9, 21, 90, 5, 11, 8, 6])) // [ 5, 6 ]

assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result); 
