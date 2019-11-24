

function oddAndEvenSum(num) {
    num = num.toString();
    let odd = 0;
    let even = 0;


    for (let i = 0; i < num.length; i++) {
        let element = Number(num[i]);
        if (isOdd(element)) {

            even += element;
        }

        if (isEven(element)) {

            odd += element;
        }
    }

    

    function isOdd(n) {
        return n % 2 !== 0;
    }

    function isEven(n) {
        return n % 2 === 0;
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}

oddAndEvenSum([1000435])


