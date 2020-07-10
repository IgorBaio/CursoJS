let {readFile} = require('fs');

readFile('arquivo.txt', "utf8",(error, text) =>{
   if (error){
      throw error;
   }else{
      console.log(text);
   }
});

let {writeFile} = require('fs');

writeFile('arquivo.txt', "-Hello There.\n-General Kenobi\n-Do or dont do, there is no try",(error) =>{
   if (error){
      throw error;
   }else{
      console.log("Escreveu");
   }
});