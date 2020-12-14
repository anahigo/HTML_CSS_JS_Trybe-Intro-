ES6 em profundidade: Destruição
Por Nick Fitzgerald , Jason Orendorff
Postado em 28 de maio de 2015 em ES6 em profundidade, Artigo de destaque, e JavaScript 
ES6 In Depth é uma série de novos recursos adicionados à linguagem de programação JavaScript na 6ª edição do padrão ECMAScript, ES6 para abreviar.

Nota do editor: uma versão anterior do post de hoje, do engenheiro do Firefox Developer Tools Nick Fitzgerald , apareceu originalmente no blog de Nick como Destructuring Assignment in ES6 .

O que é atribuição de desestruturação?
A atribuição de desestruturação permite que você atribua as propriedades de uma matriz ou objeto a variáveis ​​usando uma sintaxe semelhante a literais de matriz ou objeto. Essa sintaxe pode ser extremamente concisa, embora ainda exiba mais clareza do que o acesso de propriedade tradicional.

Sem atribuição de desestruturação, você pode acessar os três primeiros itens em uma matriz como esta:

var first = someArray[0];
var second = someArray[1];
var third = someArray[2];
Com a atribuição de desestruturação, o código equivalente se torna mais conciso e legível:

var [first, second, third] = someArray;
SpiderMonkey (motor JavaScript do Firefox) já tem suporte para a maior parte da desestruturação, mas não totalmente. Rastreie o suporte à desestruturação (e ES6 geral) do SpiderMonkey no bug 694100 .

Destruturando matrizes e iteráveis
Já vimos um exemplo de atribuição de desestruturação em uma matriz acima. A forma geral da sintaxe é:

[ variable1, variable2, ..., variableN ] = array;
Isso apenas atribuirá a variável 1 por meio da variável N ao item correspondente na matriz. Se você quer declarar suas variáveis, ao mesmo tempo, você pode adicionar um var, letou constem frente à atribuição:

var [ variable1, variable2, ..., variableN ] = array;
let [ variable1, variable2, ..., variableN ] = array;
const [ variable1, variable2, ..., variableN ] = array;
Na verdade, variableé um nome impróprio, pois você pode aninhar padrões tão profundamente quanto desejar:

var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3
Furthermore, you can skip over items in the array being destructured:

var [,,third] = ["foo", "bar", "baz"];
console.log(third);
// "baz"
E você pode capturar todos os itens à direita em uma matriz com um padrão de "descanso":

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]
Quando você acessar itens na matriz que estão fora dos limites ou não existem, você obter o mesmo resultado que você faria por indexação: undefined.

console.log([][0]);
// undefined

var [missing] = [];
console.log(missing);
// undefined
Observe que a atribuição de desestruturação com um padrão de atribuição de matriz também funciona para qualquer iterável:

function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);
// 5
Objetos destrutivos
A desestruturação de objetos permite vincular variáveis ​​a diferentes propriedades de um objeto. Você especifica a propriedade que está sendo associada, seguida pela variável à qual está associando seu valor.

var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"
Há um atalho sintático útil para quando os nomes de propriedade e variável são iguais:

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"
E, assim como a desestruturação em arrays, você pode aninhar e combinar mais desestruturação:

var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};

var { arrayProp: [first, { second }] } = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"
Ao desestruturar propriedades que não estão definidas, você obtém undefined:

var { missing } = {};
console.log(missing);
// undefined
Uma pegadinha potencial que você deve estar ciente de quando você estiver usando desestruturação em um objeto para variáveis atribuir, mas não declará-los (quando não existe let, constou var):

{ blowUp } = { blowUp: 10 };
// Syntax error
Isso acontece porque a gramática do JavaScript diz ao mecanismo para analisar qualquer instrução começando com {uma instrução de bloco (por exemplo, { console }é uma instrução de bloco válida). A solução é envolver toda a expressão entre parênteses:

({ safe } = {});
// No errors
Desestruturando valores que não são um objeto, matriz ou iterável
Ao tentar usar a desestruturação em nullou undefined, você obtém um erro de tipo:

var {blowUp} = null;
// TypeError: null has no properties
No entanto, você pode desestruturar em outros tipos primitivos, como booleanos, números e strings, e obter undefined:

var {wtf} = NaN;
console.log(wtf);
// undefined
Isso pode ser inesperado, mas após um exame mais aprofundado, o motivo se revela simples. Ao usar um padrão de atribuição de objeto, o valor sendo desestruturado deve ser coercível para umObject . A maioria dos tipos pode ser convertido para um objeto, mas nulle undefinednão podem ser convertidas. Ao usar um padrão de atribuição de matriz, o valor deve ter um iterador .

Valores padrão
Você também pode fornecer valores padrão para quando a propriedade que você está desestruturando não está definida:

var [missing = true] = [];
console.log(missing);
// true

var { message: msg = "Something went wrong" } = {};
console.log(msg);
// "Something went wrong"

var { x = 3 } = {};
console.log(x);
// 3
(Nota do editor: este recurso está atualmente implementado no Firefox apenas para os primeiros dois casos, não o terceiro. Consulte o bug 932080. )

Aplicações práticas de desestruturação
Definições de parâmetros de função
Como desenvolvedores, muitas vezes podemos expor APIs mais ergonômicas aceitando um único objeto com várias propriedades como parâmetro, em vez de forçar nossos consumidores de API a lembrar a ordem de muitos parâmetros individuais. Podemos usar a desestruturação para evitar a repetição desse objeto de parâmetro único sempre que quisermos fazer referência a uma de suas propriedades:

function removeBreakpoint({ url, line, column }) {
  // ...
}
Este é um snippet simplificado de código do mundo real do depurador de JavaScript do Firefox DevTools (que também é implementado em JavaScript — yo dawg). Achamos esse padrão particularmente agradável.

Parâmetros do objeto de configuração
Expandindo o exemplo anterior, também podemos fornecer valores padrão para as propriedades dos objetos que estamos desestruturando. Isso é particularmente útil quando temos um objeto que se destina a fornecer configuração e muitas das propriedades do objeto já têm padrões razoáveis. Por exemplo, a ajaxfunção do jQuery leva um objeto de configuração como seu segundo parâmetro e pode ser reescrita assim:

jQuery.ajax = function (url, {
  async = true,
  beforeSend = noop,
  cache = true,
  complete = noop,
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};
Isso evita a repetição var foo = config.foo || theDefaultFoo;para cada propriedade do objeto de configuração.

(Nota do editor: Infelizmente, os valores padrão na sintaxe abreviada do objeto ainda não foram implementados no Firefox. Eu sei, tivemos vários parágrafos para trabalhar nisso desde aquela nota anterior. Veja o bug 932080 para as últimas atualizações.)

Com o protocolo de iteração ES6
ECMAScript 6 também define um protocolo de iteração , sobre o qual falamos anteriormente nesta série. Quando você itera sobre Maps (uma adição ES6 à biblioteca padrão) , você obtém uma série de [key, value]pares. Podemos desestruturar este par para obter acesso fácil à chave e ao valor:

var map = new Map();
map.set(window, "the global");
map.set(document, "the document");

for (var [key, value] of map) {
  console.log(key + " is " + value);
}
// "[object Window] is the global"
// "[object HTMLDocument] is the document"
Repita apenas as chaves:

for (var [key] of map) {
  // ...
}
Ou repita apenas os valores:

for (var [,value] of map) {
  // ...
}
Vários valores de retorno
Embora vários valores de retorno não sejam incorporados à linguagem adequada, eles não precisam ser, porque você pode retornar uma matriz e desestruturar o resultado:

function returnMultipleValues() {
  return [1, 2];
}
var [foo, bar] = returnMultipleValues();
Como alternativa, você pode usar um objeto como o contêiner e nomear os valores retornados:

function returnMultipleValues() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = returnMultipleValues();
Ambos os padrões acabam muito melhores do que segurar o contêiner temporário:

function returnMultipleValues() {
  return {
    foo: 1,
    bar: 2
  };
}
var temp = returnMultipleValues();
var foo = temp.foo;
var bar = temp.bar;
Ou usando o estilo de passagem de continuação:

function returnMultipleValues(k) {
  k(1, 2);
}
returnMultipleValues((foo, bar) => ...);
Importando nomes de um módulo CommonJS
Ainda não usa módulos ES6? Ainda usa módulos CommonJS? Sem problemas! Ao importar algum módulo CommonJS X, é bastante comum que o módulo X exporte mais funções do que você realmente pretende usar. Com a desestruturação, você pode ser explícito sobre quais partes de um determinado módulo deseja usar e evitar sobrecarregar seu namespace:

const { SourceMapConsumer, SourceNode } = require("source-map");
(E se você usar módulos ES6, você sabe que uma sintaxe semelhante está disponível nas importdeclarações.)

Conclusão
Portanto, como você pode ver, a desestruturação é útil em muitos casos individualmente pequenos. Na Mozilla, temos muita experiência com isso. Lars Hansen introduziu a desestruturação JS no Opera dez anos atrás, e Brendan Eich adicionou suporte ao Firefox um pouco depois. Ele foi lançado no Firefox 2. Portanto, sabemos que a desestruturação se intromete no uso diário da linguagem, tornando silenciosamente o código um pouco mais curto e mais limpo em todo o lugar.

Cinco semanas atrás, dissemos que o ES6 mudaria a maneira como você escreve JavaScript. É esse tipo de recurso que tínhamos em mente: melhorias simples que podem ser aprendidas uma de cada vez. Juntos, eles acabarão afetando todos os projetos em que você trabalha. Revolução por meio da evolução.

Atualizar a desestruturação para cumprir o ES6 tem sido um esforço de equipe. Agradecimentos especiais a Tooru Fujisawa (arai) e Arpad Borsos (Swatinem) por suas excelentes contribuições.

O suporte para desestruturação está em desenvolvimento para o Chrome, e outros navegadores sem dúvida adicionarão suporte com o tempo. Por enquanto, você precisará usar o Babel ou o Traceur se quiser usar a desestruturação na web.