// Use a atribuição de desestruturação com o parâmetro rest para executar uma efetiva, de Array.prototype.slice()modo que arrseja uma sub-matriz da matriz original, sourcecom os dois primeiros elementos omitidos.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  // const arr = list; // Change this line
  const [a, b, ...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
