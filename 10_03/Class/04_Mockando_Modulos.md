# Mockando Módulos
Diferente do jest.fn(), que simula apenas uma função por vez, temos o jest.mock(), que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.

Por exemplo: em um arquivo chamado math.js, temos as seguintes funções:

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

Utilizando o jest.fn(), teríamos que mockar todas as funções uma a uma. Com o jest.mock(), podemos mockar todas com um só comando:

jest.mock('./math');

Uma vez que mockarmos todo o arquivo math.js e, portanto, passemos a simular o comportamento de todas as suas funções, caso passemos os parâmetros 1 e 2 para a função somar, por exemplo, o retorno será "undefined". Isso se dá porque a simulação deixou de acessar o comportamento da função original do math.js. Apesar de podermos definir um retorno com mockReturnValue, há casos em que é útil ir além dessa capacidade de retornar valores e criar um novo comportamento para a função simulada. É o que o método mockImplementation(func) faz. Ele aceita uma função que deve ser usada como implementação.

Veja um exemplo:

const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

No exemplo acima, utilizamos também o método toHaveBeenCalledWith(...args), que valida quais parâmetros foram passados para a função.

Assim como o mockReturnValueOnce, podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce.

# Trabalhando com mock e funções originais
Você já aprendeu que ter controle sobre uma função e usar matchers como o toHaveBeenCalled são ferramentas essenciais para quem desenvolve. Mas há casos em que é útil verificar os efeitos colaterais de uma função, como em uma alteração de página. Como fazer isso se, ao se mockar uma função, ela perde sua implementação original, mas, sem mockar, não podemos testá-la com o matcher?

O jest.spyOn() é capaz de resolver esse problema. Ele "espia" a chamada da função simulada, enquanto deixa a implementação original ativa.

const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  math.somar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).toBe(3);
});

Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.
Há também como limpar, resetar ou restaurar mocks. Existem três métodos capazes de fazer isso:
* mock.mockClear() 
  - Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects;

* mock.mockReset() 
  - Faz o que o mockClear() faz;
  - Remove qualquer retorno estipulado ou implementação;
  - Útil quando você deseja resetar uma simulação para seu estado inicial;

* mock.mockRestore()
  - Faz tudo que mockReset() faz;
  - Restaura a implementação original;
  - Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;

Como exemplo, imagine que você queira testar a função mockada somar implementando para ela um método de subtração, mas que depois você queira redefinir as implementações do mock.

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

No exemplo acima, por termos usado o jest.fn(), não há como restaurar as implementações originais da função, pois suas funcionalidades não permitem. A única ferramenta que nos permite transitar entre simulação e comportamento original é o jest.spyOn().

const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).toBe(3);
});

# Mock e funções assíncronas
Os testes que dependem de requisições são os mais beneficiados com o uso do mock. Excluem problemáticas como falha na API, instabilidade de internet e tamanho de retorno.

Requisições para APIs podem levar vários segundos para serem realizadas, descartando todas as problemáticas listadas acima. Imagine que você precise fazer 15 testes que dependem dessas requisições. Se torna inviável fazer 15 requisições, pois pode aumentar muito o tempo para a realização de todos os testes, além de sobrecarregar a API com chamadas cada vez que for fazer um teste!

Da mesma maneira que podemos mockar funções síncronas, podemos fazê-lo com as assícronas. A diferença se dá nas implementações.
Nas funções assíncronas, utilizamos o mockResolvedValue(value) ou o mockRejectedValue(value). Assim como nas demais implementações, podemos definir o retorno para apenas uma chamada com mockResolvedValueOnce(value) ou mockRejectedValueOnce(value).

Temos, num arquivo api.js, uma requisição para a API Estúdios Ghibli:

function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { fetchURL };

O retorno dessa requisição será um array com de 200 posições no seguinte formato:

[
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  },
 // ...
];

No próximo exemplo vamos mockar a requisição e fazer dois testes: implementar um valor para quando a promise for resolvida e para quando ela for rejeitada.

const api = require("./api");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});

Caso queira simular os efeitos colaterais da API, você pode definir o retorno como um objeto JSON. No exemplo abaixo, ao invés de carregar um array de 200 objetos, vamos definir o retorno com apenas 1.

const api = require("./api");

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

test("#fetchURL", async () => {
  api.fetchURL = jest.fn().mockResolvedValue(requestReturn);

  // ...
});

A grande vantagem desse exemplo é que, neste teste, sequer fazemos uma requisição à API real! Assim evitamos todos os problemas que mencionamos anteriormente.
