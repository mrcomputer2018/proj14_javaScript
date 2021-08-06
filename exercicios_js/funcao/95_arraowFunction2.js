function Pessoa() {
    this.idade = 0

    //* this nao vai variar
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa