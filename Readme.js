var fs = require('fs');

var readme = fs.readFileSync('abhi.txt', 'utf8');
console.log(readme);