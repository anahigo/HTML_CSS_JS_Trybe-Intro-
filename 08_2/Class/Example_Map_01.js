//Array.map 

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

// com for
const fullNamesFor = [];
for(let i = 0; i < persons.length; i += 1){
  fullNamesFor.push(`${persons[i].firstName} ${persons[i].lastName}`);
}
console.log(fullNamesFor); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// com map:

const fullNamesMap = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNamesMap ); //[ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
