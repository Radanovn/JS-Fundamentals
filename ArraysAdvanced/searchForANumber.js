function searchForANumber(array, secondArray) {
    
    let slicer = secondArray[0];
    let splicer = secondArray[1];
    let counter = secondArray[2];

    let newArray = array.slice(0, slicer);
    newArray.splice(0, splicer);
    let result = newArray.filter(x => x === counter).length;
    
    
    
   console.log(`Number ${counter} occurs ${result} times.`);
   


}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])