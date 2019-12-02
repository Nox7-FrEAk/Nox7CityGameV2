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
    var test = null
    var waldBiom = null
    var wasserBiom = null
    for (var i = 0; i < random(1, 3); i++) {
      test = this.generateTile(tiles, new Wald(), 0, x, 0, y, random(x, x), random(10, 180), random(10, 20), random(0.1, 2))
      if (waldBiom == null) waldBiom = test
      else {
        if (test[0] < waldBiom[0]) waldBiom[0] = test[0]
        if (test[1] < waldBiom[1]) waldBiom[1] = test[1]
        if (test[2] > waldBiom[2]) waldBiom[2] = test[2]
        if (test[3] > waldBiom[3]) waldBiom[3] = test[3]

      }

      //return [rndX, maxxrnd, rndY, maxyrnd]

    }
    console.log(waldBiom)
    for (var i = 0; i < 3; i++) {
      this.generateTile(tiles, new Gebirge(), waldBiom[0], waldBiom[1], waldBiom[2], waldBiom[3], random(100,100), random(4,8), 0,1, random(0.01, 0.02))


    }
    for (var i = 0; i < 2; i++) {
      this.generateTile(tiles, new Regenwald(), waldBiom[0], waldBiom[1], waldBiom[2], waldBiom[3], random(100,100), random(10, 20), 0,2, random(0.01, 0.02))


    }
    for (var i = 0; i < 10; i++) {
      this.generateTile(tiles, new Sand(), 0,x, 0,y, random(20, 25), random(5, 8), random(100,100), random(4,5), random(1, 3))


    }

    for(var i = 0;i < 4;i++){
      if (wasserBiom == null) wasserBiom = test
      else {
        if (test[0] < wasserBiom[0]) wasserBiom[0] = test[0]
        if (test[1] < wasserBiom[1]) wasserBiom[1] = test[1]
        if (test[2] > wasserBiom[2]) wasserBiom[2] = test[2]
        if (test[3] > wasserBiom[3]) wasserBiom[3] = test[3]

      }
      test = this.generateTile(tiles, new Wasser(), waldBiom[0], waldBiom[1], waldBiom[2], waldBiom[3], random(100, waldBiom[1]), random(2, 3), random(10,20), random(30, 50), random(5, 15))

    }
    //this.generateTile(tiles, new Gebirge(), test[0], test[1], test[2], test[3], random(12, 15), 1)

    //this.generateTile(tiles, new Sand(), test1[0], test1[1], test1[2], test1[3], random(3, 2), 1)



    /*

        for (var i = 0; i < 3; i++) {
          var test = this.generateTile(tiles, new Gebirge(), 0, x, 0, y, random(7, 15), 1)
          var schnee = int(random(0, 2)) == 1
          for (var j = 0; j < 1; j++) {
            if(schnee)
            this.generateTile(tiles, new Schnee(), test[0], test[1], test[2], test[3], random(3, 4), 1)
            else
            this.generateTile(tiles, new Lava(), test[0], test[1], test[2], test[3], random(1, 3), 1)
          }

          //test = this.generateTile(tiles, new Lava(), test[0], test[1], test[2], test[3], 5, 1)
        }*/


    /*
    this.generateTile(tiles, new Wasser(), x, y, 10, 4)
    this.generateTile(tiles, new Gebirge(), x, y, 40, 3)
    this.generateTile(tiles, new Lava(), x, y, 12, 3)
    this.generateTile(tiles, new Schnee(), x, y, 12, 3)
    this.generateTile(tiles, new Wald(), x, y, 30, 3)
    this.generateTile(tiles, new Regenwald(), x, y, 30, 3)
    */



  }

  generateTile(tiles, tile, xMin, xMax, yMin, yMax, sizeX, sizeY, wellenlaengeMin, wellenlaengeMax, wellenSpeed) {
    var cache_Tiles = []

    for (var anz = 0; anz < 1; anz++) {

      var rndX = int(random(xMin, xMax - sizeX))

      var rndY = int(random(yMin, yMax - sizeY))


      var wellenlaenge = random(wellenlaengeMin, wellenlaengeMax)
      var welle = 0
      var welledir = true
      for (var i = 0; i < sizeX; i++) {
        for (var j = int(0 + welle); j < int(sizeY + welle); j++) {
          //if (rndX + i < xMax && rndY + j < yMax)
          this.setTile(tiles, tile, rndX + i, rndY + j)
        }

        if (welledir)
          welle += 0.5
        else
          welle -= 0.5

        if (welle > wellenlaenge || welle < 0) {
          welledir = !welledir
          wellenlaenge = random(wellenlaengeMin, wellenlaengeMax)
        }

      }

    }
    var maxyrnd = yMax
    var maxxrnd = xMax

    return [xMin, xMax, yMin, yMax]
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
