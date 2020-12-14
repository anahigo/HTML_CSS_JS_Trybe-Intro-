//Array.map

const numbers = [1, 2, 3, 4, -5];

// com for 
const negativeNumbersFor = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbersFor.push(numbers[i] * -1);
  } else {
    negativeNumbersFor.push(numbers[i]);
  }
}

console.log(negativeNumbersFor); //[ -1, -2, -3, -4, -5 ]

// com map
const negativeNumbersMap = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbersMap); //[ -1, -2, -3, -4, -5 ]
