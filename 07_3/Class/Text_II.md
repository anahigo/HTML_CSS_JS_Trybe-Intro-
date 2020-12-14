# Para que servem testes unitários?
Existem diversas formas que aparentemente são mais rápidas de testar se minha função está fazendo o que deveria. Eu poderia simplesmente executar o código para verificar se está funcionando. Então, por que motivo eu vou escrever outro código para testar meu código? O que garante que o segundo código funciona? Quem testa o teste?

Testes unitários, assim como qualquer teste automatizado, não servem somente para verificar se uma função específica está funcionando, mas também para garantir que sua aplicação continue funcionando após alguma alteração em sua base de código.

# Por que escrever testes unitários?
Pode parecer tentador, em um primeiro momento, não escrever testes para uma função que você acaba de desenvolver; afinal, costuma-se escrever mais código para testar uma função que o próprio código da função. Mas você deve lembrar que irá passar a maior parte do tempo de desenvolvimento de um sistema trabalhando em sua manutenção.

Sua aplicação em pouco tempo terá algumas centenas de funções sendo executadas, e muitas vezes executando umas às outras. Sua base de código fica enorme, e logo fica humanamente impossível de ser testada de forma manual após qualquer alteração. Testes unitários, na maioria das vezes, levam apenas alguns segundos para testar toda a sua aplicação.

# Por onde começar?
Existem diversas ferramentas de testes unitários para cada linguagem de programação. Você pode começar lendo a documentação dessas ferramentas a partir de seus exemplos. Neste link você pode encontrar algumas dessas ferramentas classificadas por linguagem.

Vamos focar nas ferramentas para JavaScript, pois é a linguagem que já utilizamos aqui na Trybe. E a mais simples dessas ferramentas é o NodeJS Assert Module.

# Texto Externo
- Definição e Uso
O módulo assert fornece uma maneira de testar expressões. Se a expressão for avaliada como 0, ou falsa, uma falha de asserção está sendo causada e o programa é encerrado.

Este módulo foi construído para ser usado internamente pelo Node.js.

- Sintaxe
A sintaxe para incluir o módulo assert em seu aplicativo:

var assert = require('assert');

- Métodos de declaração
  - assert() - Verifica se um valor é verdadeiro. O mesmo que assert.ok ()
  - deepEqual() - Verifica se dois valores são iguais
  - deepStrictEqual() - Verifica se dois valores são iguais, usando o operador de igual estrito (===)
  - doesNotThrow()
  - equal() - Verifica se dois valores são iguais, usando o operador igual (==)
  - fail() - lança um erro de afirmação
  - ifError() - lança um erro especificado se o erro especificado for avaliado como verdadeiro
  - notDeepEqual() - Verifica se dois valores não são iguais
  - notDeepStrictEqual() - Verifica se dois valores não são iguais, usando o operador estrito diferente (! ==)
  - notEqual() - Verifica se dois valores não são iguais, usando o operador diferente (! =)
  - notStrictEqual() - Verifica se dois valores não são iguais, usando o operador estrito diferente (! ==)
  - ok() - Verifica se um valor é verdadeiro
  - strictEqual() - Verifica se dois valores são iguais, usando o operador de igual estrito (===)
  - throws()

# NodeJS Assert
O módulo Assert provê uma forma de testar expressões. Se essa expressão é avaliada com o valor 0 ou false, o teste falhará e o programa será terminado. Esse módulo já vem junto com o NodeJS.

Um exemplo simples do uso do módulo Assert:

const assert = require('assert');
assert.equal(50, 50); // OK
assert.equal(50, 70); // AssertionError: 50 == 70

E um outro exemplo que utiliza funções:

const assert = require('assert');
function division(x, y) {
  return x / y;
}
const expected = division(9, 3);
assert.equal(expected, 3, 'Mensagem customizada do erro');

Os dois códigos acima utilizam o método assert.equal. Esse método compara o primeiro e o segundo parâmetro e, se forem diferentes, mostra um erro com a mensagem que está no terceiro parâmetro, se houver (o terceiro parâmetro é opcional).

Esse módulo possui vários métodos que nos auxiliam nos testes:
assert.equal()
assert.deepStrictEqual()
assert.notEqual()
assert.ok()
assert.fail()

# Texto Externo - Assert permite que você teste seu código

O que?
Assert - verbo - declara um fato ou crença com confiança e vigor. ( definição de dicionário )

Ao escrever o código, escrevemos testes para verificar automaticamente se o nosso código está funcionando como esperamos .

Assert é a forma mais rudimentar de escrever testes. Ele não fornece feedback ao executar seus testes, a menos que um deles falhe.

O módulo assert tem 11 métodos, mas você usará apenas (regularmente) alguns deles: assert.equal , assert.deepEqual e assert.throws . Cada um é explicado com exemplos abaixo.

- assert.fail (real, esperado, mensagem, operador)
O primeiro método (em ordem alfabética), mas o menos útil para fins práticos (a menos que você espere que um método / teste sempre falhe).

Lança uma exceção que exibe os valores reais e esperados separados pelo operador fornecido.

Exemplo:

assert.fail(21, 42, 'Test Failed', '###')
Resultado:

  throw new assert.AssertionError({
        ^
AssertionError: Faild
    at Object.<anonymous> (assert.js:2:8)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:906:3


- assert (valor, mensagem), assert.ok (valor, [mensagem])
Testa se o valor é "verdadeiro", é equivalente a:

assert.equal(true, value, message);
A afirmação mais simples.

Exemplo:

var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 3, 'one plus two is three');
Isso não terá nenhuma saída. Se quiser ver a saída, você precisa fazer o teste falhar :

var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 4, 'one plus two is three');
Resultado:

assert.js:92
  throw new assert.AssertionError({
        ^
AssertionError: one plus two is NOT four
    at Object.<anonymous> (/Users/n/code/node-js-by-example/core/assert/assert.js:8:1)
    at Module._compile (module.js:456:26)
assert.ok(value, [message]) é essencialmente o mesmo que assert(value, message);

var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert.ok( expected === 3, 'one plus two is three');
Novamente, nenhuma saída porque o teste foi aprovado. Para ver algum feedback, faça o teste falhar.

Utilidade : universal . assert pode ser usado para testar qualquer código.

- assert.equal (real, esperado, [mensagem])
Testa igualdade rasa e coercitiva com o operador de comparação igual (duplo) (==).

Por que você usaria assert.equal () em vez de assert ()?
Se você quiser tornar seu teste mais claro, use assert.equal, caso contrário, não haverá nenhum benefício no detalhamento adicional.

Exemplo:

var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);

// these three assertions are equivalent:
assert(expected == 3, 'one plus two is three');
assert.ok(expected == 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');

- assert.notEqual (real, esperado, [mensagem])
Testa não igualdade coercitiva e superficial com o operador de comparação diferente (! =).

Exemplo:

var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);

// these three assertions are equivalent:
assert(expected != 4, 'one plus two is three');
assert.ok(expected != 4, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');
Por que você usaria assert.notEqual (1, 2) em vez de assert (1! = 2)?
Novamente, verbosidade / clareza em seus testes.

- assert.deepEqual (real, esperado, [mensagem])
Testes de profunda igualdade.

assert.deepEqual é o segundo dos métodos úteis . Nós o usamos para comparar dois objetos (ou matrizes para igualdade).

Exemplo:

var assert = require('assert');

var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];

- assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"john", "age":"21" };

// deepEqual checks the elements in the objects are identical
assert.deepEqual(person1, person2, 'these two objects are the same');

- assert.notDeepEqual (real, esperado, [mensagem])
Testa qualquer desigualdade profunda. Útil ao confirmar que dois objetos ou matrizes não são iguais.

Exemplo:

var assert = require('assert');

var list1 = [1, 2, ,3, 4, 5];
var list2 = [1, 2, 3, 4, 5];

assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"jane", "age":"19" };

// deepEqual checks the elements in the objects are identical
assert.notDeepEqual(person1, person2, 'these two objects are NOT the same');

- assert.strictEqual (real, esperado, [mensagem])
Testa a igualdade estrita, conforme determinado pelo operador de igualdade estrita (===)

Semelhante a assert.equal, mas "estrito" (coersão de tipo).

Exemplo:

var assert = require('assert');

assert.strictEqual(1, '1', 'not the same'); // this will fail

- assert.notStrictEqual (real, esperado, [mensagem])
Testa não igualdade estrita, conforme determinado pelo operador estrito diferente ( !==)

O oposto de strictEqual.

Exemplo:

var assert = require('assert');

assert.notStrictEqual(1, true, 'not the same (strictly)');

- assert.throws (bloquear, [erro], [mensagem])
Espera que o bloco lance um erro. o erro pode ser construtor, RegExp ou função de validação.

O assert.throws permite verificar erros específicos em suas funções.

Valide a instância usando o construtor:

Exemplo:

assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error
);

- assert.doesNotThrow (bloquear, [mensagem])
Espera blocknão gerar um erro, consulte assert.throwsRecursos para obter detalhes.

Exemplo:

assert.doesNotThrow(
  function() {
    console.log("Nothing to see here");
  },
  Error
);
Método não particularmente útil porque é muito vago . É bom saber que seu método não gerou um erro em circunstâncias normais.

- assert.ifError (valor)
Testa se o valor não é um valor falso, lança se é um valor verdadeiro. Útil ao testar o primeiro argumento, erro em retornos de chamada.

Exemplo:

// define a simple function with callback(err, value)
function sayHello(name, callback) {
  var error = false;
  var str   = "Hello "+name;
  callback(error, str);
}

// use the function
sayHello('World', function(err, value){
  assert.ifError(err);
  assert.equal(value, "Hello World");
})

Tente!
Como acontece com todo código, você não pode esperar aprender sem tentar . Abra o arquivo assert.js em seu editor e tente alguns exemplos. Lembre-se de que você não verá nenhuma saída, a menos que o teste falhe . Execute-o com o comando:

node assert.js

# Continuação
Lembre-se: o módulo assert possui vários métodos que podem ser muito úteis! Observe:

const assert = require('assert');
function add(a, b) {
  return a + b;
}
const expected = add(1, 2);

assert(expected === 3, 'one plus two is three');
assert.ok(expected === 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)');

É possível também testar estruturas:

const assert = require('assert');
const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];
assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };
assert.deepEqual(person1, person2, 'these two objects are the same');

const person3 = { name: 'john', age: 19 };
assert.notDeepEqual(person1, person3, 'these two objects are different');

# Testes unitários e a melhoria no código
Um papel dos testes unitários é nos ajudar a implementar funções mais robustas. Veja, por exemplo, a função que realiza a divisão utilizada no modelo anterior:

function division(x, y) {
  return x / y;
}

O que acontece se criarmos o teste abaixo?

const assert = require('assert');
// declaração da função division, definida anteriormente...

assert.equal(division(10, 2), 5); // OK
assert.equal(division(10, 0), 0); // 💣

O primeiro assert.equal funciona e não apresenta erro, mas o segundo deixa evidente uma fragilidade na implementação da função division, pois não poderia ser possível realizar a divisão por 0. Nesse caso, devemos melhorar a implementação da função division, a fim de não termos mais esse estado inconsistente.

const assert = require('assert');
function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

Atualizamos o teste para refletir a mudança de implementação, ou seja, os testes unitários também nos ajudam a identificar casos especiais que podem levar nossas funções a estados inválidos.

# Testando em pequenos passos
O TDD: Test Driven Development, em tradução livre, o desenvolvimento orientado a testes, é uma técnica de desenvolvimento que, em certos cenários, favorece a produtividade e a escrita de códigos bons. Essa técnica é interessante, porque ele ajuda muito a criar uma mente programadora orientada a testes, ainda que nem sempre escrever testes antes de escrever funcionalidades seja a prática mais adequada.

O TDD é muito importante como exercício e para determinados tipos de projetos, mas está longe de ser um consenso na comunidade programadora como prática fundamental para 100% dos casos. É importante que essa visão crítica fique bem clara.

Tendo isso em mente hoje você vai aprender e praticar o TDD, mas o conhecimento a ser absorvido é "como testar bem uma aplicação, de forma eficaz e produtiva" e "como ter um mindset orientado a testes", e não especificamente como a metodologia funciona.

Um exemplo de um processo de desenvolvimento de uma aplicação orientada a testes é esse abaixo:

# Texto Externo - Escrevendo melhores afirmações de teste
Fazer TDD é parte integrante do meu fluxo de trabalho diário. Os testes me ajudam a quebrar problemas complexos em pedaços menores que posso processar mais facilmente. Isso me ajuda a desenvolver partes do aplicativo isoladamente e a focar na lógica de negócios principal sem medo de interromper a funcionalidade existente. Obter feedback rápido para minhas mudanças me capacita a agir rapidamente e construir sistemas mais robustos. Ter muitos pequenos testes que verificam um comportamento de uma unidade em teste torna mais fácil ver do que o aplicativo é capaz. Muitas vezes, esses pequenos testes causam uma sobrecarga de manutenção, pois requisitos adicionais fazem esses testes falharem, embora a funcionalidade tenha sido apenas adicionada e o comportamento existente tenha sido mantido intocado. Isso leva ao problema de que os testes precisam ser alterados, embora seu comportamento não tenha mudado.

Se uma cláusula order by não for especificada, a ordem das linhas de Q depende da implementação. ( https://dba.stackexchange.com/a/6053 )

Recuperar os registros em uma ordem diferente a cada execução de teste é um problema comum e pode resultar em um pacote verde localmente, mas nos testes de CI falhando. Depois de alguma pesquisa, percebi que a maneira como minhas afirmações de teste foram escritas pode ser a causa raiz de meus testes frágeis. Neste post, compartilharei algumas das minhas descobertas em minha jornada para escrever afirmações de teste melhores.

* TLDR
Assista à palestra do Vienna JS Meetup em velocidade dupla. - https://www.youtube.com/watch?v=pXBZ0G1cp3Q

* O que é uma afirmação de teste
Uma asserção é uma expressão booleana em um ponto específico em um programa que será verdadeira a menos que haja um bug no código-fonte do programa . Uma implementação muito básica de uma asserção pode ser semelhante a esta:

const assert = (value, message = 'assertion failed') => {
  if (!value) { throw new Error(message); }
}

assert(1 === 1, '1 should be equal to 1');
assert(1 === 2, '1 should be equal to 1'); // Throws exception

Sempre que um valor falsy é passado para a função de declaração, uma exceção é lançada com uma mensagem opcional. Quando uma exceção não tratada é lançada dentro de um caso de teste, ela é automaticamente marcada como falha. A afirmação de teste acima é de nível muito baixo e não muito expressiva. Bibliotecas de asserções resolvem esse problema fornecendo uma variedade de diferentes asserções de alto nível que tornam o teste mais fácil de ler. Algumas bibliotecas de asserção comuns incluem:

- chai.js ( https://www.chaijs.com/ )
- Módulo de declaração do node.js ( https://nodejs.org/api/assert.html )
- should.js ( http://shouldjs.github.io/ )
- hamjest ( https://github.com/rluba/hamjest )

* O cenário
Para tornar o problema com testes de "difícil manutenção" mais fácil de entender. Criei um aplicativo artificial com diferentes histórias de usuários. O aplicativo é um sistema de gestão de funcionários para um supermercado local. O proprietário quer abrir o supermercado aos domingos e, devido a restrições legais, nem todos os funcionários estão autorizados a trabalhar aos domingos. Para ver quem tem permissão para trabalhar, ela pediu para gerar um relatório especial de seus funcionários. Por simplicidade, a implementação concentra-se na lógica de negócios apenas em JS. Em um aplicativo do mundo real, pode-se consultar o banco de dados diretamente.

* Primeira história de usuário
Como lojista, quero ver uma lista de todos os funcionários maiores de 18 anos, para saber quem tem permissão para trabalhar aos domingos.

Depois de ler este requisito, o seguinte caso de teste é gerado.

import { assertThat, equalTo } from 'hamjest';

const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[1], employees[3]]));
});

Depois de executar os testes, o seguinte teste falha:

❌ returns employees which are older than 18

Para tornar este teste verde, a seguinte função é implementada:

const listEmployees = (employees) => employees
  .filter((employee) => employee.age >= 18);

Depois de executar os testes novamente, o teste mostra a cor verde.

✔️ returns employees which are older than 18

* Segunda história de usuário
Como dono da loja, quero que a lista de funcionários seja classificada por seus nomes, para que possa encontrar funcionários com mais facilidade.

Sem olhar muito no teste existente, o próximo caso de teste é adicionado:

import { assertThat, equalTo } from 'hamjest';

const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[1], employees[3]]));
});

// New test Case
it('returns employees ordered by their name', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[3], employees[1]]));
});

✔️ returns employees which are older than 18
❌ returns employees ordered by their name

Depois de observar a falha do novo teste, o seguinte é implementado:

const listEmployees = (employees) => employees
  .filter((employee) => employee.age >= 18)
  .sort((a, b) => a.name.localeCompare(b.name));
❌ returns employees which are older than 18
✔️ returns employees ordered by their name

A funcionalidade de classificação foi implementada com sucesso, mas agora o primeiro teste que já estava funcionando está falhando. Depois de comparar as afirmações de teste, é óbvio porque o teste falha. O teste pode ser alterado da seguinte forma:

// before
it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[1], employees[3]]));
});

// afterwards
it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, containsInAnyOrder(employees[1], employees[3]));
});
O containsInAnyOrder matcher corrige o problema anterior, ignorando a classificação do resultado. Verifica que os dois elementos precisam estar presentes independente de sua ordem. Essa mudança resulta em um conjunto de testes verde.

️✔️ returns employees which are older than 18
✔️ returns employees ordered by their name

* Terceira história de usuário
Como dono da loja, quero que a lista de funcionários seja maiúscula, para que possa lê-la melhor.

Começando do arquivo de teste novamente, um novo teste é adicionado:

import { assertThat, equalTo, containsInAnyOrder } from 'hamjest';

const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, containsInAnyOrder(employees[1], employees[3]));
});

it('returns employees ordered by their name', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[3], employees[1]]));
});

// New test case
it('returns employees whose names are capitalized', () => {
  const result = listEmployees(employees);
  assertThat(result[0].name, equalTo('MIKE'));
  assertThat(result[1].name, equalTo('SEPP'));
});

✔️ returns employees which are older than 18
✔️ returns employees ordered by their name
❌ returns employees whose names are capitalized

Uma implementação possível para satisfazer a falha é a seguinte:

const listEmployees = (employees) => employees
  .filter((employee) => employee.age >= 18)
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((employee) => ({ ...employee, name: employee.name.toUpperCase() }));

Depois de executar os testes, vemos que o novo comportamento foi adicionado com sucesso, mas quebramos todos os outros testes.

❌️ returns employees which are older than 18
❌️ returns employees ordered by their name
✔️ returns employees whose names are capitalized

O problema com os outros testes é que o hamjest não consegue mais comparar os objetos porque os nomes em maiúsculas diferem dos originais. Neste exemplo trivial, alterar 2 testes pode não ser o maior problema. Em um exemplo mais complexo, descobrir se a mudança interrompeu o comportamento original pode levar mais tempo. Neste exemplo, o teste pode ser alterado para:

// original test
it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[1], employees[3]]));
});

// first iteration
it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  result.forEach((employee) => {
    assertThat(employee.age >= 18, equalTo(true));
  });
});

// final iteration
it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, everyItem(hasProperty('age', greaterThanOrEqualTo(18))));
});

Alterando a asserção para o seguinte, introduzimos um problema importante neste teste. A implementação a seguir resulta em um teste verde.

const listEmployees = (employees) => []

Portanto, esta afirmação agora está 'não especificada', o que significa que uma implementação inválida / quebrada resulta em um conjunto de teste verde. Ao alterar a afirmação para o seguinte, pode-se evitar isso:

it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, allOf(
    hasProperty('length', greaterThanOrEqualTo(1)),
    everyItem(hasProperty('age', greaterThanOrEqualTo(18))),
  );
});

✔️ returns employees which are older than 18
❌️ returns employees ordered by their name
✔️ returns employees whose names are capitalized

O outro teste pode ser alterado para:

// original implementation
it('returns employees ordered by their name', () => {
  const result = listEmployees(employees);
  assertThat(result, equalTo([employees[3], employees[1]]));
});

// final iteration
it('returns employees ordered by name', () => {
  const result = listEmployees(employees);
  assertThat(result, orderedBy((a, b) => a.name < b.name));
});

Após essas alterações, todos os 3 testes são verdes. Como o problema do resultado vazio já foi verificado pelo teste anterior, não testamos esse comportamento nos outros testes.

✔️ returns employees which are older than 18
✔️ returns employees ordered by their name
✔️ returns employees whose names are capitalized

* Quarta história de usuário
Como dono da loja, quero que os funcionários sejam classificados por seus nomes em ordem decrescente em vez de crescente.

Como já existe um caso de teste que verifica o pedido, decidimos alterar este teste para atender aos novos requisitos.

import { 
  assertThat,
  greaterThanOrEqualTo, 
  everyItem, 
  orderedBy,
  hasProperty,
} from 'hamjest';

const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 },
];

it('returns employees which are older than 18', () => {
  const result = listEmployees(employees);
  assertThat(result, everyItem(hasProperty('age', greaterThanOrEqualTo(18))));
});

// changed assertion
it('returns employees ordered by name descendent', () => {
  const result = listEmployees(employees);
  assertThat(result, orderedBy((a, b) => a.name > b.name));
});

it('returns employees whose names are capitalized', () => {
  const result = listEmployees(employees);
  assertThat(result[0].name, equalTo('MIKE'));
  assertThat(result[1].name, equalTo('SEPP'));
});

✔️ returns employees which are older than 18
️️❌ returns employees ordered by their name descendent
️️️✔️ returns employees whose names are capitalized

Para tornar nosso teste verde novamente, o seguinte código é implementado:

const listEmployees = (employees) => employees
  .filter((employee) => employee.age >= 18)
  .sort((a, b) => b.name.localeCompare(a.name))
  .map((employee) => ({ ...employee, name: employee.name.toUpperCase() }));

O terceiro teste relata uma falha agora.

✔️ returns employees which are older than 18
✔️ returns employees ordered by their name descendent
️️️️️❌ returns employees whose names are capitalized

// original implementation
it('returns employees whose names are capitalized', () => {
  const result = listEmployees(employees);
  assertThat(result[0].name, equalTo('MIKE'));
  assertThat(result[1].name, equalTo('SEPP'));
});

// first iteration
it('returns employees whose names are capitalized', () => {
  const result = listEmployees(employees);
  assertThat(result, everyItem(hasProperty('name', matchesPattern(/[A-Z]*/))));
});

// second iteration
const inUpperCase = () => matchesPattern(/[A-Z]*/);
it('returns employees whose names are capitalized', () => {
  const result = listEmployees(employees);
  assertThat(result, everyItem(hasProperty('name', inUpperCase())));
});

Executamos os testes e vemos que todos os testes são verdes.

✔️ returns employees which are older than 18
✔️ returns employees ordered by their name descendent
️️️️️✔️ returns employees whose names are capitalized

* Conclusão
Esta postagem do blog mostrou que requisitos adicionais podem fazer com que os testes existentes falhem, embora seu comportamento não tenha mudado. Expressar o resultado desejado exato em uma afirmação torna o conjunto de testes geral menos frágil e mais fácil de alterar. Ter testes que não dependem de detalhes de implementação ou testes anteriores torna mais fácil adicionar e remover funcionalidades. Por exemplo, uma nova solicitação de recurso em que os funcionários devem ser retornados aleatoriamente não está causando a falha de outros testes. Tenho usado o hamjest nos últimos dois anos e posso recomendar um teste.