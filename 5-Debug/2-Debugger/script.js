var a =1;
var b =2;
var c =3;

if(c>a){
   a=b;
   debugger;
}

for(var i = 0; i<5;i++){
   b++;
   a =a +c+1;
   c+=2;
   debugger;
}

if(b==a){
   a++;
}else{
   a = a+ b + c;
}

debugger;

a = a*b;

debugger;

console.log("teste");