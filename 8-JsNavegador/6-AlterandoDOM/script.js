let novoElemento = document.createElement("p");
let texto = document.createTextNode("Inseri esse texto");
novoElemento.appendChild(texto);
let elementoAlvo = document.querySelector("#titulo");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento,elementoAlvo);
