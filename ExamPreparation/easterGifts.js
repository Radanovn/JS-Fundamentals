function easterGifts(input) {

    let namesOfGifts = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {

        let element = input[i].split(" ");
        let command = element[0];
        let gift = element[1];

        if (command === "No Money") {
            break;
        }
        if (command === "OutOfStock") {

            let count = namesOfGifts.filter(item => item === gift).length;
            for (let i = 0; i < count; i++) {
                let index = namesOfGifts.indexOf(gift)
                let none = 'None'
                namesOfGifts.splice(index, 1, none)

            }
        } else if (command === "Required") {
           let index = element[2];
           if(index >= 0 && index <= namesOfGifts.length -1){
               namesOfGifts.splice(index, 1, gift);
           }
        } else if (command === "JustInCase") {
            namesOfGifts.splice(namesOfGifts.length - 1, 1, gift)

        };

    };
    let filtred = namesOfGifts.filter(item => item !== "None");
    console.log(filtred.join(' '));
};

// function easterGifts(input) {
//     let giftsList = input
//         .shift()
//         .split(' ');
 
//     for (let i = 0; i < input.length; i++) {
//         let line = input[i];
//         let [command, gift, index] = line.split(' ');
       
//         if (line === "No Money") {
//             break;
//         }

//         if (command === "OutOfStock") {
//             if (giftsList.includes(gift)) {
//                 for (let j = 0; j < giftsList.length; j++) {
//                     if (giftsList[j] === gift) {
//                         giftsList[j] = "None";
//                     }
//                 }
//             }
//         } if (command === "Required") {
//             if (index > -1 && index < giftsList.length) {
//                 giftsList[index] = gift;
//             }
//         } if (command === "JustInCase") {
//             giftsList.splice(giftsList.length - 1, 1, gift);
//         } 
//     }
//     giftsList = giftsList.filter((el) => el !== "None");
//     console.log(giftsList.join(' '));
// }
easterGifts(
    ['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
        'OutOfStock Eggs',
        'Required Spoon 2',
        'JustInCase ChocolateEgg',
        'No Money']
)