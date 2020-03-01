//You can create a function within an outer function (a closure) that 
//allows you to update a private variable but the variable wouldn't be accessible from 
//outside the function without the use of a helper function.

function outer_function() {
    counter_new = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
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