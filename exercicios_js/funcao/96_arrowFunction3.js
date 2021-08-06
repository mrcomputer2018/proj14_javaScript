let comparaComThis = function (param) {
    console.log(this === param)
}

//Objeto global
comparaComThis(global) // True

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//O This aponta pro obejto devido ao bind
comparaComThis(obj) // True
comparaComThis(global) // False

let comparaComThisArrow = param => {console.log(this === param)}
comparaComThisArrow(global) // false
comparaComThisArrow(obj) // False
comparaComThisArrow(module.exports) //True

// *This aponta para o objeto nal qual a funcao foi escrita
comparaComThisArrow(this) // True