let novoElemento = document.createElement("p");
let texto = document.createTextNode("Inseri esse texto");

novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento ,heading);