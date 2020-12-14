//Array.Reduce

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 0);

console.log(bigger); // 85

// Modifique o segundo parâmetro passado, o 0, no reduce para 100 e execute o programa

const getBigger2 = (bigger, number) => {
  (bigger > number) ? bigger : number;
}

const bigger2 = numbers.reduce(getBigger2, 100) 
console.log(bigger2); // 100