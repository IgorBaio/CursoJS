const regexTest = (tipoRegex, caractereRegex) =>
{
   console.log(caractereRegex);
   console.log(tipoRegex.test("asdasd"));
   console.log(tipoRegex.test(" "));
   console.log(tipoRegex.test("153"));
   console.log(tipoRegex.test("asdasf321"));
}

const pontoRegex = /./;
regexTest(pontoRegex, ".");

const dRegex = /\d/; //[0-9]
regexTest(dRegex, "d");

const dRegex2 = /\D/; //[^0-9]
regexTest(dRegex2, "D");

const sRegex = /\s/; //[0-9]
regexTest(sRegex, "s");

const sRegex2 = /\S/; //[0-9]
regexTest(sRegex2, "S");

const wRegex = /\w/; //[0-9]
regexTest(wRegex, "w");

const wRegex2 = /\W/; //[0-9]
regexTest(wRegex2, "w");