'use strict';

function IntegerAndFloat(num1, num2, num3) {
    let res = num1 + num2 + num3;

    if (Number(res) === res && res % 1 === 0){
        console.log(`${res} - Integer`)
    }else{
        console.log(`${res} - Float`)
    }
}

IntegerAndFloat([9, 100, 1.1])