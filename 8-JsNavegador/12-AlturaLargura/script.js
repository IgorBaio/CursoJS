let elemento = document.querySelector("#titulo");

//considera as bordas
console.log("Largura: "+elemento.offsetWidth);
console.log("Altura: "+elemento.offsetHeight);

//Nao considera as bordas
console.log("Largura: "+elemento.clientWidth);
console.log("Altura: "+elemento.clientHeight);


