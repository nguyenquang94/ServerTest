//PORT to connect to
const PORT = 3002;
 
//Instantiate socket server
var app = require('http').createServer().listen(PORT);
var io = require('socket.io').listen(app);
 
//Simple echo server
io.on('connection', function(socketconnection){
    socketconnection.send("Connected to Server-2");
    console.log('Connected to Server-2');
     
    socketconnection.on('message', function(message){
        socketconnection.send(message);
    });
});