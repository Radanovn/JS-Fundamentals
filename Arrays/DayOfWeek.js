'use strict';

// function DayOfWeek(args) {
    

//     if(args == 1){
//         console.log("Monday");
//     }else if(args == 2){
//         console.log('Tuesday');
//     }else if(args == 3){
//         console.log('Wednesday');
//     }else if(args == 4){
//         console.log('Thursday');
//     }else if(args == 5){
//         console.log('Friday');
//     }else if(args == 6){
//         console.log('Saturday')
//     }else if(args == 7){
//         console.log('Sunday')
//     }else{
//         console.log("Invalid day!")
//     }
// }
// DayOfWeek([11])

function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday", "Sunday"];
    
if(day >= 1 && day <= 7){
    console.log(days[day-1]);

}else{
    console.log("Invalid day!");
    
}
}
dayOfWeek([11])