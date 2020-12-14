ES6: 3 novas maneiras de definir propriedades de objeto em JavaScript
Última modificação em 20 de junho de 2017
JAVASCRIPT


Código padrão repetitivo é algo que assombra a maioria dos desenvolvedores até certo ponto. É como uma coceira que não pode ser coçada. Isso o afasta do fluxo, bagunça seu código e confunde as partes importantes.

O que adoro no ES6 é que ele cuida de muitos códigos repetitivos irritantes, deixando você com uma base de código clara com foco nas partes importantes.

Já falei sobre desestruturação , a propagação da sintaxe e novas maneiras de declarar variáveis ​​usando leteconst .

Nesta postagem, continuaremos a olhar para o ES6 e seus recursos, examinando três novas maneiras de definir propriedades durante a inicialização do objeto .

Vamos mergulhar!

A abreviação da propriedade
A abreviação de propriedades trata da remoção de duplicações.

Digamos que temos duas variáveis ​​- namee age.

const name = "Luke";  
const age = 24;  
Agora, se quisermos atribuir essas variáveis ​​às propriedades do objeto com nomes idênticos, teríamos que repetir tanto para a propriedade para dar o nome quanto para o valor para se referir à nossa variável.

{
  name: name,
  age: age
}
Esta repetição de namee agesente um pouco desnecessária, certo? Bem, isso é o que ES6 cuidou da abreviação de propriedade .

{
  name,
  age
}
Simplesmente substituindo name: namepor name, JavaScript entende que você deseja pegar o valor namee atribuí-lo a uma propriedade com o mesmo nome da variável.

Propriedades do método
Outro uso popular de um objeto é definir métodos. Isso é feito atribuindo funções às propriedades do objeto.

Para manter a simplicidade, vamos criar duas funções getter para buscar nome e idade.

{
  getName: function() { return "Luke" },
  getAge: function() {return 24 }
}
Novamente, essa solução se torna bastante prolixa.

Bem, não mais. Em ES6, podemos usar açúcar sintático para tornar nossas definições de método muito mais concisas.

{
  getName() { return "Luke" },
  getAge() {return 24 }
}
Computando nomes de propriedades
A última coisa que veremos é a possibilidade de calcular os nomes de suas propriedades avaliando uma expressão.

Digamos que temos uma função - getLo- que simplesmente retorna a string ”lo”.

var getLo = () => "lo"  
Agora vamos criar nosso nome de propriedade combinando a string “hel” e a execução de getLo(), que resulta na string hello .

Antigamente, isso era resolvido em duas etapas - primeiro inicializando o objeto e, em seguida, usando os colchetes para criar uma propriedade no objeto.

var obj = {};  
obj[ "hel" + getLo() ] = "world";  
Isso não é tão ruim, mas podemos fazer ainda melhor com ES6 movendo os colchetes com nossa expressão diretamente para a inicialização do objeto.

let obj2 = {  
  [ "hel" + getLo() ]: "world"
}
Aí está - 3 novas maneiras de definir propriedades em JavaScript.
