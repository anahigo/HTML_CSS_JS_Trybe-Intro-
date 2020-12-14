# Array.find
A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. Então, a função que deverá ser passada precisa retornar true ou false. Nesta página do MDN você pode ver com mais detalhes sobre o find. Leia até a seção Exemplos. (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Olhe o exemplo abaixo:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

Esse exemplo mostra duas formas de resolver o mesmo problema, que é retornar o primeiro número par do array.

Primeiro observe a função verifyEven. Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.

Quando a passamos como callback, o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.

# Texto Extrenos
O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.


Veja também o método findIndex(), que retorna o índice do elemento encontrado no array ao invés do seu valor.

Se você precisa encontrar a posição de um elemento ou se um elemento existe em um array, use Array.prototype.indexOf() ou Array.prototype.includes().

Sintaxe
arr.find(callback(element[, index[, array]])[, thisArg])
Parâmetros
callback
Função executada a cada iteração do array, recebendo três argumentos:
element
O elemento atual que está sendo processado no array.
indexOptional
O índice do elemento atualmente sendo processado no array.
arrayOptional
O array sobre o qual find foi chamado.
thisArgOptional
Opcional. Objeto usado como this quando executando o callback.
Valor retornado
O valor do primeiro elemento do array que satisfaz a função de teste fornecida; caso contrário, undefined.

Descrição
O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback  retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined. O callback é acionado para todos os índices do array de 0 a tamanho-1, não apenas para aqueles que possuem valores atribuídos. Sendo assim, ele pode ser menos eficiente para arrays esparços que métodos que só visitam índices que tenham valor atribuído.

O callback é acionado com três argumentos: o valor do elemento, o índice do elemento e o objeto do Array que está sendo cruzado.

Se um parâmetro thisArg é provido ao find, ele será usado como o this para cada acionamento do callback. Se não for provido, então undefined é usado.

O find não altera a array à qual foi acionado.

O conjunto dos elementos processados por find é definido antes do primeiro acionamento do callback. Elementos que são anexados à array após o início da chamada ao find não serão visitados pelo callback. Se um elemento existente ainda não visitado da array for alterado pelo callback, o valor passado ao callback quando o visitar será o valor no momento que find visita o índice daquele elemento; elementos excluídos ainda são visitados.

Exemplos
Encontrar um objeto em um array por uma de suas propriedades
const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];

function isCherries(fruit) { 
    return fruit.name === 'cerejas';
}

console.log(inventory.find(isCherries)); 
// { name: 'cerejas', quantity: 5 }
Utilizando arrow function ES2015
const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];

const result = inventory.find( fruit => fruit.name === 'cerejas' );

console.log(result) // { name: 'cerejas', quantity: 5 }
Encontrar um número primo em uma array
O exemplo a seguir encontra um elemento dentro da array que é número primo (ou retorna undefined se não houverem números primos).

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
Polyfill