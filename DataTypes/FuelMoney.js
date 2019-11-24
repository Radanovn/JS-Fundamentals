

function FuelMoney(distance, passengers, price) {
    
    let neededFuel = (Number(distance) / 100) * 7;
        neededFuel += Number(passengers) * 0.100;
    let neededMoney = Number(price) * neededFuel
    
    
    
    console.log(`Needed money for that trip is ${neededMoney}lv.`)
}
FuelMoney([260, 9, 2.49])