# O que vamos aprender?
Hoje você aprenderá como adicionar bibliotecas JavaScript e CSS aos seus sites.

Existem literalmente milhares de bibliotecas JavaScript e CSS disponíveis gratuitamente na Internet, com os mais diversos propósitos. À medida que os sites que você desenvolve se tornam mais complexos, será preciso encontrar e integrar ferramentas que facilitem e acelerem o desenvolvimento.

# Você será capaz de:
- Adicionar e utilizar bibliotecas JavaScript e CSS em seus sites;

- Utilizar bibliotecas JavaScript externas a partir de uma CDN.

# Por que isso é importante?
No dia a dia do desenvolvimento de software, você vai precisar encontrar, selecionar e incorporar bibliotecas aos programas que você desenvolve. É muito importante conhecer os fundamentos de uma tecnologia, mas é importante também não reinventar a roda a todo momento. Por exemplo, imagine que você, toda vez que precisasse calcular a raiz quadrada de um número, tivesse que escrever uma função para isso, talvez utilizando uma fórmula matemática complexa! 😨Para que isso não seja necessário, outras pessoas já se deram o trabalho de escrever esse tipo de função de forma extremamente otimizada e disponibilizar para que outras pessoas utilizem.

O mesmo princípio se aplica ao desenvolvimento web. Existem muitos problemas que aparecem com frequência, à medida que a complexidade dos seus sites aumenta. Por exemplo, na aula anterior você aprendeu a construir formulários HTML. Imagine que, em um formulário de cadastro, você quer garantir que o nome e sobrenome sempre sejam preenchidos, que o email da pessoa tenha um formato válido e que seja impossível selecionar uma data de nascimento inexistente. Além disso, você acha que ficar digitando a data manualmente é cansativo, e quer colocar um campo que, ao ser clicado, abre um calendário para escolher a data. Como você faria isso? Com JavaScript (e um pouco de muito CSS, no caso do calendário). Isso, porém, é algo tão comum que já existem bibliotecas que fornecem essas funcionalidades prontas para você.

Da mesma forma, existem muitos frameworks CSS que facilitam a construção de sites dinâmicos, acessíveis e responsivos, coisas com as quais você deve se preocupar sempre daqui para frente. Alguns exemplos mais famosos: Bulma, Bootstrap, Semantic UI e Materialize.
site Bulma: https://bulma.io/
site Bootstrap: https://getbootstrap.com/
site Semantic UI: https://semantic-ui.com/
site Materializa: https://materializecss.com/

# O que é CDN?
CDN é abreviação de Content Delivery Network (ou Rede de Distribuição de Conteúdo). É uma rede de servidores (pontos de presença) que armazenam réplicas do conteúdo de outros sites na memória (cache) e depois os entrega aos visitantes, baseando-se na localização geográfica para conectá-los ao servidor mais próximo e mais rápido, reduzindo o tempo de transferência dos dados (latência).

A CDN também se comunicará com o servidor de origem para entregar qualquer conteúdo que não tenha sido previamente armazenado em cache. Além disso seu uso permite que o site suporte melhor ataques DDoS e mantenha alta disponibilidade, por estar presente simultaneamente em diferentes datacenters.

As CDNs mais modernas, contam também com recursos como Cache de Conteúdo Dinâmico, para aliviar o processamento do servidor e acelerar ainda mais as páginas, e Web Application Firewall (WAF), para dar mais segurança aos sites e e-commerces.

As redes de distribuição de conteúdo são usadas para interações B2B e no fornecimento de conteúdo aos consumidores.

Hoje, à medida que mais aspectos da vida diária se movem on-line, as organizações usam as redes de entrega de conteúdo para acelerar conteúdo estático, conteúdo dinâmico, conteúdo móvel, transações de comércio eletrônico, vídeo, voz, jogos, etc.

# Site Khan Academy - O que é uma biblioteca de JS
Há um bilhão de páginas web, e muitas delas são interativas de alguma forma - na verdade, muitas têm o mesmo tipo de interação. Quantos sites você já viu que usam apresentação de slides? Eu já vi centenas!

É possível que cada um desses desenvolvedores web tenha escrito seu próprio código JavaScript para fazer uma apresentação de slides, mas muitos deles provavelmente reutilizaram o mesmo código. Como programadores, devemos reutilizar códigos existentes sempre que pudermos, assim não perdemos tempo escrevendo códigos que outro programador já escreveu.

Em JavaScript, fazemos isso usando uma biblioteca. Uma biblioteca é um arquivo de JavaScript que contém um monte de funções, e essas funções realizam alguma tarefa útil para sua página web.

Como sabemos que funções podemos usar? Poderíamos olhar o arquivo JavaScript, se ele for pequeno, ou melhor, poderíamos ver a documentação. A maioria das bibliotecas tem uma documentação com uma lista de funções disponíveis ou um exemplo do mundo real.

Quando um programador cria uma biblioteca de JS e a disponibiliza, ele decide compartilhá-la com o mundo propositadamente - então isso geralmente significa que ele se esforça para criar uma boa documentação e bons exemplos. Talvez um dia você decida criar uma biblioteca com alguma funcionalidade que você ache útil e compartilhá-la com o mundo.

Mas, antes de qualquer coisa, como usamos uma biblioteca? Vou mostrar a seguir!

# Site Khan Academy - Onde estão hospedadas as bibliotecas JS
Quando incluímos a biblioteca JS slideshow em nossa página no guia passo a passo anterior, digitamos essa URL: https://cdn.rawgit.com/pamelafox/a8b77c43f56da1753348/raw/slideshow.js

Essa URL é uma URL "absoluta", o que significa que ela inclui o protocolo e o domínio. Quando incluímos bibliotecas JS no ambiente da Khan Academy, precisamos usar uma URL absoluta para que o ambiente conheça o caminho completo até a biblioteca.

Se você estivesse trabalhando em uma página web em seu próprio computador e tivesse todos esses arquivos baixados, então você poderia usar uma URL "relativa" ao invés disso, como slideshow.js ou lib/slideshow.js se elas estivessem em uma pasta chamada lib. Quando você está trabalhando localmente, lembre-se de abrir o painel de rede do seu navegador para que ele encontre todos os recursos locais como seus arquivos JS e CSS. Se o navegador não conseguir encontrar um recurso, você vai ver um erro 404 e você pode depurar a URL e o local do arquivo.

Agora, de volta para essa URL: https://cdn.rawgit.com/pamelafox/a8b77c43f56da1753348/raw/slideshow.js

O protocolo é https - isso significa que essa é uma URL segura. Permitimos que você traga apenas recursos seguros nas páginas da Khan Academy, e essa é uma boa prática no desenvolvimento web. Contudo, nem todos os servidores já têm SSL habilitado, então às vezes você precisa iniciar as URLs com http em seus projetos.
O servidor é cdn.rawgit.com, e ele é um exemplo de uma "CDN" - uma "content delivery network." CDNs são otimizados para servir arquivos estáticos como bibliotecas JS e servi-los rapidamente. Há alguns CDNs que hospedam várias bibliotecas JS (como a Google CDN e cdnjs), e há algumas bibliotecas que têm sua própria CDN dedicada.

Quando você traz uma biblioteca JS para uma página a partir de uma CDN - ou de qualquer servidor que não seja o seu próprio - você não deve confiar naquele servidor. Um servidor malicioso poderia substituir a biblioteca JS com código para roubar os dados dos seus usuários e os enviar para outro lugar e certamente você não quer que isso aconteça!

Na Khan Academy, usamos um mecanismo de segurança chamado CSP em nossa página para garantir que você só possa trazer recursos de servidores nos quais confiamos: bootstrapcdn.com, rawgit.com, googleapis.com, jsdelivr.net e cdnjs.com.

Em seus próprios sites, você precisa decidir se vai usar a biblioteca JS a partir do seu próprio servidor ou inclui-la a partir de uma CDN externa. A maioria dos grandes sites opta por hospedar as bibliotecas em seu próprio servidor, porque eles podem ter mais controle e fazer otimizações, como combinar várias bibliotecas em um único arquivo JS para obter melhor performance. Você decide -- apenas lembre-se de tudo que falamos aqui!

# Site Khan Academy - O mundo das bibliotecas de JS
Existem milhares de bibliotecas de JavaScript que você poderia usar em sua página web, e elas podem ajudá-lo em muitos aspectos de sua página web:

- Manipulação DOM
- Eventos DOM
- AJAX / recuperação de dados
- Efeitos e animação
- Templates HTML
- Layout de página
- Widgets de interface do usuário
- Gráficos e quadros
- Modelagem de dados
- Roteamento e navegação
- Acessibilidade
- Suporte a vários navegadores
- Suporte a dispositivos móveis

Temos aqui uma outra forma de pensar nisso - uma página web é composta pela interface do usuário (HTML e CSS), pela interatividade (JS + DOM) e pelos dados (os quais normalmente obtemos usando JS). Você pode criar sua interface de usuário interativa orientada a dados sem uma biblioteca, ou você pode usar diferentes bibliotecas para ajudar em diferentes partes. Algumas bibliotecas servem para várias coisas, algumas servem somente para uma parte.

Uma das partes mais difíceis do desenvolvimento web é decidir quais bibliotecas usar, porque você geralmente vai escrever códigos com base em bibliotecas e é difícil mudar de ideia depois. Não há uma resposta certa - conheça suas opções e faça uma escolha bem pensada.

# Frameworks web
Há algumas bibliotecas que "fazem tudo isso" - desde recuperação de dados até manipulação DOM e widgets de interface do usuário. Se você está usando um desses frameworks, você vai usar muito JavaScript em sua página, então você precisa ter certeza de que realmente precisa de tudo o que o framework oferece. Para alguns desenvolvedores, esses frameworks fazem coisas demais, e eles preferem usar bibliotecas menores que se concentram mais em determinadas tarefas.
- jQuery UI
- jQueryMobile
- Dojo
- Sencha
- QooxDoo
- Closure
- KendoUI

# Frameworks CSS
Uma biblioteca de CSS é uma coleção de regras de estilo CSS e documentação que mostram quais tags HTML e classes usar. Há muitas bibliotecas de CSS populares que facilitam na criação de um website lindamente estilizado. Algumas vezes elas incluem widgets JavaScript opcionais, mas os desenvolvedores geralmente preferem usar outras bibliotecas de JS com uma biblioteca de CSS.
- Twitter Bootstrap (Veja exemplos na KA)
- ZURB Foundation (Veja exemplos na KA)
- Pure CSS
- Topcoat
- Skeleton

# Bibliotecas de navegador JS
Há bibliotecas que facilitam na utilização de funcionalidades do navegador - como a API DOM e o método de janelas - os tópicos que discutimos neste curso. Elas geralmente oferecem a possibilidade de fazer a mesma coisa com menos código, e elas cuidam dos erros entre navegadores.
- jQuery (A biblioteca mais popular, de longe! - Veja exemplo na KA)
- ZeptoJS
- MooTools
- dollardom
- QuoJS

# Bibliotecas de arquitetura de aplicativos JS
Essas bibliotecas ajudam nos aplicativos web, conforme eles ficam maiores. Seu código pode ser gerenciável agora, com algumas centenas de linhas de código, mas quando atingir milhares de linhas, seu código pode se tornar um "código espaguete" - uma bagunça impossível de gerenciar. Essas bibliotecas ajudam você a separar seu "modelo" (dados) de sua "visão" (apresentação), e geralmente usam princípios de programação orientada a objetos para organizar seu código.
- Facebook React + Facebook Flux
- Backbone
- AngularJS
- EmberJS

# Minibibliotecas e microbibliotecas
Você também pode usar pequenas bibliotecas que os desenvolvedores escrevem para uma tarefa específica - quando elas são realmente pequenas, elas às vezes são chamadas de "microbibliotecas". Algumas delas são:
- DOM: tinyDOM
- Eventos: Events.js
- AJAX: MicroAjax
- Animação: Morpheus, Viper
- Modelagem de dados: Spine, Knockout
- Modelos: Handlebars, Mustache
- Encaminhamento: PathJS
- Orientação a objeto: Classy, Klass
- Artes gráficas: Processing.JS (Veja exemplos em KA), RaphaelJS (Veja exemplos em KA), D3, Three.JS (Veja exemplos em KA), Paper.js
- Gráficos: gRaphael, High Charts
- Data/hora: moment.js

Você pode saber mais acessando microjs.com, ou procurando na internet por "biblioteca javascript [funcionalidade]", por qualquer funcionalidade que você esteja procurando.

Você já experimentou nossa biblioteca de JS em nossas páginas aqui na Khan Academy? Compartilhe nos comentários abaixo.

# Site Khan Academy - Qual biblioteca de JS você deve usar?
Existe um grande número de bibliotecas, e provavelmente há várias bibliotecas que abordam qualquer funcionalidade em particular. Por exemplo, há tantas bibliotecas para selecionar dados que existem artigos como "As 15 melhores bibliotecas jQuery de seleção de dados" para ajudar os desenvolvedores a escolher.

Mas muitas escolhas podem se transformar em um problema para nós, desenvolvedores, tomarmos uma decisão. Como sabemos qual é a melhor? E se fizermos a escolha errada?

Geralmente não há uma "melhor escolha" em desenvolvimento web. Mas, frequentemente, há escolhas melhores que outras, e pensar nas considerações abaixo pode ajudar você a fazer a melhor escolha.

Como uma biblioteca JS geralmente é usada no desenvolvimento de um produto voltado para o usuário, essas considerações devem satisfazer dois públicos: os desenvolvedores que devem codificar e manter o código que usa a biblioteca (como você!) e os usuários que vão interagir com o código.

# Essa vai ser uma boa experiência como desenvolvedor?
- Bem documentada: Deve ser fácil encontrar uma referência de assinatura de função, demonstrações de uso real, e um guia de uso mais narrativo. Se uma biblioteca não tem documentação, normalmente é um sinal de que ela não é a mais amigável ao desenvolvedor.
- Flexível: As demonstrações na documentação podem ser impressionantes, mas pode-se querer usar a biblioteca de uma maneira ligeira ou completamente diferente do que as mostradas nos exemplos. Procure por sinais de flexibilidade: é fácil alterar opções de configuração? Há uma arquitetura de plugins documentada? Ela desencadeia muitos eventos aos quais você poderia associar seu código?
- Mantida ativamente: Navegadores mudam frequentemente. Bibliotecas podem parar de funcionar de repente porque dependiam de alguma característica específica do navegador que mudou. Isso é especialmente verdadeiro para shims e polyfills do HTML5, porque os navegadores estão frequentemente lançando novas versões com implementações dos elementos do HTML5 que estão evoluindo. Verifique a data da versão mais recente.
- Pensando no futuro: Se você estiver procurando por um "shim" do HTML5, prefira um "polyfill" - um shim que imita a API. Dessa forma, teoricamente, quando todos os seus usuários estivessem usando navegadores que suportassem a tecnologia, você estaria apto a parar de usar a biblioteca completamente, sem mudança nenhuma no seu código. Por exemplo, se você estiver usando uma biblioteca para rodar vídeo em sua página web, use um polyfill que te permitirá usar a tag video do HTML5, e a substituirá com uma tecnologia alternativa como o Flash em navegadores mais antigos.
- Testada: Todas as boas bibliotecas devem incluir testes que garantem que suas funcionalidades rodam como esperado. Quando uma biblioteca é testada, podemos confiar que haverá algum grau de retrocompatibilidade em novas versões da biblioteca.
- Código limpo: podemos tratar bibliotecas de código aberto como caixas pretas e nos recusarmos a olhar dentro delas, mas, às vezes, você pode precisar escavar o código da biblioteca para depurar um problema ou adicionar um pouco de funcionalidade. Dê uma olhada no código e veja quão fácil ele é de ser lido e se há sinais de alerta, como grandes trechos de linhas de código comentadas.
- Comunidade ativa: Você vai ter perguntas. Você vai encontrar bugs. Idealmente, você conseguirá resolvê-los junto com desenvolvedores, sejam os programadores ou usuários.

Se a biblioteca está hospedada em um site de controle de versão como o Github, você pode ver:
- Número de forks: Ter muitos forks (ou estrelas) significa que pelo menos há muitos desenvolvedores que se preocuparam o suficiente para dar um fork na biblioteca. Isso não significa que eles vão te ajudar, mas é um começo! Grandes bibliotecas normalmente têm milhares de forks enquanto bibliotecas mais específicas têm centenas ou dezenas de forks.
- Número de problemas: Há muitos problemas abertos? Isso pode ser um sinal de que não há um esforço da comunidade para responder e fechar problemas. Isso pode significar também que trata-se apenas de um projeto muito popular com muitas ideias de melhorias, então continue para o próximo tópico.
- Impressão sobre problemas: Leia alguns problemas e requisições de pull. Os programadores são receptivos a feedbacks? Eles respondem a perguntas sobre seu uso? Você tem uma impressão boa ou ruim dessas conversas?
- Comunidade externa: As perguntas sobre a biblioteca no StackOverflow são respondidas? Há bibliotecas construídas em cima dessa biblioteca? Muitas bibliotecas pequenas não serão grandes o suficiente para possuir uma comunidade externa, mas bibliotecas maiores como Modernizr ou Backbone possuem comunidades externas significativas, e isso é uma grande motivação para usá-las. Você pode realizar uma busca na internet pelo nome da biblioteca e ver que tipo de resultado você encontra.

# Essa vai ser uma boa experiência como usuário?
Se a biblioteca JS não cria um componente de interface do usuário, então somente as primeiras importam.
- Tamanho do arquivo: quanto isso vai contribuir para a quantidade de JS que seus usuários precisam baixar? Por exemplo, o jQuery com gzip e reduzido tem 18k e o Select2 tem 7K.
- Performance: além do tamanho, outros aspectos de uma biblioteca JS podem afetar sua performance, como se ela tem muita manipulação DOM, renderização de gráficos, computação, chamadas de armazenamento síncrono, etc. Procure por promessas de boa performance na documentação, e claro, experimente você mesmo.
- Suporte a navegador: verifique se ela suporta todos os navegadores que você deseja. Muitas bibliotecas hoje em dia não suportam navegadores mais antigos (os quais sua página pode precisar suportar), porque elas são projetadas para que sejam leves e apenas para navegadores de dispositivos móveis.
- Acessibilidade: Muitas bibliotecas para componentes de interface de usuário parecem ótimas, mas elas não são acessíveis (elas não funcionam bem para usuários com deficiência visual). Para fazer uma verificação rápida, você pode executar WAVE na página de demonstração da biblioteca.
- Responsividade: se seus usuários forem usar o componente de interface de usuário de uma biblioteca no navegador de um dispositivo móvel, então ela deve funcionar bem em dispositivos móveis. Os botões são grandes o bastante? Ela usa eventos de toque? Ela fornece uma escala para telas de tamanho menor?

Se você considerou todos esses critérios e ainda assim não consegue decidir entre as bibliotecas, então você pode tentar a abordagem de falar com um amigo: pergunte a colegas ou amigos desenvolvedores qual biblioteca eles usam. Você pode encontrar uma que seja a preferida por muitos.

Lembre-se: não há uma resposta certa, não há uma escolha melhor. Além disso, você não precisa revisar e compreender todas as bibliotecas JS que você está pensando em usar, principalmente se você estiver trabalhando em seus próprios projetos. Você pode simplesmente escolher uma biblioteca e ver se você gosta dela enquanto a usa. Você vai começar a criar uma lista de suas bibliotecas favoritas em sua cabeça, e vai ter seus próprios critérios para escolher as bibliotecas, o que vai ajudar ajudar em suas futuras decisões.