'use strict';


function Vacantion(people, peopleType, dayType) {


    
    let price = 0;
    let discount = 0;

    if (dayType == "Friday") {
        if (peopleType == "Students") {
            price = 8.45;
        }
        else if (peopleType == "Business") {
            price = 10.90;
        }
        else if (peopleType == "Regular") {
            price = 15.00;
        }
    }
    else if (dayType == "Saturday") {
        if (peopleType == "Students") {
            price = 9.80;
        }
        else if (peopleType == "Business") {
            price = 15.60;
        }
        else if (peopleType == "Regular") {
            price = 20.00;
        }
    }
    else if (dayType == "Sunday") {
        if (peopleType == "Students") {
            price = 10.46;
        }
        else if (peopleType == "Business") {
            price = 16.00;
        }
        else if (peopleType == "Regular") {
            price = 22.50;
        }
    }

    if (people >= 30 && peopleType == "Students") {


        discount = (people * price) * 0.15;
        console.log(`Total price: ${((people * price) - discount).toFixed(2)}`);

    }
    else if (peopleType == "Business" && people >= 100) {


        people -= 10;
        console.log(`Total price: ${(people * price).toFixed(2)}`);
    }
    else if (peopleType == "Regular" && people >= 10 && people <= 20) {


        discount = (people * price) * 0.05;
        console.log(`Total price: ${((people * price) - discount).toFixed(2)}`);
    }
    else {
        console.log(`Total price: ${(people * price).toFixed(2)}`);
    }
}

