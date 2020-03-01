var num = 2;

function outer() {
    var num = 4;

    function inner() {
        num++;
        var num = 3;
        console.log(num)
    }
    inner();
}
outer();