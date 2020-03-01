function fizz_buzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

// fizz_buzz();

function checkArray(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        console.log("This is an array");
    } else {
        console.log("This is not an array");
    }

}

checkArray([1, 2, 3, 4]);
checkArray("Non Array");