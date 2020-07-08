let elemento = document.querySelector("#titulo");

function trocarCor(elemento,cor,num){
   return new Promise(resolve =>{
      setTimeout(function(){
         resolve(elemento.style.color = cor);
         if(num == 0){
            elemento.style.width = "200px"
         }else{
            elemento.style.width = "300px"
         }
   
      },1500);
   })
   
}

async function ordenaCor(){
   while(true){
      await trocarCor(elemento,"red",0);
      await trocarCor(elemento,"orange",1);
      await trocarCor(elemento,"green",0);
      await trocarCor(elemento,"blue",1);
   }

}
ordenaCor()
