# Parte II - Object.keys
Agora, você aprenderá sobre o método Object.keys. Ele é utilizado para listar as chaves de um objeto, retornando-as em um array.

Veja o exemplo abaixo, que mostra como usar o Object.keys na prática. Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);
/*
Estudante 1
Html, Nível: Muito Bom
Css, Nível: Bom
JavaScript, Nível: Ótimo
SoftSkills, Nível: Ótimo
*/

console.log('Estudante 2');
listSkills(student2);
/*
Estudante 2
Html, Nível: Bom
Css, Nível: Ótimo
JavaScript, Nível: Ruim
SoftSkills, Nível: Ótimo
Git, Nível: Bom
*/

Verifique que usamos a mesma função para mostrar os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.

# Texto Externo 1
O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in  enumera propriedades que estejam na cadeia de protótipos).

Sintaxe
Object.keys(obj)

Parametros
- obj
O objeto cujas propriedades são enumeráveis.

Descrição
Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.

Exemplos
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array com objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array como objeto com ordenação aleatória por chave
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
Se você quiser todas as propriedades, mesmo que não enumeráveis, consulte:Object.getOwnPropertyNames().

Notas
Em ES5, Se o argumento para o método this não é um objeto(um primitivo), em seguida ele irá causar um TypeError. Em ES2015, um argumento não-objeto será forçado a um objeto.

Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)

# Texto Externo 2 - Como usar Object.keys em JavaScript
Considere um objeto:

var user = { 
  name: "Jagathish", 
  age: 20 
}  

No userobjeto, name e age são as chaves do objeto. As chaves também são chamadas de “propriedades” do objeto. Podemos acessar o valor da propriedade por obj.propertyName ou obj[propertyName].

O método Object.keys() retorna uma matriz de strings de nomes de propriedade / chave do próprio objeto. O que se segue é o que obtemos para nosso user objeto:

Object.keys (user); // ["name", "user"]

Vejamos outro exemplo:

var user = { 
  name: "Jagathish", 
  age: 20, 
  getAge () { 
    return this.age; 
  }
 }

Object.keys (user); // ["name", "age", "getAge"]

Os nomes das chaves são retornados para todas as propriedades, seja uma função ou tipo de variável primitiva. A ordem dos nomes das chaves no array será a mesma que estavam no objeto.

Sintaxe
Object .keys ( obj )

Parâmetro: obj
O único parâmetro que a função Object.keys() assume é o próprio objeto.
- O objeto do qual as próprias propriedades do enumerável devem ser retornadas.
- Se passarmos um objeto vazio, ele retornará um array vazio.
- Se não passarmos nenhum argumento (o que equivale a passar undefined) ou se passarmos null, ocorrerá um erro.

Valor de retorno: Array de strings

Um array de strings que representa todas as propriedades enumeráveis ​​do objeto fornecido.

var array = ['a', 'b', 'c'];
console.log (Object.keys (array)); // ['0', '1', '2']
var funObj = { 
      fun: function () { 
                ... 
      } 
} 
console.log (Object.keys (funObj)) // ["fun"]

Quando passamos um não-objeto exceto undefined, ele será coagido a um objeto.

Object.keys (123) // []
Object.keys (123.34) // []
Object.keys ("hi") // ["0", "1"]
