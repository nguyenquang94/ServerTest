//PORT to connect to
const PORT = 3001;
 
//Instantiate socket server
var app = require('http').createServer().listen(PORT);
var io = require('socket.io').listen(app);
 
//Simple echo server
io.on('connection', function(socketconnection){
    console.log('co ket noi');
    socketconnection.send("Connected to Server-1");
     
    socketconnection.on('message', function(message){
        socketconnection.send(message);
    });
});