function BattleManager(input) {
    let personName = {};

    let energies = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        let [command, name, health, energy] = line
            .split(':');
        health = Number(health);
        energy = Number(energy);

        if (command === "Results") {
            break;
        } else if (command === "Add") {
            if (personName[name]) {
                personName[name] += health;
            } else {
                personName[name] = health;
                personName[name] = energy;
            }

        } else if (command === "Attack") {
            if (personName[name] && personName[health]) {
                let damageTaken = personName[health] - energy;
                personName[health] -= damageTaken;

                if (personName[health] <= 0) {
                    console.log(deffenderName[name] + ' was disqualified!');

                    // delete animalsFood.name;

                    personName[name][energy] -= 1
                    console.log(personName[name][energy]);

                }
            }
        }
    }
}
BattleManager(
    ['Add:Mark:1000:5',
        'Add:Clark:1000:3',
        'Attack:Clark:Mark:500',
        'Add:Allison:2500:5',
        'Attack:Clark:Mark:300',
        'Add:Charlie:4000:10',
        'Attack:Clark:Mark:500',
        'Results']
)