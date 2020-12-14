/* 1 - Crie uma função para contar quantos estudantes assistiram as aulas de matemática. Use o objeto criado no exercício 5. */

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

//Exercise 1 - Bônus (Part III)
const countMathStudents = obj => {
  let students = 0;
  for (let lesson in obj) {
    if(obj[lesson]['materia'] === 'Matemática'){
      students += obj[lesson]['numeroEstudantes'];
    }
  }
  return `${students} students who went to math classes`
}

console.log(countMathStudents(allLessons));

