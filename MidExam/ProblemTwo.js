function TaskPlanner(input) {

    let timeOfEachTask = input
    .shift()
    .split(" ");
    let incomplete = 0;
    let completed = 0;
    let dropped = 0;
    let incomleteTasks = [];

    for (let line of input) {
        let tokens = line.split(" ");
        let command = tokens[0];
        let quest = tokens[1];

        let isQuestExist = incomleteTasks.indexOf(quest);

        if (command === "End") {
            break;
        }

        if (command === "Complete" && quest >= 0 && quest < timeOfEachTask.length) {

            timeOfEachTask.splice(quest, 1, 0);

        } else if (command === "Change" && quest >= 0 && quest < timeOfEachTask.length) {
            let secondQuest = tokens[2];
            timeOfEachTask.splice(quest, 1, secondQuest)
        } else if (command === "Drop" && quest >= 0 && quest < timeOfEachTask.length) {
            timeOfEachTask.splice(quest, 1, -1)
            dropped++;
        }

       

        for (let element of timeOfEachTask) {

            

            if (command === "Count Completed" && element === 0) {
                completed++
                console.log(completed);

            } else if (command === "Count Incomplete" && element > 0) {
                element.push(incomleteTasks);
                incomplete++
                console.log(incomplete);
                
            } else if (command === "Count Dropped" && element === -1) {
                dropped++;
                console.log(dropped);
                
            }
        }

    };
    console.log(incomleteTasks.join(" "));

}
TaskPlanner(
    [
        '1 -1 2 3 4 5',
        'Complete 4',
        'Change 0 4',
        'Drop 3',
        'Count Dropped',
        'End'
    ]

)