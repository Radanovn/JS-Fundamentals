function emojiSimulatorWithFunc(input) {

    let [message, encryptedEmoji] = input;
    let pattern = /(?<=[\s]):([a-z]{4,}):(?=[\s,.!?])/g;
    let decryptedEmoji = decrypt();
    let totalPower = 0;

    let matches = pattern.exec(message);
    
    let allEmojies = [];

    
    while(matches !== null){
        

        let [ emoji, emojiLetter ] = matches;
        allEmojies.push(emoji);
        let currentPower = sumAsciiCode(emojiLetter);
        totalPower += currentPower;

        matches = pattern.exec(message);
    }
    
    if (allEmojies.includes(decryptedEmoji)){
        totalPower *= 2;
    }

    console.log(`Emojis found: ${allEmojies.join(", ")}`);
    console.log(`Total emoji Power: ${totalPower}`);
    
    function decrypt (params) {
        let output = ":";

        let numbers = encryptedEmoji.split(":").map(Number);

        for (let num of numbers) {
            output += String.fromCharCode(num);
        }
       

        return output + ":";
    }

    function sumAsciiCode(emoji) {
        let sum = 0;

        for (let i = 0; i < emoji.length; i++) {
            let line = emoji.charCodeAt(i);

            sum += line;
        }
        return sum;
        
    }
}
emojiSimulatorWithFunc(
    [
        'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
        '115:101:118:101:110']
)