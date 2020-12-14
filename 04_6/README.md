# Parte I
  Exercício 1 e 2 - https://www.teaching-materials.org/jsweb/exercises/events
  Exercises: Events
Mad Libs
Start with this webpage, which has several input elements and a button:
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title></title>
 </head>
 <body>
 
 <h1>Mad Libs</h1>
 
 <ul>
  <li>Noun: <input type="text" id="noun">
  <li>Adjective: <input type="text" id="adjective">
  <li>Someone's Name: <input type="text" id="person">
 </ul>
 
 <button id="lib-button">Lib it!</button>
  
 <div id="story"></div>
  
 </body>
</html>
Add a script tag to the bottom of the page for your code.
Add an event listener to the button so that it calls a makeMadLib function when clicked.
In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
See Solution
Calculator
Start with this webpage, which has inputs and buttons for things to calculate:
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculator</title>
</head>
<body>

  <label>Square this number:
    <input type="number" id="square-input" size="2">
  </label>
  <button id="square-button">Calculate</button>
  <br><br>
  
  <label>Half this number:
    <input type="number" id="half-input" size="2">
  </label>
  <button id="half-button">Calculate</button>
  <br><br>
  
  <label>
    Fraction:
    <input type="number" id="percent1-input" size="2">
  </label>
  <label>
    Whole:
    <input type="number" id="percent2-input" size="2">
  </label>
  <button id="percent-button">Calculate</button>
  <br><br>
  
  <label>Calculate area of circle with radius:
    <input type="number" id="area-input" size="2">
  </label>
  <button id="area-button">Calculate</button> 
  <br><br>
  <div id="solution"></div>

  
</body>
</html>
Add a script tag, and add the functions from the calculator exercise (view the solution if you haven't done it yet).
For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
Bonus: respond to key presses so that the user doesn't have to click the button.
See Solution

# Parte II
  Exercício 3 e 4 - http://nptcstudents.co.uk/andrewg/jsweb/JavaScriptEventHandlersExercise.html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <title>JavaScript event handlers exercise</title>
    	<!-- load css from jsweb -->
        <link rel="stylesheet" type="text/css" href="http://nptcstudents.co.uk/andrewg/jsweb/css/reset.css"/>    
        <link rel="stylesheet" type="text/css" href="http://nptcstudents.co.uk/andrewg/jsweb/css/jsweb.css"/>
        
        
        
        <!-- JavaScript could go up here -->
        <!-- JavaScript could go up here -->   
        <!-- JavaScript could go up here -->    
        
  
  
    </head>
    
    <body>
    <div id="excontainer">
            <div id="pagecontent">
				<h1>Event handlers exercise</h1>
                
			    <p>Download this page and open with Dreamweaver.  Or right click and select &quot;View Source&quot;, then cut and paste the code to Dreamweaver.</p>
                
                <h2>Task 1</h2>
                
                <p>Add a HTML button to this page in the area highlighted below.  Using the <b>onClick()</b> event handler have the button, when clicked, open an <b>alert()</b> box which says &quot;You clicked the button&quot;. 
                
                <div class="exampleblock">            
                    Add your button here
                </div>                
			
            	<h2>Task 2</h2>
                
                <p>Add two lines of script to the &lt;script&gt; tag in the source of this page marked for this task (<b>lines 40 - 60</b>).  The first line should declare a new variable called <b>gamePrice</b> and should assign it the value <b>39.99</b>.  The second should declare a new variable called <b>discount</b> and assign it the value 0.20.</p>
                
                <p>Add a HTML button below the &lt;script&gt; tag.  Give this button an <b>onClick</b> event handler.  When the button is clicked it should multiply <b>gamePrice</b> by <b>discount</b> and present an alert box containing the phrase &quot;&pound;(result) off!&quot;.  You will need <a href="http://nptcstudents.co.uk/andrewg/jsweb/maths.html" target="_blank">concatenation</a> to achieve this.</p> 
              
            	<script language="javascript" type="text/javascript">
				<!-- JavaScript for task 3 here -->				
				<!-- JavaScript for task 3 here -->
				<!-- JavaScript for task 3 here -->
				</script>
                
                <p>You may want to consider using JavaScript's built in <a href="http://www.w3schools.com/js/js_obj_math.asp" target="_blank">Maths object</a> to round the number you get in your result to a more reasonable one.</p>
            
 
                <h2>Extensions</h2>
				<ol>
					<li>                
						<p>For this task you will need two images of the same size.  Add one image into this page using a html <b>&lt;img /&gt;</b> tag.  Using the <b>onMouseOver()</b> and <b>onMouseOut()</b> event handlers try and make the image change to the second image when the mouse pointer hovers over it, and then swap back to the first image when the mouse pointer is moved off of the image.</p>
						<p><a href="http://www.htmlite.com/JS019.php" target="_blank">This tutorial</a> may be of help!</p>   
					</li>
				</ol>            
            
            
            
			</div>
        </div>
	</body>
</html>

# Parte III

  Exercício 5 - https://www.teaching-materials.org/jsweb/exercises/animation
  Exercises: Animation
The Cat Walk
Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>
  
  <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
 </body>
</html>
Add a script tag at the bottom of the page, where you'll put all your code.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

See Solution

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

See Solution

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

See Solution

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

# Parte IV
  Exercício 6 - https://codepen.io/prosetech/pen/oRxMmZ
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Creepster|Text+Me+One" rel="stylesheet">
    <title>A Creepy Story</title>
    <style>
      body {
        margin: 20px;
        font-family: 'Text Me One', sans-serif;
        font-weight: bold;
        font-size: 20px;
      }
    
      body.dark {
        color: white;
        background: black;
      }
    
      h1 {
        font-family: 'Creepster', cursive;
        font-weight: normal;
        font-size: 60px;
        margin: 5px;
      }
    
      button {  
        display: block;
        padding: 8px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
    
      .textEntry {
        margin-top: 12px;
        margin-bottom: 15px;
      }
    </style>
  </head>
  <body>
    <h1>The Basement</h1>
    <p id="story">I knew I shouldn't go there, in that dank, cold little place. But I wanted to find my friend, and he was hiding in the basement.</p>
    
    <button onclick="goDark()">Get In The Mood</button>
    <div class="textEntry">Type your name here, if you dare: <input type="text" id="name" autocomplete="off" oninput="typeAndScream()"></div>
    <button onclick="complainMessage()">Please, Please Don't Click Me</button>
    <button onclick="finishTheStory()">Tell Me What Happened!</button>
    <audio id="audio" src="http://reboot-me.com/ouch.mp3" type="audio/mpeg"></audio>
    <script>
    var personName = "";

    function complainMessage() {
      alert("I told you not to do that " + personName);
    }

    function typeAndScream() {
      document.getElementById("audio").play();
      personName = document.getElementById("name").value;
    }

    function goDark() {
      var body = document.getElementsByTagName("body")[0];
      if (body.className == "") {
        body.className = "dark";
      }
      else {
        body.className = "";
      }
  
      }

    function finishTheStory() {
      document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
    }
    </script>
  </body>
</html>