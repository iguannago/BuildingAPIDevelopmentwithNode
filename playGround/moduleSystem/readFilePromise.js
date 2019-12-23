const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
readFile(`${__dirname}/in-file.txt`, 'utf8')
    .then((data) => {
        console.log('promise example begin...\n');
        console.log(data);
        console.log('\npromise example end.')
    })
    .catch(error => console.log(error));
