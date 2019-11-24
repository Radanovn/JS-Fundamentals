'use strict';

function RightPlace(string, char, result) {
    let res = string.replace("_", char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
    
}
RightPlace('Str_ng', 'I', 'Strong')