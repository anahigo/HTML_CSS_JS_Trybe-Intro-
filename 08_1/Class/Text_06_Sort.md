# Array.sort
Por último, existe a função sort. Ela permite ordenar um array de acordo com algum critério. Leia esse para ver alguns exemplos. Como pode ver, a forma como ela faz a ordenação dos elementos do array não é tão intuitiva. Ela ordena sempre por ordem alfabética. E se o array possui algum elemento que não é uma string, a sort a ordena de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres! Experimente rodar [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort() para ver que resultado esquisito!

Ou seja: caso queira ordenar de forma alfabética, basta chamar sort, passando nenhuma função como parâmetro.

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

Para ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]

A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares, e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (1, 2), (1, 3), ..., (3, 4) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1. Novamente, o artigo do MDN é uma excelente fonte de informação para entender melhor.
(https://www.w3schools.com/jsref/jsref_sort.asp)
(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

# texto externo 1
JavaScript Array sort() Method
Example
Sort an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
More "Try it Yourself" examples below.

Definition and Usage
The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function" (See "Parameter Values" below).

Note: This method changes the original array.

Browser Support
The numbers in the table specify the first browser version that fully supports the method.

Method					
sort()	Yes	Yes	Yes	Yes	Yes
Syntax
array.sort(compareFunction)
Parameter Values
Parameter	Description
compareFunction	Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
function(a, b){return a-b}
When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

When comparing 40 and 100, the sort() method calls the compare function(40,100).

The function calculates 40-100, and returns -60 (a negative value).

The sort function will sort 40 as a value lower than 100.

# texto externo 2
O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.

Sintaxe
arr.sort([funcaoDeComparacao])
Parâmetros
funcaoDeComparacao
Opcional. Especifica uma função que define a ordenação. Se omitido, o array é ordenado de acordo com a potuação de código Unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.
Descrição
Se funcaoDeComparacao não for informado, os elementos serão ordenados de acordo com a sua conversão para texto e o texto comparado na pontuação unicode do texto convertido. Por exemplo, "banana" vem antes de "cherry". Em uma ordenação numérica, 9 vem antes de 80, mas porque os números são convertidos para texto e, "80" vem antes de "9" na ordenação Unicode.

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21]; 
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.
Se o parametro funcaoDeComparacao é fornecido, o array será ordenado de acordo com o valor de retorno da funcaoDeComparacao. Considerando que a e b são dois elementos sendo comparados, então:

Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.
Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos. Nota: O padrão ECMAscript não garante este comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.
Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.
funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos a e b como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
Então, a função de comparação tem a seguinte forma:

function comparar(a, b) {
  if (a é menor que b em algum critério de ordenação) {
    return -1;
  }
  if (a é maior que b em algum critério de ordenação) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}
Para comparar números ao invés de texto, a função de comparação pode simplesmente subtrair b de a. A função abaixo irá ordenar o array em ordem crescente:

function compararNumeros(a, b) {
  return a - b;
}
O método de ordenação pode convenientemente ser usada com funções anônimas (e closures):

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
Objetos podem ser ordenados de acordo com o valor de uma de suas propriedades.

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
Exemplos
Criando, exibindo, e ordenando um array
O exemplo abaixo cria quatro arrays e mostra seu conteúdo original, então o conteúdo dos arrays ordenado. Os arrays numéricos são ordenados sem a função de comparação, e então, com a função.

var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compararNumeros(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Ordenada:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Ordenada sem função de comparação:', numberArray.sort());
console.log('Ordenada com compararNumeros:', numberArray.sort(compararNumeros));

console.log('numericStringArray:', numericStringArray.join());
console.log('Ordenada sem função de comparação:', numericStringArray.sort());
console.log('Ordenada com compararNumeros:', numericStringArray.sort(compararNumeros));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Ordenada sem função de comparação:', mixedNumericArray.sort());
console.log('Ordenada com compararNumeros:', mixedNumericArray.sort(compararNumeros));
Este exemplo gera a saída abaixo. Como as saídas mostram, quando a função de comparação é usada, os números são ordenados corretamente, sejam eles números ou strings numéricas.

stringArray: Blue,Humpback,Beluga
Ordenada: Beluga,Blue,Humpback

numberArray: 40,1,5,200
Ordenada sem função de comparação: 1,200,40,5
Ordenada com compararNumeros: 1,5,40,200

numericStringArray: 80,9,700
Ordenada sem função de comparação: 700,80,9
Ordenada com compararNumeros: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
Ordenada sem função de comparação: 1,200,40,5,700,80,9
Ordenada com compararNumeros: 1,5,9,40,80,200,700
Ordenando caracteres não-ASCII
Para ordenar strings com caracteres não-ASCII, i.e. strings com caracteres acentuados (e, é, è, a, ä, etc.), strings de línguas diferentes do Inglês: use String.localeCompare. Esta função pode comparar estes caracteres, então eles aparecerão na ordem correta.

var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items é ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
Ordenando com mapa
A funcaoDeComparacao pode ser invocada múltiplas vezes por elemento do array. Dependendo da natureza da funcaoDeComparacao, isto pode causar um excesso processamento. Quanto mais trabalho a funcaoDeComparacao fizer, e quanto mais elementos houverem para ordenar, seria mais inteligente considerar  o uso de um mapa para a ordenação. A idéia é percorrer o array uma vez para extrair os valores já processados para a ordenação e armazenar em um array temporário, ordenar o array temporário e então percorrer o array temporário para conseguir a ordenação correta.

// o array a ser ordenado
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando o array mapeado contendo os dados resumidos
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// containerpara o resultado ordenado
var result = mapped.map(function(el){
  return list[el.index];
});