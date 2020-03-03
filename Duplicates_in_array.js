function duplicates(array) {
    var dup = [];
    var obj = {};

    for (i = 0; i <= array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
        } else {
            dup.push(array[i]);
        }
    }
    return dup;
}

console.log(duplicates([1, 2, 3, 4, 4, 5, 6, 7, 8, 8]))