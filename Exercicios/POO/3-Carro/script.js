class Veiculo{
   constructor(cor,marca,modelo,gasolinaRestante, consumo){
      this.cor = cor;
      this.marca = marca;
      this.modelo = modelo;
      this.gasolinaRestante = gasolinaRestante;
      this.consumo = consumo;
   }

   get getCor(){
      return this.cor;
   }

   get getMarca(){
      return this.marca;
   }

   get getGasolinaRestante(){
      return this.gasolinaRestante;
   }

   get getConsumo(){
      return this.consumo;
   }

   set setConsumo(consumo){
      return this.consumo = consumo;
   }

   set setCor(cor){
      return this.cor = cor;
   }

   set setMarca(item){
      return this.marca = marca;
   }

   set setGasolinaRestante(valorAcrescentar){
      return this.gasolinaRestante += valorAcrescentar;
   }


}

const andar = (km,carro) =>{
   carro.setGasolinaRestante = -(km/carro.getConsumo);
  
}

var carro = new Veiculo("branca","Ford","KA",20,7);
console.log(carro);
carro.setGasolinaRestante = 5;
console.log(carro.getGasolinaRestante);
andar(1,carro);
console.log(carro.getGasolinaRestante);
carro.setGasolinaRestante = 15;
console.log(carro.getGasolinaRestante);
andar(3,carro);
console.log(carro.getGasolinaRestante);
console.log("\n\n");


var carro2 = new Veiculo("branca","Ford","KA",40,10);
console.log(carro2);
andar(310,carro2);
console.log(carro2.getGasolinaRestante);

console.log("\n\n");
var moto = new Veiculo("preta","Honda","CB-300",20,30);
console.log(moto);
andar(310,moto);
console.log(moto.getGasolinaRestante);
