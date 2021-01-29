const peso1 = 1.0;

// Outra forma de definir um numero
const peso2 = Number("2.1");

console.log(peso1, peso2);

// Metodo para saber o tipo do INTEIRO e retornando Booleano
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = (avaliacao1*peso1) + (avaliacao2*peso2);
const media = total/(peso1+peso2);

// toFixed controla o numero de casas decimais
console.log(media.toFixed(2));

// Convertendo em string
console.log(media.toString());

// Convertendo string em binario
console.log(media.toString(2));

// Vendo o tipo
console.log(typeof media);

// Vendo o tipo de Number
console.log(typeof Number);