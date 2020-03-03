function palindrome(string) {
    var arr = []
    var new_srting = ''
    for (i = string.length - 1; i >= 0; i--) {
        arr.push(string[i]);

    }

    //console.log(arr.join(''));
    if (arr.join('') == string) {
        return true;
    } else {
        return false;
    }

}
console.log(palindrome("MaM"));