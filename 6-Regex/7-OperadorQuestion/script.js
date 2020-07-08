const opcional = /Prova\s?\d?/;
console.log("opcional");
console.log(opcional.test("Prova") );
console.log(opcional.test("Prova ") );
console.log(opcional.test("Prova 1") );
console.log(opcional.test("Prova2"));
console.log(opcional.test("Prova 3"));
