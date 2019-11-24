'use strict';

function biggest(first, second, third) {
    let a = Number(first);
    let b = Number(second);
    let c = Number(third);
    
    
    if (a > b && a > c){
        console.log(a);
    }else if(b > a && b > c){
        console.log(b);
    }else{
        console.log(c)
    }
}
biggest([130,
5,
    99])