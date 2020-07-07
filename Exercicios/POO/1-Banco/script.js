class Banco{
   constructor(saldo){
      if(saldo == null){
         this.saldo=0;
      }else{
         this.saldo = saldo;
      }
   }

   get getSaldo(){
      return this.saldo;
   }

   deposito(valor){
      this.saldo += valor;
   }

   saque(valor){
      this.saldo -= valor;
   }
}

var conta1 = new Banco(0);
console.log(conta1.getSaldo);
conta1.deposito(50);
console.log(conta1.getSaldo);
conta1.saque(25);
conta1.deposito(5);
console.log(conta1.getSaldo);

console.log("\n\n");

var conta2 = new Banco();
console.log(conta2.getSaldo);
conta2.deposito(40);
console.log(conta2.getSaldo);
conta2.saque(5);
conta2.deposito(65);
console.log(conta2.getSaldo);
