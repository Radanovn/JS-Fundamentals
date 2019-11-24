function employees(array) {
   let employees = {};
    for (let i = 0; i < array.length; i++) {
        let employeeName = array[i];

      let length =  employees[employeeName] = employeeName.length
        
        console.log(`Name: ${employeeName} -- Personal Number: ${length}`);
    }
    
    
}
employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ]
)