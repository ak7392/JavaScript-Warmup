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

if (function f() {}) {
    x += typeof f;
}
console.log(x);