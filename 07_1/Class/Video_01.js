/*function imprimeIdade() {
  var idade = 30;
  console.log('Idade do Marco', idade)
}

imprimeIdade()

/*console.log('Fora da function', idade)*/

/* function imprimeIdade() {
  for(var idade = 30; idade <= 100; idade++){
    console.log('Fora da function', idade)
  }

  if(true) {
    var nome ='Henri'
  }
  console.log('Fora do if', nome)

  console.log('Fora da for', idade)
}

imprimeIdade() */

/* function imprimeIdade() {
  for(let idade = 30; idade <= 100; idade++){
    console.log('Fora da function', idade)
  }

  console.log('Fora da for', idade)
}

imprimeIdade() */

/* function imprimeIdade() {
  for(const idade = 30; idade <= 100; idade++){
    console.log('Fora da function', idade)
  }

  console.log('Fora da for', idade)
}

imprimeIdade() */

/*const nome = 'Henri'
nome = 'Henry'*/

const pessoa = {
  nome: 'Marco',
  idade: 30
}

/*const pessoa = {
  nome: 'Marco',
  idade: 31
}*/

nome.idade = 31

console.logo('Idade do Marco', nome.idade)
