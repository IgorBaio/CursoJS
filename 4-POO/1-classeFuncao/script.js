function criaCachorro(raca,patas,cor){
   var cachorro = Object.create({});
   cachorro.raca = raca;
   cachorro.patas = patas;
   cachorro.cor =cor;
   cachorro.latir = function(){
      console.log("Au Au");
   }
   return cachorro;
}

var doberman = criaCachorro("Doberman", 4, "preta");
console.log(doberman);

doberman.latir();