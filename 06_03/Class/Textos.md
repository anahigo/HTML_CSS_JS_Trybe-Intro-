# O que vamos aprender?
Você vai aprender sobre CSS Flexbox Layout (Flexible Box). Flexbox é um módulo que visa a fornecer uma maneira mais eficiente de organizar, alinhar e distribuir espaço entre os itens em um container, mesmo quando seu tamanho é desconhecido.

Um container pode ser qualquer elemento HTML que contenha outros elementos, como, por exemplo, um <div> ou <section>. Esse elemento pai é chamado de container, e os elementos filhos serão os itens.

A ideia principal por trás do "layout flexível" é dar ao container a habilidade de alterar o tamanho (width e height) e a ordem dos itens para melhor ocupar o espaço disponível. Essa habilidade nos permite acomodar uma página em todos os tipos de dispositivos e tamanhos de tela.

# Você será capaz de:
- Utilizar CSS Flexbox para criar layouts flexíveis;

- Utilizar CSS Flexbox para alterar o comportamento de containers.

# Por que isso é importante?
O acesso à Internet não é feito apenas por computadores e notebooks. Tablets e principalmente smartphones também são utilizados para essa função. Com tantos dispositivos e tamanhos diferentes de telas, um design responsivo é necessário para promover a melhor experiência possível aos visitantes, independentemente do dispositivo e tela que estejam usando.

Flexbox é uma ferramenta que nos permitirá criar páginas com design responsivo de forma simples e organizada.

# Conceitos
Antes da apresentação das propriedades Flexbox, dois conceitos devem ser explicados:

# Flex Axes
O layout do Flexbox é baseado em flex-directions (direções flex). Essas direções são determinadas por eixos (axes). 

Os flex items são dispostos dentro de um Flex container seguindo o Main Axis. O Main Axis tem a direção definida pela propriedade flex-direction, que pode ser horizontal, quando flex-direction é row ou row-reverse, e vertical, quando é column ou column-reverse.

# Flex Lines
São linhas imaginárias usadas para agrupamento e alinhamento de flex items dentro de seus respectivos containers. Um Flex container pode ser single-line ou multi-line, dependendo da propriedade flex-wrap:

Um Flex container single-line dispõe todos os seus filhos (flex items) em uma única linha;

Um Flex container multi-line quebra seus flex items em múltiplas linhas. Isso é similar ao que acontece quando um texto é quebrado em uma nova linha quando está muito grande (overflow).

Agora vamos ver a estrutura e propriedades do Flexbox.

# Propriedades: flex-direction, flex-wrap, flex-flow e reverse
A propriedade flex-direction é aquela que define a direção dos flex items, por padrão essa propriedade é row (linha), com isso os elementos ficam um ao lado do outro. Os outro valores que essa propriedade possui são o row-reverse, os itens ficam em linha reversa, o column, onde os itens ficam em uma única coluna, um embaixo do outro, e o column-revese, em que os itens também ficam um embaixo do outro, porém em ordem reversa.

Já a propriedade flex-wrap define se os itens devem quebrar ou não a linha, sendo que por padrão esse propriedade é nowrap, ou seja, os itens não quebram a linha. Os valores que fazem com que a linha quebra são o wrap, que quebra a linha, e o wrap-reverse, que quebra a linha na direção contrária.

Por sua vez o flex-flow é um atalho para as propriedades flex-direction e flex-wrap, o primeiro valor que recebe é o do flex-direction e o segundo o do flex-wrap.

# Propriedades: justify-content
O justify-content alinha os flex items no container de acordo com a direção. Essa propriedade possui os valores flex-start que alinha os itens ao início do container, flex-end que alinha os itens ao final do container, center que alinha os itens ao centro do container, space-between cria um espaçamento igual entre os elementos, mantendo o primeiro grudado no início e o último no final, e space-around também cria um espaçamento entre os elementos, mas os espaçamentos do meio são duas vezes maiores que o inicial e final.

# Propriedades: align-items
A propriedade align-items também alinha os flex items de acordo com o eixo do container, sendo o alinhamento diferente para quando os itens estão em colunas ou em linhas. Os valores que essa propriedade aceita são stretch, é seu valor padrão e faz com os flex items cresçam igualmente, flex-star alinha os itens ao início, flex-end alinha os itens ao final, center alinha os itens ao centro e baseline que alinha os itens de acordo com a linha base da tipografia.

# Propriedades: align-content
Essa propriedade alinha as linhas do container em relação ao eixo vertical, sendo que essa propriedade só funciona caso haja mais de uma linha de flex items e a propriedade flex-wrap precisa ser nowrap. As opções de alinhamento que o align-content apresenta são stretch, seu valor padrão que faz com que os flex items cresçam igualmente na vertical, flex-start, alinha todas as linhas de itens ao início, flex-end, que alinha todas as linhas de itens ao final, center que alinha todas as linhas ao centro, space-between, que cria um espaçamento igual entre as linhas, mantendo a primeira grudada no topo e a última no bottom, e space-around, que também cria um espaçamento entre as linhas, mas os espaçamentos do meio são duas vezes maiores que o top e o bottom.
