# https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_comparisons1

# 1 - Choose the correct comparison operator to alert true, when x is greater than y.

# 2 - Choose the correct comparison operator to alert true, when x is equal to y.

# 3 - Choose the correct comparison operator to alert true, when x is NOT equal to y.

# 4 - Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

# 5 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_equal
<!DOCTYPE html>
<html>
<body>

<h2>The = Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

# 6 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_plusequal
<!DOCTYPE html>
<html>
<body>

<h2>The += Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x += 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>


# 7 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_minequal
<!DOCTYPE html>
<html>
<body>

<h2>The -= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x -= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

# 8 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_multequal
<!DOCTYPE html>
<html>
<body>

<h2>The *= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x *= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

# 9 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_modequal
<!DOCTYPE html>
<html>
<body>

<h2>The %= Operator</h2>

<p id="demo"></p>

<script>
var x = 10;
x %= 5;
document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>

# 10 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison
<!DOCTYPE html>
<html>
<body>

<p>Input your age and click the button:</p>

<input id="age" value="18" />

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var age, voteable;
  age = document.getElementById("age").value;
  voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo").innerHTML = voteable + " to vote.";
}
</script>

</body>
</html>

# 11 - https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_12
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comparisons</h2>

<p>Input your age and click the button:</p>

<input id="age" value="18" />

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var age, voteable;
  age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo").innerHTML = voteable;
}
</script>

</body>
</html>
