class Carrinho{
   constructor(){
      this.itens = [];
      this.valorUnitario;
      this.qtdTotal = 0;
      this.valorTotal = 0;
   }

   get getValorTotal(){
      return this.valorTotal;
   }

   get getItens(){
      return this.itens;
   }

   get getQtdTotal(){
      return this.qtdTotal;
   }

   set setValorTotal(valor){
      return this.valorTotal += valor;
   }

   set setItens(item){
      return this.itens.push(item);
   }

   set setQtdTotal(qtd){
      return this.qtdTotal += qtd;
   }

   addItem(item){
      // this.setItens(item);
      // this.setValorTotal(item.getPreco());
      // this.setQtdTotal(item.getQtd());
      this.itens.push(item);
      this.valorTotal += item.getPreco*item.getQtd ;
      this.qtdTotal += item.getQtd;
   }

}

class Item{
   constructor(nome,preco, qtd){
      this.nome = nome,
      this.preco = preco,
      this.qtd = qtd

   }

   get getNome(){
      return this.nome;
   }

   get getPreco(){
      return this.preco;
   }

   get getQtd(){
      return this.qtd;
   }

}

var item1 = new Item("Biscoito", 2, 3);
var item2 = new Item("Macarrão", 5, 2);
var item3 = new Item("Suco", 4, 1);
var item4 = new Item("Mouse", 10, 2);
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);

var carrinho = new Carrinho();
carrinho.addItem(item3);
carrinho.addItem(item1);
carrinho.addItem(item4);
carrinho.addItem(item2);
carrinho.addItem(item3);

console.log(carrinho);
