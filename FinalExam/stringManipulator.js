function stringManipulator(input) {
    let text = input.shift();
    input.pop();
 
    const change = (char, replacement) => {
        let regex = new RegExp(char, 'g');
        text = text.replace(regex, replacement);
        console.log(text);
    }
    const includes = (string) => {
        let ifIncludes = text.includes(string);
        if (ifIncludes) {
            console.log(`True`);
        } else {
            console.log('False');
        }
    }
    const end = (string) => {
        let ifEndsWith = text.endsWith(string);
        if (ifEndsWith) {
            console.log(`True`);
        } else {
            console.log('False');
        }
    }
    const uppercase = () => {
        text = text.toUpperCase();
        console.log(text);
    }
    const findIndex = (char) => {
        let firstIndex = text.indexOf(char);
        console.log(firstIndex);
    }
    const cut = (startIndex, length) => {
        startIndex = Number(startIndex);
        length = Number(length);
        let newString = text.substr(startIndex, length);
        console.log(newString);
    }
    const commandParser = {
        'Change': change,
        'Includes': includes,
        'End': end,
        'Uppercase': uppercase,
        'FindIndex': findIndex,
        'Cut': cut
    }
 
    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens.shift();
        commandParser[command](...tokens);
    }
}
