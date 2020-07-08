const dia = /\d{2}/;
console.log("dia");
console.log(dia.test("2019") && "2019".length ==2);
console.log(dia.test("asfsd"));
console.log(dia.test("15")  && "05".length ==2);

const palavraPleoMenosTresLetras = /\w{3}/;
console.log("palavraPleoMenosTresLetras");
console.log(palavraPleoMenosTresLetras.test("asf"));
console.log(palavraPleoMenosTresLetras.test("asfsd"));
console.log(palavraPleoMenosTresLetras.test("as"));
