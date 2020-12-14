const factorial = function (x) {
  if(x === 0){
    return 1
  } else {
    return x * factorial(x - 1)
  }
}
console.log(factorial(5));

const factorialBonus = x => (x === 0)? 1 : x * factorial(x - 1);

console.log(factorialBonus(5)); 