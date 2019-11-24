'use strict';

function sort(input) {
    let num1 = +(input[0]);
    let num2 = +(input[1]);
    let num3 = +(input[2]);

    if(num1 > num2 && num1 > num3 && num2 > num3){
        console.log(`${num1}\n${num2}\n${num3}`);
    }else if(num1 > num2 && num1 > num3 && num3 > num2){
        console.log(`${num1}\n${num3}\n${num2}`);
    }else if(num2 > num1 && num2 > num3 && num1 > num3){
        console.log(`${num2}\n${num1}\n${num3}`);
    }else if(num2 > num1 && num2 > num3 && num3 > num1){
        console.log(`${num2}\n${num3}\n${num1}`);
    }else if(num3 > num1 && num3 > num2 && num1 > num2){
        console.log(`${num3}\n${num1}\n${num2}`);
    }else if(num3 > num1 && num3 > num2 && num2 > num1){
        console.log(`${num3}\n${num2}\n${num1}`);
    
    }else if(num1 > num2 && num2 == num3){
        console.log(`${num1}\n${num2}\n${num3}`);
    }else if(num2 > num1 && num1 == num3){
       console.log(`${num2}\n${num1}\n${num3}`);
    }else if(num3 > num1 && num1 == num2){
        console.log(`${num3}\n${num1}\n${num2}`);
    }
    
}
sort([0, 0, 2])