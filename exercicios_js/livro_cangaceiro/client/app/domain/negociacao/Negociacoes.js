class Negociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        //* Adicionaa negociacao ao Array Negociacoes
        this._negociacoes.push(negociacao);
    }

    //* Retorna o array interno encapsulado pela classe
    paraArray() {
        //* Retorna uma nova referencia criada com os itens de this._negociacoes
        return [].concat(this._negociacoes);
    }
}