const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readFiles() {
    const file = await readFile(`${__dirname}/in-file.txt`);
    const file2 = await readFile(`${__dirname}/in-file2.txt`);

    return file + "\n - and - \n\n" + file2;
}

readFiles()
    .then(result => console.log(result))
    .catch((error) => {
        console.log('There were errors...');
        console.log(error)
    });