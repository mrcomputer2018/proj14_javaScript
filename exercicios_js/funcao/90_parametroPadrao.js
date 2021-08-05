//* Estrategia 1 de gerar valor padrao
function soma1(a, b , c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1,2,3,), soma1(0,0,0))

//* Estrategia 2 de gerar valor padrao
function soma2(a, b , c){
    a = a !== undefined ? a : 1
    // Dentro de arguments existe o indice 1 
    // se existir pege o valor de b
    // senao pege o valor padrao
    b = 1 in arguments ? b : 1
    // Se c e um notANumber retorne um valor
    // Senao retorne valor de c
    c = isNaN(c) ? 1 : c // Mais segura/robusta de se usar
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3,), soma2(0,0,0))

//* Valor pádrao do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1,2,3,), soma3(0,0,0))