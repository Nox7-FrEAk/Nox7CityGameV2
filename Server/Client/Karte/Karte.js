//S/CK/#7_Wold-Generator
class Karte {
  mouseHoverCoordinates = {};
  constructor() {
    this.kartengenerator = new Kartengenerator();
    this.tiles = null
    this.fabriken = []

    this.translateX = 0;
    this.translateY = 0;
    this.zoom = 1;
    this.selectedTile = null;

    var self = this;

    socket.on("map", function(map) {

      self.tiles = self.kartengenerator.generateKarte(map || [], 100);

    });
    socket.emit("getMap", "");

    socket.on("addFabrik", function(fabrik) {
      switch (fabrik.name) {
        case Holzfaeller.fabrikname:
          {
            let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
            self.addFabrik(new Holzfaeller(tile), tile, true);
            break;
          }
        case Kohlewerk.fabrikname:
          {
            let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
            self.addFabrik(new Kohlewerk(tile), tile, true);
            break;
          }
        case Saegewerk.fabrikname:
          {
            let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
            self.addFabrik(new Saegewerk(tile), tile, true);
            break;
          }
        case Steinmetz.fabrikname:
          {
            let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
            self.addFabrik(new Steinmetz(tile), tile, true);
            break;
          }
          case Baecker.fabrikname:
            {
              let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
              self.addFabrik(new Baecker(tile), tile, true);
              break;
            }
          case Bauer.fabrikname:
            {
              let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
              self.addFabrik(new Bauer(tile), tile, true);
              break;
            }
          case Fischer.fabrikname:
            {
              let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
              self.addFabrik(new Fischer(tile), tile, true);
              break;
            }
          case Salzmine.fabrikname:
            {
              let tile = self.kartengenerator.getTile(self.tiles, fabrik.id[0], fabrik.id[1])
              self.addFabrik(new Salzmine(tile), tile, true);
              break;
            }
      }
    })

    socket.on("addHaus", function(haus) {
      console.log(haus)
      switch (haus.name) {
        case Farmer.hausname:
          {
            let tile = self.kartengenerator.getTile(self.tiles, haus.id[0], haus.id[1])
            self.addHaus(new Farmer(tile), tile, true);
            break;
          }
      }
    })

    socket.on("id", function(id) {
      self.id = id;
    })

    socket.on("mouseHover", function(coordinates) {
      self.mouseHoverCoordinates[coordinates.id] = coordinates;

    })
  }



  show() {
    this.tileX = int((mouseX - this.translateX + tileSize / 2) / (tileSize * this.zoom))
    this.tileY = int((mouseY - this.translateY + tileSize / 2) / (tileSize * this.zoom))
    var tile = this.kartengenerator.getTile(this.tiles, this.tileX, this.tileY)
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i]) {
        if (this.tiles[i].getX() + tileSize > -this.translateX * (1 / this.zoom) && this.tiles[i].getX() - tileSize < (windowWidth - this.translateX) * (1 / this.zoom) &&
          this.tiles[i].getY() + tileSize > -this.translateY * (1 / this.zoom) && this.tiles[i].getY() - tileSize < (windowHeight - this.translateY) * (1 / this.zoom)) {
          this.tiles[i].show();


        }
      }
    }
    if (tile instanceof AbstractTile) {
      tile.showMouseOver();

    }

    fill(255, 255, 255, 110)
    rectMode(CENTER)
    stroke(0)
    for (var i in this.mouseHoverCoordinates) {
      let cur = this.mouseHoverCoordinates[i];
      rect(cur.x * tileSize, cur.y * tileSize, tileSize, tileSize)
    }
    rect(this.tileX * tileSize, this.tileY * tileSize, tileSize, tileSize)

    if (this.tileX !== this.lastTileX || this.tileY !== this.lastTileY) {
      this.lastTileY = this.tileY;
      this.lastTileX = this.tileX;
      socket.emit("mouseHover", {
        x: this.tileX,
        y: this.tileY,
        id: this.id
      });
    }
  }
  update(lager) {
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i]) {
        this.tiles[i].update(lager);

      }
    }

  }



  keyPressed(key, lager) {
    var tile = this.kartengenerator.getTile(this.tiles, this.tileX, this.tileY)

    if (key == 'R') this.removeFabrik(tile)

    if (!(tile instanceof Wasser) && !(tile instanceof Lava)) {
      if (key == '1')
        if (lager.remove(Holzfaeller.kosten)) this.addFabrik(new Holzfaeller(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
      if (key == '2')
        if (lager.remove(Steinmetz.kosten)) this.addFabrik(new Steinmetz(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
      if (key == '3')
        if (lager.remove(Saegewerk.kosten)) this.addFabrik(new Saegewerk(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
      if (key == '4')
        if (lager.remove(Farmer.kosten)) this.addHaus(new Farmer(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })

      if (key == '5')
        if (lager.remove(Baecker.kosten)) this.addFabrik(new Baecker(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
      if (key == '6')
        if (lager.remove(Bauer.kosten)) this.addFabrik(new Bauer(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
      if (key == '7')
        if (lager.remove(Fischer.kosten)) this.addFabrik(new Fischer(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
      if (key == '8')
        if (lager.remove(Salzmine.kosten)) this.addFabrik(new Salzmine(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })

      if (key == '9')
        if (lager.remove(Kohlewerk.kosten)) this.addFabrik(new Kohlewerk(tile), tile)
      else simpleMenu.addText({
        text: 'Nicht genug Rohestoffe!',
        col: color(0, 0, 0)
      })
    }

    /*
    if (key == '3') this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '3') this.addFabrik(new Saegewerk(), this.tileX, this.tileY)
    if (key == '4') this.addFabrik(new Steinmetz(), this.tileX, this.tileY)
    if (key == '5') this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '6') this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '7') this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '8') this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    */

  }

  getTileLager() {
    var lager = {}
    for (var i = 0; i < this.fabriken.length; i++) {
      if (this.fabriken[i]) {
        if (this.fabriken[i] instanceof AbstractFabrik) {
          var cache_lager = this.fabriken[i].getLager()
          //console.l
          if (cache_lager != null) {
            for (var j in cache_lager)
              lager[j] = (lager[j] || 0) + cache_lager[j];
          }
        }
      }
    }
    if (Object.keys(lager).length > 0)
      return lager
  }


  mousePressed() {
    var tile = this.kartengenerator.getTile(this.tiles, this.tileX, this.tileY)
    if (tile instanceof AbstractFabrik) {
      if (this.selectedTile == null) {
        tile.setIsSleeping(!tile.getIsSleeping())
      } else {
        tile.addMitarbeiter(this.selectedTile.getVerfuegbareBewohner())
        this.selectedTile.setSelected(false)
        this.selectedTile = null
      }

    } else if (tile instanceof AbstractHaus) {
      tile.setSelected(true)
      this.selectedTile = tile
    }

    if (!(tile instanceof AbstractHaus)) {

      if (this.selectedTile != null) {
        this.selectedTile.setSelected(false)
        this.selectedTile = null
      }

    }

  }
  removeFabrik(tile) {
    for (var i = 0; this.fabriken.length; i++) {
      if (this.fabriken[i] == tile.fabrik) {
        tile.fabrik = null
        break
      }
    }

  }
  addHaus(haus, tile, preventEmit) {
    this.fabriken.push(haus)

    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i] === tile) {
        this.tiles.splice(i, 1)
        console.log('tile entfernt')

      }
      /*
      this.tiles[i].setHelligkeit(0)

      for (var j = 0; j < this.fabriken.length; j++) {
        var d = dist(this.fabriken[j].getX(), this.fabriken[j].getY(), this.tiles[i].getX(), this.tiles[i].getY())

        d = map(d, 250, 400, 255, 0)
        if(this.tiles[i].getHelligkeit() < d)
        this.tiles[i].setHelligkeit(d)

      }*/
    }
    this.tiles.push(haus)
    if (!preventEmit) {
      socket.emit("addHaus", haus);
    }
  }

  addFabrik(fabrik, tile, preventEmit) {

    this.fabriken.push(fabrik)
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i] === tile) {
        this.tiles.splice(i, 1)
        this.tiles.push(fabrik)
        console.log('tile entfernt')

      }
      /*
            this.tiles[i].setHelligkeit(0)

            for (var j = 0; j < this.fabriken.length; j++) {
              var d = dist(this.fabriken[j].getX(), this.fabriken[j].getY(), this.tiles[i].getX(), this.tiles[i].getY())

              d = map(d, 250, 400, 255, 0)
              if(this.tiles[i].getHelligkeit() < d)
              this.tiles[i].setHelligkeit(d)

            }
            */
    }

    for (var i = 0; i < this.fabriken.length; i++) {
      if (this.fabriken[i] instanceof AbstractFabrik)
        this.fabriken[i].setProudktionsMinderung(1)

    }



    for (var i = 0; i < this.fabriken.length; i++) {
      for (var x = 0; x < this.fabriken.length; x++) {
        if (this.fabriken[i] != this.fabriken[x]) {
          if (this.fabriken[i] instanceof AbstractFabrik && this.fabriken[x] instanceof AbstractFabrik) {
            var collide = collideCircleCircle(this.fabriken[i].getX(), this.fabriken[i].getY(), this.fabriken[i].getEinzugsRadius(),
              this.fabriken[x].getX(), this.fabriken[x].getY(), this.fabriken[x].getEinzugsRadius())
            if (collide) {
              this.fabriken[i].setProudktionsMinderung(1 + this.fabriken[i].getProudktionsMinderung())

            }
          }
        }
      }
    }
    if (!preventEmit) {
      socket.emit("addFabrik", fabrik);
    }
  }

  getTranslateX() {
    return this.translateX;
  }

  getTranslateY() {
    return this.translateY;
  }

  setTranslateX(val) {
    this.translateX = val
  }

  setTranslateY(val) {
    this.translateY = val
  }

  getZoom() {
    return this.zoom;
  }

  setZoom(zoom){
    if(this.zoom+zoom <= 2 && this.zoom+zoom >= 0.4)
    this.zoom += zoom


  }
}
//E/CK/#7_Wold-Generator
