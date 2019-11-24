function pascalCase(input) {
    const isUpperCase = (symbol) => {
        return symbol.toUpperCase() === symbol;
    }

    let words = [];
    
    let currentWord = input[0];
    
    for (let i = 1; i < input.length; i++) {
        let letter = input[i];

        if(isUpperCase(letter)){
            words.push(currentWord);
            currentWord = letter;
        }else{
            currentWord += letter;
        }
    }
    words.push(currentWord);

    console.log(words.join(', '));
    
}
pascalCase(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
)