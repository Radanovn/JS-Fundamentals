function convert(input) {
    let person = JSON.parse(input);
    
    
        
   for (const [key, value] of Object.entries(person)) {
       console.log(`${key}: ${value}`);
       
   }  
    
}
convert(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)