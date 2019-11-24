'use strict';

function reversee(n, args) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let current = (args[n - 1 - i]);

        arr.push(current)
    }
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        output += arr[i] + ' ';
        

    }
    console.log(output)
}
reversee(3, [10, 20, 30, 40, 50]);