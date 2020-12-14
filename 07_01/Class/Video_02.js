/*Exemplo 1*/
var soma = function(num1, num2) {
  return num1 + num2
}

var soma = (num1, num2) => {
  return num1 + num2
}

var soma = (num1, num2) => num1 + num2;

/*Exemplo 2*/
var contaPalavras = function(frase) {
  return frase.split('').length;
}
  
var contaPalavras = (frase) => {
  return frase.split('').length;
}
  
var contaPalavras = frase => 
  frase.split('').length;

/*Exemplo 3*/
var mostraSegundos = function() {
  return new Date().getSeconds();
}
    
var mostraSegundos = () => {
  return new Date().getSeconds();
}
    
var mostraSegundos = () => 
  new Date().getSeconds();

/*Exemplo 4*/
var objetoUsuario = function(id, nome) {
  return {
    id: id,
    nome: nome,
  }
}

var objetoUsuario = (id, nome) => {
  return {
    id: id,
    nome: nome,
  }
}

/*Exemplo 5*/
var itemsCarrinho = [
    { id: 1, nome: 'Item 1', preco: 1200 },
    { id: 2, nome: 'Item 2', preco: 2500 },
]

var total = itemsCarrinho.reduce(function(total, item) {
  return total + item.preco;
}, 0);

var total = itemsCarrinho.reduce((total, item) => {
  return total + item.preco;
}, 0);

var total = itemsCarrinho.reduce((total, item) => 
  total + item.preco, 0);
