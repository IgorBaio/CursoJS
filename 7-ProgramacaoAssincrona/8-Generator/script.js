function* criadorId(){
   let id = 0;
   while(true){
      yield id++;
   }
}

let criarId = criadorId();

console.log(criarId);
for(let i= 0;i<5;i++){
   console.log(criarId.next().value);
}
