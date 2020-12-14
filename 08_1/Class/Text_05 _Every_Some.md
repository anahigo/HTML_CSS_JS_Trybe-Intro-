# Array.some e Array.every
As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição. O MDN contém explicações mais detalhadas sobre essas funções, além de exemplos. Clique aqui e aqui para ler sobre essas funções. Leia até a seção Exemplos. (https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)(https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));

Observe que foi usado Object.values junto com o every. Como o Object.values retorna um array, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!

# texto some
O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

Sintaxe
arr.some(callback[, thisArg])
Parâmetros
callback
Função para testar cada elemento, recebendo três argumentos:
currentValue
O valor atual do elemento sendo processado no array.
index
O índice do elemento atual sendo processado no array.
array
O array onde o método some() foi chamado.
thisArg
Opcional. Valor para usar como  this durante a execução do callback.
Valor de retorno
Esta função retorna true se a função callback retornar true para qualquer elemento do array; caso contrário, false.

Descrição
some() executa a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true. Se em qualquer dos elementos o valor for encontrado, some() imediatamente retorna true. Caso contrario, some() retorna false. callback é invocado somente para índices do array que contenham valor definido; não é invocado para índices que foram deletados ou os quais nunca tiveram valor definido.

callback é invocado com três argumentos: o valor do elemento, o índice do elemento, e o array onde a função foi chamada.

Se o parâmetro thisArg foi passado ao some(), ele sera passado ao callback quando o mesmo for invocado, para ser usado como o valor de this internamente na função callback. Caso contrario, o valor undefined será passado para uso como this. O valor this observado pela callback  é determinado de acordo com as regras usuais para determinar o que é visto por uma função.

some() não altera o array dentro do qual ele é chamado. 

O intervalo de elementos processado por some() é definido antes da primeira invocação da callback. Elementos contidos no array antes da chamada some() ser iniciada não serão testados pela callback. Se algum elemento pertencente ao array for alterado pela callback, o valor passado para a callback será o valor do momento em que a função some() encontra o índice daquele elemento. Elementos deletados não são testados.

Exemplos
Testando valores de elementos de um array
O exemplo a seguir testa se algum elemento de um array é maior que 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
Testando valores de elementos de um array usando arrow functions
Arrow functions fornece uma sintaxe mais curta para o mesmo teste.

[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true

# texto every
O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

Sintaxe
arr.every(callback[, thisArg])
Parâmetros
callback
Função que testa cada elemento, recebe três parametros:
currentValue (obrigatório)
O elemento atual sendo processado na array. 
index (opcional)
O índice do elemento atual sendo processado na array.
array (opcional)
O array de origem.
thisArg
Opcional. Valor a ser usado como this quando o callback é executado.
Valor de retorno
true se a função de callback retorna um valor truthy para cada um dos elementos do array; caso contrário, false.

Descrição
O método every executa a função callback fornecida uma vez para cada elemento presente no array, até encontrar algum elemento em que a função retorne um valor false (valor que se torna false quando convertido para boolean). Se esse elemento é encontrado, o método every imediatamente retorna false. Caso contrário, se a função callback retornar true para todos elementos, o método retorna true.  A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

A função callback é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.

Se o parâmetro thisArg foi passado para o método every, ele será repassado para a função callback no momento da chamada para ser utilizado como o this. Caso contrário, o valor undefined será repassado para uso como o this. O valor do this a ser repassado para o callback é determinado de acordo com as regras usuais para determinar o this visto por uma função.

O método every não modifica o array original.

A lista de elementos que serão processados pelo every é montada antes da primeira chamada da função callback. Se um elemento for acrescentado ao array original após a chamada ao every , ele não será visível para o callback. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método every chamar o callback. Elementos removidos não serão considerados.

every funciona como o  qualificador "for all" em matemática. Particularmente, para um vetor vazio, é retornado true. (É verdade por vacuidade que todos os elementos do conjunto vazio satisfazem qualquer condição.)

Exemplos
Testando tamanho de todos os elementos do vetor
O exemplo a seguir testa se todos elementos no array são maiores que 10.

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
Usando arrow functions
Arrow functions fornecem sintaxe mais curta para o mesmo teste. 

[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true