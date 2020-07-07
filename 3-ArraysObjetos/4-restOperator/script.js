let num =1;
let num2 =5;
let num3 =3;
let num4 =4;

const imprimirNumeros = (...args) =>{
   for(var i = 0;  i < args.length; i++){
      console.log(args[i]);
   }
}

imprimirNumeros(num,num2,num3,num4);
console.log("\n\n");
imprimirNumeros(num4,num2,num,num2,num2);
console.log("\n\n");
imprimirNumeros(0,7,5,1,2,4,6,7,4);
