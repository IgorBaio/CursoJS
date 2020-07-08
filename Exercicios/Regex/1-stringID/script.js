const stringID = /\w+[ID]/;

console.log(stringID.exec("asdasdasdasdID"));
console.log(stringID.exec("asdasdcz"));
console.log(stringID.exec("09/02/1956"));
console.log(stringID.exec("09021956ID"));