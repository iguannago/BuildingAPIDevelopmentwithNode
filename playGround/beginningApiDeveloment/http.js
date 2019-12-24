const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Request starting...');
    res.write('Hello world!');
    res.end();
});

server.listen(5000, () => {
    console.log('server running on port 5000...');
})