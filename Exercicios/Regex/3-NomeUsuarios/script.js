const NomeUsuarios = /^(?=.{3,16}$)[a-z0-9_-]+/;
console.log(NomeUsuarios.exec("MaTh12"));
console.log(NomeUsuarios.exec("456192aabcdefgh"));
console.log(NomeUsuarios.exec("4561192aabcdefgh-_"));
console.log(NomeUsuarios.exec("asda-_sda"));
console.log(NomeUsuarios.exec("RogiBR"));
console.log(NomeUsuarios.exec("rogi-br08"));
console.log(NomeUsuarios.exec("rogi_br08"));