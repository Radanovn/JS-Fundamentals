function theFinalQuest(input) {
    let words = input
    .shift()
    .split(" ");

    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens[0];

        if(command === "Stop"){
            break;
        }

        if(command === "Delete"){
            let deleteIndex = Number(tokens[1]);
            deleteWord(deleteIndex);
        }else if(command === "Swap"){
            let word1 = tokens[1];
            let word2 = tokens[2];

            swapWord(word1, word2);
        }else if(command === "Put"){
            let word = tokens[1];
            let index = Number(tokens[2]);
            
            put(word, index);
        }else if(command === "Sort"){
            words.sort(sort);
        }else if(command === "Replace"){
            let word1 = tokens[1];
            let word2 = tokens[2];

            replce(word1, word2);
        }
    }

    console.log(words.join(" "));

    
    function deleteWord(index) {
        if(index >= 0 && index < words.length){
        words.splice(index + 1, 1);
        }
    }

    function swapWord(word1, word2) {
        let isWord1Exist = words.indexOf(word1);
        let isWord2Exist = words.indexOf(word2)

        if(isWord1Exist !== -1 && isWord2Exist !== -1){
            words[isWord1Exist] = word2;
            words[isWord2Exist] = word1;
        }
    }

    function put(word, index) {
        index --;
        if(index >= 0 && index <= words.length){
            words.splice(index, 0, word);
        }
    }

    function sort(a, b) {
        return b.localeCompare(a);
    }

    function replce(word1, word2) {
        let isExist = words.indexOf(word2);
        if(isExist >= 0 && isExist < words.length){
            words[isExist] = word1;
        }
    }
}


theFinalQuest(
[
//   'Congratulations! You last also through the have challenge!',
//   'Swap have last',
//   'Replace made have',
//   'Delete 2',
//   'Put it 4',
//   'Stop',
//   '' 

 'This the my quest! final',
  'Put is 2',
  'Swap final quest!',
  'Delete 2',
  'Stop',
  '' 

]

)