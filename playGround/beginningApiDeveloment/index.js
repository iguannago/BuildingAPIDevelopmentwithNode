const maths = require('./maths');
const fs = require('fs');
const jsonFile = require('./json-file.json');

console.log('maths add function...');
console.log(maths.add(2, 3));

console.log('\nset timeout 1 sec delay...');
setTimeout(() => {
    console.log(jsonFile.name);
    console.log(jsonFile.desc);
}, 1000);

const logMsg = () => {
    console.log(jsonFile.name);
    console.log(jsonFile.desc);
};

console.log('\nset timeout 1 sec delay callback...');
setTimeout(logMsg, 1000);


console.log('\nread a file and print it out...');
const file = `${__dirname}/in-file.txt`;
fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})