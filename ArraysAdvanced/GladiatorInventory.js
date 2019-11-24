// function GladiatorInventory(array) {
//     let inventory = array[0].split(" ");
//     for (let i = 1; i < array.length; i++) {


//         let tokens = array[i].split(" ");

//         let command = tokens[0];
//         let quest = tokens[1];

//         if (command === "Buy") {
//             let isExist = inventory.indexOf(quest);
//             if (isExist == -1) {
//                 inventory.push(quest);
//             }
//         } else if (command === "Trash") {
//             let isExistOne = inventory.indexOf(quest);
//             if (isExistOne !== -1) {
//                 inventory.splice(isExistOne, 1);

//             }
//         } else if (command === "Repair") {
//             let repair = quest;
//             let isExistTwo = inventory.indexOf(quest);
//             if (isExistTwo !== -1) {

//                 inventory.splice(isExistTwo, 1);
//                 inventory.push(repair);
//             }

//         } else if (command === "Upgrade") {

//             let one = quest.split("-")[0];
//             let two = quest.split("-")[1];
//             let isExistFirst = inventory.indexOf(one);

//                 if (isExistFirst !== -1) {
//                     let str = one.concat(":",two)
//                     inventory.splice(isExistFirst + 1 , 0, str)      
//                 } 

//         }
//     }
//     console.log(inventory.join(" "));


// }

function GladiatorInventory(input) {
    let inventory = input
        .shift()
        .split(' ');

    input.forEach((line) => {
        let [command, quest] = line.split(' ');
        let indexOfQuest = inventory.indexOf(quest);

        if (command === "Buy" && indexOfQuest === -1) {
            inventory.push(quest);
        } else if (command === "Trash" && indexOfQuest !== -1) {
            inventory.splice(indexOfQuest, 1);
        } else if (command === "Repair" && indexOfQuest !== -1) {
            inventory.splice(indexOfQuest, 1)
            inventory.push(quest);
        } else if (command === "Upgrade") {
            let tokens = quest.split("-");
            quest = tokens[0];
            let upgrade = tokens[1];
            indexOfQuest = inventory.indexOf(quest);

            if (indexOfQuest !== -1) {
                inventory.splice(indexOfQuest + 1, 0, `${quest}:${upgrade}`);
            }
        }
    });
    console.log(inventory.join(' '));
    
}
GladiatorInventory(
    // [
    //     'SWORD Shield Spear',
    //     'Buy Bag',
    //     'Trash Shield',
    //     'Repair Spear',
    //     'Upgrade SWORD-Steel'
    // ])
['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)


