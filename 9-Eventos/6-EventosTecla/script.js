window.addEventListener("keydown", function(e){
   if(e.key =='q'){
      console.log("Apertou a tecla Q");
   }else if(e.key =='Enter'){
      console.log("Apertou a tecla Enter");
   }else{
      console.log("Apertou a tecla: "+e.key)
   }
})

window.addEventListener("keyup",(e) =>{
   if(e.key =='Enter'){
      console.log("Soltou a tecla Enter");
   }
})