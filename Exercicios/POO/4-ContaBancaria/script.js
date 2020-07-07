class ContaBancaria{
   constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
      if(saldoCorrente == null){
         this.saldoCorrente=0;
      }else{
         this.saldoCorrente = saldoCorrente;
      }

      if(saldoPoupanca == null){
         this.saldoPoupanca=0;
      }else{
         this.saldoPoupanca = saldoPoupanca;
      }

      if(jurosPoupanca == null){
         this.jurosPoupanca=0;
      }else{
         this.jurosPoupanca = jurosPoupanca;
      }
   }

   get getSaldoCorrente(){
      return this.saldoCorrente;
   }

   get getSaldoPoupanca(){
      return this.saldoPoupanca;
   }

   get getJurosPoupanca(){
      return this.jurosPoupanca;
   }
   
   set setJurosPoupanca(juros){
      return this.jurosPoupanca = juros;
   }

   depositoSaldoCorrente(valor){
      return this.saldoCorrente += valor;
   }

   depositoSaldoPoupanca(valor){
      return this.saldoPoupanca += valor;
   }

   saqueSaldoCorrente(valor){
      return this.saldoCorrente -= valor;
   }

   saqueSaldoPoupanca(valor){
      return this.saldoPoupanca -= valor;
   }

   tranferenciaPoupancaCorrente(valor){
      if(this.saldoPoupanca >= valor){
         this.saldoPoupanca -= valor;
         this.saldoCorrente += valor;
      }else{
         console.log("Saldo insuficiente");
      }
   }

   tranferenciaCorrentePoupanca(valor){
      if(this.saldoCorrente >= valor){
         this.saldoPoupanca += valor;
         this.saldoCorrente -= valor;
      }else{
         console.log("Saldo insuficiente");
      }
   }

   rendimento(tempoPassado){
      for(var i = 0; i <tempoPassado;i++){
         var valorAAcrescentar = this.getSaldoPoupanca; 
         valorAAcrescentar *=  this.getJurosPoupanca/100;
         this.depositoSaldoPoupanca(valorAAcrescentar);
      }
   }

}

class ContaEspecial extends ContaBancaria{
   constructor(saldoCorrente,saldoPoupanca,jurosPoupanca){
      super(saldoCorrente,saldoPoupanca,2*jurosPoupanca)
   }
}

var conta1 = new ContaBancaria();
conta1.setJurosPoupanca = 0.5;
console.log(conta1.getSaldoCorrente);
console.log(conta1.getSaldoPoupanca);
conta1.depositoSaldoCorrente(50);
conta1.depositoSaldoPoupanca(150);
console.log(conta1);
conta1.rendimento(2);
console.log(conta1);
conta1.tranferenciaCorrentePoupanca(25);
console.log(conta1);
conta1.tranferenciaPoupancaCorrente(15);
console.log(conta1);

console.log("\n\n");

var conta2 = new ContaEspecial(0,0,0.5);
console.log(conta2.getSaldoCorrente);
console.log(conta2.getSaldoPoupanca);
conta2.depositoSaldoCorrente(50);
conta2.depositoSaldoPoupanca(150);
console.log(conta2);
conta2.rendimento(2);
console.log(conta2);
conta2.tranferenciaCorrentePoupanca(25);
console.log(conta2);
conta2.tranferenciaPoupancaCorrente(15);
console.log(conta2);