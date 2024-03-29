//S/CK/#7_Wold-Generator
class Kartengenerator {

  constructor() {

    this.sandID = [0,1]
    this.waldID = [2,3]
    this.regenwaldID = [4]
    this.wasserID = [5]
    this.lavaID = [6]
    this.gebirgeID = [7,8]
    this.schneeID = [9]



    /*
    this.wasserID = 3
    this.gebirgeID =4
    this.lavaID = 5
    this.schneeID = 6
    this.regenwaldID = 7*/



  }

  generateKarte(tiles, bis) {
      var tile;
      var tiles_cache = []
      var tilesgesetzt = 0
      for (var x = 0; x < bis; x++) {

        for (var y = 0; y < 100; y++) {
          var xPos = x * tileSize;
          var yPos = y * tileSize;
          var noiseVal = noise(xPos*0.001, yPos*0.001)

          noiseVal = int(map(noiseVal, 0,1,0,10))

          if (this.sandID.includes(noiseVal)) tile = new Sand(xPos, yPos, [x, y]);
          else if (this.waldID.includes(noiseVal)) tile = new Wald(xPos, yPos, [x, y]);
          else if (this.wasserID.includes(noiseVal)) tile = new Wasser(xPos, yPos, [x, y]);
          else if (this.regenwaldID.includes(noiseVal)) tile = new Regenwald(xPos, yPos, [x, y]);
          else if (this.gebirgeID.includes(noiseVal)) tile = new Gebirge(xPos, yPos, [x, y]);
          else if (this.schneeID.includes(noiseVal)) tile = new Schnee(xPos, yPos, [x, y]);
          else if (this.lavaID.includes(noiseVal))tile = new Lava(xPos, yPos, [x, y]);


          tiles_cache.push(tile);


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
