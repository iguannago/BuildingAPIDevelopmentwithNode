const maths = require('./maths');
const fs = require('fs');

console.log(maths.add(2, 3));

let file = `${__dirname}/in-file.txt`;
fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})