
var num = prompt("Digite um número")

for(var i = 2; i <=num; i++){
    if(num % i == 0 && num == i){
        console.log(`${num} é primo`);
        break;
    }else if(num % i == 0 && num != i){
        console.log(`${num} não é primo`);
        break;
    }


}
