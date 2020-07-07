try{
   let a = b+2;
}catch(e){
   console.log("error de forma mais bonita: "+e);
}finally{
   console.log("Independente do que vem antes, aqui executa");
}

console.log("continua o codigo");