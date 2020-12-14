ES6 - Desestruturando objetos
matheus-castiglioni
matheus-castiglioni
18/10/2017

Formação Front End
Muitas vezes precisamos extrair o valor de algum objeto em JavaScript:


const aluno = {nome : "Matheus", 
                idade : "23", 
                email : "matheushcastiglioni@gmail.com"
              };

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.email);
Veja que para imprimir simples informações de um JSON representando um aluno foram necessárias 3 linhas de código. Além disso, note que em três das quatros linhas temos uma grande repetição de código, que seria a variável onde o objeto JSON está armazenado.

Uma tarefa às vezes muito repetitiva e verbosa...

Com todos esses recursos que o JavaScript vem ganhando, e essa sendo uma tarefa muito comum no dia a dia, será que não existe uma maneira mais simples e menos verbosa como essa?

Desestruturando o Objeto
Considerando o nosso exemplo inicial, uma das maneiras para diminuirmos o nosso código seria devolver os atributos do objeto de uma vez, e então, dessa forma, a gente chamaria eles sem a necessidade de um objeto. Mas será que isso é possível?

Sim é possível, para isso o JavaScript na versão ES6 lançou o chamado "Desestruturação de objetos", visando facilitar essa tarefa de extração de valores referente a um determinado objeto, mas como seria essa nova extração?


const aluno = {nome : "Matheus", 
               idade : "23", 
               email : "matheushcastiglioni@gmail.com"
               };

const {nome, idade, email} = aluno;
console.log(nome);
console.log(idade);
console.log(email);
Veja que em apenas uma linha conseguimos pegar o valor de todos os atributos de nosso objeto e criar uma variável para eles, mas afinal, como foi possível imprimir o valor referente aos dados do aluno?

Primeiramente vamos reparar na estrutura de nosso objeto, podemos notar que dentro dele existem três informações, sendo elas: Nome, Idade e Email, respectivamente os mesmos nomes de nossas variáveis informadas dentro das chaves no lado esquerdo. Então, basicamente, a desestruturação de objeto segue a seguinte sintaxe:


[{Variáveis}] = [Objeto em JSON];
Então quer dizer que se tivermos um objeto:


const fornecedor = {razaosocial : "Alura - Cursos Online", 
                    cnpj : "00.000.000/0000-00", 
                    email : "suporte@alura.com.br"
                    };
"Basta informar no lado direito o nome dos campos dentro das chaves que eu pretendo pegar?"

Sim, dentro das chaves é onde fazemos a assossiação dos campos que pretendemos extrair de um determinado objeto JSON.

Por exemplo, se quisermos pegar apenas a razão social do objeto fornecerdor, podemos fazer da seguinte maneira:


const {razaosocial} = fornecedor;
console.log(razaosocial);
Assim conseguimos extrair apenas a informação que precisamos, ou seja, podemos passar N campos dentro de nosso objeto.

Cuidados com a Desestruturação de Objetos
A princípio, desestruturar um objeto parece resolver todos os nossos problemas, certo? Mas e se informarmos um campo que não existe?


const {endereco} = fornecedor;
console.log(endereco);
Como de costume, o JavaScript não vai encontrar o campo com o nome que informamos, pois ele não existe. Sendo assim, não será realizada a associação. Em outras palavras, a variável ficará com o valor undefined.

Mas, e se por acaso recebermos o seguinte objeto:


const json = {a : "Matheus", 
              b : "23", 
              c : "matheushcastiglioni@gmail.com"
              };
Veja que, para nós, esse objeto trata-se de um aluno onde a, b e c são informações referente ao seu nome, idade e email respectivamente, nesse caso vamos ter que criar variáveis com esses nomes sem significado?

Felizmente, não! A equipe responsável pelo desenvolvimento da funcionalidade já pensou nisso e criou o recurso para referenciar um objeto mas trocando seu nome na criação da variável:


const {a:nome, b:idade, c:email} = json;
console.log(nome);
console.log(idade);
console.log(email);
Repare que agora informamos qual campo desejamos extrair a informação de nosso JSON, e passamos para uma nova variável com o nome logo após os dois pontos, seguindo a seguinte sintaxe:


[{Campo_do_objeto:Nome_para_variavel}] = [Objeto];
Seria o mesmo que fazer:


const nome = json.a;
const idade = json.b;
const email = json.c;
console.log(nome);
console.log(idade);
console.log(email);
Veja novamente como economizamos linhas e deixamos nosso código muito menos verboso! Mas então devemos usar esse tal de desestruturação sempre que precisamos extrair informações do JSON?

Acredito que devemos usar sempre que precisamos economizar a verbosidade. Isso significa que, se precisamos pegar apenas uma informação talvez não seja tão vantajoso utilizar tal recurso.

Desvantagens no uso da Desestruturação de Objetos
Certo, agora já mostrei as vantagens, já dei exemplos para us... E onde ficam as desvantagens?

Embora seja menos verboso, em algumas situações o destructuring pode aumentar a complexidade do código, ficando um pouco mais complicado caso você não esteja acostumado com a nova funcionalidade.

Outro ponto a destacar é que quando usamos a desestruturação sempre atribuímos os valores desejados em variáveis, sendo assim, quando uma deixar de ser usada, será necessário apagá-la manualmente.

Por último, não menos importante... Como já foi mencionado no artigo, quando passamos o nome de algum atributo que não existe dentro do nosso objeto, a variável torna-se undefined.

Para saber mais
Para finalizar, também podemos utilizar a desestruturação em funções, imagine que temos uma função responsável por imprimir as informações de nossos alunos:


function imprimeDadosDoAluno(aluno) {
    console.log(aluno.nome);
    console.log(aluno.idade);
    console.log(aluno.email);
}
imprimeDadosDoAluno(aluno);
Para evitar a repetição da variável aluno, podemos utilizar a nova funcionalidade:


function imprimeDadosDoAluno({nome, idade, email}) {
    console.log(nome);
    console.log(idade);
    console.log(email);
}
imprimeDadosDoAluno(aluno)
Em ambas as funções e chamadas, teremos o mesmo resultado.

Caso tenha interesse em conhecer e saber um pouco sobre a história do JavaScript tem um post que fiz em meu blog.

Aqui na Alura temos uma Formação Front-End onde ensinamos Javascript do básico até o avançado, passando interação com elementos do DOM até programação funcional e testes.