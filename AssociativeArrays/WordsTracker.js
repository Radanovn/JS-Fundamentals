function WordsTracker(array) {

    let words = array
        .shift()
        .split(" ");

        let wordsCount = {};
    for (let word of words) {
        wordsCount[word] = 0;

    }

    for (const currentWord of array) {
        if(wordsCount.hasOwnProperty(currentWord)){
            wordsCount[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordsCount)
    .sort((firstPair, secondPair) => {
        let [firstWord, firstOccurence] = firstPair;
        let [secondWord, secondOccurence] = secondPair;

        return secondOccurence - firstOccurence;

    });
    
    for (let [word, occurence] of sortedWords) {
        console.log(`${word} - ${occurence}`);
        
        
    }


}
WordsTracker(
    [
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)