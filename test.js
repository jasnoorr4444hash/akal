let currentage = 22;
function left(currentageage) {
    yearsleft = 90 - currentage;
    daysleft = yearsleft * 365 + 17;
    weeksleft = yearsleft * 52;
    monthsleft = yearsleft * 12;
    console.log(" you have " + daysleft + " days," + weeksleft + " weeks," + monthsleft + " months ");

}
left();


function fibbonacciGenerator() {
    let i = 0, j = 1;

    for (i = 0; i < n; i++) {
        console.log(i);
        let next = i + j;
        i = j;
        j = next;


    }


}

fibbonacciGenerator(6);