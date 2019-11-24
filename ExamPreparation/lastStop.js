function lastStop(input) {
    let numbersOfPaintings = input
        .shift()
        .split(" ");

    for (let i = 0; i < input.length; i++) {

        let line = input[i];
        let [command, quest, index] = line.split(' ');

        let isExist = numbersOfPaintings.indexOf(quest);
        let isExistTwo = numbersOfPaintings.indexOf(index);


        if (command === "END") {
            break;
        }

        if (command === "Change" && isExist !== -1 ) {
            numbersOfPaintings.splice(isExist, 1, index);

        } else if (command === "Hide" && isExist !== -1) {
            numbersOfPaintings.splice(isExist, 1);

        } else if (command === "Switch" && isExist !== -1 && isExistTwo !==-1) {

            [numbersOfPaintings[isExist], numbersOfPaintings[isExistTwo]]
                =
            [numbersOfPaintings[isExistTwo], numbersOfPaintings[isExist]];

        } else if (command === "Insert" ) {
            let indexOfNumber = Number(quest);
            if(indexOfNumber >= 0 && indexOfNumber < numbersOfPaintings.length - 1){
            numbersOfPaintings.splice(indexOfNumber + 1, 0, index)
            };

        } else if (command === "Reverse") {
            numbersOfPaintings.reverse();
        }



    }
    console.log(numbersOfPaintings.join(" "));
}


lastStop(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END']
)