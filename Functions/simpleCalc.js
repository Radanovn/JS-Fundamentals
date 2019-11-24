'use strict';

function calculator(firstNum, secondNum, operation) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    if(operation == "multiply"){
        console.log(multiply(firstNum, secondNum));
        
    }if(operation == "divide"){
        console.log(divide(firstNum, secondNum));
    }if(operation == "add"){
        console.log(add(firstNum, secondNum));
    }if(operation == "subtract"){
        console.log(subtract(firstNum, secondNum));
    }
}
