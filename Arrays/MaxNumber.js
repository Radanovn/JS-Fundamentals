'use strict';

function maxNumber(array) {
    let currentEl = [];
   

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let topInteger = true;
       

        for (let j = i+1; j < array.length ; j++) {
            let secElement = array[j];
           

            if (secElement >= element) {
                topInteger = false;
                break;
            }

        }
        if (topInteger) {
            currentEl.push(element);
        }
    }

    console.log(currentEl.join(' '));
}
maxNumber([41, 41, 34, 20])


