'use strict';

function mergeArr(firstArr, secondArr) {
    let = arrAsResult = [];
    for (let i = 0; i < firstArr.length; i++) {

        if (i % 2 === 0) {
            arrAsResult.push(+firstArr[i] +
                +secondArr[i]);
        } else {
            arrAsResult.push(firstArr[i] +
                secondArr[i]);


        }

    }
    console.log(arrAsResult.join(" - "));
    
}