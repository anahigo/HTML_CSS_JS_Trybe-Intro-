# Higher Order Function 
Antes de mais nada, precisamos entender o que é uma Higher Order Function (HOF). Não se deixe assustar pelo termo pomposo. Uma Higher Order Function é simplesmente uma função que recebe outra função como parâmetro ou que retorna uma função. Você já vem utilizando funções assim desde o começo do curso. Por exemplo, quando você escreve um código como este:

const button = document.getElementById('button');
button.addEventListener('click', function() {
  console.log('Clicou no botão!');
});

Você está passando como segundo parâmetro para a função addEventListener, uma função contendo o código a ser executado quando o botão for clicado - no caso, a função simplesmente imprime no console uma mensagem. Está vendo? Você já usa HOFs sem saber.

"Mas por que isso é importante?!" Você deve estar se perguntando. Além de event listeners, JavaScript possui várias outras funções desse tipo. Os arrays, em particular, possuem várias funções que facilitam sua criação e manipulação, além de deixar seu código muito mais legível e conciso.

Por exemplo: imagine que você tem um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria algo assim, utilizando loops:

const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote(students[i]);
}

console.log(students);
=> [
    { name: 'Maria', note: 70, approved: 'Aprovado' },
    { name: 'José', note: 56, approved: 'Recuperação' },
    { name: 'Roberto', note: 90, approved: 'Aprovado' },
    { name: 'Ana', note: 81, approved: 'Aprovado' }
  ]

Usando forEach, é assim que você faria a mesma coisa:

const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

students.forEach(verifyNote);

console.log(students);
=> [
    { name: 'Maria', note: 70, approved: 'Aprovado' },
    { name: 'José', note: 56, approved: 'Recuperação' },
    { name: 'Roberto', note: 90, approved: 'Aprovado' },
    { name: 'Ana', note: 81, approved: 'Aprovado' }
  ]
Ok, as duas abordagens geram o mesmo resultado, mas qual a diferença? Vamos analisar as duas soluções e ver em que elas diferem!

Na solução usando for, é necessário se preocupar muito mais com detalhes de controle de lógica de execução do que com sua solução em si - você só quer atualizar uma propriedade de cada estudante, afinal. Você precisa:
- Declarar uma variável para controlar a iteração pelo array;
- Inicializar essa variável com zero, a primeira posição do array;
- Controlar o ponto de parada, quando o fim do array foi alcançado (i < students.length);
- Incrementar manualmente a variável de controle do loop a cada iteração (i += 1);
- Usar indexação de arrays pra acessar cada elemento/estudante (students[i]);

Ufa! Tudo isso só pra atualizar o seu array!

Agora vamos olhar para a segunda solução. Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função forEach. 😎

Ainda não está convencido? Então vamos a mais um exemplo. Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.

Primeiro, usando for e if:

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

console.log(firstMultipleOf5);
=> 50

Agora, a mesma coisa usando Array.find:

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf5);
=> 50

Além de muito mais concisa, a solução usando find é muito mais fácil de entender, concorda?

Ponto de observação: note que o parâmetro passado para number.find(), number => number % 5 == 0, é uma arrow function, igual no primeiro exemplo de forEach, em foi passada a função verifyNote.

Mas essa ideia de passar uma arrow function para uma função ainda está pouco clara, não é mesmo? E esse parâmetro que ela recebe, vem de onde?! Quem passa? Agora vamos ver, em detalhes, a estrutura de uma HOF.

# Estrutura de uma HOF
As Higher Order Functions que veremos hoje são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues = arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

=> Cada elemento do array: josé
   Cada elemento do array: 50
   Cada elemento do array: 0.25
   Cada elemento do array: { comida: 'Chocolate' }

Sua estrutura:

arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

Suas partes:
- arrayOfValues - Nome do array que será percorrido;
- .forEach - A HOF, pode ser, .find, .some, .every;
- element - Valor do elemento do array;
- (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyNote.

É isso mesmo! Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow function recebe é o elemento do array. Em português, é como se:

  meuArray.forEach(elemento => 
  if(elemento % 2 === 0) { 
    console.log(`${elemento}` é divísivel por 2!)
    } 
  )

Significasse Verifique se cada elemento do meu array é múltiplo de 2.

Uma função como meuArray.find(elemento => elemento % 5 === 0), por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco.

Ficou mais claro agora? A própria Higher Order Function se encarrega da lógica de pegar cada elemento do array e passar como parâmetro para a arrow function. O que você, se usasse um for, faria manualmente, a HOF faz pra você! Sua única preocupação deve ser "O que eu quero fazer com cada elemento?", e não "Como eu acesso cada elemento?".

Observe que podemos passar mais de um parâmetro para a função também. As HOFs te dão, se você precisa, acesso a mais informações do array:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues = arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

=> ---------------
  Cada elemento do array: josé
  Index, posição do elemento: 0
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: 50
  Index, posição do elemento: 1
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: 0.25
  Index, posição do elemento: 2
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: { comida: 'Chocolate' }
  Index, posição do elemento: 3
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

A arrow function passada para o forEach possui element, index e array como parâmetros, onde:
- element - Valor do elemento do array;
- index - Índice em cada iteração ou posição do elemento no array, começando do 0;
- array - Array original que está sendo percorrido.

Agora que já aprendeu sobre a estrutura, vamos aprender sobre cada HOF.
