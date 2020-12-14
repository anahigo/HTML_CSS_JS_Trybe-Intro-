# Escrevendo testes
Escrever testes em Jest é muito simples, como você deve ter percebido enquanto lia o artigo acima. Tudo que é necessário é utilizar a função test. A função it é um alias para test, ou seja, ambas se referem à mesma função e você pode usar qualquer uma delas. Essas funções, por serem globais, ficam automaticamente disponíveis nos seus arquivos uma vez que o Jest é instalado.

A função test espera três argumentos. O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados. O segundo argumento é uma função contendo suas expectations. Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos. O terceiro argumento (opcional) é um timeout, indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.
Para entender melhor, veja o código abaixo:

// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

Neste exemplo, tanto a implementação quanto os testes da função estão no mesmo arquivo. Na prática, porém, eles ficarão separados. Jest procura por arquivos com as extensões .js, .jsx, .ts e .tsx dentro de uma pasta com o nome __tests__, ou arquivos com o sufixo .test ou .spec. É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js:

// sum.js
const sum = (a, b) => a + b;

module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum. Veja a seção de recursos adicionais para entender mais sobre como importar e exportar módulos em Node.js.

# Expect e matchers
Ao escrever testes, você precisa verificar que valores satisfazem a algumas condições. A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers. Esses métodos permitem testar valores de diversas formas. expect recebe o valor a ser testado e retorna um objeto representando uma expectation. Sobre esse objeto pode-se chamar os matchers que Jest fornece.

Vamos passar pelos matchers mais comuns. É interessante saber que existem muitos outros matchers que podem ser encontrados na documentação oficial do Jest. No dia a dia, é normal quem desenvolve ler documentação, porque normalmente esse é o local com mais informações atualizadas. Conforme as ferramentas que conhecemos passarem a ter mais opções de uso e funcionalidades, será cada vez mais normal recorrermos à documentação para aprendermos a utilizá-las melhor.

# toBe
toBe, que utilizamos no exemplo anterior, é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.

expect(5).toBe("5")

# toEqual
JavaScript faz comparação por referência. Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes JavaScript. Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:

test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

# Valores booleanos
null, undefined e false são valores falsy. Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles. Jest fornece matchers específicos para cada um. Leia mais sobre eles na documentação do Jest. (https://jestjs.io/docs/en/using-matchers#truthiness)

# Números
Há matchers para as principais formas de comparar números. Leia aqui sobre esses matchers (https://jestjs.io/docs/pt-BR/using-matchers#n%C3%BAmeros)

# Strings
Para comparar string com expressões regulares, utilize o matchertoMatch.(https://jestjs.io/docs/pt-BR/expect#tomatchregexporstring)

# Arrays
Você pode verificar se um array contém um item em particular utilizando toContain. Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual. toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.
(https://jestjs.io/docs/pt-BR/expect#tocontainitem)
(https://jestjs.io/docs/pt-BR/expect#tocontainequalitem)
(https://jestjs.io/docs/pt-BR/expect#tohavelengthnumber)

# Objetos
É bastante comum testar se um objeto possui uma propriedade específica. O matchertoHaveProperty é ideal para esses casos. (https://jestjs.io/docs/pt-BR/expect#tohavepropertykeypath-value)

# Exceções
toThrow testa que uma função lança um erro quando é executada. Note que é preciso envolver o código em uma função (normalmente uma arrow function). Chamar a função diretamente dentro de expect fará com que o erro não seja capturado, e a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. (https://jestjs.io/docs/pt-BR/expect#tothrowerror)

# not
not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:

const workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workdays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekdays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workdays).not.toContain('Sunday');
});

Estes foram alguns dos matchers mais comuns. Existem muitos outros, e você pode até mesmo criar os seus. A documentação do Jest explica com detalhes todos os matchers disponíveis. Consulte-a sempre! (https://jestjs.io/docs/pt-BR/expect)

# O bloco describe
A função describe cria um bloco para agrupar vários testes. Isso é útil para melhorar a organização dos seus testes. Você pode utilizar describe, por exemplo, para separar testes de funções diferentes em um mesmo arquivo, ou para agrupar testes relacionados dentro de uma função complexa que requer muitos testes. É possível aninhar blocos describe arbitrariamente. Dentro de cada bloco, qualquer declaração de variáveis ou funções é local a este bloco. Leia os exemplos na documentação do Jest para fixar.
(https://jestjs.io/docs/pt-BR/api#describename-fn)