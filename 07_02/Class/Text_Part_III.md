# Parte III - Object.values
O Object.values segue a mesma lógica que o Object.keys, a diferença está em que ele lista os valores de cada chave.

Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.values através do exemplo abaixo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores.

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));
//[ 'Muito Bom', 'Bom', 'Ótimo', 'Ótimo' ]

// Com Object.values
console.log(listSkillsWithValues(student));
[ 'Muito Bom', 'Bom', 'Ótimo', 'Ótimo' ]

Observe como a função listSkillsWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.

# Texto Externo
O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).

Sintaxe
Object.values(obj)

Parâmetros
- obj
O objeto cujos valores das propriedades enumeradas serão retornados.

- Valor de retorno
Um array contendo os valores das propriedades enumeradas do dado objeto.

Descrição
Object.values() retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto. A ordem das propriedades é a mesma que a dada pelo laço sobre os valores da propriedade do objeto manualmente.

Exemplos
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array como objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array como objeto com ordenação de chave aleatória
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo é a propriedade a qual não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// argumento não-objeto será coagido num objeto
console.log(Object.values("foo")); // ['f', 'o', 'o']