# Class Exercise
1 - Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.

<!DOCTYPE html>
<html>
  <body>
    <h2 id="page-title">Título</h2>
    <p id="paragraph">Dê uma cor para este parágrafo!</p>
    <h4 id="subtitle">Subtítulo</h4>
    <p id="second-paragraph">Segundo parágrafo!</p>

    <script>
      var paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>

Agora você! Faça o seguinte:

1.1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
1.2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
1.3 - Por fim, recupere o subtítulo e altere-o também.

2.1 - Adicione ao seu HTML uma classe com alguns estilos para os seus dois parágrafos.
2.2 - Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
2.3 - Altere algum estilo do primeiro deles.
2.4 - Recupere o subtítulo pela tag.

# Class Bônus
https://www.w3schools.com/code/tryit.asp?filename=G0L36UUZCQWW
<!DOCTYPE html>
<html>
<body>
<!-- creating the squares and columns divs -->
<div id="stack">
	<div class="column_left"> 
		<div>
        	<div>	
			</div>
    	</div>
    	<div>
        	<div></div>
    	</div>
 	</div>
 	<div class="column_right">
    	<div>
        	<div>	
			</div>
    	</div>
    	<div>
        	<div>
			</div>
    	</div>
  	</div>
</div>
<style>



#stack{
	height:20rem;
	width:20rem;
	display:flex;
	flex-direction:row;
	justify-content:space-evenly;
	align-items:center;
	border: solid black 4px;
}

.column_left, .column_right{
	
    height:18rem;
	width:8rem;
    margin:auto;
	display:flex;
	flex-direction:column;
    justify-content:space-evenly;
    border: solid black 4px;
    }
.column_left>div, .column_right>div{
	height:5rem;
	width:5rem ;
	display:flex;
	align-items:center;
    justify-content:center;
    margin:auto;
    border: solid black 4px;
}  

div>div>div>div{
    height:2.5rem;
	width:2.5rem; 
    border: solid black 4px;
}



</style>
<script>

//coloque seu código aqui.

</script>

</body>
</html>

