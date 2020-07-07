var a =1;
var b =2;
var c =3;

if(c>a){
   a=b;
   console.log(a);
}

for(var i = 0; i<5;i++){
   b++;
   a =a +c+1;
   c+=2;
   console.log(a);
}

if(b==a){
   a++;
}else{
   a = a+ b + c;
}

console.log(a);

a = a*b;

console.log(a);