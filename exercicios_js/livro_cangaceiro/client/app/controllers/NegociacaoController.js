class NegociacaoController {
    constructor() {
        //* $ - transformando em querySlector
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        //* Instanciando NegociacoesView
        //* Passando para o construtor o seletor CSS de ID
        this._negociacoesView = new NegociacoesView('#negociacoes');
    }

    //* Metodo
    adiciona(event) {
        //*cancelando submissao de formulario
        event.preventDefault();

        //* Cria valor em negociacoes
        this._negociacoes.adiciona(this._criaNegociacao());

        //* Limpando Formulario
        this._limpaFormulario();
    }

    _limpaFormulario() {
        //* Limpa os campos
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        //* Focandoo no campo data
        this._inputData.focus();

        alert("Dados cadastrados com sucesso!!!");
    }

    _criaNegociacao() {
        //* Retorna instancia de negociacao
        return new Negociacao(
                DateConverter.paraData(this._inputData.value), 
                parseInt(this._inputQuantidade.value), 
                parseFloat(this._inputValor.value));
    }
}