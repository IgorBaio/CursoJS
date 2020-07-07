class Cachorro{
   constructor(raca,cor){
      this.raca = raca;
      this.cor =cor;
   }
   latir(){
      console.log("Au Au");
   }
   uivar(){
      console.log("Auuuuu");
   }
}

Cachorro.prototype.patas = 4;

var doberman = new Cachorro("Doberman", "preta");
console.log(doberman);
console.log(doberman.patas);

doberman.latir();
doberman.uivar();