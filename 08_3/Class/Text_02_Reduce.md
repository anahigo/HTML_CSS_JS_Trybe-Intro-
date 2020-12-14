# Array.reduce
O reduce é diferente das outras HOFs: ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador, comumente referido a como acc. E o que ele faz? Ele serve para acumular dentro de si os resultados das funções. Pense assim: caso não exista segundo parâmetro no reduce, para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array. Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr, que é chamado de current. Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante. Olhe no exemplo abaixo:

- A função soma todos os valores de um array:
- Apenas com o for:

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113

Com .reduce:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

Para entender melhor o que está acontecendo, rode a função abaixo. Ela possui um console.log para ver o valor do result em cada interação.

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
Dissecando as funções:

Usando for:
- Necessidade de criar uma variável para acumular o resultado de cada interação do for, a soma de cada resultado - let sumNumbers;
- Necessidade de setar um valor inicial para variável - sumNumbers = 0;

Usando .reduce:
- A função passada por parâmetro recebe dois parâmetros, o acumulador result e o elemento do array de cada iteração, number;
- Como a função é uma arrow function que possui apenas uma linha, o retorno de cada interação será: result + number;
- O retorno é salvo no primeiro parâmetro , result. É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[i], mas nesse caso seria result = result + number;

O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Olhe a seguir, será usado o último exemplo dado da soma dos números:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

Com a alteração:

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

Pode ver que mudou em nada o resultado da função. Mas veja que o primeiro valor do result não foi 32, mas sim 0.

Agora mude o 0 para 10 ou qualquer outro valor.

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

Agora o resultado mudou para 123, e o primeiro número impresso foi o 10. Entendeu? Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result, ou seja, no acumulador. Ele é o valor inicial do reduce. Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.

Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce. Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce. Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

A função passada agora pode possuir dois tipos de retorno:
- O retorno do próprio acumulador bigger (no caso true do ternário), o que significa ele não será modificado; ou
- O valor do elemento do array, number, que indica que possui um valor maior maior que bigger.

Modifique o segundo parâmetro passado, o 0, no reduce para 100 e execute o programa. O retorno agora é 100, já que nenhum número de dentro do array é maior que o valor inicial passado. Então veja: a cada iteração, o reduce mantém o valor do acumulador igual ou o atualiza de acordo com a comparação que é feita. Ao final, você tem o maior valor do array. Adicione um console.log à função do reduce para ver isso acontecendo em detalhes, se quiser!

Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

Solução é está a seguir, mas tente realizar a função sem vê-la. Tente criar uma usando reduce e filter, e outra apenas usando reduce.

Solução usando filter e reduce:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

Solução usando apenas reduce:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue;
);

const sumNumbers = (array) => array.reduce(sumPair);

console.log(sumNumbers(numbers)); // 152

Agora crie uma função usando os dados dos estudantes passados anteriormente, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

Resultado esperado:

[
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
]

Solução:

const getBestClass = (acc, class) => {
  if (acc.nota > class.nota) return acc;
  return class;
};

const reportBetter = (students) => {
  return students.map((student) => {
    return {
      name: student.nome,
      materia: student.materias.reduce(getBestClass).name,
    };
  });
};

console.log(reportBetter(estudantes));

E aí, achou interessante? Veja agora esse artigo com excelentes animações ilustrando como funcionam o map, o reduce e o filter!
(https://medium.com/@js_tut/map-filter-and-reduce-animated-7fe391a35a47)

# texto externo
Mapear, Filtrar e Reduzir - Animado
Map , filtrar e reduzir já existem há muito tempo. Eles geralmente são vistos como parte do estilo de Programação Funcional .
Professor de JavaScript
Professor de JavaScript
Segue
19 de julho de 2019 · 3 min de leitura



Freqüentemente, colocamos ideias complexas na memória, visualizando -as. Não há muitos artigos de codificação usando recursos visuais como ponto de partida para o aprendizado. E ainda, a visualização desempenha um papel importante na educação. Isso também se aplica à codificação.
Meus livros de codificação
Dicionário visual CSS contém diagramas visuais para cada propriedade CSS de uso comum. JavaScript Grammar contém ...
medium.com
Mesmo depois de trabalhar com mapear , filtrar e reduzir por anos, ainda frequentemente me pergunto: Foi feita uma cópia do array original? A referência ao array original foi modificada? Fiz este tutorial para acabar com essas questões.
Minha esperança é que, uma vez que seja visto visualmente, seja mais fácil de memorizar.
Array.map - mapeia todos os valores para uma expressão.
Imagem para postagem
Array.map (): aplique “valor + 1” a um conjunto de 7 números [1, 2, 3, 4, 5, 6, 7]
1] O valor da expressão + 1 é aplicado a todos os itens na matriz original .
2] .mapa() retorna um modificado cópia de da matriz deixando o original intocado.
3] Resultado: [2,3,4,5,6,7,8] ( uma cópia da matriz original é criada. )
Array.filter - mantém tudo o que corresponde a uma condição.
Imagem para postagem
NOTA: há um pequeno erro na animação. Deve retornar [6,7], não [6,7,8]. Vou consertar em breve. . .
1] valor da função > 5 é aplicado a cada item na matriz original .
2] .filter () retorna uma cópia modificada do array - o original ainda está disponível!
3] Resultado: [6,7,8] ( apenas valores que passaram na condição. )
Array.reduce - reduz todos os itens a um único valor.
Um uso comum para um redutor é combinar preços de todos os itens no carrinho de compras.
O que torna a redução única é que ela usa um acumulador .
O acumulador deve ser definido com um valor inicial. Aqui está 0 .
Imagem para postagem
1] A função redutora F assume valor e acumulador .
2] Neste exemplo .reduce ( v , a ) retorna a soma de todos os valores.
3] Resultado: 28 ( a soma de todos os números na matriz original )
Conclusão
Claro, essas funções de ordem superior podem ( e devem ) ser usadas para resolver uma ampla variedade de problemas diferentes.
Map , Filter e Reduce também podem ser usados ​​com matrizes de objetos. Eles não se limitam a trabalhar com valores numéricos.