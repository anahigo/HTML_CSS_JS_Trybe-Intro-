# O que vamos aprender?
Neste bloco e no próximo, você vai aprender sobre a mais nova versão do JavaScript, conhecida como ES6, ECMAScript 6 ou ES2015.

Esses vários nomes podem gerar alguma dúvida, mas na verdade todos fazem referência à mesma linguagem. JavaScript é como nós chamamos a linguagem, só que esse nome é um trademark da Oracle. O nome oficial da linguagem é ECMAScript, e ES é apenas a abreviação (ECMAScript).

Essa nova versão possui alguns objetivos:
- Ser uma linguagem melhor para construir aplicações complexas;
- Resolver problemas antigos do JavaScript;
- Facilitar o desenvolvimento de libraries.

Hoje você vai aprender quatro features do ES6 que são muito importantes para que seu código fique limpo e bem escrito, além de resolverem alguns problemas da linguagem.
- let;
- const;
- arrow functions;
- template literals.

# Você será capaz de:
- Utilizar corretamente let;

- Utilizar corretamente const;

- Simplificar seu código com arrow functions;

- Simplificar a construção de strings com template literals.

# Por que isso é importante?
O let e o const vieram como solução para um antigo problema do JavaScript de falta de definição de escopo de variáveis. Sabe quando você declara uma variável dentro de um bloco e depois a utiliza fora dele? Isso é um vazamento de variável. Esse problema sempre trouxe grandes prejuízos, principalmente para aplicações maiores. Saber utilizar o let e o const de maneira consistente irá te ajudar a ter um código mais confiável.

As arrow functions, além de deixar o código mais legível, quando bem utilizadas, ainda resolvem outro problema antigo do famigerado var that = this. Vamos ver esse problema com mais detalhes na sessão de conteúdos.

Por último, mas não menos importante, vêm os template literals. Eles vão nos ajudar a construir strings mais bem escritas e concisas, ajudando na prevenção de erros.

# Conteúdos
Até aqui, você já foi apresentado a algumas features do ES6, como let, const, e talvez até mesmo já tenha usado arrow functions e template literals. E agora você vai aprender as várias formas e motivações para se usar cada um desses recursos para, então, identificar no código de outras pessoas a presença desses elementos.

# Parte I - var, let e const
# Texto 
Na maioria das linguagens de programação, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas. Será que isso se aplica também à linguagem JavaScript? Vamos verificar:


var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Caelum'; 
    if(true) { 
        var mensagemDentroDoIf = 'Alura'; 
        console.log(mensagemDentroDoIf)// Alura ;
    } 
    console.log(mensagemForaDoIf); // Caelum 

    console.log(mensagemDentroDoIf); // Alura 
}
Estamos declarando duas variáveis em blocos de código diferentes, qual será o resultado? Vamos testar:


exibeMensagem(); // Imprime 'Alura', 'Caelum' e 'Alura'
Se mensagemDentroDoIf foi declarada dentro do if, por que ainda temos acesso a ela fora do bloco desta instrução?

Utilização antes da declaração
Vejamos abaixo outro exemplo de código em JavaScript:
var exibeMensagem = function() { 
    mensagem = 'Alura'; 
    console.log(mensagem); 
    var mensagem;
}

Observe que estamos declarando a variável mensagem apenas depois de atribuir um valor e exibí-la no log, será que funciona? Vamos testar!

exibeMensagem(); // Imprime 'Alura'

Funciona! Como é possível usar a variável mensagem antes mesmo de declará-la? Será que o escopo é garantido apenas dentro de onde a variável foi criada?

Hoisting
Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

No nosso exemplo acima, como a variável mensagemDentroDoIf está dentro de uma function, a declaração da mesma é elevada (hoisting) para o topo do seu contexto, ou seja, para o topo da function.

É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: em tempo de execução a variável será elevada (hoisting) e tudo funcionará corretamente.

var
Considerando o conceito de hoisting, vamos fazer um pequeno teste usando uma variável declarada com var antes mesmo dela ter sido declarada:

void function(){ 
    console.log(mensagem); 
}();
var mensagem;

No caso da palavra-chave var, além da variável ser içada (hoisting) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

Ok, mas qual é o impacto que temos quando fazemos esse tipo de uso?

Imagine que nosso código contenha muitas linhas e que sua complexidade não seja algo tão trivial de compreender.

Às vezes, queremos declarar variáveis que serão utilizadas apenas dentro de um pequeno trecho do nosso código. Ter que lidar com o escopo de função das variáveis declaradas com var (escopo abrangente) pode confundir a cabeça até de programadores mais experientes.

Sabendo das "complicações" que as variáveis declaradas com var podem causar, o que podemos fazer para evitá-las?

let
Foi pensando em trazer o escopo de bloco (tão conhecido em outras linguagens) que o ECMAScript 6 destinou-se a disponibilizar essa mesma flexibilidade (e uniformidade) para a linguagem.

Através da palavra-chave let podemos declarar variáveis com escopo de bloco. Vamos ver:

var exibeMensagem = function() {
     if(true) { 
         var escopoFuncao = 'Caelum'; 
         let escopoBloco = 'Alura';

        console.log(escopoBloco); // Alura 
    } 
    console.log(escopoFuncao); // Caelum 
    console.log(escopoBloco); 
}
Qual será a saída do código acima?


exibeMensagem(); // Imprime 'Alura', 'Caelum' e dá um erro

Veja que quando tentamos acessar uma variável que foi declarada através da palavra-chave let fora do seu escopo, o erro Uncaught ReferenceError: escopoBloco is not defined foi apresentado.

Portanto, podemos usar tranquilamente o let, pois o escopo de bloco estará garantido.

const
Embora o let garanta o escopo, ainda assim, existe a possibilidade de declararmos uma variável com let e ela ser undefined. Por exemplo:


void function(){ 
    let mensagem; 
    console.log(mensagem); // Imprime undefined 
}();
Supondo que temos uma variável que queremos garantir sua inicialização com um determinado valor, como podemos fazer isso no JavaScript sem causar uma inicialização default com undefined?

Para termos esse tipo de comportamento em uma variável no JavaScript, podemos declarar constantes por meio da palavra-chave const. Vamos dar uma olhada no exemplo:

void function(){ 
    const mensagem = 'Alura'; 
    console.log(mensagem); // Alura
    mensagem = 'Caelum'; 
}();

O código acima gera um Uncaught TypeError: Assignment to constant variable, pois o comportamento fundamental de uma constante é que uma vez atribuído um valor a ela, este não pode ser alterado.

Assim como as variáveis declaradas com a palavra-chave let, constantes também tem escopo de bloco.

Além disso, constantes devem ser inicializadas obrigatoriamente no momento de sua declaração. Vejamos alguns exemplos:

// constante válida 
const idade = 18;

// constante inválida: onde está a inicialização? 
const pi;

No código acima temos o exemplo de uma constante idade sendo declarada e inicializada na mesma linha (constante válida) e um outro exemplo onde o valor não é atribuído na declaração de pi (constante inválida) ocasionando o erro Uncaught SyntaxError: Missing initializer in const declaration.

É importante utilizar const para declarar nossas variáveis, porque assim conseguimos um comportamento mais previsível, já que o valor que elas recebem não podem ser alterado.

Conclusão
Aqui tem um resumo do site constletvar.com:

Graças ao hoisting, variáveis declaradas com a palavra-chave var podem ser utilizadas mesmo antes de sua declaração.

Por outro lado, as variáveis criadas com let só podem ser utilizadas após sua declaração, pois, apesar de serem elevadas, elas não são inicializadas.

Além das variáveis declaradas com var temos a possibilidade de usar constantes por meio da palavra-chave const ou utilizar variáveis com escopo de bloco através da let.

# Parte II - template literals
É hora de aprender sobre template literals.

# Texto - ES6 - Template Literals / Veja o que são ES6 template literals e as melhorias que trazem para o javascript.

Continuando a série "ES6 - O que mudou?".

Falarei sobre Template Literals, algo bem simples que é incrívelmente maneiro, acredito que assim como eu, vários devs de JS adoraram essa adição a linguagem.

Tópicos
- Literal?
- O que são Template Literals?
- Old vs New
- Interpolated Expressions
- Expression Scope
- Tagged Template Literals

Literal?
Literal é uma notação que representa um valor no nosso código, podendo representar um componente de software, facilitando muito na escrita.

Um exemplo bem rápido criando um Object:
let myObj = {}; // literal
let myObj2 = new Object(); // non-literal
Temos vários literals no javascript:

let myStr = "string literal";
let myStr2 = 'string literal'; 
let myRegExp = /^[a-z0-9-]+$/;
let myRegExp = [];
Usamos literals o tempo todo, para String, RegExp, Array...

O que são Template Literals?
Template literals são literals que representam uma String com suporte a interpolation e multiplas linhas.

Old vs New
Antes do ES6, a forma de criar, manipular e gerar dinamicamênte strings é bem pobre, com essa nova feature, conseguimos realizar essas operações mais facilmente.

Interpolation
Old:
let myVar = 'es6';
console.log('Welcome ' + myVar + '!');

// > Welcome es6!
New:
let myVar = 'es6';
console.log(`Welcome ${myVar}!`);

// > Welcome es6!

Como podemos ver, temos uma nova sintaxe literal para criar strings, usando ` no ínicio e no fim.

Além disso podemos inserir resultados de expressões dentro da string em uma posição específica, usando ${..} para definir a área que será interpretada.

Multiplas linhas
Old:
let myText = 'This is the first line\n' +
  'This is the second line\n' +
  'This is the third line';
console.log(myText);
// > This is the first line 
//   This is the second line 
//   This is the third line

New:
let myText = `This is the first line
This is the second line
This is the third line`;
console.log(myText);
// > This is the first line 
//   This is the second line 
//   This is the third line

Usando ` como comentado anteriormente podemos criar strings de multiplas linhas, sem a necessidade de concatenar com o operador + e adicionar o \n para declarar a quebra de linha.

Interpolated Expressions
Interpolated Expressions são expressões que você pode executar de uma forma com que seu resultado seja inserido dentro da string.

Exemplos:
console.log(`4 * 3 equals ${4 * 3}`);
// > 4 * 3 equals 12

No exemplo acima estamos inserindo na string o resultado da execução de uma multiplicação.

let value = 5.123124,
  name = 'Vincent';
console.log(`${name.toUpperCase()}, you owe me U$${value.toFixed(2)}!`);
// > VINCENT, you owe me U$5.12!

Nesse exemplo chamamos métodos das variáveis name e value, o retorno dos métodos são inseridos na string.

Outro exemplo usando funções:
console.log(`Hello ${getUserName()}.`);
// > Hello, Vincent.

Nesse exemplo, imagine que temos uma função que retorna o nome do usuário, chamada getUserName, podemos executar essa função dentro da área ${..} que seu retorno será inserido na string.

Então, dentro dessa área, podemos inserir qualquer expressão, até mesmo outro Template Literal.

let name = 'Leo';
console.log(`Hello ${`${`${name}`}`}.`);
// > Hello, Leo.

Expression Scope
Algo rápido e interessante de mostar é como funciona o escopo usado para resolver valores das variaveis inseridas dentro da string, uma forma de entender, é enxergar a expressão como se fosse uma IIFE.

Exemplo:
function foo (str) {
  let name = 'foo';
  console.log(str);
}

function bar () {
  let name = 'bar';
  foo(`Hello ${name}!`);
}

let name = 'global';

bar();

Então, o que aconteceu acima?
- Declaramos uma veriável no escopo global chamada name com o valor 'global'
- Chamamos a função bar
- bar declara uma variável também chamada name
- bar chama a função foo passando como parâmetro uma string com uma variável name inserida nela
- foo recebe como parâmetro essa string e declara outra variável chamada name
- foo chama console.log passando como parâmetro a string que veio de bar

A questão é, qual das variáveis name realmente foi inserida dentro da string, o name global, de bar ou de foo?

O resultado do código é esse:
// > Hello bar!

A variável name de bar que realmente foi utilizada, a expressão usa a referência do escopo de onde ela foi declarada (dentro da função bar).

Tagged Template Literals
Essa feature pode parecer meio estranha e não prática no ínicio, mas depois de ver algumas aplicações dela, você consegue visualizar sua utilidade.

Ela é uma forma mais avançada de Template Literals. Você pode customizar completamente o seu comportamento usando uma função.

'use strict';

const moment = require('moment');

let name = 'Jonas';

function tag (strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(strings[2]);

  console.log(values[0]);
  console.log(values[1]);

  return `Whatever ${values[0]}!`;
}

console.log(tag`Hello, my name is ${name} and I'm ${moment().diff('1994-03-08', 'years')} years old`);

// > Hello, my name is 
// >  and I'm 
// >  years old

// > Jonas
// > 22

// > Whatever Jonas!

Antes de tudo, tag.., não é nada similar a qualquer sintaxe que já vimos no JS, o que é isso?

Isso é um tipo especial de chamada de função que não precisa dos (..), e não precisa necessáriamente ser uma função, podemos fazer isso com qualquer expressão que retorne uma função.

O primeiro argumento é um array de strings ('Hello, my name is ', ' and I'm ' e '' years old' nesse exemplo). A partir do segundo argumento, recebemos os resultados das expressões inseridas dentro dos ${..} ('Jonas' e '22'). No final, a função retorna outra string.

Não tem nada de especial no nome da função tag, podemos definir qualquer função com qualquer nome.

# Parte III - arrow functions
Agora você vai aprender sobre arrow functions.

# Texto - ES6 - Arrow Functions / Entenda ES6 arrow functions e sua diferença para a função padrão do javascript.

E ai galera, continuando a série "ES6 - O que mudou?", irei abordar nesse post, uma nova maneira de declarar funções anônimas em javascript.

O objetivo é ser um post curto, explicativo e com bastante exemplos.

Lista dos tópicos que irei abordar:
- Sintaxe
- Lexical this

Sintaxe
Então, começando com Sintaxe, vamos relembrar como que é uma função anônima sem ES6:

var versions = [5, 6, 7, 8];

versions.map(function (item) {
  return 'es' + item;
});

// > ['es5', 'es6', 'es7', 'es8']

Beleza, como escrevo uma arrow function (ES6)? Muito fácil, baste tirar o function e adicionar => depois do () vamos ver um exemplo:

let versions = [5, 6, 7, 8];

versions.map((item) => {
  return `es${item}`;
});

// > ['es5', 'es6', 'es7', 'es8']

Belo, não é?

Caso nossa arrow function seja apenas de uma linha, podemos escreve-la sem as {} e caso receba apenas um parâmetro, podemos escreve-la sem o ().

Mas cara, e se eu não receber parâmetro nenhum?
Precisamos deixar o (), vazio mesmo.

Vamos ver uns exemplos de arrow functions de apenas uma linha:

let versions = [5, 6, 7, 8];

// Arrow functions com parâmetro
versions
  .filter(item => item > 5)
  .map(item => `es${item}`);

// > ['es6', 'es7', 'es8']

// Arrow function sem parâmetro
document.addEventListener('click', () => console.log('click'));

É importante citar também, caso vocês não tenham notado, que arrow functions, quando são de uma linha só, não precisam do return para indicar o que ela está retornando, o valor já é retornado automaticamente.

Lexical this
Em javascript, temos a palavra-chave this, que tem o valor determinado pela forma como chamamos a função.

A arrow function, tem seu this definido lexicalmente, seu this recebe o contexto de execução de onde a arrow function é declarada.

Em uma arrow function definida em um contexto global, por exemplo, seu this assume o objeto global.

Ou seja, a principal diferença entre a arrow function e a function normal que usamos, nesse tópico, é que a arrow function não modifica o this do contexto em que ela está inserida.

Vamos ver um exemplo:

function Timer () {
  this.seconds = 0;

  setInterval(() => this.seconds++, 1000);
}

let t = new Timer();

setTimeout(() => console.log(t.seconds), 5000);

// depois de 5 segundos...
// > 5

Vamos recapitular o código acima

Criamos um construtor chamado Timer.
No constructor Timer setamos a propriedade seconds dele para 0.
Fizemos um setInterval de 1 segundo, usando uma arrow function, adicionando +1 a propriedade seconds.
Criamos um novo objeto a partir do construtor Timer (cada objeto terá seu próprio this devido a palavra-chave new).
Executamos um setTimeout de 5 segundos, para logar a propriedade seconds de t (que é uma instancia de Timer).
Se nós utilizassemos uma função normal como callback para o setInterval, teriamos problemas. Seu this não seria o this do contexto que desejamos.

Porque?

Lembra que comentei que a palavra-chave this tem seu valor determinado pela forma como chamamos a função? Então, a função possívelmente está sendo chamada dentro de outro contexto do setInterval.

Exemplo usando uma função normal:
function Timer () {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++;
  }, 1000);
}

let t = new Timer();

setTimeout(() => console.log(t.seconds), 5000);

// depois de 5 segundos...
// > 0

Dessa vez, temos o valor 0 logado, porque para cada segundo que é executado a callback, o seu this não é o mesmo do contexto em que ela está inserida.

Use com consciência
Então galera, pra concluir o post rapidinho, quero citar que é bom entender que nem sempre uma arrow function é o ideal.

É importante entender como o javascript interpreta uma arrow function, para saber o momento certo de usar.

Ela é ótima para callbacks anônimas, que só servem para serem executadas naquela vez (para aquele caso), e em nenhum outro lugar.

Voltando ao exemplo "versions":

let versions = [5, 6, 7, 8];

versions
  .filter(item => item > 5)
  .map(item => `es${item}`);

Então, as duas arrow functions que eu uso no map e no filter, são apenas callbacks, funções anônimas, que serão usadas para aquela operação e em nenhum outro lugar da aplicação.

Um exemplo onde eu não usaria arrow functions, seria quando uso o padrão Revealing Module.

let MyModule = (function() {

  function myMethod() {
    // Doing something
  }
  
  function myOtherMethod() {
    // Doing something
  }
  
  return {
    someMethod: myMethod,
    someOtherMethod: myOtherMethod
  };
});

Porque?

Bom, poderiamos declarar variáveis como arrow functions... Mas lembrando, arrow functions são funções anônimas, logo, quando algum erro ocorrer, teriamos mais dificuldade de achar de onde ele veio no stack trace.

A indicação de no erro seria (anonymous function), ao invés do nome da função myMethod.

Outro exemplo, seria quando precisamos usar a palavra-chave this associada ao objeto. Voltando no exemplo do Timer.

let Timer = (function IIFE () {
  'use strict';

  function Timer () {
    this.seconds = 0;

    this.play();
  }

  function pause () {
    clearInterval(this._interval);
  }

  function play () {
    this._interval = setInterval(() => this.seconds++, 1000);
  }

  Timer.prototype.pause = pause;
  Timer.prototype.play = play;

  return Timer;
})();


let t = new Timer();
let t2 = new Timer();
let logger = setInterval(() => console.log(t.seconds, t2.seconds), 1000);

setTimeout(() => t.pause(), 5000);

setTimeout(() => t.play(), 9000);

setTimeout(() => {
  t.pause();
  t2.pause();

  clearInterval(logger);
}, 15000);

// > 1 1
// > 2 2
// > 3 3
// > 4 4
// > 5 5
// > 5 6
// > 5 7
// > 5 8
// > 5 9
// > 5 10
// > 6 11
// > 7 12
// > 8 13
// > 9 14
// > 10 15

Nesse exemplo, estamos usando a mesma referência da função pause e play para o Timer, adicionado em seu prototype.

Quando executamos new Timer() a função Timer é executada e é gerado um novo contexto para ela, porque usamos a palavra-chave new, então cada Timer criado dessa forma, gera um objeto com seu próprio this.

Se usassemos arrow functions para essas duas funções que botamos no prototype do Timer, não teriamos o this correto, e sim o contexto global.

Bom, é isso, finalizando mais um post rapidinho

Espero que tenham gostado! :)

Valeu galera!