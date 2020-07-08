const corpo = document.body;
console.log(corpo);

let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = "https://github.com/IgorBaio";

a.setAttribute('href',link);

console.log(a.getAttribute('href'));
