var c1 = {
    x: 2,
    y: 3
}


function callback_() {
    console.log(this.x + " " + this.y);
    // console.log(callback_)
}

var bindusage = callback_.bind(c1)

bindusage();


function mul(x) {
    return function (y) { //returns anonymous function which takes argument y
        return function (z) { //returns anonymous function which takes argument z
            return x * y * z; //returns multiplication of three arguments

        }
    }

}

console.log(mul(2)(3)(4));