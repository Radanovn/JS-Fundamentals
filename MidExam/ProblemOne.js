function Giftbox(input) {

    let sizeOfASide = Number(input[0]);
    let numberOfSheets = Number(input[1]);
    let areaOfSingleSheet = Number(input[2]);

    let areaOfGiftBox = sizeOfASide * sizeOfASide * 6;
    let allSheets = numberOfSheets * areaOfSingleSheet;
    let covered = areaOfGiftBox - allSheets;
    let percentage = 0;



    for (let i = 1; i <= covered; i++) {


        if (i % 3 === 0) {
            percentage += areaOfSingleSheet * 0.25;

        }else{
            percentage += areaOfSingleSheet;
        }
        

        
        


    }
    let percent = (percentage / areaOfGiftBox) * 100
    
    
  
    console.log(`You can cover ${percent.toFixed(2)}% of the box.`);
    
  
};
Giftbox(
    // ['5', '30', '4']
    ["2.5", "32", "4.25"]
)