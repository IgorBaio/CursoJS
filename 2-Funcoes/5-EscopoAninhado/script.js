let a = 10;

function multiplicar(x,y){
    let a = x * y;

    if(a > 10){
        let a = 0;

        console.log("Dentro do if: "+a);
    }

    console.log("Dentro do multiplicar: "+a);


}

console.log("No geral: "+a);

multiplicar(4,3);