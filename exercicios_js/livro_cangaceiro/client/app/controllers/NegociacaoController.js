class NegociacaoController {
    //* Metodo
    adiciona(event) {
        //*cancelando submissao de formulario
        event.preventFefault();

        alert("Chamei acao no controller!!!");
    }
}