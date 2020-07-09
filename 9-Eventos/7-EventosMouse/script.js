let btn1 = document.querySelector("#btn1");

btn1.addEventListener("mousedown", function(){
   console.log("Apertou o botao")
})
btn1.addEventListener("mouseup", function(){
   console.log("Soltou o botao")
})
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("dblclick", ()=>{
   console.log("Apertou com dois cliques")
})
btn2.addEventListener("contextmenu", (e)=>{
   e.preventDefault();
   console.log("Apertou com o botao direito")
})