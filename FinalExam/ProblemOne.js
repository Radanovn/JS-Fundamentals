function stringManipulator(input) {
    let string = input.shift();

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let [command, quest, secQuest] = line.split(' ');

        if (command === 'Done') {
            break;

        } else if (command === 'Change') {
            let pattern = new RegExp(quest, "g");
            string = string.replace(pattern, secQuest);
            console.log(string);

        } else if (command === 'Includes') {
            let includes = string.includes(quest);
            if (includes === -1) {
                console.log("False");
            } else {
                console.log("True");
                
            }

        } else if (command === 'End') {
            let pattern = /\w+/g;
            let result = string.match(pattern);
            let indexOfquest = result.lastIndexOf(quest);
            let last = result.length - 1;
   
            if (indexOfquest === last) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (command === "Uppercase") {
            string = string.toUpperCase();
            console.log(string);
            

        } else if (command === 'FindIndex') {
            let index = string.indexOf(quest);
            console.log(index);

            if (index === -1) {
                console.log("");

            }
        } else if (command === "Cut") {
            quest = Number(quest);
            secQuest = Number(secQuest);
           let newStr = string.substr(quest, secQuest)
  
            console.log(newStr);
            
        }

    }

}
stringManipulator(
    ['//Th1s 1s my str1ng!//',
        'Change 1 i',
        'Includes string',
        'End my',
        'Uppercase',
        'FindIndex I',
        'Cut 5 5',
        'Done']

)