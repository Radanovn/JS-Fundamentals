'use strict';

function MagicSum(array, magicSum) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = i+1; j < array.length; j++) {
            const nextEl = array[j];
            

            if (element + nextEl === magicSum) {
                console.log(`${element} ${nextEl}`);
                
            }
        }
        
    }
}