/* Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:*/

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

//Exercise 5 - (Part II)
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//Exercise 2 - Bônus (Part III)
const teacherReport = (obj, teacher) => {
  let report = { professor: teacher, aula: [], estudantes: 0 }
  for (let lesson in obj) {
    if (obj[lesson]['professor'] === teacher) {
      report.aula.push(obj[lesson].materia);
      report.estudantes += obj[lesson].numeroEstudantes;
    }
  }
  return report
}

console.log(teacherReport(allLessons, 'Maria Clara'));
console.log(teacherReport(allLessons, 'Carlos'));

    
