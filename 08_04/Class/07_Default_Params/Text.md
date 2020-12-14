ES6 - Default Parameters
Entenda parâmetros predefinidos em javascript com a nova sintaxe do es6.

21 APR 2016
Continuando a série "ES6 - O que mudou?".

Esse post será sobre definir valores predefinidos para parâmetros de uma função com ES6.

Lista dos tópicos que irei abordar:

Descrição
Old way
Sintaxe ES6
Exemplos
Descrição
No javascript, quando declaramos uma função que recebe parâmetros, podemos notar que ao chamá-la sem passarmos nenhum valor vamos receber undefined como resultado. Mas em certas ocasiões, queremos que algum valor seja atrelado a esses parâmetros, caso a função seja chamada sem nenhum.

Queremos que o parâmetro tenha um valor predefinido.

Old way
Como fazemos isso sem ES6?

function hello (name) {
  name = typeof name !== 'undefined' ? name : 'World';
  console.log('Hello ' + name);
}

hello('People');
hello();

// > Hello People
// > Hello World
Então, o que aconteceu?

Temos uma função chamada hello que recebe um parâmetro chamado name
Assim que a função é executada, checamos se o tipo do parâmetro name é diferente de undefined, se sim usamos o name se não, definimos name como 'World'
Logamos uma mensagem 'Hello ' + name
Chamamos a função passando 'People' como o valor de name, que resulta no log 'Hello People'
Chamamos a função sem passarmos nenhum valor como parâmetro, que resulta no log 'Hello World'
Sintaxe ES6
Como vimos anteriormente, uma das formas de definir um valor padrão para um parâmetro é simples, porém não tão simples como em outras linguagens.

Com ES6 isso muda, ganhamos uma nova sintaxe que deixará nosso código bem mais fácil de escrever e amigável.

Vamos reproduzir o exemplo anterior com ES6 e sua nova sintaxe de definir valores padrões aos parâmetros.

function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People');
hello();

// > Hello People
// > Hello World
Então, bem melhor?

Pode parecer besteira, mas isso faz muita diferença, seu código fica muito mais semântico e você passa a escrever seu código com muito mais gosto. E muito provavelmente as pessoas usarão bem mais essa funcionalidade, já que a facilidade do seu uso aumentou tanto com essa nova sintaxe.

E como isso já é padrão em outras linguagens, já estava na hora do javascript adicionar isso também.

Exemplos
Mostrarei alguns exemplos separados por situação, é bom entendermos como essa funcionalidade reagirá em cada uma.

Passando undefined
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(undefined, 'People');
say('Hi', undefined);
say(undefined, undefined);

// > Hey People
// > Hello People
// > Hi World
// > Hello World
Passando null
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(null, 'People');
say('Hi', null);
say(null, null);

// > Hey People
// > null People
// > Hi null
// > null null
Como null é um valor "falso", podiamos esperar que fosse substituido pelo valor padrão que definimos, mas essa funcionalidade só será aplicada se o valor do parâmetro for undefined ou se não passarmos nada como valor.

O mesmo se aplica ao valor 0, como sabemos, 0 é um valor "falso".

function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(0, 'People');
say('Hi', 0);
say(0, 0);

// > Hey People
// > 0 People
// > Hi 0
// > 0 0
