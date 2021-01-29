// Operador que tira da estrutura uma coisa // Estrutura seria uma Funcao com objeto
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min)+ min
    return Math.floor(valor) // Floor - Retorna o maior inteiro menor ou igual ao seu numérico
}

const obj = {min: 50, max: 60}
console.log(rand(obj)) // Resultado sera randomico entre 50 e 60
console.log(rand({min:800})) // Resultado sera randomico entre 800 e 1000
console.log(rand({}))// Resultado sera randomico entre 0 e 1000
