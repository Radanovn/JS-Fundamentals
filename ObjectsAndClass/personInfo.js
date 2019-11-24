function personInfo(firstName, lastName, age) {
    
    let person = {
        firstName: [firstName],
        lastName: [lastName],
        age: [age],
    };

    
    for (const tuple of Object.entries(person)) {
       let key = tuple[0];
       let value = tuple[1];
       
        console.log(`${key}: ${value}`);
        
    }
}
personInfo("Peter", "Pan", "20")