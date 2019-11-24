function solve(input) {
    let sentence = input.split(" ");


    for (let word of sentence) {

        let newWord = word.substring(1);
        
        
        if (word[0] !== charCodeAt(65, 122)) {
            console.log(newWord);
            

        }
    }
    
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')