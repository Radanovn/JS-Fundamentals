function distance(input) {
    let stepsMade = +input[0];
    let lengthOfOneStep = +input[1];
    let distanceNeeded = +input[2] / 100;

    let distance = 0;
    
    for (let i = 0; i <= stepsMade; i++) {
        let step = stepsMade[i];
        
        if(step % 5  === 0){
           distance += stepsMade * Math.floor((lengthOfOneStep * 0.7));
        }else{
        distance += stepsMade * lengthOfOneStep
        }
    }

    let distanceInPercent = (distance / distanceNeeded ) * 100;

    console.log(`You travelled ${distanceInPercent.toFixed(2)}% of the distance!`);
   
    // let cmDistance = ((stepsMade - Math.floor(stepsMade / 5)) 
    // * lengthOfOneStep + Math.floor(stepsMade / 5)
    //  * lengthOfOneStep * 0.7) / 100
    
    //  console.log(`You travelled ${(cmDistance / distanceNeeded * 100).toFixed(2)}% of the distance!`)
}
distance(
    [ '100', '2', '1' ]

)