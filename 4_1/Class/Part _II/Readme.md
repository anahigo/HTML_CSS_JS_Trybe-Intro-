# link - https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1

# 1 - Create a variable called carName, assign the value Volvo to it.

# 2 - Create a variable called x, assign the value 50 to 

# 3 - Display the sum of 5 + 10, using two variables: x and y.

# 4 - Create a variable called z, assign x + y to it, and display the result in an alert box.

# 5 - On one single line, declare three variables with the following names and values:
firstName = "John"
lastName = "Doe"
age = 35 
6 - Siga as instruções dentro do exercício de constantes
link - https://www.w3schools.com/code/tryit.asp?filename=G86HC7RKH8RM
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript const</h2>

<!--
   Informações importantes!
   - Use o botão 'Run >>' para executar o código.
   - Não se preocupe com o bloco try{} catch(err){},
   ele esta ali apenas para te mostrar o erro que
   acontece no momento em que você tenta atribuir
   valor a uma constante.
   - Siga a instrução dentro do bloco 'try'.
-->

<p id="demo"></p>
<p id="value"></p>
<p id="updatedValue">Valor inicial vazio</p>

<script>
try {
  /* Após rodar uma vez, tente trocar `const`
  por `let` e execute novamente*/
  
  const PI = 3.141592653589793;
  document.getElementById("value").innerHTML = PI;
  PI = 3.14;
  document.getElementById("updatedValue").innerHTML = PI;
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}
</script>

</body>
</html>
