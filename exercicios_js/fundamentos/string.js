const escola = `cod3r`;

// Exibindo a letra no indice 4
console.log(escola.charAt(4));

// Exibindo o valor na tebela asci do indice 3
console.log(escola.charCodeAt(3));

// Exibindo a posicao no indice do valor 3
console.log(escola.indexOf(3));

// Imprimendo a parir do indice 1
console.log(escola.substring(1));

// Indo do indice 0 ate o 3
console.log(escola.substring(0,3));

// Concatenacao de strings
console.log(`escola`.concat(escola).concat(`!!`));

// Substituicao de string
console.log(escola.replace(3, `e`));

// Substituindo os digitos por e
console.log(escola.replace(/\w/g, `e`));

// Transformando em array
console.log(`Maria,joao,Marta`.split(`,`));

console.log(`3` + 2);