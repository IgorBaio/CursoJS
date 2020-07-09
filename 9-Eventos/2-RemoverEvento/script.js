let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#addEvent");
let btn3 = document.querySelector("#removeEvent");

const msgClique = () =>{
   console.log("Clicou");
}

const msgRemoveClique = () =>{
   console.log("Evento de clique desabilitado");
}

const msgAddClique = () =>{
   console.log("Evento de clique habilitado");
}

btn.addEventListener("click", msgClique)

btn3.addEventListener("click", ()=>{
   msgRemoveClique();
   btn.removeEventListener("click", msgClique);
})

btn2.addEventListener("click", ()=>{
   msgAddClique();
   btn.addEventListener("click", msgClique);
})