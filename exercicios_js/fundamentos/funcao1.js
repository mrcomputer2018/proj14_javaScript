// Funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

// Chama funcao
imprimirSoma(2,3)
imprimirSoma(2) //NaN
imprimirSoma(2,10,3,4) // 12
imprimirSoma() //NaN

// Funcao com Retorno
function soma(a,b=0) {
    return a + b
}
console.log(soma(2,3)) //5
console.log(soma(2)) //2
console.log(soma()) // NaN