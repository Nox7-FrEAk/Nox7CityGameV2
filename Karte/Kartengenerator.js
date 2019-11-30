//S/CK/#7_Wold-Generator
class Kartengenerator {

  constructor() {
    //3600 tiles, nicht zu hoch stellen sonst daurt das genrerieren der Map lange
    this.mapSize = 140;
    this.sandID = 0;
    this.waldID = 1;
    this.wasserID = 2;
    this.maxX = 0;
    this.maxY = 0;


  }

  generateKarte(tiles, bis) {
    var tile;
    var rnd = this.sandID;
    var tiles_cache = []
    var cache_maxX = 0
    for (var x = this.maxX; x < this.maxX + bis; x++) {
      cache_maxX = x+1;
      for (var y = 0; y < 100; y++) {

        this.maxY = y;
        if (tiles_cache.length > 10) {
          var tileOben = this.getTileID(tiles_cache, x, y - 1);
          var tileObenLinks = this.getTileID(tiles_cache,x - 1, y - 1);
          var tileLinks = this.getTileID(tiles_cache,x - 1, y);
          var tileLinksUnten = this.getTileID(tiles_cache,x - 1, y + 1);
          if (tileOben != null && tileObenLinks != null && tileLinks != null && tileLinksUnten != null) {
            var mittel = int(round((tileOben + tileObenLinks + tileLinks + tileLinksUnten) / 4));
            if (mittel < 0) mittel = 0;
            var chance = random(1, 100);
            if (chance < 25) {
              chance = random(1, 50);
              if (rnd == this.wasserID) {
                if (chance < 1) rnd = this.wasserID;
                else if (chance < 5) rnd = this.sandID;
                else if (chance < 10) rnd = this.waldID;
              }
              if (rnd == this.sandID) {
                if (chance < 1) rnd = this.wasserID;
                else if (chance < 5) rnd = this.sandID;
                else if (chance < 10) rnd = this.waldID;
              }
              if (rnd == this.waldID) {
                if (chance < 1) rnd = this.wald;
                else if (chance < 3) rnd = this.wasserID;
                else if (chance < 5) rnd = this.sandID;

              }
            } else rnd = mittel
          }
        }
        var xPos = x * tileSize;
        var yPos = y * tileSize;

        if (rnd == this.sandID) tile = new Sand(xPos, yPos, [x, y]);
        if (rnd == this.waldID) tile = new Wald(xPos, yPos, [x, y]);
        if (rnd == this.wasserID) tile = new Wasser(xPos, yPos, [x, y]);
        tiles_cache.push(tile);

      }
    }
    tiles.push.apply(tiles, tiles_cache)
    console.log(tiles_cache.length + ' tiles erzeugt');
    console.log(tiles.length + ' gesammttiles ');
    this.maxX = cache_maxX
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
    }
    return -1;
  }


}
//E/CK/#7_Wold-Generator
