# Apis 
Leia este link. Ele passa, por alto, a ideia do que é uma API. Para o presente momento, essa noção basta.

# Texto Externo
# O que exatamente É uma API?
Você já ouviu a palavra “API” ser criticada e se perguntou o que é exatamente isso? Você tem uma ideia vaga, mas quer saber mais sobre o que pode fazer com uma API e como construir uma?

Não se preocupe. Eu posso ajudar!

Vamos começar e escolher o que é uma API e como construir uma API é semelhante (ou diferente!) Do que construir outros tipos de aplicativos da web e sites. Aqui está uma breve introdução sobre o que é uma API, o que a torna diferente e o que você precisa para construir uma por conta própria.

# Interface de programação de aplicativo (API)
Em termos básicos, as APIs apenas permitem que os aplicativos se comuniquem entre si.

Quando as pessoas falam de “uma API”, às vezes generalizam e na verdade querem dizer “uma API baseada na web disponível publicamente que retorna dados, provavelmente em JSON ou XML”. A API não é o banco de dados nem mesmo o servidor, é o código que rege o pontos de acesso) para o servidor.

Nesta postagem, vamos nos concentrar nesses tipos específicos de APIs - APIs baseadas na web que retornam dados em resposta a uma solicitação feita por um cliente.

Eles nos permitem ir buscar dados de fontes externas.
1. Podemos enviar uma solicitação de API detalhando as informações que desejamos.
2. As APIs permitem que nossos sites alterem dados em outros aplicativos também. Por exemplo, você provavelmente já viu os botões “Compartilhar no Facebook” ou “Compartilhar no Twitter” em diversos sites. Quando / se você clicar em um desses botões, o site que você está visitando pode se comunicar com sua conta do Facebook ou Twitter e alterar seus dados adicionando um novo status ou tweet.

# Mas por que precisaríamos de uma API?
Imagine o seguinte cenário: Você (como em seu aplicativo ou cliente, pode ser um navegador da web) deseja acessar os dados ou funcionalidades de outro aplicativo. Por exemplo, talvez você queira acessar todos os tweets do Twitter que mencionam a hashtag #epicodus .

Você pode enviar um e-mail para o Twitter e pedir uma planilha com todos esses tweets. Mas então você teria que encontrar uma maneira de importar essa planilha para o seu aplicativo; e, mesmo que você os armazene em um banco de dados, como temos feito, os dados ficarão desatualizados muito rapidamente. Seria impossível mantê-lo atualizado.

Seria melhor e mais simples para o Twitter fornecer a você uma maneira de consultar seu aplicativo para obter esses dados, para que você possa visualizá-los ou usá-los em seu próprio aplicativo. Ele ficaria atualizado automaticamente dessa forma.

Um corretor de API acessa um aplicativo diferente para fornecer funcionalidade ou acesso a dados, para que os dados possam ser incluídos em aplicativos diferentes.

# Quem cria APIs públicas baseadas na Web?
Grandes empresas de tecnologia, especialmente empresas de mídia social, frequentemente disponibilizam seus dados agregados ao público, mas APIs também são mantidas por organizações governamentais, conferências, editoras, startups de software, grupos de fãs, ligas de eSports e até mesmo indivíduos, a fim de compartilhar qualquer coisa de conteúdo de mídia social para perguntas triviais, classificações, mapas, letras de músicas, receitas, listas de peças e muito mais.

Resumindo, qualquer pessoa ou organização que coleta dados pode ter interesse em disponibilizar esses dados para uso por um aplicativo diferente. Talvez você tenha uma API que gostaria de construir e disponibilizar?

# Como uma API difere de um projeto apoiado por banco de dados “normal”
Uma API é diferente de um aplicativo da web ou site com base de banco de dados (ou estático), pois geralmente não precisa conter um front-end - sem HTML, o CSS é necessário para ser mostrado ao usuário por meio de páginas estáticas ou modelos gerados dinamicamente que fundem dados com layouts reutilizáveis.

As solicitações para recuperar ou gravar dados geralmente são feitas sem um front-end, enviando uma solicitação HTTP a um servidor.

Se você está familiarizado com a construção de aplicativos do lado do servidor com Java, Ruby, PHP, JS via node ou outra linguagem, provavelmente reconhecerá a necessidade de certas rotas: URLs que acionam manipuladores de rota para emitir certas ações quando recebem uma solicitação com alguns dados . As APIs têm rotas da mesma forma que um site diferente, mas geralmente não servem modelos nessas rotas.

# Então, o que é JSON e por que o usamos?
JSON significa J ava S cript O bject N otation e é basicamente uma forma de representar dados que se parecem com objetos JavaScript.

Vejamos um objeto JavaScript muito típico para um restaurante, que pode se parecer um pouco com isto:

“Restaurante”: { 
  “nome”: “Fish Witch”, 
  “endereço”: “214 NE Broadway”, 
  “CEP”: “97232”, 
  “telefone”: “503–000–0000”, 
  “website”: “ http : //fishwitch.com ", 
  “ email ”:“ hellofishy@fishwitch.com ” 
}

Arrumado. Isso é bastante fácil de ler - nossos dados são armazenados como pares de chave / valor. Isso significa que podemos ver a chave à esquerda e o valor à direita. A chave permanece a mesma para cada objeto Restaurante, mas o valor seria diferente. Um restaurante diferente teria um endereço diferente, mas suas propriedades seriam as mesmas - sempre teria um nome, endereço, CEP, telefone e e-mail.

JSON está em toda parte em aplicativos da web modernos. É legível, é leve e funciona muito bem com aplicativos escritos em JavaScript, pois é JavaScript. Mas também é comparativamente fácil obter aplicativos escritos em outras linguagens para lê-lo e gerá-lo também - incluindo Java. Isso significa que uma API que retorna JSON pode ser acessada por um aplicativo escrito em Java, Ruby, Python, JS, PHP e muitos mais. Isso torna uma API escalonável e independente de plataforma. Aha! Escalável! Plataforma independente! Boas palavras, palavras poderosas, $$ palavras.

# Eu quero construir uma API!
Impressionante! Construir uma API está totalmente ao alcance de qualquer desenvolvedor que conheça um pouco sobre programação e roteamento de aplicativos da Web do lado do servidor, como Java Spark, JavaScript Express, ASP.net para C #, Ruby on Rails e assim por diante.

Para construir uma API pública, você precisará do seguinte:
* Um back-end com algum tipo de roteamento, conforme mencionado acima
* Um banco de dados onde seu aplicativo pode armazenar seus dados. Pode ser um servidor de banco de dados que você está executando, como MySQL ou Postgres, ou pode ser um banco de dados BaaS (back-end como serviço), como Firebase.
* Um servidor, provavelmente um VPS (Virtual Private Server) acessível pela Internet, onde seu aplicativo pode ser executado. (Você pode procurar DigitalOcean, Amazon Web Services ou Microsoft Azure para isso)

# Eu quero amarrar uma API em meu aplicativo!
Tão legal. APIs podem realmente estender a funcionalidade do seu aplicativo de várias maneiras. Adicionar um mapa, dados meteorológicos ou outras informações pode ser extremamente útil.

* Encontre uma API pública que ofereça o tipo de informação que você deseja acessar. Certifique-se de que está bem documentado e mantido. Alguns sites que oferecem muitos APIS são ProgrammableWeb , AnyApi e public.apis.zone
* Leia a documentação para ter certeza de que a API funciona para você. Muitas APIs exigem que você se registre para obter uma chave de API para acessar seus dados ou têm fluxos de autenticação que seu aplicativo precisa percorrer antes de acessar as informações.
* Compreenda a forma dos dados disponíveis. Vá em frente e verifique a ferramenta Postman, se ainda não o fez, é um software incrível que torna muitos aspectos do trabalho com APIs muito mais fáceis. Ele ajuda a enviar solicitações de teste para APIs para que você possa fazer experiências com os dados recebidos.
* Chame a API de seu aplicativo e processe os dados que você recebe, exibindo-os em seu aplicativo! Esta é a parte mais emocionante. Depois de conseguir consultar a API com uma ferramenta como o Postman , você pode escrever o código que integra os dados que a API retorna em seu próprio trabalho e exibi-los aos usuários.

Boa sorte! Me tweet e compartilhe comigo o que você foi capaz de criar!
- Perry Eising