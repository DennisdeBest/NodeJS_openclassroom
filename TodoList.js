var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
var ent = require('ent');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
//defaut values
var listArray = ["Shoppiing", "Shower"];
//stat=rt socket.io connection
io.sockets.on('connection', function (socket) {

    socket.on('new_client', function (username) {
        socket.emit('list', listArray);
    });
    socket.on('add', function (message) {
        listArray.push(message);
        console.log(listArray);
        socket.broadcast.emit('list', listArray);
        socket.emit('list', listArray);
        
    });
    socket.on('delete', function (index) {
        console.log("Delete");
        listArray.splice(index,1);
        socket.emit('list', listArray);
        socket.broadcast.emit('list', listArray);
    });
    
});

    server.listen(8080);