'use strict';

function Rouding(number, rounder) {
    let a = +number;
    let b = +rounder;
    
    if(b > 15){
        b = 15;
    }
    let output = a.toFixed(b)
    console.log(`${parseFloat(output)}`);

}
Rouding([50.213131231, 4])