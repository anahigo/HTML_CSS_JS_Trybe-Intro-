# Fetch API
No dia anterior você viu superficialmente o que é e pra que serve a função fetch. Hoje você aprenderá a usá-la. A função fetch, como já visto, é responsável por enviar requisições a API's. Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.

O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON, ou respostas que possam ser reformatadas para tal.

# Erros comuns
Vamos criar uma promise que faz um fetch apenas para um endpoint específico. Para isso, vamos usar como "endpoint" o url "https://api.chucknorris.io/jokes/random?category=dev" que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).

Antes de irmos para o código, como vamos rodar nosso código direto no node e não no browser, precisamos instalar o node-fetch. Execute o comando abaixo caso você ainda não tenha o package.json:

npm init -y

depois, instale o node-fetch:

npm i node-fetch

Agora veja o código abaixo:

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

Vamos dar uma olhada rápida no código. Primeiro criamos a função verifiedFetch e passamos o url do nosso endpoint. Depois retornamos uma promise, transformando nossa função em uma função assíncrona. Agora, dentro da promise fazemos uma verificação. Se o endpoint for o certo, usamos o fetch para fazer uma chamada ao endpoint, transformamos a resposta em um json utilizando o método .json(), e para finalizar usamos o resolve para retornar a nossa resposta. Caso o url não seja o certo, levantamos um error. Perceba aqui que usamos o construtor new Error para levantar um error. Usar esse construtor dentro do reject é uma boa prática importante e vamos usá-lo a partir de agora.

Agora, leia o código abaixo e, sem executá-lo, responda a seguinte pergunta: O que será exibido no console ao se executar sendJokeToFriend?

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

Agora execute a função sendJokeToFriend e veja se você acertou. Como vemos, recebemos o seguinte log: Promise { <pending> }. Vamos ver o que acontece aqui. Como vimos, verifiedFetch é uma promise, logo, é assíncrono. Quando o javascript executa a função, ele manda ela para "área especial" e passa para próxima função que é o console. Como a promise ainda não voltou com o conteúdo de message, vemos que a promise ainda está no estado pending. Para visualizar ainda melhor, retire o fetch e execute um resolve que retorna qualquer valor, assim a promise terminará sua execução imediatamente. Antes de executar, pense: Agora que a promise resolve imediatamente, quando o console.log for executado a Promise estará em pending ou já terá um resultado ? Execute e veja a resposta.

Como você viu, ela esta em pending, mesmo sendo resolvida imediatamente. Isso aconteceu pois, mesmo resolvendo na hora, a promise vai para sua área e sai da fila. Quando ela retorna, mesmo que de imediato, ela volta pro final da fila e o console.log está na frente, sendo executado primeiro. Para resolver esse problema existem 2 maneiras. A primeira é usar o fluxo da promise e colocar o console.log dentro do .then(). Essa solução e ótima, mas pode ficar dificil de se manter e ler a medida que o número de passos aumenta e a medida que cada passo fica mais complexo também, assim, surgiu a terceira digievolução evolução das promises, o async e o await!