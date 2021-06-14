let controller = new NegociacaoController();

//* Associa o evento de submissao do formulario a chamada do metodo ADICIONA em controller
document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));