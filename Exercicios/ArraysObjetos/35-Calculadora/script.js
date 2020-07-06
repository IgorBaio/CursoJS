var numero1 = parseInt(prompt("Digite o primeiro valor:"));
var numero2 = parseInt( prompt("Digite o segundo valor:"));
var operacao = prompt("Digite o simbolo da operação (+, -, *, /)");

const calculadora = (numero1,numero2,operacao) =>{
    if(operacao == "+"){
        console.log(numero1+numero2);
    }else if(operacao=="-"){
        console.log(numero1-numero2);
    }else if(operacao == "*"){
        console.log(numero1*numero2);
    }else if(operacao == "/"){
        console.log( numero1/numero2);
    }else{
        console.log("operacao invalida");
    }

}

calculadora(numero1,numero2,operacao);