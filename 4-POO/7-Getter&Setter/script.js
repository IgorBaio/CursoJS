class Cachorro{
   constructor(raca,cor){
      this.raca = raca;
      this.cor =cor;
   }
   get getRaca(){
      return "A raça é: "+this.raca;
   }

   set setRaca(raca){
      this.raca = raca;
   }

   get getCor(){
      return "A cor é: "+this.cor;
   }

   set setCor(cor){
      this.cor = cor;
   }

   latir(){
      console.log("Au Au");
   }
   uivar(){
      console.log("Auuuuu");
   }
}

var patas = Symbol();

Cachorro.prototype[patas] = 4;

var doberman = new Cachorro("Doberman", "preta");
console.log(doberman);
console.log(Cachorro.prototype[patas]);
console.log(doberman[patas]);

doberman.latir();
doberman.uivar();

var labrador = new Cachorro();
console.log("\n\n\n");
console.log(labrador);
labrador.setCor = "Castanho";
labrador.setRaca = "Labrador";

console.log("\n\n\n"+labrador.raca);
console.log(labrador.cor);
console.log(labrador[patas]);
console.log(labrador);