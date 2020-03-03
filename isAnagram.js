var firstWord = "mary";
var secondWord = "army";

function isAnagram(firstWord, secondWord) {

    var a = firstWord.toLowerCase();
    var b = secondWord.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}


console.log(isAnagram(firstWord, secondWord));

console.log('\n');
console.log("--------------------Concept2------------------------");
console.log("\n");
var x = 1;
// Basially here if is evaluated during the runtime and thus no declaration during compilation results in undefined
if (function f() {}) {
    x += typeof f;
}
console.log(x);

// To rectify that better write in below manner
var k = 1;
if (1) {
    function foo() {};
    k += typeof foo;
}
console.log(k); // output 1function