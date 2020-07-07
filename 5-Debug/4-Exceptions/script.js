function saudacao(nome){
   if(typeof nome != 'string'){
      throw new Error("o parâmetro deve ser uma string");
   }else{
      console.log(`Olá ${nome}.`);
   }
}

saudacao("Igor");
saudacao(5);
