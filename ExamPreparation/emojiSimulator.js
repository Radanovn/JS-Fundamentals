function EmojiSimulator(input) {
    let emojiCode = input[1]
        .split(':');
    let newString = '';

    for (let i = 0; i < emojiCode.length; i++) {

        let line = emojiCode[i];


        decryptedEmojies = String.fromCharCode(line);

        newString += decryptedEmojies;

    }

    let secretCode = ':' + newString + ':'; 

    let message = input[0];
    let pattern = /(?<=[\s]):([a-z]{4,}):(?=[\s,.!?]){1}/g; 
    let emoji = message.match(pattern);
    let isMatch = false;
    let totalPower = 0;
    let output = "Emojis found: ";
    if(emoji !== null) {
        

        for (let i = 0; i < emoji.length; i++) {
            var currentEmoji = emoji[i];

            if (i == emoji.length - 1) {
                output += currentEmoji;
            } else {
                output += currentEmoji + ', ';
            }

            if (secretCode === currentEmoji) {
                isMatch = true;
            }
            
            for (let j = 1; j < currentEmoji.length - 1; j++) {
                let line = currentEmoji[j];

                line = line.charCodeAt(0);

                totalPower += line;

            }

        }

        console.log(output);
    }

    

    if (isMatch) {
        totalPower = totalPower * 2;
    }
    
    console.log(`Total Emoji Power: ${totalPower}`);





}
EmojiSimulator(
   [ 'In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
  '97:101:117:114' ]
)

EmojiSimulator(
    [ 'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
  '115:101:118:101:110' ]
)