const dominos = /(http(s)?:\/\/)?(www)?[\.\w{1,}]+\.?(\.com|\.com.br)?(\/\w+)?/;

console.log(dominos.exec("https://www.github.com/IgorBaio"));
console.log(dominos.exec("https://igorbaio.github.io/TimerApp"));
console.log(dominos.exec("https://www.google.com"));
console.log(dominos.exec("https://www.google.com.br"));