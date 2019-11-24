function StringManipulator(input) {

    let string = '';

    for (let i = 0; i < input.length; i++) {
        const line = input[i];
        let [command, action] = line.split(' ');

        if (command === "End") {
            break;
        } else if (command === "Add") {
            string += action;
        } else if (command === 'Print') {
            console.log(string);
        } else if (command === 'Upgrade') {
            let ascii = action.charCodeAt(0) + 1;
            let newChar = String.fromCharCode(ascii)
            let pattern = new RegExp(action, "g");
            string = string.replace(pattern, newChar);
        } else if (command === "Index") {
            let indexes = [];
            for (let i = 0; i < string.length; i++) {
                if (string[i] == action) {
                    indexes.push(i);
                }
            }
            if (indexes.length > 0) {
                console.log(indexes.join(' '));
            } else {
                console.log('None');

            }
        } else if (command === "Remove") {
            while(string.indexOf(action) !== -1) {
                string = string.replace(action, "");

            }
               
                
        }

    };

};
StringManipulator(
    ['Add abracadabra',
        'Print',
        'Upgrade a',
        'Print',
        'Index b',
        'Remove bbrb',
        'Print',
    ]
);