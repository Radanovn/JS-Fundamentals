'use strict';

function gladiator(count, helm, sword, shield, armor) {
    let total = 0;
    for(let i = 1; i<= count; i++){
        if(i%2==0){
            total += helm;

        }if(i%3==0){
            total+= sword;
        }if(i%6==0){
            total+=shield;
        }if(i%12==0)
            total += armor
    }



   
   
   
   
    console.log(`Gladiator expenses: ${(total).toFixed(2)} aureus`)


}