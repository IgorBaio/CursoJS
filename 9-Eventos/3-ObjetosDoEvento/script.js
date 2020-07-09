let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#addEvent");
let btn3 = document.querySelector("#removeEvent");

const msgClique = (e) =>{
   console.log(e);
}



const msgAddClique = () =>{
   console.log("Evento de clique habilitado");
}

btn.addEventListener("click", msgClique)

btn3.addEventListener("click", (event)=>{
   console.log(event)
})

btn2.addEventListener("click", ()=>{
   msgAddClique();
   btn.addEventListener("click", msgClique);
})