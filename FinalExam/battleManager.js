function battleManager(input) {
    input.pop();
    let personCount = 0;
    let healthObj = {};
    let energyObj = {};
    const add = (name, health, energy) => {
        health = Number(health);
        energy = Number(energy);
        if (!healthObj.hasOwnProperty(name)) {
            healthObj[name] = health;
            personCount++;
            if (!energyObj.hasOwnProperty(name)) {
                energyObj[name] = energy;
            }
        } else {
            healthObj[name] += health;
        }
    }
    const attack = (firstPlayer, secondPlayer, damage) => {
        damage = Number(damage);
        if (healthObj.hasOwnProperty(firstPlayer) &&
            healthObj.hasOwnProperty(secondPlayer)) {
            healthObj[secondPlayer] -= damage;
            if (healthObj[secondPlayer] <= 0) {
                console.log(`${secondPlayer} was disqualified!`);
                delete healthObj[secondPlayer];
                delete energyObj[secondPlayer];
                personCount--;
            }
            energyObj[firstPlayer]--;
            if (energyObj[firstPlayer] === 0) {
                console.log(`${firstPlayer} was disqualified!`);
                delete healthObj[firstPlayer];
                delete energyObj[firstPlayer];
                personCount--;
            }
        }
    }
    const deletePlayer = (name) => {
        if (name === 'All') {
            healthObj = {};
            energyObj = {};
            personCount = 0;
        }
        if (healthObj.hasOwnProperty(name) && energyObj.hasOwnProperty(name)) {
            delete healthObj[name];
            delete energyObj[name];
            personCount--;
        }
    }
    const commandParser = {
        'Add': add,
        'Attack': attack,
        'Delete': deletePlayer,
    }
    for (let line of input) {
        let tokens = line.split(':');
        let command = tokens.shift();
        commandParser[command](...tokens);
    }
    console.log(`People count: ${personCount}`);
    let sortedHealthObj = Object.entries(healthObj)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((pair) => {
            let name = pair[0];
            let health = pair[1];
            for (let names in energyObj) {
                if (name == names) {
                    console.log(`${name} - ${health} - ${energyObj[name]}`);
                }
            }
        });
}