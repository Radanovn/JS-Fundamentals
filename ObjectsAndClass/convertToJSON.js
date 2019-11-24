function convert(name, lastName, hairColor) {
    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }

    let obj = JSON.stringify(object);
   
    console.log(obj);

}
convert(
    "George", "Jones", 'Brown'
)