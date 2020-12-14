//Array.Filter

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

const isEvenB = numbers.find(verifyEven);

console.log(isEven); // [ 30, 22 ]
console.log(isEvenB); // 30

// Outra forma de ser realizada sem a necessidade de criar uma nova função.

const isEven2 = numbers.filter((number) => number % 2 === 0);

const isEven2B = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

console.log(isEven2B); // 30