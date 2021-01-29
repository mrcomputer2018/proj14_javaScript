// Literal falso
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo !== 1) // Resultado - Falso
console.log(isAtivo !== 0) // Resultado - verdadeiro
console.log(!!isAtivo) // Resultado - Verdadeiro
console.log(!isAtivo) // Resultado - Falso

// Tipos verdadeiros
console.log('\nVerdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) // [] - array
console.log(!!{}) // {} - Objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))

// Resolvem para um valor falso
console.log('\nOs falsos.... ')
console.log(!!0)
console.log(!!'') // Sting vazia
console.log(!!null)
console.log(!!NaN) // NaN - Not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nSo para terminar....')
console.log(!!('' || null|| 0 || ' ')) // Verdadeiro por causa do ' '
console.log(('' || null|| 0 || 'Epa')) // Retorna o unico valor verdadeiro 
                                       // da expressao
console.log(('' || null|| 0 || 'Epa tchan' || 123)) // O primeiro valor verdadeiro

// Imprimir desconhecido se nao colocou dado na string
let nome = '' // string vazia
console.log(nome || 'Desconhecido') // Imprimi - Desconhecido / Nome = falso

nome = 'Tereza' // string vazia
console.log(nome || 'Desconhecido') // Imprimi - nome / Nome - verdadiero

