function second(input) {
    input.shift();
 
    for (let line of input) {
        let pattern = /([@*])([A-Z][a-z]{3,})(\1):\s([\[A-Za-z\]]+)\|([\[A-Za-z\]]+)\|([\[A-Za-z\]]+)\|$/gm;
 
        let matcher = pattern.exec(line);
 
        if (matcher) {
            let tag = matcher[2];
            let first = matcher[4][1];
            let second = matcher[5][1];
            let third = matcher[6][1];
 
            let result = [];
 
            let firstOutput = first.charCodeAt(0);
            let secondOutput = second.charCodeAt(0);
            let thirdOutput = third.charCodeAt(0);
            result.push(firstOutput, secondOutput, thirdOutput)
 
            let output = result.join(' ');
 
            console.log(`${tag}: ${output}`);
        } else {
            console.log(`Valid message not found!`)
        }
    }
}