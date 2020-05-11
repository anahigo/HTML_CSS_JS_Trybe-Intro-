/*4- Depois, faça uma pirâmide com n asteriscos de base:
1n = 5
2
3  *
4 ***
5*****  

----Interpretando o enunciado----

- valor n qualquer;
- sendo n maior que 1;
- imprimir uma piramede de astericos
        -  com n coluna na base(primeira linha)
        -  onde as outras linhas ira diminuir dois asterisco
*/

let n = 11;
let x;
let y;
let inputLine = '';
let symbol = '*';
let lineEmpty = (n + 1) / 2;
let left = lineEmpty;
let right= lineEmpty;

for (let x = 0; x <= lineEmpty; x++) { //x++ == x + 1
  for (y = 1; y <= n; y++) { //y++ == y + 1
    if (y > right && y < left) {
      inputLine += symbol; //inputLine = inputLine + symbol
    } else {
      inputLine += ' '; //inputLine = inputLine + ' '
    }
  }
  console.log(inputLine);
  inputLine = '';
  right--; //right-- == right - 1
  left++; //left++ == left + 1
}