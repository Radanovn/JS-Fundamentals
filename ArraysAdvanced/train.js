
function train(input) {

    let waggons = input
        .shift()
        .split(" ")
        .map(Number);

    let maxCapacity = Number(input.shift());

    for (let element of input) {
        let tokens = element.split(" ")

        if (tokens.length === 2) {
            let wagonPassengers = Number(tokens[1]);
            waggons.push(wagonPassengers);
        } else {
            let passengersCount = Number(tokens[0]);


            for (let i = 0; i < waggons.length; i++) {
                let currentCapacity = waggons[i];


                if (passengersCount + currentCapacity <= maxCapacity) {
                    waggons[i] += passengersCount;
                    break;
                }
            }
        }
    }
    console.log(waggons.join(' '));

}






train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
