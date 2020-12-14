# Parte IV - Object.entries
O método Object.entries retorna um array com os pares chave / valor do objeto. Para visualizar seu retorno, veja o exemplo abaixo:

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
/*
[
  [ 'França', 'Paris' ],
  [ 'Brasil', 'Brasília' ],
  [ 'Espanha', 'Madrid' ],
  [ 'Portugal', 'Lisboa' ]
]
*/

Observe que o retorno dele é um array e que cada um de seus elementos é um segundo array com apenas dois dados, a chave do objeto e o seu valor. Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

/*
[
  [ 'França', 'Paris' ],
  [ 'Brasil', 'Brasília' ],
  [ 'Espanha', 'Madrid' ],
  [ 'Portugal', 'Lisboa' ]
]
--------
Pais: França
Capital: Paris
--------
Pais: Brasil
Capital: Brasília
--------
Pais: Espanha
Capital: Madrid
--------
Pais: Portugal
Capital: Lisboa
*/

# Texto Externo
O método Object.entries() retorna uma array dos próprios pares  [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain).

Sintaxe
Object.entries(obj)

Parâmetros
- obj
O objeto cujos próprios pares [key, value] de propriedades enumeráveis deverão ser retornados.

- Valor de retorno
Uma array de pares [key, value] enumeráveis de propriedades de um dado objeto.

Descrição
Object.entries() retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto. A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.

Exemplos
var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// objeto array-like
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// objeto array-like com ordenação aleatória de chave (key)
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// argumento não-objeto será convertido (conversão implícita) para um objeto
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// itera graciosamente através de chave-valor (key-value)
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Ou, usando array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"     
});