//Array.Reduce

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Solução usando filter e reduce:

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//Solução usando apenas reduce:

const sumPair1 = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers1 = (array) => array.reduce(sumPair1);

console.log(sumNumbers1(numbers)); // 152