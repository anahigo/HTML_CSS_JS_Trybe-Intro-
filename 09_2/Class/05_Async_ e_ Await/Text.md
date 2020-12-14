# async e await
O async é uma mão na roda. Essa funcionalidade transforma qualquer função em uma promise. Para começar a usá-la, basta colocar o async antes da definição da função. Agora é só colocar no congelador e ta pronto o sorvetinho transformar o que é resolve em return e o que é reject em throw e BOOM! Sua promise com async está pronta. Vamos refatorar a função verifiedFetch para usar async:

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

Pronto! Perceba que continua funcionado exatamente da mesma forma que anteriormente. Tá achando que acabou? Ainda tem mais!

A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função sendJokeToFriend. Assim, junto com ela vem um bônus, o await. O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz com o que a função espere uma resposta para continuar sua execução. Vamos refatorar sendJokeToFriend:

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna")

Pronto! Usando o await , o sendJokeToFriend espera a verifiedFetch terminar toda sua execução (até o ultimo .then() ou .catch()) para só depois executar o console.log(). Assim novamente, a função fica muito mais concisa e fácil de ler.

Finalmente, chegamos ao fim! Foi muito conteúdo que vimos agora, mas saber promise, com certeza, é algo que vai te levar a outro liga como dev. Agora, não se acomode ainda, levanta, dá uma alongada, pega um café e vamos fazer alguns exercícios para fixar!