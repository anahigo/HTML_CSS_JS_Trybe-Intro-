# O que vamos aprender?
Você já aprendeu o que são e para que servem testes unitários. Já sabe usar o módulo assert do NodeJS para fazer asserções simples sobre suas funções. Também já aprendeu a testar programas maiores que envolvem diferentes fluxos de execução. Hoje você aprenderá a utilizar o Jest, um framework de testes unitários para JavaScript desenvolvido pelo Facebook.

# Você será capaz de:
- Utilizar Jest para escrever testes unitários.

# Por que isso é importante?
Você já sabe utilizar o módulo assert do NodeJS, então por que precisaria de outra ferramenta que faz essencialmente a mesma coisa?

Até agora você sabe fazer asserções simples em seus testes, como verificar se dois valores são iguais. Embora seja possível fazer praticamente qualquer tipo de teste dessa maneira, acaba se tornando um processo lento, trabalhoso e repetitivo à medida que você começa a testar dados ou situações mais complexas. Além disso, conforme seus programas vão crescendo, seus testes ficarão distribuídos em vários arquivos. Torna-se necessária uma ferramenta que seja capaz de encontrar e executar automaticamente todos os testes da aplicação, reportar informações sobre cobertura de testes, fornecer feedback sobre quais testes falharam e por quê, além de outras características. Jest é um dos frameworks de teste existentes no ecossistema de JavaScript que fornecem esses tipos de funcionalidades, e é ele que você aprenderá hoje.

# Conteúdo
# Por que utilizar um framework de testes
Nos últimos dias, você aprendeu os benefícios de se ter um código (bem) testado, e os benefícios do TDD escrevendo testes usando o módulo assert do Node.js. Hoje você vai aprender a usar o Jest, um framework de testes para JavaScript desenvolvido e mantido pelo Facebook.

Por que precisamos de um framework? Não dá pra escrever todos os testes somente com asserts simples? Em teoria, sim, mas à medida que suas aplicações se tornam maiores e mais complexas, esse processo torna-se inviável:
* Sua aplicação terá várias funções, provavelmente distribuídas por vários arquivos. Colocar todos os testes em um único arquivo torna-se impraticável rapidamente. Não é possível saber onde começam e onde terminam os testes de uma função. Mesmo em uma função mais complexa, você pode querer separar e agrupar testes relacionados;

* Node.js só executa um arquivo por vez, com o comando node <nome_do_arquivo>. Se há vários arquivos de teste, é preciso executar um por vez ou escrever um script shell para executar todos os arquivos;

* Você sempre precisa executar todos os testes de um arquivo. Não há como executar apenas um subgrupo dos testes presentes no arquivo;

* Sempre que um teste falha, a execução para imediatamente. Não há como saber se um teste posterior está correto antes de garantir que todos que vêm antes estejam corretos;

* Vários testes podem requerer que os mesmos passos sejam executados antes ou após a execução, resultando em muita duplicação;

* Para pular ou desabilitar um teste falhando, é preciso removê-lo ou comentá-lo;

* Não há informações sobre a cobertura de testes. Ou seja, quais partes do código estão sendo estressadas pelos testes e quais não estão;

Para o mercado de trabalho, o assert é insuficiente. Normalmente os programas estão sempre evoluindo e ganhando novas features e, por conta disso, surgiu a necessidade de criar uma suite de testes mais robusta, legível e de fácil manutenção.

Um framework de testes apresenta ferramentas para eliminar ou mitigar esses problemas. Existem várias ferramentas semelhantes, como Jest, Mocha e Jasmine. Entre eles, Jest se destaca por alguns motivos:
* É fácil de instalar e requer zero configuração, como você verá em breve;

* É rápido. O time de engenharia do Airbnb conseguiu diminuir o tempo de execução de sua suíte de testes de 12 para 4 minutos ao trocar Mocha por Jest;

* Se integra muito bem com React. De fato, Jest já vem instalado e configurado com o Create React App.

Chega de teoria. Vamos botar a mão na massa e começar a escrever testes com Jest.