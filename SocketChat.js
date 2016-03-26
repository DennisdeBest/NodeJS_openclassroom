var app = require('express');
var server = require('http').createServer(app);
var fs = require('fs');
var ent = require('ent');

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html')
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    socket.emit('message', 'you are connected');
    socket.on('new_client', function (username) {
        username = ent.encode(username);
        socket.username = username;
        socket.broadcast.emit('new_client', username);
    });
    socket.on('message', function (message) {
        message=ent.encode(message);
        socket.broadcast.emit('message',{user: socket.username, message: message});

    });

});
server.listen(8080);