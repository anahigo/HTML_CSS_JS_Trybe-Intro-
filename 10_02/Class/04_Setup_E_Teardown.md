# Setup e Teardown
Agora veremos um vídeo que mostra como reaproveitar configurações para diversos testes. Se tiver dificuldade com o inglês, não se preocupe! Abaixo resumimos o conteúdo do vídeo.

Vamos recapitular o que você aprendeu até então com esse vídeo:
1. O beforeEach é executado antes de cada teste, evitando que você tenha que repetir trechos de código, como por exemplo a criação de usuários utilizada no vídeo, dentro de cada teste. Dessa forma, você escreve o trecho de código uma única vez e garante que o "ambiente" esteja preparado para os testes que precisarem.

2. Além do beforeEach, temos também o afterEach que foi citado no vídeo e que executa um trecho de código após cada teste. Ele é especialmente útil para resetar configurações, dados, entre outras coisas.

No exemplo do vídeo, um dos testes criava um usuário no banco de dados em sua primeira execução, o que fazia com que, a partir da segunda execução dos testes, ocorresse um erro de e-mail duplicado, não permitindo testar novamente a criação do usuário. Uma solução melhor do que o beforeEach utilizado no vídeo seria utilizar o afterEach para resetar/apagar os dados de usuários do banco de dados após cada teste, garantindo que o banco de dados sempre estará vazio e pronto para ser preenchido novamente, de acordo com a necessidade.

3. Assim como vimos que pode acontecer dentro dos testes, durante o vídeo tivemos a execução de código assíncrono no beforeEach. Isso reforça, novamente, que é importante sempre se atentar a esse fator e que ele pode aparecer em diferentes cenários.

Outra maneira de tunar o uso do beforeEach e do afterEach é agrupá-los através do describe, para que executem apenas para um determinado conjunto de testes, ao invés de executá-los para todos os testes, pois frequentemente um trecho de código se aplica a alguns testes, mas não a outros.

Por exemplo, digamos que vários testes interagem com um banco de dados de cidades, mas apenas alguns testes interagem com um banco de dados de comidas, que estão relacionadas às cidades por serem típicas de lá. Neste caso, podemos fazer uma configuração diferente para diferentes testes, conforme o exemplo abaixo:

// Este beforeEach e este afterEach serão aplicados a todos os testes
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Este beforeEach e este afterEach serão aplicados apenas aos testes
  // do bloco do describe
  beforeEach(() => {
    initializeFoodDatabase();
  });

  afterEach(() => {
    clearFoodDatabase();
  });

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});

Como puderam ver através desse exemplo, o describe, além de separar os testes por contexto, pode separar configurações também, te ajudando a reutilizar ainda mais código. Legal, né?