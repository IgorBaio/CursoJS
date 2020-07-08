const data = /((\/)?[0-9]{1,2})+\/[0-9]{2,4}/;

console.log(data.exec("09/2/1956"));
console.log(data.exec("9/2/1956"));
console.log(data.exec("09/02/1956"));
console.log(data.exec("09/02/19"));
console.log(data.exec("09/2/19"));
console.log(data.exec("9/2/19"));