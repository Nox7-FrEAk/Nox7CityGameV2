var app = require('express')();
var express = require('express')
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.use(express.static('Client'));
console.log(path.resolve(__dirname + '/Client/index.html'))
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/Client/index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
