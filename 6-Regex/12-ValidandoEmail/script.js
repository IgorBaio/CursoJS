const email = /\w+\@\w+\.(com|\edu|\org)(\.br)?/;

console.log(email.exec("aaatttaa@sadjhasdjhak.com"));
console.log(email.exec("aaatttaa@sadjhasdjhak.com.br"));
console.log(email.exec("aaatttaa@sadjhasdjhak.edu"));
console.log(email.exec("aaatttaa@sadjhasdjhak.edu.br"));
console.log(email.exec("aaatttaa@sadjhasdjhak.org.br"));
console.log(email.exec("aaatttaa@sadjhasdjhak.org"));
console.log(email.exec("@sadjhasdjhak.org"));
console.log(email.exec("aaatttaa@sadjhasdjhak"));
console.log(email.exec("aaatttaa@sadjhasdjhak.asdasd"));