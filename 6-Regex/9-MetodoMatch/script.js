const digitos = /\d+/;
console.log("digitos");
console.log("tem o numero 100".match(digitos) );
console.log("Eu tenho o numero 13 aqui".match(digitos) );
console.log("Eu tenho o numero 13 aqui".match(digitos).index );
console.log("Eu tenho o numero 13 aqui".match(digitos)[0] );
console.log("Eu tenho o numero 13 aqui".match(digitos).input );
