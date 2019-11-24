

function howManyAs(sentence) {
    
    let counter = 0;
    let fromIndex = 0;
    

    while(sentence.indexOf('a' , fromIndex) !== -1){
       fromIndex += sentence.indexOf('a' , fromIndex);
        counter++;
    
        
        
    }
    console.log(counter);
    
     
     
    
    
}
howManyAs("I am a JavaScript developer");

