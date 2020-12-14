/*  Array.forEach */ 

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
/*
0 * 2: 0
1 * 2: 2
2 * 2: 4
3 * 2: 6
4 * 2: 8
5 * 2: 10
6 * 2: 12
7 * 2: 14
8 * 2: 16
9 * 2: 18
10 * 2: 20
*/

const sumFor2 = (element) => {
  console.log(`${element} + 2: ${element + 2}`);
};

numbers.forEach(sumFor2);
/*
0 + 2: 2
1 + 2: 3
2 + 2: 4
3 + 2: 5
4 + 2: 6
5 + 2: 7
6 + 2: 8
7 + 2: 9
8 + 2: 10
9 + 2: 11
10 + 2: 12
*/

const divideFor2 = (element) => {
  console.log(`${element} / 2: ${element / 2}`);
};

numbers.forEach(divideFor2);
/*
0 / 2: 0
1 / 2: 0.5
2 / 2: 1
3 / 2: 1.5
4 / 2: 2
5 / 2: 2.5
6 / 2: 3
7 / 2: 3.5
8 / 2: 4
9 / 2: 4.5
10 / 2: 5
*/
const subtractsFor2 = (element) => {
  console.log(`${element} - 2: ${element - 2}`);
};

numbers.forEach(subtractsFor2);
/*
0 - 2: -2
1 - 2: -1
2 - 2: 0
3 - 2: 1
4 - 2: 2
5 - 2: 3
6 - 2: 4
7 - 2: 5
8 - 2: 6
9 - 2: 7
10 - 2: 8
*/