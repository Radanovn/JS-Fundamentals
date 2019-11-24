function feedTheAnimals(input) {
    let animalsFood = {};
    let animalsAreas = {};
    let areas = {};

   
    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        let [command, name, food, area] = line
            .split(':');
        food = Number(food);

        if (command === "Last Info") {
            break;

        } else if (command === "Add") {

            if (animalsFood[name]) {
                animalsFood[name] += food;
            } else {
                animalsFood[name] = food;
                animalsAreas[name] = area;
                if (areas[area]) {
                    areas[area] += 1;
    
                } else {
                    areas[area] = 1;
                }
            }


        } else if (command === "Feed") {
            if (animalsFood[name]) {
                animalsFood[name] -= food;

                if (animalsFood[name] <= 0) {
                    console.log(animalsFood[name] + ' was successfully fed');

                    delete animalsFood.name;

                    let deletedAnimalArea = animalsAreas[name];
                    areas[deletedAnimalArea] -= 1;

                }
            }
        }

    }

    console.log("Animals:");

    for (let key in animalsFood) {
        console.log(key + " -> " + animalsFood[key] + "g");
    }

    console.log("Areas with hungry animals:");

    for (let key in areas) {
        if(areas[key] > 0 ) {
            console.log(key + " : " + areas[key]);
        }
    }
}

feedTheAnimals(
    [
        'Add:Maya:7600:WaterfallArea',
        'Add:Bobbie:6570:DeepWoodsArea',
        'Add:Adam:4500:ByTheCreek',
        'Add:Jamie:1290:RiverArea',
        'Add:Gem:8730:WaterfallArea',
        'Add:Maya:1230:WaterfallArea',
        'Add:Jamie:560:RiverArea',
        'Feed:Bobbie:6300:DeepWoodsArea',
        'Feed:Adam:4650:ByTheCreek',
        'Feed:Jamie:2000:RiverArea',
        'Last Info'
    ]
)