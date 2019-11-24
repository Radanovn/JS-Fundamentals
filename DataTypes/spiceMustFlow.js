'use strict';


function spices(spice) {
    let total = 0;
    let days = 0;
    let workersConsume = 26;
    let dayConsume = 10;
    
    while(spice >= 100){
        
        total += spice - workersConsume;
        spice -= dayConsume;
        days++   
    };
    if(total >= 26){
        total -= 26;
    };
    
    console.log(days);
    console.log(total);
    
};
spices([111]);