// V XOR V -> FALSE
// V XOR F -> TRUE
// F XOR V -> TRUE
// F XOR F -> FALSE

// NEGACAO LOGICA
/**  !V -> FALSE
     !F -> TRUE */

function compras(trabalho1, trabalho2) {
    const comprarSoverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2 // XOR
    const manterSaudavel = !comprarSoverte // Negacao logica - operacao unaria

    return {comprarSoverte, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true,true)) // { comprarSoverte: true, comprarTv32: false, comprarTv50: true, manterSaudavel: false }
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

/*
{
    comprarSoverte: true,
    comprarTv50: false,
    comprarTv32: true,
    manterSaudavel: false
  }
  {
    comprarSoverte: true,
    comprarTv50: false,
    comprarTv32: true,
    manterSaudavel: false
  }
  {
    comprarSoverte: false,
    comprarTv50: false,
    comprarTv32: false,
    manterSaudavel: true
  }
  */ 