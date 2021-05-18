function tratarErroELancar () {
    throw new Error(".......")
}

function imprimiNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!!")
    }
    catch (e) {
        tratarErroELancar(e)
    }
    
}

const obj = { nome : "Roberto"}
imprimiNomeGritado(obj)