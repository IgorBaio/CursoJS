const frase = "Olá, eu sou Goku"

const imprimeArray = (frase) =>{
    var arrayDaFrase = frase.split(" ");
    for (var i = 0; i< arrayDaFrase.length; i++){
        if(arrayDaFrase[i].includes(",")){
            arrayDaFrase[i] = arrayDaFrase[i].replace(",", "");
        }
        
        console.log(arrayDaFrase[i]);
    }
}

imprimeArray(frase);