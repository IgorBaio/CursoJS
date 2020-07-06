const person = {
    "name": "Jhon",
    "lastName":"Doe" ,
    "idade": 50,
    "languages": ["JavaScript","Python","C#","Java","C"]
 }
 
 console.log(person.name);
 console.log(person.lastName);
 console.log(person.idade);
 console.log(person.languages[2]);
 console.log("\n\n");
 console.log(person["name"]);
 console.log(person["idade"]);
 console.log(person["languages"][1]);

 
 console.log("\n\n");
 const {name:fname, lastName:lname} = person;
 
 console.log(fname);
 console.log(lname);
 