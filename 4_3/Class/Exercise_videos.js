// Objeto

// var carro = {};
// console.log(carro);

// var carro = {
//   indice: "valor";
// };

// console.log(carro.indice);

// var carro = {
//   placa: "ADD-4423",
//   modelo: "Sedã",
//   marca: "Hyundai",
//   opcionais: {
//       cambio: "automatico",
//       combustivel: "flex"
//     },
//     "outra-coisa": "outracoisa"
//   };
  
//   console.log(carro);
//   console.log(carro.placa);
//   console.log(carro.modelo);
//   console.log(carro.marca);
//   console.log(carro.opcionais);
//   console.log(carro.opcionais.cambio);
//   console.log(carro.opcionais.combustivel);
//   console.log(carro["outra-coisa"]);

// For in

// const pessoa = {
//   nome: 'Ana',
//   idade: 36
// };

// for(let chave in pessoa) {
//   console.log(chave,pessoa['nome']); 
//   //console.log(chave,pessoa.nome)
// }

// const cores = ['Vermelho', 'Azul', 'Verde'];

// for(let indice in cores) {
//   console.log(indice, cores[indice])
// }

//Functions
/* function nomeDaFuncao() {
  //código que faz alguma coisa
}
nomeDaFuncao() */

// function nomeDaFuncao(parametro01, parametro02) {
//   var resultado = parametro01 + parametro02;
//   return resultado;
// }
// console.log(nomeDaFuncao(10, 20))

var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDOVolante = 0; // negativo será para a esquerda, positivo será para a direita, nulo é reto 

function ligarDesligar () {
  if (statusCarro === 'desligado') {
    statusCarro = 'ligado';
  } else {
    statusCarro = 'desligado';
  }
  return statusCarro;
};

function acelerar (incremento) {
  aceleracao += incremento; // aceleracao = aceleracao + incremento;
  return "Acelerando a " + aceleracao + "km/h";
};

function frear (descremento) {
  aceleracao -= descremento; // aceleracao = aceleracao - descremento;
  return "Desacelerando para " + aceleracao + "km/h";
};

function girarVolante (anguloRotacao) {
  rotacaoDoVolante = anguloRotacao;
  return rotacaoDoVolante + "graus";
};

ligarDesligar();
acelerar(50);
girarVolante(-45);
frear(25);
girarVolante(0);
frear(25);
ligarDesligar();

