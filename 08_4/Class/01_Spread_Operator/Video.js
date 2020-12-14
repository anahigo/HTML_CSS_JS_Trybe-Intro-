const arr = [1, 2, 3]
const newArra = [...arr, 3]

console.log (newArr)

const newArra01 = [3,... arr]

console.log (newArr01)

function soma(a,b,c) {
  return a+b+c
}

console.log(soma(...arr));

const arr01 = [5, 2, 3]

console.log(soma(...arr01));

const arr02 = [2, 3]

console.log(soma(.1, ..arr02));

