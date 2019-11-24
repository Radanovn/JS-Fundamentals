function grades(grade) {


    {
        if (grade < 3) {
            console.log("Fail");
            return;
        }

        if (grade < 3.50) {
            console.log("Poor");
            return;
        }

        if (grade < 4.50) {
            console.log("Good");
            return;
        }

        if (grade < 5.50) {
            console.log("Very good");
            return;
        }

        if (grade < 6) {
            console.log("Excellent");
            return;
        }


    }
}
grades(3.33)