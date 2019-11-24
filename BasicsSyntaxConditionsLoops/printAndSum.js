'use strict';
function PrintAndSum(num1, num2) {
 
    let sum = 0;
    let numbers = ""
    for(let i = num1 ; i <= num2; i++){
        numbers += i + " "
        sum += i;
        
       
        
    }
     console.log(`${numbers}\nSum: ${sum}`)
}
PrintAndSum([5, 10])