# Instalando o Jest
1) Para começar a instalar o Jest, você precisa ter o npm instalado e funcionando corretamente, abaixo temos um passo a passo, feito para Linux, sabendo disso, então vá ao seu terminal e digite: npm -v

2) Se ele te mostrar um número de versão (por exemplo, 6.14.4), tudo certo e você pode pular os comandos desse passo. Caso ele retorne um erro dizendo que não encontrou o comando você deverá executar a instalação do npm, descrita abaixo:
  a. Primeiro vamos atualizar a nossa lista de repositórios: sudo apt update
  b. Agora com a lista de repositórios atualizada, vamos instalar o npm, lembrando que ao instalar com apt, você pode utilizar o comando de qualquer local, e em todos as próximas vezes você não deverá reinstalar, só execute esse passo caso não tenha o npm instalado ainda: sudo apt install npm

3) Com o npm verificado, vamos criar uma pasta para colocar nosso código e instalar o Jest. É importante criar uma pasta porque ele vai instalar criar arquivos e pastas e assim tudo fica mais organizado e você evita que as configurações de um projeto interfiram no outro. Então crie uma pasta, entre na mesma e depois digite no terminal o comando abaixo para instalar o Jest: npm install --save-dev jest

Esse comando irá instalar tudo o que é necessário para o Jest, criando a pasta node_modules e o arquivo package-lock.json.

Explicando o que são esses três:
  a. node_modules é a pasta que guarda todos os arquivos baixados das dependências instaladas.
  b. package.json é onde listamos as dependências e versões (entre outras informações da aplicação).
  c. package-lock.json é um arquivo que “trava” as versões das dependências. Quando outros desenvolvedores executarem npm i para baixar as dependências, este arquivo garante que serão instaladas as mesmas versões para todo mundo.

4) Chegamos ao último passo da instalação, que é criar um arquivo chamado package.json e escrevendo o seguinte código dentro dele:

{
  "scripts": {
    "test": "jest"
  }
}

5) Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:

const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

Depois disso, vamos até o terminal digitar npm test, se você receber uma resposta parecida com a resposta abaixo, tudo certo com a instalação!

Caso você não veja a tela acima, tente rever os passos, o arquivo exemplo e o nome do arquivo, caso ele não tenha o .test ou .spec no nome, o Jest não tenta ler o arquivo, porque não reconhece como um arquivo de teste, isso será explicado melhor durante o conteúdo de hoje.