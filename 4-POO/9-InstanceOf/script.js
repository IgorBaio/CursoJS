class Mamifero{
   constructor(patas, cor){
      this.patas = patas;
      this.cor = cor;
   }
}

var coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero{
   constructor(patas,raca,cor){
      super(patas, cor);
      this.raca = raca;
   }

   latir(){
      console.log("Au au");
   }

}

var pug = new Cachorro(4,"pug","preto");
console.log(pug);
console.log(pug.raca);
console.log(pug.patas);
console.log(pug.cor);
pug.latir();


console.log( new Cachorro instanceof Mamifero);
console.log( pug instanceof Mamifero);
console.log( coiote instanceof Mamifero);