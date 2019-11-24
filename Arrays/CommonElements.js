'use strict';

function CommonElements(array, secArray) {


    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = 0; j < secArray.length; j++) {
            let secElement = secArray[j];

            if (element === secElement) {

                console.log(element);



            }

        }
    }

}
CommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
                ['Petar', 10, 'hey', 4, 'hello', '2']);
