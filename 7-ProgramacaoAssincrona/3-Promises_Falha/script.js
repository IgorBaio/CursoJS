let p = Promise.resolve(new Error("Algo deu errado"));

console.log("Outros códigos");

console.log(p);

p.then((value) => console.log(value))
   .catch((reason) => {console.log(`Erro: ${reason}`)});