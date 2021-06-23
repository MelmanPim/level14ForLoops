/* for (let odd = 0; odd <= 20; odd++) {
    if (odd % 2) {
        console.log(odd + " is odd");
    }
    else {
        console.log(odd + " is even");
    };
}; */


/* for (let table = 0; table <= 10; table++) {
    console.log(table * 9);

}; */


for (i = 60; i <= 90; i++) {
    assignGrade(i);

    function assignGrade(score) {
        if (score > 90) {
            return 'A';
        } else if (score > 80) {
            return 'B';
        } else if (score > 70) {
            return 'C';
        } else if (score > 65) {
            return 'D';
        } else {
            return 'E';
        }
    }

    console.log('Voor ' + i + 'punten krijg je een ' + assignGrade(i));

};
