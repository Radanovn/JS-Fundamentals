'use strict';

function oddNumbers(input) {
    let counter = Number(input);
    let sum = 0;
    let odd = 1;
 
 
    for (let i = 1; i <= counter; i++) {
        sum += odd;
        console.log(odd);
        odd += 2
    }
    console.log(`Sum: ${sum}`)
}
oddNumbers([5]);