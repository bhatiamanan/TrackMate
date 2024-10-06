const express = require('express');
const app = express();

const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

server.listen(3000);