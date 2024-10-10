const prompt = require("prompt-sync")();

var userInput = prompt("enter a word: ")

var stringArray = userInput.split('')

var key =0
var subString = [] ;

loop1: for(var i = 0 ; i < stringArray.length; i++ )
{  
    

    loop2:  for(var j = i+1 ; j < stringArray.length; j++)
      { 
        if(stringArray[i] == stringArray[j])
        {
            
            var testsubString = userInput.slice(i,j);
            if(subString.length < testsubString.length )
            {
             var longsubstring = testsubString
            } 

             if(testsubString.length > userInput.length - i){
                break loop1;
             }

            break loop2;
       
        }else if(j == (stringArray.length-1)){
            
            var longsubstring = userInput.slice(i,j);
            break loop1 ;
           
        }


    }
    
       
}

console.log(longsubstring);
console.log(key);