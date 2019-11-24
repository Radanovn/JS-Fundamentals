function sorting(input) {
    let sortedArr = input.sort((a, b) => a - b);

    let output = [];

    while(sortedArr.length !== 0){
        output.push(sortedArr.pop())&&(sortedArr[sortedArr.length-1])
        output.push(sortedArr.shift())&&(sortedArr[0])
    
    }  
    console.log(output.join(' '));
}

// function sorting(input) {
//     let array = input.map(Number).sort(function(a, b) {
//       return a - b;
//     });
//     let arrayCopy = array.slice(0);
//     let result = [];
  
//     for (let i = 0; i < array.length; i++) {
//       result.push(arrayCopy[arrayCopy.length - 1]);
//       if (result.length === array.length) {
//         break;
//       }
//       result.push(arrayCopy[0]);
  
//       if (result.length === array.length) {
//         break;
//       }
//       arrayCopy.shift();
  
//       arrayCopy.pop();
//     }
  
//     console.log(result.join(" "));
//   }
  
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])