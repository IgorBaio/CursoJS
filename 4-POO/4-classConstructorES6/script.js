class Cachorro{
   constructor(raca,patas,cor){
      this.raca = raca;
      this.patas = patas;
      this.cor =cor;
   }
}

Cachorro.prototype.latir = function(){
   console.log("Au Au");
}

Cachorro.prototype.uivar = function(){
   console.log("Auuuuu");
}

var doberman = new Cachorro("Doberman", 4, "preta");
console.log(doberman);

doberman.latir();
doberman.uivar();