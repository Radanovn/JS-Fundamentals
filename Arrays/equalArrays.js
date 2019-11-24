'use strict';

function equalArrays(arrOne, arrTwo) {
    let sum = 0;
    

    for (let i = 0; i < arrOne.length; i++) {
        arrOne[i] = +(arrOne[i]);
        
        if (arrOne[i] !== arrTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    for (let num of arrOne) {
        num += sum;
        return;
    }
    
    console.log(`Arrays are identical. Sum: ${sum}`)

}




equalArrays(['10', '20', '30'], ['10', '20', '30'])