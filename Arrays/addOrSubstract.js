'use strict';

// function addOrSubcrtract(input) {
//     let resultArr = [];
//     let oldArrSum = 0;
//     let newArrSum = 0;

//     for (let i = 0; i < input.length; i++) {
//         oldArrSum += input[i];
//         if (input[i] % 2 === 0) {
//             resultArr[i] = input[i] + i;
//             newArrSum += resultArr[i];
//         } else {
//             resultArr[i] - input[i] - i;
//             newArrSum += resultArr[i];
//         }
//     }
    // console.log(resultArr);
    // console.log(oldArrSum);
    // console.log(newArrSum);
// }


function addOrSubtract(array) {

    let newArr = [];

    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < array.length; i++) {
        oldSum += array[i];
        
        
        if(array[i] % 2 == 0){
            newArr[i] = array[i] + i;
            newSum += newArr[i];
            
        }else{
            newArr[i] = array[i] - i;
            newSum += newArr[i];

        }
    }
        
   console.log(newArr);
   console.log(oldSum);
   console.log(newSum);
}
addOrSubtract([-5, 11, 3, 0, 2])