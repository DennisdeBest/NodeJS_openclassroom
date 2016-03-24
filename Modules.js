var http = require('http');
var testModule = require('./TestModule');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(testModule.sayHello());
    res.end();
});

server.on('close', function () {
    testModule.sayGoodbye();
})

server.listen(8080);
server.close();