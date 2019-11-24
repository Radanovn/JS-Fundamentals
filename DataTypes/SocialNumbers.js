'use strict';
function SpecialNumbers(n) {
    
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = i;
    
    

    if(sum == 5 || sum == 7 || sum == 14){
        console.log(`${sum} -> True`);

    }else{
        console.log(`${sum} -> False`);
    }

}
}
SpecialNumbers([15])
