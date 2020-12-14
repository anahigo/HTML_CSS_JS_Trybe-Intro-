/* 8 - Crie uma função que verifique se o par (chave / valor) existem na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Exercício 8
const  verification = (obj, key, value) => obj[key] === value ? true : false;

console.log(verification(lesson1, 'materia', 'Matemática'))
console.log(verification(lesson1, 'materia', 'Maria Clara'))

console.log(verification(lesson2, 'materia', 'História'))
console.log(verification(lesson2, 'materia', 'Carlos'))

console.log(verification(lesson3, 'materia', 'Matemática'))
console.log(verification(lesson3, 'materia', 'Maria Clara'))