//* Buscando os elementos atraves do seletor CSS
var campos = [
    document.querySelector("#data"),
    document.querySelector("#valor"),
    document.querySelector("#quantidade")
];

console.log(campos);

//* Buscando tbody
var tbody = document.querySelector("table tbody");

//* Buscando form atraves do evento submit
document.querySelector(".form").addEventListener("submit", function(event){
    var tr = document.createElement("tr");

    campos.forEach(function(campo) {
        //*cria um atd sem informacoes
        var td = document.createElement("td");

        //* Atrbui o valor doo campo a td
        td.textContent = campo.value;

        //* Adiciona td na tr
        tr.appendChild(td);
    });

    alert("Dados criados com sucesso!!!");
});