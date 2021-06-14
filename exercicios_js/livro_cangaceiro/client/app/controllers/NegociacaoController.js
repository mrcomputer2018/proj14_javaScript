class NegociacaoController {
    constructor() {
        //* $ - transformando em querySlector
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    //* Metodo
    adiciona(event) {
        //*cancelando submissao de formulario
        event.preventDefault();

        let negociacao = new Negociacao(this._inputData.value, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));

        console.log(negociacao);
    }
}