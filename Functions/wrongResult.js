function wrongResult(numOne, numTwo, numThree) {
    
    let result = '';

    if(numOne >= 0 && numTwo >= 0 && numThree >= 0){
        result = "Positive";

    }else{
        result = "Negative";
    }
    return result;
}