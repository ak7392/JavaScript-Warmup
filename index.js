//console.log(process.argv);
//console.log(process.stdout);
//console.log(process.stderr);

//console.log - implementation 
var msg = "hello";
process.stdout.write(msg, +"\n");

fs = require('fs');
fs.createReadStream(__filename).pipe(process.stdout)