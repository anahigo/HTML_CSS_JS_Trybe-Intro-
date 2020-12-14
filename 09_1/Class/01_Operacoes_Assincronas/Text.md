# Operações assíncronas
Primeiramente, leia este artigo e pare de ler no final da seção Asynchronous Operations antes de Functions are First-Class Objects.

Agora, faça este exercício de fixação, copiando o código para ser executado na sua máquina:

const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepEqual(numbers, [1, 2, 3]);


const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepEqual(numbers, [1, 2, 3]); // essa validação falha

Por que a validação referente ao primeiro código funciona, e a referente ao segundo não? O teste espera receber o array [1, 2, 3], mas apenas recebe o [2, 3]. Isso ocorre por causa da função setTimeout. Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1).

Para passar no teste, é necessário testar o numbers após 3000 milissegundos:

const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepEqual(numbers, [2, 3, 1]), 3000);
Observe que, além de adicionar o setTimeout, o array [1, 2, 3] foi modificado para [2, 3, 1]. Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2, depois o 3, e após os 3 segundos do setTimeout, ele recebe o 1.

Para saber mais a respeito de setTimeout, acesse este link.