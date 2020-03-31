let posicaoRainha = {
    linha: 4,
    coluna: 4,
  }
  ​
  let posicaoPeca = {
    linha: 7,
    coluna:2,
  }
  ​
  function ataqueDaRainha(rainha, peca) {
  ​
    if(verificaAtaqueEmLinhaReta(rainha, peca)) return 'Linha Reta';
  ​
    if(verificaDiagonalSuperiorDireita(rainha, peca)) return 'Diagonal Superior Direita';
  ​
    if(verificaDiagonalSuperiorEsquerda(rainha, peca)) return 'Diagonal Superior Esquerda';
  ​
    if(verificaDiagonalInferiorEsquerda(rainha, peca)) return 'Diagonal Inferior Esquerda';
    
    if(verificaDiagonalInferiorDireita(rainha, peca)) return 'Diagonal Inferior Direita';
  ​
    return 'A rainha não pode atacar dessa vez :(';
  }
  ​
  function verificaAtaqueEmLinhaReta(rainha, peca) {
    return rainha.linha === peca.linha || rainha.coluna === peca.coluna;
  }
  ​
  function verificaDiagonalSuperiorDireita(rainha, peca) {
    for(let i = 1; i < 8; i+=1) {
      let linhaRainha = rainha.linha + i;
      let colunaRainha = rainha.coluna + i;
  ​
      if (!posicaoValida(linhaRainha, colunaRainha)) return false;
      
      if (pecaAtacada(linhaRainha, colunaRainha, peca)) {
          return true;
      }
    }
    
    return false;
  }
  ​
  function verificaDiagonalSuperiorEsquerda(rainha, peca) {
    for(let i = 1; i < 8; i+=1) {
      let linhaRainha = rainha.linha + i;
      let colunaRainha = rainha.coluna - i;
  ​
      if (!posicaoValida(linhaRainha, colunaRainha)) return false;
      
      if (pecaAtacada(linhaRainha, colunaRainha ,peca)) {
          return true;
      }
    }
    
    return false;
  }
  ​
  function verificaDiagonalInferiorEsquerda(rainha, peca) {
    for(let i = 1; i < 8; i+=1) {
      let linhaRainha = rainha.linha - i;
      let colunaRainha = rainha.coluna - i;
  ​
      if (!posicaoValida(linhaRainha, colunaRainha)) return false;
      
      if (pecaAtacada(linhaRainha, colunaRainha ,peca)) {
          return true;
      }
    }
    
    return false;
  }
  ​
  function verificaDiagonalInferiorDireita(rainha, peca) {
    for(let i = 1; i < 8; i+=1) {
      let linhaRainha = rainha.linha - i;
      let colunaRainha = rainha.coluna + i;
  ​
      if (!posicaoValida(linhaRainha, colunaRainha)) return false;
      
      if (pecaAtacada(linhaRainha, colunaRainha ,peca)) {
          return true;
      }
    }
    
    return false;
  }
  ​
  function posicaoValida(linha, coluna) {
    return linha >= 1 && linha <= 8 && coluna >= 1 && coluna <= 8
  }
  ​
  function pecaAtacada(linhaRainha, colunaRainha, peca) {
    return linhaRainha === peca.linha && colunaRainha === peca.coluna;
  }
  ​
  // Ataque feito na diagonal inferior esquerda
  ​
  console.log(ataqueDaRainha(posicaoRainha, posicaoPeca));


