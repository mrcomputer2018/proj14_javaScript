const valores = [7.7, 8.7,9.9,3.4]
console.log(valores[1],valores[3])
console.log(valores[4]) // Imprimi = Undefined

valores[4] = 10
console.log(valores[4])
console.log(valores.length) // Quantidade de elementos da array

// Push - Adiciona novos elementos no array
valores.push({id:3}, false, null, 'Teste')

// Imprimindo toda Array Valores
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i])
}

// Imprimindo toda array de outra forma
console.log(valores)

// Retira o ultimo valor da array
console.log(valores.pop())
console.log(valores)

// Removendo valores da Array
delete valores[0]
console.log(valores)

