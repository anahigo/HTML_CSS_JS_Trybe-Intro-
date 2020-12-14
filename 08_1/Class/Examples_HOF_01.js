/* Sem Array.forEach */ 

const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}

let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote(students[i]);
}

console.log(students);
/* [
    { name: 'Maria', note: 70, approved: 'Aprovado' },
    { name: 'José', note: 56, approved: 'Recuperação' },
    { name: 'Roberto', note: 90, approved: 'Aprovado' },
    { name: 'Ana', note: 81, approved: 'Aprovado' }
  ] */

/* Com Array.forEach */ 
  const studentsNew = [
    { name: 'Maria', note: 70, approved: '' },
    { name: 'José', note: 56, approved: '' },
    { name: 'Roberto', note: 90, approved: '' },
    { name: 'Ana', note: 81, approved: '' }
  ];
  
  function verifyNote (studentNew){
    if (studentNew.note >= 60) {
      studentNew.approved = 'Aprovado';
    } else {
      studentNew.approved = 'Recuperação';
    }
  }
  
  studentsNew.forEach(verifyNote);
  
  console.log(studentsNew);
  /* => [
      { name: 'Maria', note: 70, approved: 'Aprovado' },
      { name: 'José', note: 56, approved: 'Recuperação' },
      { name: 'Roberto', note: 90, approved: 'Aprovado' },
      { name: 'Ana', note: 81, approved: 'Aprovado' }
    ]*/