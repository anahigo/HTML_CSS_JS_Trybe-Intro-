# Entendendo funções callback em JavaScript
O intuito desse texto é explicar de forma passo a passo o que são funções callback e sua sintaxe de uso. Para tópicos mais avançados, aguarde os próximos artigos.

Para quem veio de uma linguagem síncrona como AdvPL, C, Python e tantas outras, é desafiador mudar a maneira de pensar. JavaScript é uma linguagem executada assincronamente; isso acontece porque quando o interpretador executa um comando que dependa de uma informação externa, como uma requisição, ele não bloqueia o prosseguimento do programa. Essa característica do JavaScript é extremamente utilizada no Node.js.

Para os que estão iniciando na linguagem, pode parecer que estou falando bobagem; mas isso acontece porque quem começou a mexer com a linguagem há pouco tempo, provavelmente, nunca utilizou Ajax, ou trabalhou em cima de uma informação retornada de um banco de dados. 

Quer tirar a prova dos nove? Então, vamos lá! Execute o seguinte script:

setTimeout(() => alert("1"),5000);
alert("2");

Ao executar esse código no navegador, as coisas acontecem na seguinte ordem:
1º: É apresentado um alerta com o conteúdo “2”;
2º: Após cinco segundos, o próximo alerta é exibido, com conteúdo “1”.

As coisas não são executadas na ordem em que o código está escrito, pois como a função setTimeout espera 5 segundos para apresentar o alerta, o processamento segue, executando o alert(“2”) primeiro. Essa função, setTimeout, normalmente é utilizada por instrutores para simular uma requisição HTTP, ou um acesso ao banco de dados.
Nesse artigo, não explicarei o conceito de sincronicidade e assincronicidade para não me estender demasiadamente, mas com um simples Google você pode achar excelentes explicações. Let’s focus on the code!

# Mas o que são funções callback?
De forma simples, callback é uma função passada como parâmetro para outra função. Sem saber, você acabou de usar uma função callback no código acima. A função setTimeout recebe dois parâmetros: o primeiro é uma função callback, e o segundo é o tempo que o interpretador irá esperar até executar essa função.

Na programação assíncrona, callbacks são passadas como funções para serem executadas após um certo evento. Por exemplo, um programa calcula o salário líquido a partir do bruto e faz algo com esse valor calculado. Nesse caso, podemos fazer da seguinte forma:

let salarioBruto = 3000;
let salarioLiquido;
getSalario(salarioBruto, (resultado) => {
    salarioLiquido = resultado;
    console.log(`O salário liquido é ${salarioLiquido}`);
});

function getSalario(salarioBruto, callback)
{
    let liquido = 0;
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;
    const descontos = inss + vr + vt + fgts;
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}

Vamos dissecar o código para entender como funcionam as callbacks.
Comecemos pela declaração da função getSalario. Essa função recebe dois parâmetros: salarioBruto, que é o valor de entrada do cálculo e callback, que é uma função que será executada no return da função getSalario. Ainda não vamos nos preocupar com o que faz essa função de callback, apenas entenda que a getSalario a recebe como parâmetro e a executa no return, passando como parâmetro para a callback o salário líquido calculado.

Então, a função getSalario recebe um valor de salário bruto no primeiro parâmetro: getSalario(salarioBruto, …
Obtém o salário líquido subtraindo os descontos calculados: liquido = salarioBruto - descontos;
e, então, executa a função recebida no segundo parâmetro: return callback(liquido);

Entendido isso, vamos a declaração da função callback. A nossa callback é definida na passagem do segundo parâmetro durante a invocação da getSalario: getSalario(salarioBruto, (resultado) => …
Nesse exemplo, usamos a sintaxe de arrow functions: (parâmetro) => {//código a ser executado}. Na declaração da nossa função callback, estamos dizendo que ela irá receber um parâmetro que é o resultado do cálculo do salário líquido, e o código que ela irá executar será uma atribuição e depois um console.log, informando o salário líquido.

(resultado) => {
     salarioLiquido = resultado;
     console.log(`O salário liquido é ${salarioLiquido}`);}

Na hora em que se está declarando a callback pode surgir a dúvida: “mas de onde vai vir esse valor ‘resultado’ que estou utilizando?”. A sacada está aí! A variável ‘resultado’ está na declaração da callback para representar um parâmetro, ou um valor se preferir, que será passado quando a função callback for invocada dentro da função getSalario. Portanto, quando a função callback for executada, ela será executada assim:

(liquido) => {
     salarioLiquido = liquido;
     console.log(`O salário líquido é ${salarioLiquido}`);}

Nesse caso, líquido é o valor calculado na função getSalario. Portanto, uma callback é uma função que te permite operar em cima do retorno de outras funções da forma que for necessário. Eu poderia, por exemplo, ter passado o seguinte código na declaração:

(resultado) => {
  let bonus = 100;
salarioLiquido = resultado + bonus;
     console.log(`O salário líquido é ${salarioLiquido}`);}

E aí, entendeu o que são funções callback? Agora, você já sabe usar essa ferramenta maravilhosa da programação assíncrona.

No próximo texto, iremos aprender a usar de forma mais profissional as funções callback.

Até mais!