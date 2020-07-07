const person = {
    "name": "Jhon",
    "lastName":"Doe" ,
    "idade": 50,
    "languages": ["JavaScript","Python","C#","Java","C"]
 }
 
var pessoaTexto = JSON.stringify(person);

 console.log(pessoaTexto);
 
 var pessoaJSON = JSON.parse(pessoaTexto);
 
 console.log(pessoaJSON.name);