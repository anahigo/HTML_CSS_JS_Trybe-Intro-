# Callbacks
Agora que você entendeu operações assíncronas, é hora de dar luz a callbacks, começando com este artigo bacana.

Reparou que você já estava usando callbacks desde a semana de JavaScript, com eventListeners, e até a semana passada, com filter, map e reduce? A função que você passa como parâmetro para cada uma delas é exemplo de função callback. 😉

Além disso, lembra-se do exemplo da pizza mencionado acima? O que você faz quando o pedido da pizza chega, que nesse caso é jantar, corresponde a um callback.

Agora, faça estes exercícios de fixação:

1. No código abaixo você tem a função getUser, que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

assert.equal(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser

2. No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo

Obs: note e averigue o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality). Tem hora que é impresso antes no console o nome da pessoa, e tem hora que é impressa antes a nacionalidade da pessoa!