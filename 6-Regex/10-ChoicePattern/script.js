const frutas = /\d+ (bananas?|maçãs?|laranjas?)/;

console.log(frutas.exec("10 bananas"));
console.log(frutas.exec("1 banana"));
console.log(frutas.exec("1 batata"));
console.log(frutas.exec("2 maçãs"));
console.log(frutas.exec("1 maçã"));
console.log(frutas.exec("0 laranjas"));
console.log(frutas.exec("1 laranja"));

console.log(frutas.exec("10 bananas")[0]);
console.log(frutas.exec("1 banana")[0]);
console.log(frutas.exec("2 maçãs")[0]);
console.log(frutas.exec("1 maçã")[0]);
console.log(frutas.exec("0 laranjas")[0]);
console.log(frutas.exec("1 laranja")[0]);