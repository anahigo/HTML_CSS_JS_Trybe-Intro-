//Array.Reduce

// Apenas com o for:

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113

// Com .reduce:

const sumNumbers1 = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers1); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum);
console.log(sumNumbers2); // 113


const getSum1 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum1);
console.log(sumNumbers3); // 113