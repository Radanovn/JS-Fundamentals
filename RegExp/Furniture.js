function furniture(input) {

    let spendMoney = 0;

    console.log(`Bought furniture:`);

    input.forEach(line => {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+[.]?[0-9]*)!(?<quantity>[\d)]+)/gm;
        let result = pattern.exec(line);

        

        if(result){
        let totalPrice = Number(result.groups.price * Number(result.groups.quantity));
        spendMoney += totalPrice;
        console.log(`${result.groups.name}`);
    
    }
      
    });
    
    
    console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
    
}
furniture(
    ['>>Sofa<<312.23!3',
        '>>TV<<300!5',
        '>Invalid<<!5',
        'Purchase']

)