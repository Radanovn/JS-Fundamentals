function SeizeTheFire(input) {
    
    let fires = input[0].split("#");
    let water = Number(input[1]);
    let valideCeils = [];
    let totalEffort = 0;
    let totalFire = 0;
    fires
    .forEach(fireLine => {
        let [powerOfFire, cellValue] = fireLine.split(" = ");
        cellValue = Number(cellValue);

        let isValid = isFireValid(powerOfFire, cellValue);

        if(isValid &&  water >= cellValue){
            totalEffort += cellValue * 0.25;
            water -= cellValue;
            totalFire += cellValue;

            valideCeils.push(cellValue);
        }

    });

    function isFireValid(type, value) {
        if(type === "High" && value >= 81 && value <= 125){
            return true;
        }

        if(type === "Medium" && value >= 51 && value <= 80){
            return true;
        }

        if(type === "Low" && value >= 1 && value <= 50){
            return true;
        }
        
        return false;
    }

    console.log("Cells:")
    valideCeils
    .forEach(cell => {
        console.log(` - ${cell}`);
    });
    console.log(`Effort: ${totalEffort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);
    
}
SeizeTheFire(
    [ 'High = 89#Low = 28#Medium = 77#Low = 23',
     '1250' 
    ]

)