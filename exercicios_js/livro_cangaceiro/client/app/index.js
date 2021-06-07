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
 alert("Dados pegos com sucesso!!!");
});