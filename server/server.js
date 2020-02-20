//Server code
let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();
let clientPath = `${__dirname}/../client`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

let server = http.createServer(app);

let socket = socketio(server);

let waitingPlayer = null;
socket.on('connection', (sock) =>{
    if(waitingPlayer){
        sock.emit('playerColor', '007eff');
        waitingPlayer = null;
    }
    else{
        waitingPlayer = socket;
        socket.emit('playerColor', 'red');
    }
    sock.on('squarePressed', (containerIndex, lastMove) =>{
        socket.emit('pressSquares', containerIndex, lastMove);
        socket.emit('updateSquareRestrictions', containerIndex, lastMove);
    });
});

server.on('error', (err) =>{
    console.error("Server error: " + err);
});
server.listen(8080, () =>{
    console.log('connected to port 8080');
})