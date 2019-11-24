function partyProfit(input) {
    let partySize = +input[0];
    let days = +input[1];

    let coins = 0;

   for (let day = 1; day <= days; day++) {
       

        if (day % 10 === 0) {
            partySize -= 2;
        }

        if (day % 15 === 0) {
            partySize += 5;
        
        }
        coins += 50;
        coins -= 2 * partySize;

        if (day % 3 === 0) {
            coins -= 3 * partySize;
        }
        if (day % 5 === 0) {
            coins += 20 * partySize;
            if (day % 3 === 0) {
                coins -= 2 * partySize;
            }
        }
        
    }
    console.log(`${partySize} companions received ${Math.floor(coins / partySize)} coins each.`);
    

}
partyProfit([ '3', '5' ]);
