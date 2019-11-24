'use strict';

function maxSeq(array) {
    let index = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let currentSeqLength = 1;

        for (let j = i + 1; j < array.length; j++) {
            const nextEl = array[j];

            if (element !== nextEl) {
                break;
            }


            currentSeqLength++;
        }
        if (currentSeqLength > maxSeqLength) {
            maxSeqLength = currentSeqLength;
            index = i;
        }
    }

    let el = array[index];

    console.log(`${el} `.repeat(maxSeqLength).trim());



}