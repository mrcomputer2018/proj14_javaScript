// Operador que tira da estrutura uma coisa 
// Estrutura seria uma Funcao com Array
function rand([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min]
        const valor = Math.random * (max - min) + min
    }
}