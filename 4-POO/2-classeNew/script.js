function Cachorro(raca,patas,cor){
   this.raca = raca;
   this.patas = patas;
   this.cor =cor;
   this.latir = function(){
      console.log("Au Au");
   }
}

var doberman = new Cachorro("Doberman", 4, "preta");
console.log(doberman);

doberman.latir();