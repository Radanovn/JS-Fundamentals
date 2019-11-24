'use strict';

function sumEvenNumbers(args) {
  
    
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        args[i] = +(args[i]);

        
    }
    for (let num of args) {
        if(num%2===0){
            sum += num;
        }
        
    }       
    console.log(sum);
    
}
sumEvenNumbers(['1','2','3','4','5','6'])