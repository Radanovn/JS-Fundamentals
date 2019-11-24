'use strict';

function distinctArray(input) {

    let distinctArr = input.filter((indexOfEl, i) => 
    input.indexOf(indexOfEl) === i);

    console.log(distinctArr.join(" "));
    
    
}

// function distinctArray(input) {
//         let distinctArr = [];

//         for (let i = 0; i < input.length; i++) {
//             const indexOfEl = input.indexOf(input[i]);
             

//             if (indexOfEl === i) {
//                 distinctArr.push(input[i]);
//             }
//         }
//         console.log(distinctArr.join(" "));
        
// }
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);