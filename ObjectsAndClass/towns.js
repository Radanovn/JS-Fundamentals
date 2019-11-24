function towns(array) {
  let object = {};
  array
  .forEach((line) =>  {
    let Town = line.split(' | ');
    let Latitude = Number(Latitude) = line.split(' | ')
    let Longitude = Number(longitude) = line.split(' | ');
    let town = object[Town];
    let latitude = object[Latitude];
    let longitude = object[Longitude];

    console.log(`town: ${town}, latitude: ${latitude}, longitude: ${longitude}`);
    
  });
    

    
    
}
towns(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]

)