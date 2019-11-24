function storeProvision(stock, orderedProducts) {
    let products = {};
    for (let i = 0; i < stock.length; i+=2) {
        let productName = stock[i];
        let quontity = Number(stock[i + 1]);

        products[productName] = quontity;
    }

    for (let i = 0; i < orderedProducts.length; i+= 2) {
        let productName = orderedProducts[i];
        let quontity = Number(orderedProducts[i + 1]);      
    
        if(products.hasOwnProperty(productName)){
            products[productName] += quontity;
        }else{
            products[productName] = quontity;
        }
        
    }

    for (let key in products) {
        
        console.log(`${key} -> ${products[key]}`);
        
            
        
    }
}
storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
)