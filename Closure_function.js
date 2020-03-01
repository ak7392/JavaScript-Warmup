function outer_function() {
    counter_new = 0;

    return {
        add: function (increment) {
            counter_new += increment;
        },
        retrieve: function () {
            return console.log(counter_new);
        }

    }
}

/*var c = outer_function();
c.add(5);
c.retrieve();
*/

function isInteger(x) {
    if (x % 1 === 0) {
        console.log("Number is an integer");
    } else {
        console.log("Number is not an Integer");
    }
}

isInteger(5.5);