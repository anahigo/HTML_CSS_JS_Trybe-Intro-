/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
1n = 7
2
3   *
4  * *
5 *   *
6******* 

----Interpretando o enunciado----

- valor n qualquer;
- sendo n maior que 1;
- imprimir uma piramede de astericos
        -  com n coluna na base(primeira linha)
        -  onde as outras linhas ira diminuir dois e no meio estará vazio
*/

let n = 11;
let inputLine = [];
let base = [];
let middle = [];
let symbol = '*';
let left = 1;
let right = n - 2;

for (let y = 0; y < n; y++) { //y++ == y + 1
  base[y] = symbol;
}

middle[0] = base;
for (let x = 1; x < n; x++) {//x++ == x + 1
  for (let y = 0; y < n; y++) {//y++ == y + 1
    if (y === left|| y === right) {
      inputLine[y] = symbol;
    } else {
      inputLine[y] = ' ';
    }
  }

  middle[x] = inputLine;
  left++; //left == left + 1
  right--; //rigth == rigth - 1
  inputLine = [];
  if (left > right) break;
}

let result = '';
for (let x = middle.length - 1; x >= 0; x--) { //x-- == x - 1
  for (let y = 0; y < n; y++) { //y++ == y + 1
    result += middle[x][y]; //result = result + middle[x][y]
  }
  console.log(result);
  result = '';
}