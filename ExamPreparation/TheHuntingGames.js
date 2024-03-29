function TheHuntingGames(input) {
    let days = Number(input.shift());
    let playersCount = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    
    let water = days * playersCount * waterPerDay;
    let food = days * playersCount * foodPerDay;

    let consumedEnergy = input.map(Number);

    for (let day = 1; day <= days; day++) {
        let energy = consumedEnergy.shift();
        
        groupEnergy -= energy;

        if(groupEnergy <= 0){
            break;
        }

        if(day % 2 === 0){
            groupEnergy *= 1.05;
            water *= 0.7;
        }
        
        if(day % 3 === 0){
            groupEnergy *= 1.1;
            food -= food / playersCount;
        } 

    }
    if(groupEnergy <= 0){
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
        
    }else{
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
        
        
    }
}
TheHuntingGames(
[ '10',
  '7',
  '5035.5',
  '11.3',
  '7.2',
  '942.3',
  '500.57',
  '520.68',
  '540.87',
  '505.99',
  '630.3',
  '784.20',
  '321.21',
  '456.8',
  '330',
  '' ]

)