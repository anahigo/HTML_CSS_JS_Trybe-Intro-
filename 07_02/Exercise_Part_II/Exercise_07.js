/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
Output: 'Matématica' */

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

const valueKey = (obj, i) => Object.values(obj)[i];

console.log(valueKey(lesson1, 0))
console.log(valueKey(lesson1, 1))
console.log(valueKey(lesson1, 2))
console.log(valueKey(lesson1, 3))

console.log(valueKey(lesson2, 0))
console.log(valueKey(lesson2, 1))
console.log(valueKey(lesson2, 2))

console.log(valueKey(lesson3, 0))
console.log(valueKey(lesson3, 1))
console.log(valueKey(lesson3, 2))
console.log(valueKey(lesson3, 3))