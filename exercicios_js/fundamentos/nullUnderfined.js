// Undefined
let valor
console.log(valor)

let valor2 = 1
console.log(valor2)

// NULL - ausencia de valor
valor= null
console.log(valor)

//console.log(valor.toString()) - vai dar erro

const produto = {} // objeto vazio
console.log(produto.preco) //Undefined
console.log(produto) //{}

produto.preco = 3.50
console.log(produto.preco.toFixed(2)) // 3.50

produto.preco = null
console.log(produto) // { preco: null }

console.log(!!produto.preco)