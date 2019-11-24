'use strict';

function NthElement(array) {

    let lastEl = Number(array.pop());
    
    for (let i = 0; i < array.length; i += lastEl) {
        let element = array[i];
        console.log(element.join(" "));;
          
    }
    let newArray = newArray.push(element);
    console.log(newArray.join(" "));;
    
}


NthElement(['5', '20', '31', '4', '20', '2']);