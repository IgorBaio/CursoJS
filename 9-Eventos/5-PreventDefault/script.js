let btn = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a");

const msgClique = (e) =>{
   console.log("Clicou no botao");
   e.stopPropagation();
}
const msgP = () =>{
   console.log("Clicou no paragrafo");
}

btn.addEventListener("click", msgClique)

btn2.addEventListener("click", (event)=>{
   console.log(event)
})

p.addEventListener("click", ()=>{
   msgP();
})

a.addEventListener("click", function(e){
   e.preventDefault();
   console.log("Nao vai mudar de link");
})