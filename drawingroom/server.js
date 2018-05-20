var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(var i in cords){
        io.sockets.emit('gceq', cords[i]);
    }
    socket.on('kordinater', function(arr){
        cords.push(arr);
        io.sockets.emit('gceq', arr);
    });
});