'use strict';

// function Login(input) {
//     let username = [input.shift()];
//     let chek = true;
//     while (chek) {
//         username.reverse()
//         console.log("Incorrect password. Try again.")

//         username = [input.shift()];
//         username++
//     }
//        if(!username.reverse()){
//         console.log(`User ${username} logged in.`)
//     }
// 


function Login(username) {
    
    let counter = 0;
    let password = username.reverse();
    

    
    while (true) {
        if (username == password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        else if (counter >= 3) {
            console.log(`User ${username} blocked!`);
            return;
        }
        else {
            console.log("Incorrect password. Try again.");
            counter++;
        }
    }

}


Login(['Acer', 'login', 'go', 'let me in', 'recA'])