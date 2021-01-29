// {} Cria um Objeto Literal
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaco
console.log(prod1)
console.log(prod1.nome, prod1.preco)

// Criando de outra maneira
const prod2 = {
    nome: 'Camisa Polo',
    preco: 39.50,
    desconto: 40
}
console.log(prod2)

