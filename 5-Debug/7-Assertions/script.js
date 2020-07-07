var arr = [1,2,3,4,5];
var arr2 = [];

const iterarArray = (array) =>{
   if(array.length == 0){
      //Assertion \/
      throw new Error("O array precisa ter pelo menos um elemento");
   }else{
      for(var i = 0; i< array.length; i++){
         console.log(array[i]);
      }
   }
}

iterarArray(arr);
iterarArray(arr2);