const notAB = /[^ab]/;
console.log("notAB");
console.log(notAB.test("a") );
console.log(notAB.test("Aqui tem a"));

const notAtoZ = /[^a-zA-Z]/;
console.log("notAtoZ");
console.log(notAtoZ.test("a") );
console.log(notAtoZ.test("Aqui tem a"));