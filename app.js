const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello from the Airport Managment System server!</h1>');
    res.end();
});

server.listen(3000);