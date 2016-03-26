var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('./index2.html','utf-8',function (error,content) {
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(content);
    });
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    socket.emit('message', 'you are connected');
    socket.broadcast.emit('message', 'Another client just connected !');
    socket.on('user', function (username) {
        socket.username = username;
    });
    socket.on('message', function (message) {
        console.log(socket.username +' message : ' + message);
        socket.broadcast.emit(socket.username +' message : ' + message);
    });

});
server.listen(8080);