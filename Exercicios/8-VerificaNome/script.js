const nome = "Igor"
let name = prompt("Qual seu nome? ");

if(name.toLowerCase() == nome.toLowerCase()){
    console.log(`Seja bem vindo ${name} .`);
}else{
    console.log(`${name} você não é o usuário certo.`);
}
