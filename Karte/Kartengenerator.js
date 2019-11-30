//S/CK/#7_Wold-Generator
class Kartengenerator {

  constructor() {
    this.tiles = [];
    //3600 tiles, nicht zu hoch stellen sonst daurt das genrerieren der Map lange
    this.mapSize = 40;
    this.sandID = 0;
    this.waldID = 1;
    this.wasserID = 2;


  }

  generateKarte() {
    var tile;
    var rnd = this.sandID;

    for (var x = -this.mapSize; x < this.mapSize; x++) {
      for (var y = -this.mapSize; y < this.mapSize; y++) {
        if (this.tiles.length > 10) {
          var tileOben = this.getTileID(x, y - 1);
          var tileObenLinks = this.getTileID(x - 1, y - 1);
          var tileLinks = this.getTileID(x - 1, y);
          var tileLinksUnten = this.getTileID(x - 1, y + 1);
          if (tileOben != null && tileObenLinks != null && tileLinks != null && tileLinksUnten != null) {
            var mittel =  int(round((tileOben + tileObenLinks + tileLinks + tileLinksUnten) / 4));
            if(mittel < 0) mittel = 0;
            var chance = random(1,100);
            if(chance < 10) rnd = int(random(0,3))            
            else rnd = mittel
          }
        }
        var xPos = x * tileSize;
        var yPos = y * tileSize;

        console.log(rnd);
        if (rnd == this.sandID) tile = new Sand(xPos, yPos, [x, y]);
        if (rnd == this.waldID) tile = new Wald(xPos, yPos, [x, y]);
        if (rnd == this.wasserID) tile = new Wasser(xPos, yPos, [x, y]);
        this.tiles.push(tile);

      }
    }

    console.log(this.tiles.length + ' tiles erzeugt');
    return this.tiles;
  }


  getTile(x, y) {
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i].id[0] == x && this.tiles[i].id[1] == y) return this.tiles[i];
    }
    return null;
  }
  getTileID(x, y) {
    var tile = this.getTile(x, y);
    if (tile) {
      var res = tile.resource
      if (res == 'wasser') return this.wasserID;
      if (res == 'sand') return this.sandID;
      if (res == 'wald') return this.waldID;
    }
    return -1;
  }


}
//E/CK/#7_Wold-Generator
