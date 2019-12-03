//S/CK/#7_Wold-Generator
class Kartengenerator {

  constructor() {
    //3600 tiles, nicht zu hoch stellen sonst daurt das genrerieren der Map lange
    this.mapSize = 140;
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
      var tilesgesetzt = 0
      for (var x = 0; x < bis; x++) {

        for (var y = 0; y < 100; y++) {
          var xPos = x * tileSize;
          var yPos = y * tileSize;
          var noiseVal = noise(xPos, yPos)
          noiseVal = int(map(noiseVal, 0,1,0,6))
          console.log(noiseVal)

          tiles_cache.push(new Sand(xPos, yPos, [x, y]));


        }
      }
      tiles.push.apply(tiles, tiles_cache)
      console.log(tiles_cache.length + ' tiles erzeugt');
      console.log(tiles.length + ' gesammttiles ');
      return tiles;
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
