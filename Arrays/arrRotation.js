'use strict';

function arrRotation(array, number) {
    while (number > 0) {

        let firstEl = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array[array.length - 1] = firstEl;
        number --;
    }
    console.log(array.join(" "));


}
arrRotation([51, 47, 32, 61, 21], 2)