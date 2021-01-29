// Armazenar uma funcao em uma variavel
// Funcao anonima - sem o nome
const imprimirSoma = function(a,b) {
    console.log(a + b)
}
imprimirSoma(2,3) //5

//Armazenar uma funcao Arrow em uma variavel
const soma = (a,b) => {
    return a + b
}
console.log(soma(10,2)) // 12

// Retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(3,2)) //1

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!!')
