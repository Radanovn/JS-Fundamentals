function replace(input) {
    
let output = input[0];

for (let i = 1; i < input.length; i++) {
    let currentLetter = input[i];
    let previousLetter = input[i-1];

    if(currentLetter !== previousLetter){
        output += currentLetter;
    }
}
console.log(output);

}
replace('aaaaabbbbbcdddeeeedssaa')