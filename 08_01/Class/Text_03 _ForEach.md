# Array.forEach
Como já viu nos exemplos anteriores, o forEach percorre o array dado e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
No exemplo acima, ele realizou em cada elemento do array a função multipliesFor2, que imprime o parâmetro * 2 no console.

Caso tenha dúvida, veja alguns exemplos neste artigo. (https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808)

Não se esqueça, também, de rodar todos os exemplos no console do seu navegador ou na sua máquina! Isso ajuda muito a fixar as coisas. Brinque e experimente com as funções!

# Texto Externo
JavaScript forEach(): executando uma função para cada elemento de um array

Nesta documentação de JavaScript veremos como utilizar o forEach(), método que permite executar uma função para cada item de um array.

# Vídeo 
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item, indice, array) {
    total += item;
    array[indice] = total;
}

numeros.forEach(somar);
console.log(total); // [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

# Continuação do Texto
JavaScript forEach()
Nesta documentação de JavaScript veremos como o método forEach() permite executar uma função para cada item de um array.

Apresentaremos aqui como utilizar o método forEach().

JavaScript forEach(): Na prática
//Valor retornado: Verde Amarelo Azul Branco
cores = ["Verde", "Amarelo", "Azul", "Branco"];

function imprimir(item) {
    console.log(item);
}

cores.forEach(imprimir);

//Valor retornado: 0 2 4 6 8 10 12 14 16 18 20
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2);

//Valor retornado: 55
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item) {
    total += item;
}

numeros.forEach(somar);
console.log(total);

//Array retornado: ["Fiat", "Ford"]
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);

//Array retornado: ["ALBERTO", "ALEX", "SANDRO", "ROBERTA"]
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);

//Valor retornado: Ana Roberta
nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
tamanhoNome = 0;
nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(maiorNome);
console.log(nome);

Como funciona o forEach()?
O método forEach() executará uma função para cada elemento presente em um array.

Considerando o seguinte código:

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2) // 0 2 4 6 8 10 12 14 16 18 20

Sintaxe
array.forEach(funcao([valorAtual, índice, array]), argumentoThis)

Parâmetros
funcao() é a função a ser executada para cada elemento do array. Pode receber três parâmetros:

- valorAtual é o valor da posição atual sendo percorrida no array. Parâmetro obrigatório na declaração a função.
- índice é a posição do array que está sendo lida. Parâmetro opcional da função.
- array é o array a ser percorrido no forEach().Parâmetro opcional da função.

argumento This valor opcional a ser usado como this no momento que executar a função de callback. Parâmetro opcional do forEach().

Valor de retorno
É retornado um valor para cada posição do array conforme a lógica implementada na função.

Exemplos de forEach()
Exemplo 1 - No exemplo a seguir demonstramos como somar todos os valores de um array:

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item) {
    total += item;
}

numeros.forEach(somar);
console.log(total); // 55

Exemplo 2 - No exemplo a seguir demonstramos a mesma soma, mas exibindo o valor da somatória a cada posição do array e também o índice sendo percorrido:

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item;
    console.log("[índice " + indice + "]= " + total + " -> ");
}

numeros.forEach(somar);
/*
[índice 0]= 0 -> [índice 1]= 1 -> [índice 2]= 3 ->
[índice 3]= 6 -> [índice 4]= 10 -> [índice 5]= 15 ->
[índice 6]= 21 -> [índice 7]= 28 -> [índice 8]= 36 ->
[índice 9]= 45 -> [índice 10]= 55 ->
*/
Note que além do parâmetro que representa o item no array, neste exemplo também declaramos o indice. Dessa forma pode-se utilizar esse valor no corpo da função.

Exemplo 3 - No exemplo a seguir demonstramos como executar uma função para atualizar os valores declarados no array com os valores obtidos com a somatória de cada posição e em seguida imprimimos os itens desse array:

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item;
    numeros[indice] = total;
}

numeros.forEach(somar);
console.log(numeros); // [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
Exatamente a soma dos elementos de cada posição com todas as posições anteriores.

Exemplo 4 - No exemplo a seguir demonstramos como obter um novo array contendo apenas as marcas iniciadas com a letra “F”:

var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
var marcasIniciadasComF = [];
var novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF); // ["Fiat", "Ford"].

Exemplo 5 - No exemplo a seguir demonstramos como atualizar todas as strings de um array para que fiquem escritas em maiúsculo:

var nomes = ["Alberto", "Alex", "Sandro", "Roberta"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes); // ["ALBERTO", "ALEX", "SANDRO", "ROBERTA"].

Exemplo 6 - No exemplo a seguir demonstramos como obter o maior nome a partir de array de nomes:

var nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
var tamanhoNome = 0;
var nome = "";

function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}

nomes.forEach(maiorNome);
console.log(nome); // "Ana Roberta".