var numero = Number(prompt('Escolha um numero :'))
// Se for numero executa
if (!isNaN(numero)) {
    alert('Seu numero e a raiz quadrada de :', numero*numero)
}
else{
    alert('Isto nao e um numero!!!!')
}