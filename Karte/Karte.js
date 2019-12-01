//S/CK/#7_Wold-Generator
class Karte {

  constructor() {
    this.kartengenerator = new Kartengenerator();
    this.tiles = this.kartengenerator.generateKarte([], 100);
    this.fabriken = []

    this.translateX = 0;
    this.translateY = 0;
    this.zoom = 1;
  }

  show() {

    this.tileX = int((mouseX - this.translateX) / (tileSize * this.zoom))
    this.tileY = int((mouseY - this.translateY) / (tileSize * this.zoom))
    var tile = this.kartengenerator.getTile(this.tiles, this.tileX, this.tileY)

    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i]) {
        if (this.tiles[i].getX() + tileSize > -this.translateX * (1 / this.zoom) && this.tiles[i].getX() - tileSize < (windowWidth - this.translateX) * (1 / this.zoom) &&
          this.tiles[i].getY() + tileSize > -this.translateY * (1 / this.zoom) && this.tiles[i].getY() - tileSize < (windowHeight - this.translateY) * (1 / this.zoom)) {
          this.tiles[i].show();


        }
      }
    }
    if (tile instanceof AbstractFabrik) {
      tile.showMouseOver();

    }

    fill(255, 255, 255, 110)
    rectMode(CENTER)
    rect(this.tileX * tileSize, this.tileY * tileSize, tileSize, tileSize)

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

    if (key == 'W') this.translateY += tileSize / 2 * 4;
    if (key == 'S') this.translateY -= tileSize / 2 * 4;
    if (key == 'A') this.translateX += tileSize / 2 * 4;
    if (key == 'D') this.translateX -= tileSize / 2 * 4;
    //if(key == 'G') this.tiles = this.kartengenerator.generateKarte(this.tiles, -this.translateX*(1/this.zoom)/5);
    if (key == 'Z' && this.zoom <= 2) this.zoom += 0.3;
    if (key == 'U' && this.zoom >= 0.1) this.zoom -= 0.3;
    if (key == 'R') this.removeFabrik(tile)

    if (!(tile instanceof Wasser) && !(tile instanceof Lava)) {
      if (key == '1')
        if (lager.remove([new Stein().resource], [10])) this.addFabrik(new Holzfaeller(tile), tile)
      if (key == '2')
        if (lager.remove([new Holz().resource], [10])) this.addFabrik(new Steinmetz(tile), tile)

      if (key == '3')
        if (lager.remove([new Holz().resource, new Stein().resource], [10, 10])) this.addFabrik(new Saegewerk(tile), tile)
    }
    1111
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
    var lager = []
    for (var i = 0; i < this.fabriken.length; i++) {
      if (this.fabriken[i]) {
        var cache_lager = this.fabriken[i].getLager()
        if (cache_lager != null) {
          for (var j = 0; j < cache_lager.length; j++)
            lager.push(cache_lager[j])
        }
      }
    }
    if (lager.length > 0)
      return lager
  }


  mousePressed() {
    var tile = this.kartengenerator.getTile(this.tiles, this.tileX, this.tileY)
    if (tile instanceof AbstractFabrik) {
      tile.setIsSleeping(!tile.getIsSleeping())
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
  addFabrik(fabrik, tile) {
    this.fabriken.push(fabrik)
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i] === tile) {
        this.tiles.splice(i, 1)
        console.log('tile entfernt')

      }
      this.tiles[i].setHelligkeit(0)

      for (var j = 0; j < this.fabriken.length; j++) {
        var d = dist(this.fabriken[j].getX(), this.fabriken[j].getY(), this.tiles[i].getX(), this.tiles[i].getY())

        d = map(d, 250, 400, 255, 0)
        if(this.tiles[i].getHelligkeit() < d)
        this.tiles[i].setHelligkeit(d)

      }
    }
    this.tiles.push(fabrik)
    for (var i = 0; i < this.fabriken.length; i++) {
      this.fabriken[i].setProudktionsMinderung(1)

    }



    for (var i = 0; i < this.fabriken.length; i++) {
      for (var x = 0; x < this.fabriken.length; x++) {
        if (this.fabriken[i] != this.fabriken[x]) {
          var collide = collideCircleCircle(this.fabriken[i].getX(), this.fabriken[i].getY(), this.fabriken[i].getEinzugsRadius(),
            this.fabriken[x].getX(), this.fabriken[x].getY(), this.fabriken[x].getEinzugsRadius())
          if (collide) {
            this.fabriken[i].setProudktionsMinderung(1 + this.fabriken[i].getProudktionsMinderung())

          }

        }
      }
    }

  }

  getTranslateX() {
    return this.translateX;
  }

  getTranslateY() {
    return this.translateY;
  }

  getZoom() {
    return this.zoom;
  }
}
//E/CK/#7_Wold-Generator
