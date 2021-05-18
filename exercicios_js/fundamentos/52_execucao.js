// var e uma variavel global
// Let e uma variavel local
let a = 3

console.log(this.a)
console.log(global.a)

global.b = 123
console.log(global.b)

this.c = 123
console.log(this.c)

// This e igual ao module.exports
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)