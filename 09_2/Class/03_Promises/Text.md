# Promises
As promises se comportam de forma muito parecida com as funções que já conhecemos mas existem 3 pontos de destaque das promises em relação à outras funções. 
  - O primeiro ponto é que as promises são assíncronas, ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções. 
  - Outro ponto importante é que as promises tem "superpoderes", funções extras para facilitar o controle do fluxo assíncrono. 
  - E a terceiro é a forma com que elas são construídas. Para criar uma nova promise, usamos um Construtor.

Agora que você já tem uma noção básica do que esperar, vamos passo-a-passo construindo uma promise para que você entenda cada tijolinho que forma nossa superfunção, vamos lá ?!

# Construtor
Em seu editor, crie um novo arquivo e escreva o seguinte comando:
const promise = new Promise((resolve, reject) => {

});

Para criar a promise, utilizamos o construtor Promise junto com o operador new. Um construtor não é nada mais do que uma função especial que cria um objeto a partir de uma classe. Se você nunca ouviu falar de classes ou construtores, não se preocupe, seu entendimento não é nescessário para entender promises, apenas veja sua sintaxe.

O construtor recebe uma função com 2 parâmetros, resolve e reject, fique tranquilo que já já vamos ver a importância desses dois. Um ponto a se notar aqui é que usamos uma arrow function para passar a função como parâmetro pro construtor mas você pode utilizar qualquer construção, desde que seja uma função com 2 parâmetros.

# Estados da promise
A promise tem 3 estados. Pending, Resolved e Rejected. Quando a promisse é executada ela entra automáticamente no estado Pending. Aqui é quando ela sai da fila e vai para sua "área especial". Ao voltar, ela pode voltar com um dos 2 estados, Resolved, se ocorreu tudo certo com sua execução ou Rejected, se ocorreu algum erro. É aqui que nossos parâmetros resolve e reject entram.

Da mesma forma que uma função tem o return para retornar uma resposta de sua execução, a promise tem o resolve e o reject, e é exatamente isso o que eles fazem, retornam uma resposta de sua execução. O resolve retorna uma resposta positiva, ou seja, você irá utilizá-lo quando quiser transmitir que ocorreu tudo bem. Já o reject retorna uma resposta negativa, ou seja, você irá utilizá-lo quando ocorrer algo errado. Existe apenas uma pequena diferença entre o resolve/reject e o return, equanto o return interrompe a excução da função quando é chamado, o resolve/reject não o fazem, por isso é importante utilizar um return antes de um deles quando não se quer que a execução continue (esse pattern se chama 'early-return' mas não se preocupe com nomes agora). Vamos colocar em prática o que vimos aqui!

Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 5 e 10, será um sucesso. Nosso programa ficaria assim:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

Execute algumas vezes o programa para ver o que acontece.
Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error! Essa é a principal diferença entre o resolve e o reject, exatamente o que queríamos demonstrar. Na próxima sessão vamos ver como tratar esse erro.

Repare também como usamos o return antes do reject para interromper a execução da função. Dessa forma o uso do else se torna desnecessário.
Ok, entendemos como funciona as promises, mas como elas são melhores que as callbacks para gerir o fluxo de execução? Vamos ver agora como gerir o fluxo assíncrono com mais 2 "superpoderes" das promises: .then() e .catch()!

# Gestores de fluxo
Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch(). Vamos começar falando sobre o .then(). Para isso , vamos refatorar nossa promise:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then(). A primeira é que passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise. A segunda é que o .then() é usado "em cadeia", um conceito chamado de chaining. Assim, podemos colocar vários .then() em cadeia e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

Vamos ver o que acontece no código acima. A promise é executada e após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number. Por sua vez, ele retorna a a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then(), que o usa para "logar" no console.

Ok, mas o erro continua acontecendo, o que podemos fazer em relação a isso? Agora entra o .catch()! Vamos adicioná-lo ao código:


const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number > 10 || number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

Se executarmos o código acima, vamos ver que o erro anterior desapareceu pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve, o .catch() recebe o retorno do reject, que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject, pula todos os .then() e é tratado no primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele, por esse motivo ele é geralmente usado no final.

E assim, nossa primeia promise está pronta!

Mas como isso entra nosso dia a dia ? Vamos utilizar promises para fazer requisições a uma API com uma das funções mais usadas pelas pessoas desenvolvedoras, o Fetch!