/* Exercício - Part I */

/* 1- Atualize o código para que ele use apenas a palavra-chave let.

var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk(); */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

/* 2- Altere o código para que todas as variáveis ​​sejam declaradas usando let ou const. Use let quando quiser que a variável mude e const quando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com const para estar em conformidade com as práticas comuns, o que significa que as constantes devem estar em maiúsculas.

function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
 */

function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");

/* Exercício - Part II */

/* 1- Use a sintaxe literal de modelo com crases para exibir cada entrada da matriz resultdo objeto failure. Cada entrada deve ser encapsulada em um lielemento com o atributo class text-warninge listada em resultDisplayArray.

Use um método iterador (qualquer tipo de loop) para obter a saída desejada (mostrado abaixo).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = null;
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  // change code below this line
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

/* Exercício - Part III */

/* 1- Reescreva a função atribuída à variável magic que retorna um new Date() para usar a sintaxe da função de seta. Além disso, certifique-se de que nada esteja definido com a palavra-chave var.

var magic = function() {
  "use strict";
  return new Date();
};
*/

const magic = () => new Date();

/* 2- Reescreva a função myConcat que anexa o conteúdo de arr2 a arr1 para que use a sintaxe da função de seta.

var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);