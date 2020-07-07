function checarNumero(num){
   var number = Number(num);
   if(Number.isNaN(number)){
      alert("Por favor, passe só números para o programa");
   }else{
      return number;
   }
}

// checarNumero(5);
// checarNumero("Oi");

var number = prompt("Digite um número:");
checarNumero(number);