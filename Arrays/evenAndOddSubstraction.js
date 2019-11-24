'use strict';

function evenAndOddSubtraction(args) {
    
    let odd = 0;
    let even = 0;

    for (let i = 0; i < args.length; i++) {
        args[i] = +(args[i]);    
    }
    for (const num of args) {
        if(num % 2 === 0){
            even += num;

        }else{
            odd += num;
        }
    }    
    console.log(even - odd);
    
}

evenAndOddSubtraction([[1,2,3,4,5,6]])