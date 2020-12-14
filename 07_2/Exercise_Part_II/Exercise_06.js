/* 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

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

//Exercise 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//Exercise 6

const totalStudents = () => { 
  let totalFinal = 0;
  for (let lesson in allLessons) {
    totalFinal += allLessons[lesson]['numeroEstudantes'];
  }

  return `${totalFinal} total number of students`
}

console.log(totalStudents())
