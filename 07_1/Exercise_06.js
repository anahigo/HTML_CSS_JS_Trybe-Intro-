/* Array */
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Autocad',
  'Revit'
];

/* Função 2 */
const mySkills = string => `${string} 
Minhas cinco habilidades são: 
${skills.sort().join(', \n')} 
#goTrybe`;

/* Função 1 */
let phrase = 'Tryber x aqui!';
const replaceString = string => mySkills(phrase.replace('x', string));

/* Testando */
const replaceWord = 'Ana';
console.log(replaceString(replaceWord));
