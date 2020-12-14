# O que vamos aprender?
Você já aprendeu como instalar e configurar o Jest e sobre como utilizar seus principais matchers, certo?

Agora você irá aprender como testar códigos assíncronos, como reaproveitar configurações entre testes e como separá-las por escopo.

# Você será capaz de:
- Escrever testes para códigos assíncronos com diferentes padrões;

- Reaproveitar configurações para diversos testes através do uso de beforeEach e afterEach;

- Dividir seus testes e suas respectivas configurações em grupos separados por escopos através do uso de describe;

# Por que isso é importante?
- Códigos assíncronos são comuns em JavaScript, e você certamente vai precisar escrevê-los com frequência, e consequentemente testá-los. Por exemplo, quando você faz uma chamada a uma API para buscar dados, você está fazendo uma requisição assíncrona.

- Repetir código é ruim, pois não só você está escrevendo mais do que precisa, mas também está correndo o risco de cometer um erro e replicá-lo em diferentes pontos, tornando sua correção difícil. Além disso, não é fácil replicar o código em sua exatidão, de forma que você, possivelmente, irá deixar alguma coisa para trás (dando mais margens pra erros). Com as configurações dos testes, isso não é diferente — você não quer ter que replicá-las em cada teste que escrever.
