function city(name, area, population, country, postCode) {
    
    let cities = {
        name,
        area,
        population,
        country,
        postCode,

    }

    for (const tuple of Object.entries(cities)) {
      console.log(tuple.join(" -> "));
      
        
    }
}
city("Sofia", "492", "1238438", "Bulgaria", "1000")