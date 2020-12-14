# parametro rest
Agora que você viu como funciona o spread operator, veja um recurso cuja funcionalidade é oposta à do spread operator: o parâmetro rest.

Enquanto que no spread operator os valores de um objeto iterável são espalhados, no parâmetro rest os valores listados são agrupados em um array. Assista a este vídeo que ilustra de forma clara a diferença entre os dois.

# texto externo
JavaScript | Parâmetro de descanso
Última atualização: 16-04-2019
O parâmetro Rest é uma maneira aprimorada de lidar com os parâmetros da função, permitindo-nos lidar mais facilmente com várias entradas como parâmetros em uma função. A sintaxe do parâmetro rest nos permite representar um número indefinido de argumentos como uma matriz. Com a ajuda de um parâmetro rest, uma função pode ser chamada com qualquer número de argumentos, independentemente de como foi definida. O parâmetro de descanso é adicionado no ES2015 ou ES6, o que melhorou a capacidade de lidar com o parâmetro.

Nota: A fim de executar o código neste artigo fazer uso do console fornecido pelo navegador ou usar uma ferramenta online como repl.it .

Sintaxe:

função nome da função [... parâmetros] // ... é o parâmetro restante
{
declaração;
}
Nota: Quando… está no final do parâmetro de função, é o parâmetro restante. Ele armazena n número de parâmetros como uma matriz. Vamos ver como o parâmetro rest funciona:

filter_none
brilho_4
// Without rest parameter 
function fun(a, b){ 
    return a + b; 
} 
console.log(fun(1, 2)); // 3 
console.log(fun(1, 2, 3, 4, 5)); // 3                 
Saída:

No código acima, nenhum erro será gerado, mesmo quando estivermos passando mais argumentos do que os parâmetros, mas apenas os dois primeiros argumentos serão avaliados. É diferente no caso do parâmetro rest. Com o uso do parâmetro rest, podemos reunir qualquer número de argumentos em um array e fazer o que quisermos com eles.
Código Javascript demonstrando adição de números usando o parâmetro rest.




filter_none
brilho_4
// es6 rest parameter 
function fun(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15                  
Saída:

fomos capazes de obter a soma de todos os elementos que inserimos no argumento quando chamamos a função fun (). Obtemos a soma de todos os elementos no array fazendo uso do loop for..of que é usado para percorrer os elementos iteráveis ​​dentro de um array.
Observação: o parâmetro rest deve ser o último argumento, pois sua função é coletar todos os argumentos restantes em uma matriz. Portanto, ter uma definição de função como o código abaixo não faz sentido e gerará um erro.

filter_none
brilho_4
// non-sense code 
function fun(a,...b,c){ 
     //code 
     return; 
} 
Vamos usar o parâmetro rest com alguns outros argumentos dentro de uma função, como este:

filter_none
brilho_4
// rest with function and other arguments 
function fun(a,b,...c){ 
    console.log(`${a} ${b}`); //Mukul Latiyan 
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ] 
    console.log(c[0]); //Lionel 
    console.log(c.length); //3 
    console.log(c.indexOf('Lionel')); //0 
} 
fun('Mukul','Latiyan','Lionel','Messi','Barcelona'); 
Resultado:


No exemplo de código acima, passamos o parâmetro rest como o terceiro parâmetro e basicamente chamamos a função fun () com cinco argumentos e os dois primeiros foram tratados normalmente e o resto foi coletado pelo parâmetro rest e, portanto, obtemos ' Lionel 'quando tentamos acessar c [0] e também é importante notar que o parâmetro rest dá um array em troca e podemos fazer uso dos métodos de array que o javascript nos fornece.