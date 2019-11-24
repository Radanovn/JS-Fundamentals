function froggySquad(input) {
    let namesOfFrogs = input
        .shift()
        .split(" ");

    input
        .forEach(frogLine => {
            let [command, quest, index] = frogLine.split(" ");

            let isQuestExist = namesOfFrogs.indexOf(quest);
            let isIndexExist = namesOfFrogs.indexOf(index);
            if (command === "Join") {
                namesOfFrogs.push(quest);
            }

            if (command === "Jump" && isIndexExist !== -1) {
                index = Number(index);
                namesOfFrogs.splice(index, 0, quest);
            }

            if (command === "Dive" && quest >= 0 && quest < namesOfFrogs.length) {
                quest = Number(quest);
                namesOfFrogs.splice(quest, 1);
            }

            if (command === "First") {
                let firstNFrogs = ''

                if (quest <= namesOfFrogs.length) {
                    for (let i = 0; i <= quest; i++) {
                        firstNFrogs += namesOfFrogs[i] + " ";

                    }

                } else {
                    for (let i = 0; i < namesOfFrogs.length; i++) {
                        firstNFrogs += namesOfFrogs[i] + " ";
                    }

                }

                console.log(firstNFrogs);

            } else if (command === "Last") {
                let firstNFrogs = ''

                if (quest <= namesOfFrogs.length) {
                    for (let i = namesOfFrogs.length - quest; i < namesOfFrogs.length; i++) {
                        firstNFrogs += namesOfFrogs[i] + " ";
                    }
                } else {
                    for (let i = 0; i < namesOfFrogs.length; i++) {
                        firstNFrogs += namesOfFrogs[i] + " ";
                        
                    }
                }

                console.log(firstNFrogs);
            }

            if (command === "Print" && quest === "Normal") {
                console.log(`Frogs: ${namesOfFrogs.join(" ")}`);
            }

            if (command === "Print" && quest === "Reversed") {
                console.log(`Frogs: ${namesOfFrogs.reverse().join(" ")}`);
            }

        });



}
froggySquad(
    // ['Blake Muggy Kishko',
    //     'Join Kvachko',
    //     'Dive 0',
    //     'First 10',
    //     'Print Reversed']

    ['A B C D E F',
        'Join G',
        'Jump Q 3',
        'Last 3',
        'Dive 2',
        'Print Normal']
)