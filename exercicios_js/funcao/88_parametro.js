function area(largura, altura) {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    }
    else {
        return area
    }
}
console.log(area()) // NaN
console.log(area(5,5)) // 25 undefined
console.log(3,4,5) // 12