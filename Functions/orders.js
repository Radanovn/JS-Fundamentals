'use strict';

function orders(array, count) {
    
    if(array == "coffee"){
        return Number.parseFloat(1.5 * count).toFixed(2);
    }else if(array == "water"){
        return Number.parseFloat(1 * count).toFixed(2);
    }else if(array == "coke"){
        return Number.parseFloat(1.4 * count).toFixed(2);
    }else if(array == "snacks"){
        return Number.parseFloat(2 * count).toFixed(2);
    }
}