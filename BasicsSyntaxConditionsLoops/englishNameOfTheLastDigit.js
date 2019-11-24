'use strict';

function lastDigit(chek) {
    

    if(chek % 10 == 1){
        console.log("one")
    }else if(chek % 10 == 2){
        console.log("two")
    }else if(chek % 10 == 3){
        console.log("three")
    }else if(chek % 10 == 4){
        console.log("four")
    }else if(chek % 10 == 5){
        console.log("five")
    }else if(chek % 10 == 6){
        console.log("six")
    }else if(chek % 10 == 7){
        console.log("seven")
    }else if(chek % 10 == 8){
        console.log("eight")
    }else if(chek % 10 == 9){
        console.log("nine")
    }else if(chek % 10 == 0){
		console.log("zero")
}
}
lastDigit([512])