/* Sem Array.find */ 

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

console.log(firstMultipleOf5); //50

/* Com Array.find */

const numbersNew = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5New= numbersNew.find(numbersNew => numbersNew % 5 === 0);

console.log(firstMultipleOf5New); //50

