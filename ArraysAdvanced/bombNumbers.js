function bombNumbers(number, params) {
    let [target, power] = params;

    for (let i = 0; i < number.length; i++) {
        let currentNum = number[i];
        
        if(currentNum === target){
           let start = Math.max(0, i - power);
           let end = Math.min(i + power, number.length -1);

           for (let j = start; j <= end; j++) {
               number[j] = 0;
               
           }
        }
    }
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
        
    }
    console.log(sum);
    
}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)