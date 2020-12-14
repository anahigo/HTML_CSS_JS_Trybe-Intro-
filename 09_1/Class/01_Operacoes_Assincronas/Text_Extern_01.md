# Callbacks (Retornos de chamada), Promises(promessas) e Async(assíncrono)
As operações síncronas em JavaScript exigem que cada etapa de uma operação aguarde a execução completa da etapa anterior. Isso significa que não importa quanto tempo um processo anterior leve, o processo subsequente não será iniciado até que o anterior seja concluído. As operações assíncronas, por outro lado, adiam as operações. Qualquer processo que leve muito tempo para ser processado geralmente é executado junto com outra operação síncrona e concluído no futuro.

Esta lição trata dos conceitos fundamentais em que o JavaScript se baseia para lidar com operações assíncronas. Esses conceitos incluem: funções de Callbacks(retornos de chamada), promises(promessas) e o uso de Async(assíncrono) e e Await(aguardar) para lidar com operações adiadas em JavaScript. 

# Operações Assíncronas
As operações em JavaScript são tradicionalmente síncronas e executadas de cima para baixo. Por exemplo, uma operação agrícola que registra o processo agrícola no console:

console.log("Plant corn"); 
console.log("Water plant");
console.log("Add fertilizer");

Se executarmos o código acima, teremos o seguinte registrado no console:

Plant corn
Water plant
Add fertilizer

Agora vamos ajustar isso um pouco para que regar a fazenda demore mais do que plantar e fertilizar:

console.log("Plant maize");

setTimeout(function() {
  console.log("Water plant")
},3000);

console.log("Add fertilizer");

Temos o seguinte no console:

Plant Maize
Add fertilizer
Water plant

Por quê? A função setTimeout torna a operação assíncrona ao adiar a rega da planta para ocorrer após 3 segundos. Toda a operação não é pausada por 3 segundos para que ele possa registrar a “planta de água”. Em vez disso, o sistema vai em frente para aplicar fertilizantes e regar a planta após 3 segundos.