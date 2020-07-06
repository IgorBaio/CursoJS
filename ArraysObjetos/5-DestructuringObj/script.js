const person = {
   name: "Jhon",
   lastName:"Doe" 
}

console.log(person.name);
console.log(person.lastName);

const {name:fname, lastName:lname} = person;

console.log(fname);
console.log(lname);
