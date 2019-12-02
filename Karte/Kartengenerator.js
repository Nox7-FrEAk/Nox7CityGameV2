//S/CK/#7_Wold-Generator
class Kartengenerator {

  constructor() {

    this.sandID = 0;
    this.waldID = 1;
    this.wasserID = 2;
    this.gebirgeID = 3
    this.schneeID = 4
    this.lavaID = 5
    this.regenwaldID = 6


  }

  generateKarte(tiles, bis) {
    var tile;
    var tiles_cache = []

    for (var x = 0; x < bis; x++) {
      for (var y = 0; y < bis; y++) {

        var xPos = x * tileSize;
        var yPos = y * tileSize;

        tile = new Sand(xPos, yPos, [x, y]);
        tiles_cache.push(tile);

      }
    }
    tiles.push.apply(tiles, tiles_cache)
    this.generateWueste(tiles, bis, bis)
    console.log(tiles_cache.length + ' tiles erzeugt');
    console.log(tiles.length + ' gesammttiles ');

    return tiles;
  }

  generateWueste(tiles, x, y) {
    for (var i = 0; i < 60; i++) {
      var test = this.generateTile(tiles, new Wald(), 0, x, 0, y, random(10, 40), 1)
      for (var j = 0; j < 2; j++) {
        var test1 = this.generateTile(tiles, new Wasser(), test[0], test[1], test[2], test[3], random(3, 20), 1)
        this.generateTile(tiles, new Regenwald(), test1[0], test1[1], test1[2], test1[3], random(3, 8), 1)
        this.generateTile(tiles, new Sand(), test1[0], test1[1], test1[2], test1[3], random(3, 2), 1)

        //this.generateTile(tiles, new Lava(), test[0], test[1], test[2], test[3], 5, 1)
      }
    }
    for (var i = 0; i < 10; i++) {
      var test = this.generateTile(tiles, new Gebirge(), 0, x, 0, y, random(10, 20), 1)
      for (var j = 0; j < 1; j++) {
        this.generateTile(tiles, new Schnee(), test[0], test[1], test[2], test[3], random(3, 4), 1)
        this.generateTile(tiles, new Lava(), test[0], test[1], test[2], test[3], random(1, 3), 1)
      }

      //test = this.generateTile(tiles, new Lava(), test[0], test[1], test[2], test[3], 5, 1)
    }


    /*
    this.generateTile(tiles, new Wasser(), x, y, 10, 4)
    this.generateTile(tiles, new Gebirge(), x, y, 40, 3)
    this.generateTile(tiles, new Lava(), x, y, 12, 3)
    this.generateTile(tiles, new Schnee(), x, y, 12, 3)
    this.generateTile(tiles, new Wald(), x, y, 30, 3)
    this.generateTile(tiles, new Regenwald(), x, y, 30, 3)
    */



  }

  generateTile(tiles, tile, xMin, xMax, yMin, yMax, size, anzahl) {
    var cache_Tiles = []
    for (var anz = 0; anz < anzahl; anz++) {
      var rndX = int(random(xMin, xMax))
      var rndY = int(random(yMin, yMax))
      for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++)
          if (rndX + i < xMax && rndY + j < yMax)
            this.setTile(tiles, tile, rndX + i, rndY + j)
      }
    }
    var maxyrnd = rndY + size > yMax ? yMax : rndY + size
    var maxxrnd = rndX + size > xMax ? xMax : rndX + size

    return [rndX, maxxrnd, rndY, maxyrnd]
  }

  getTileIndex(tiles, x, y) {

    for (var i = 0; i < tiles.length; i++) {
      if (tiles[i].id[0] == x && tiles[i].id[1] == y) return i;
    }

    return null;
  }
  setTile(tiles, tile, x, y) {
    for (var i = 0; i < tiles.length; i++) {
      if (tiles[i].id[0] == x && tiles[i].id[1] == y) {
        if (tile instanceof Wasser) tile = new Wasser(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())
        if (tile instanceof Gebirge) tile = new Gebirge(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())
        if (tile instanceof Lava) tile = new Lava(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())
        if (tile instanceof Regenwald) tile = new Regenwald(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())
        if (tile instanceof Sand) tile = new Sand(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())
        if (tile instanceof Schnee) tile = new Schnee(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())
        if (tile instanceof Wald) tile = new Wald(tiles[i].getX(), tiles[i].getY(), tiles[i].getID())

        tiles[i] = tile
        break
      }
    }
  }
  getTile(tiles, x, y) {

    for (var i = 0; i < tiles.length; i++) {
      if (tiles[i].id[0] == x && tiles[i].id[1] == y) return tiles[i];
    }

    return null;
  }
  getTileID(tiles, x, y) {
    var tile = this.getTile(tiles, x, y);
    if (tile) {
      var res = tile.resource
      if (res == 'wasser') return this.wasserID;
      if (res == 'sand') return this.sandID;
      if (res == 'wald') return this.waldID;
      if (res == 'gebirge') return this.gebirgeID;
      if (res == 'schnee') return this.schneeID;
      if (res == 'lava') return this.lavaID;
      if (res == 'regenwald') return this.regenwaldID;

    }
    //onsole.log(tiles)
    return -1;
  }


}
//E/CK/#7_Wold-Generator
