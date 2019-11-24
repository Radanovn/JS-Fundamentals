'use strict';


function SumDigits(number) {
    let ourNumber = +number
    let lastDigit;
    let sum = 0;
    while (ourNumber !== 0) {
        lastDigit = ourNumber % 10;
        sum += lastDigit;
        ourNumber = parseInt(ourNumber / 10);

    }

    console.log(sum);
}
