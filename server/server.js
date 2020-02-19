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


socket.on('connection', (sock) =>{
    
});

server.on('error', (err) =>{
    console.error("Server error: " + err);
});
server.listen(8080, () =>{
    console.log('connected to port 8080');
})