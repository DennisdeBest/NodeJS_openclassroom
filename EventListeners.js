var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(page);
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write('Salut l\'inconnue');
    res.end();

});

server.on('close', function () {
console.log('server closed');
})

server.listen(8080);

server.close();