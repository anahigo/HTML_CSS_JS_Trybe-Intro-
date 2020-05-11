# Testando 01
Abra um novo arquivo HTML, copie o código abaixo para dentro da tag body, salve o arquivo e execute-o em seu navegador.

<button id="btn" type="button">
  Clique aqui!
</button>
<div id="div-colorida" style="border: 4px solid green;">
  Ao clicar na caixa, o texto será alterado!
</div>

<script>
  const botao = document.querySelector('#btn');
  const caixaColorida = document.querySelector('#div-colorida');
        
  function abreCaixa() {
    let textoOriginal = 'Ao clicar na caixa, o texto será alterado!';
    let textoAlterado = 'Texto alterado! Clique novamente para voltar ao original';
            
    if (caixaColorida.innerText === textoOriginal){
      caixaColorida.innerText = textoAlterado;
    }
    
    else {
      caixaColorida.innerText = textoOriginal;
    }
  }

  botao.addEventListener('click', abreCaixa);
</script>

# Exercícios 
1 - https://codepen.io/johnatas-henrique/pen/xxbQeOb?__cf_chl_captcha_tk__=11f4bbd4cf3d441fe7fbff595a05d780b9cf2e29-1588547542-0-AdNbH7fbu2Ztwk3smQeNtTo83ogC9T9Pk63VIIrcOBi_2MmxGCn11df2cCmHDpeD-pfYbH4Uy0sn0ii3rQSS8mv2I_jhwEjT0OvyaSL1-qTtBGFm6cj-d9pE7HYTGylR0EaqSDxI6Zy8QJbMramNQJZa3SO4DnkGewdhW_zptR3UvUxgDkWXfjkZ1QsNITsCdOTHMAreRRodRGdmj6Gui4DuXdmcp_hnsj9pCpGMtIW1QlM6LCz0HsqqhmdBioMEgJHln0FV7crECIMXefB2nM0Eks4hiv3l_VZns7RwyNtquWF8HG8PceGRJXcse43BqfLDFpwq6kt-LCxzdaVdG5hp7jc4XPNOVwJdkjXAU8lytVcFAaa9QKoli-2iMrMotI0bNkyX61gcaF7Hh-BAT0aGhvMP5EwHVMKoWVPb-TtaAp5JL-Mq1NYUAxaesp3YuvB4OP33Vgo64pgXBelIu6-sAGRdQqNTVBTmwY5kN35YQG6B2VEW4mL3ZsNh4bheEZL6LI8FOkv-OjNzW8KrPU4G8FLuhiKSlY1rNGG1fT763_Mx1P9cUIBFlNEysbGmkI2fOhu4A-f5Jjfp3lC6nqM



<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width"/>
    <title>Exexcicio 2 </title>
    <style>
      .flexy {
        display: flex;
        font-size: 20px;
      }
      #input-texto {
        width: 80%;
        line-height: 24px;
      }
      .fonte {
        font-size: 32px;
        font-weight: 700;
      }
      .como-usar {
        border: 1px solid black;
        width: 75%;
      }
      .quadrado {
        border: 2px solid black;
        width: 100px;
        height: 100px;
        margin: 10px auto;
      }
    </style>
  </head>
  <body>
    <div class=flexy>
      <div class="como-usar">
        <span class="fonte">Instruções (leia tudo)
        </span><br>Escreva o nome de uma cor na caixa <strong>(em inglês)</strong> e depois <strong>clique fora da caixa de texto</strong> em qualquer lugar, o evento usado foi o change e ele vai mudar a cor do quadrado aqui do lado direito:<br>
        <input type=text id="input-texto"><br> Esse exemplo demonstra que devemos encontrar o <strong>melhor evento</strong> para nossos listeners, estamos tendo que clicar fora da caixa após digitar a cor, por conta de estarmos utilizando um evento que não
        é o melhor para esse tipo de trabalho.<br><br> Experimente na aba JS aqui mesmo, <strong>trocar</strong> o evento <strong>'change'</strong>, pelo evento <strong>'keyup'</strong> e teste novamente.
      </div>
    
      <div class="quadrado"></div>
    
    </div>
    <script> 
      const inputTexto = document.querySelector("#input-texto");
      const divQuadrado = document.querySelector(".quadrado");

      function corQuadrado() {
        divQuadrado.style.backgroundColor = inputTexto.value;
      }

      inputTexto.addEventListener("change", corQuadrado);

    </script>
</body>
</html>


2 - https://codepen.io/johnatas-henrique/pen/oNgQOoY
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width"/>
    <title>Exexcicio 3 </title>
    <style>
      .flexy {
        display: flex;
        font-size: 20px;
      }
      #input-texto {
        width: 80%;
        line-height: 24px;
      }
      .fonte {
        font-size: 32px;
        font-weight: 700;
      }
      .como-usar {
        border: 1px solid black;
        width: 75%; 
      }
      .caixa1, .caixa2 {
        border: 2px solid black;
        width: 100px;
        height: 100px;
        margin: 10px auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    </style>
  </head>
  <body>
    <div class=flexy>
      <div class="como-usar"><span class="fonte">Instruções (leia tudo)</span><br>Você tem dois quadrados, com nomes de Caixa 1 e Caixa 2, quando clicar na Caixa 1, a cor da Caixa 2 deve ser trocada para ciano.<br> Altere apenas o JavaScript, criando o event listener adequado.</div>
      <div class="caixa1">Caixa 1</div>
      <div class="caixa2">Caixa 2</div>
    </div>
    
    <script> 
      const caixaUm = document.querySelector(".caixa1");
      const caixaDois = document.querySelector(".caixa2");

      function trocaCor() {
        caixaDois.style.backgroundColor = "cyan";
      }
      //Crie seu event listener abaixo:

    </script>
</body>
</html>


3 - https://codepen.io/johnatas-henrique/pen/bGNQJXZ
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width"/>
    <title>Exexcicio 4 </title>
    <style>
      .flexy {
        display: flex;
        font-size: 20px;
      }
      #input-texto{
        width: 80%;
        line-height: 24px;
      }
      .fonte {
        font-size: 32px;
        font-weight: 700;
      }
      .como-usar {
        border: 1px solid black;
        width: 75%;
        }
      .caixa1, .caixa2 {
        border: 2px solid black;
        width: 100px;
        height: 100px;
        margin: 10px auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class=flexy>
      <div class="como-usar"><span class="fonte">Instruções (leia tudo)</span><br>Novamente dois quadrados, com nomes de Caixa 1 e Caixa 2:<br> Ao clicar uma vez na Caixa 1, a cor da Caixa 2 deve ser trocada para azul.<br> Ao dar um clique-duplo na Caixa 2, a Caixa 1 deve ser trocada
        para vermelho e a Caixa 2 para amarela.<br> Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite o link com todos os elementos.</div>
      <div class="caixa1">Caixa 1</div>
      <div class="caixa2">Caixa 2</div>
    </div>
    
      <div class="quadrado"></div>
    
    </div>
    <script> 
      const caixaUm = document.querySelector('.caixa1');
      const caixaDois = document.querySelector('.caixa2');

      function changeColors () {
        caixaUm.style.backgroundColor = 'red';
        caixaDois.style.backgroundColor = 'yellow';
      }
      function trocaCor () {
        caixaDois.style.backgroundColor = 'blue';
      }
      //Crie seu event listener abaixo:

    </script>
</body>
</html>

4 - https://codepen.io/johnatas-henrique/pen/jOEQovq
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width"/>
    <title>Exexcicio 5 </title>
    <style>
.flexy {
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
}

.flexy-s {
  width: 24%;
  display: flex;
  flex-wrap: wrap;
}

.caixa-texto {
  width: 100%;
  margin-left: 5px;
  border: 2px dashed black;
}

.fonte {
  font-size: 32px;
  font-weight: 700;
}
.como-usar {
  border: 1px solid black;
  width: 74%;
}
.caixa1, .caixa2 {
  border: 2px solid black;
  width: 100px;
  height: 100px;
  margin: 10px auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
    </style>
  </head>
  <body>
    <div class=flexy>
      <div class="como-usar">
        <span class="fonte">Instruções (leia tudo)</span><br> Agora, uma caixa de texto e dois quadrados, as instruções são as seguintes:<br> Ao digitar alguma coisa na caixa de texto, o texto da caixa 1 seja alterado para o que foi escrito dentro da caixa
        letra a letra, enquanto você digita.<br> Ao clicar em qualquer lugar fora da caixa de texto após digitar alguma coisa na mesma, o texto da Caixa 2 seja alterado.<br> Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite
        o link com todos os elementos.
      </div>
      <div class="flexy-s">
        <input type="text" class="caixa-texto" placeholder="Digite aqui">
        <div class="caixa1">Caixa 1</div>
        <div class="caixa2">Caixa 2</div>
      </div>
    </div>
    <script> 
      const caixaTexto = document.querySelector('.caixa-texto');
      const caixaUm = document.querySelector('.caixa1');
      const caixaDois = document.querySelector('.caixa2');

      function trocaTextoA () {
        caixaUm.innerText = caixaTexto.value;
      }
      function trocaTextoB () {
        caixaDois.innerText = caixaTexto.value;
      }
      //Crie seu event listener abaixo:
        
      
    </script>
</body>
</html>

5 - https://codepen.io/johnatas-henrique/pen/jOEQovq
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width"/>
    <title>Exexcicio 6 </title>
    <style>
      .flexy {
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
      }
      .flexy-s {
        width: 24%;
        display: flex;
        flex-wrap: wrap;
      }
      .flexy-gs {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      .caixa-texto {
        width: 100%;
        margin-left: 5px;
        border: 2px dashed black;
      }
      .fonte {
        font-size: 32px;
        font-weight: 700;
      }
      .como-usar {
        border: 1px solid black;
        width: 74%;
      }
      .caixa1, .caixa2 {
        border: 2px solid black;
        width: 80px;
        height: 80px;
        margin: 10px auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .botao1,
      .botao2 {
        margin: 0 auto;
      }

    </style>
  </head>
  <body>
    <div class=flexy>
      <div class="como-usar">
        <span class="fonte">Instruções (leia tudo)</span><br> Agora, uma caixa de texto, dois quadrados e dois botões, as instruções são as seguintes:<br>
        Ao passar o mouse no botão, troque a cor da caixa correspondente para verde.<br>
        Ao clicar no botão, troque o texto da caixa correspondente para o que estiver escrito na caixa de texto.<br>
        Mostre um alerta quando o usuário colar alguma informação dentro da caixa de texto escrito: "Go Trybe!"<br>
        Altere apenas o JavaScript, criando todo o necessário para o event listener funcionar adequadamente.
      </div>
      <div class="flexy-s">
        <input maxlength="50" type="text" class="caixa-texto" placeholder="Digite aqui">
        <div class="flexy-gs">
          <div class="caixa1">Caixa 1</div>
          <div class="caixa2">Caixa 2</div>
        </div>
        <div class="flexy-gs">
          <button class="botao1">Botão 1</button>
          <button class="botao2">Botão 2</button>
        </div>
      </div>
    </div>
    <script> 
      //Crie seu código abaixo dessa linha:
    </script>
</body>
</html>
