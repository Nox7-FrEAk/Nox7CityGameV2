var app = require('express')();
var express = require('express')
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var Kartengenerator = require("./Client/Karte/Kartengenerator");

app.use(express.static('Client'));
console.log(path.resolve(__dirname + '/Client/index.html'))
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/Client/index.html'));
});

console.log(Kartengenerator.test);
var karte = new Kartengenerator()
console.log(Kartengenerator.tileSize);

var map;
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('setMap', function(msg){
    map = msg;
    console.log("set", typeof map);
  });

  socket.on('getMap', function(msg){
    console.log("get", typeof map);
      io.emit('map', map);
  });
  //if(map){
  //  io.emit("map", map);
  //}
});


http.listen(3001, "127.0.0.1", function(req){
  console.log('listening on *:3001');
});
