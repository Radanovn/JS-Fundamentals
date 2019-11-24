function strManWithFunc(input) {

    let text = '';

    const add = (string) => {
        text += string;
    };

    const upgrade = (char) => {
        let newChar = String.fromCharCode(char.charCodeAt(0) + 1);
        let regex = new RegExp(char, "g");
   
        text = text.replace(regex, newChar);
    };

    const print = () => {
        console.log(text);
    };

    const index = (char) => {
        let indexes = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] == char) {
                indexes.push(i);
            }

        };
        let output = indexes.length === 0
                ? 'None'
                : indexes.join(' ');
            console.log(output);
    };

    const remove = (string) => {
        let regex = new RegExp(string, 'g')
        text = text.replace(regex, '');
    };

    const commands = {
        "Add": add,
        "Upgrade": upgrade,
        "Print": print,
        "Index": index,
        "Remove": remove
    };

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        let valueFunc = commands[command];
        valueFunc(...tokens);

    }

}


strManWithFunc(
    [
        'Add abracadabra',
        'Print',
        'Upgrade a',
        'Print',
        'Index b',
        'Remove bbrb',
        'Print',
        'End'
    ]
)