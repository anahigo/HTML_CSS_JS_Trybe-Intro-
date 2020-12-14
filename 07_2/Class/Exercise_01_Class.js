/* Agora, para praticar, crie uma função que receba três parâmetros. Sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newKey = function (obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(newKey((customer), "lastName", "Ferreira")) 
