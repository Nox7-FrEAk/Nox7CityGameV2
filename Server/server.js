var app = require('express')();
var express = require('express')
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var Kartengenerator = require("./Client/Karte/Kartengenerator");

app.use(express.static('Client'));
console.log(path.resolve(__dirname + '/Client/index.html'))
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/Client/index.html'));
});

var karte = new Kartengenerator()


var map;
var sockets = {};
var id = 0;
var lager;
io.on('connection', function(socket) {
  let currentId = id++;
  sockets[currentId] = socket;

  console.log('a user connected');
  socket.on('setMap', function(msg) {
    map = msg;
    console.log("set", typeof map);
  });

  socket.on('getMap', function(msg) {
    console.log("get", typeof map);
    socket.emit("id", currentId);
    socket.emit('map', map);
  });

  socket.on("setLager", function(cLager) {
    lager = cLager;

  });

  socket.on('getLager', function(msg) {
    socket.emit('lager', lager);
  });

  socket.on("add", function(changes) {
    if (lager) {
      for (let i in changes) {
        lager[i] = (lager[i] || 0) + changes[i];
      }
      io.emit("lagerChange", lager);
    }
  })

  socket.on("remove", function(changes) {
    if (lager) {
      for (let i in changes) {
        lager[i] = (lager[i] || 0) - changes[i];
      }
      io.emit("lagerChange", lager);
    }
  });

  socket.on("addFabrik", function(fabrik) {
    for (let i in sockets) {
      let cur = sockets[i];
      if (cur !== socket) {
        cur.emit("addFabrik", fabrik);
      }
    }
  });
  socket.on("mouseHover", function(coordinates) {
    for (let id in sockets) {
      let cur = sockets[id];
      if (cur !== socket) {
        cur.emit("mouseHover", coordinates);
      }
    }
  });
  //if(map){
  //  io.emit("map", map);
  //}
});





http.listen(3001, "127.0.0.1", function(req) {
  console.log('listening on *:3001');
});
