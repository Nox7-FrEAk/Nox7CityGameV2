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

    this.maxX = 0;
    this.maxY = 0;


  }

  generateKarte(tiles, bis) {
    var tile;
    var rnd = int(random(0, 7));
    var tiles_cache = []
    var cache_maxX = 0
    var tilesgesetzt = 0
    for (var x = this.maxX; x < this.maxX + bis; x++) {
      cache_maxX = x + 1;

      for (var y = 0; y < 100; y++) {

        this.maxY = y;
        if (tiles_cache.length > 10) {
          var tileOben = this.getTileID(tiles_cache, x, y - 1);
          var tileObenLinks = this.getTileID(tiles_cache, x - 1, y - 1);
          var tileLinks = this.getTileID(tiles_cache, x - 1, y);
          var tileLinksUnten = this.getTileID(tiles_cache, x - 1, y + 1);
          var tileLinksUntenUnten = this.getTileID(tiles_cache, x - 1, y + 2);
          if (tileOben >= 0 && tileObenLinks >= 0 && tileLinks >= 0 && tileLinksUnten >= 0 && tileLinksUntenUnten >= 0) {
            var mittel = int(round((tileOben + tileObenLinks + tileLinks + tileLinksUnten + tileLinksUntenUnten) / 5));
            if(mittel <= -1) mittel = 0
            var chance = random(1, 100);
            tilesgesetzt++
            if (tilesgesetzt < 4) mittel = rnd
            if (chance < 20 && tilesgesetzt > 13) {
              tilesgesetzt = 0
              chance = random(1, 100);
              if (mittel == this.wasserID) {
                if (chance < 1) rnd = this.schneeID;
                else if (chance < 1.1) rnd = this.lavaID;
                else if (chance < 2) rnd = this.gebirgeID;
                else if (chance < 6) rnd = this.sandID;
                else if (chance < 12) rnd = this.waldID;

              }
              if (mittel == this.sandID) {
                if (chance < 1) rnd = this.wasserID;
                else if (chance < 2) rnd = this.waldID;
                else if (chance < 3) rnd = this.lavaID;
                else if (chance < 5) rnd = this.schneeID;
                else if (chance < 8) rnd = this.gebirgeID;

              }
              if (mittel == this.waldID) {
                if (chance < 1) rnd = this.schneeID;
                else if (chance < 1.5) rnd = this.lavaID;
                else if (chance < 2) rnd = this.gebirgeID;
                else if (chance < 3) rnd = this.sandID;
                else if (chance < 4) rnd = this.wasserID;
                else if (chance < 40) rnd = this.regenwaldID;

              }
              if (mittel == this.gebirgeID) {
                if (chance < 1) rnd = this.wasserID;
                else if (chance < 2) rnd = this.sandID;
                else if (chance < 3) rnd = this.lavaID;
                else if (chance < 9) rnd = this.wald;
                else if (chance < 11) rnd = this.schneeID;

              }
              if (mittel == this.regenwaldID) {
                if (chance < 0.2) rnd = this.waldID;

              }
              if (mittel == this.schneeID) {
                if (chance < 0.7) rnd = this.wasserID;
                else if (chance < 2) rnd = this.sandID;
                else if (chance < 4) rnd = this.wald;
                else if (chance < 7) rnd = this.gebirgeID;

              }

              if (mittel == this.lavaID) {
                if (chance < 0.7) rnd = this.wasserID;
                else if (chance < 1) rnd = this.wald;
                else if (chance < 5) rnd = this.gebirgeID;
                else if (chance < 12) rnd = this.sandID;

              }
            } else  rnd = mittel



          }
        }
        var xPos = x * tileSize;
        var yPos = y * tileSize;

        if(rnd == null) rnd = int(random(0,5))

        if (rnd == this.sandID) tile = new Sand(xPos, yPos, [x, y]);
        else if (rnd == this.waldID) tile = new Wald(xPos, yPos, [x, y]);
        else if (rnd == this.wasserID) tile = new Wasser(xPos, yPos, [x, y]);
        else if (rnd == this.gebirgeID) tile = new Gebrige(xPos, yPos, [x, y]);
        else if (rnd == this.schneeID) tile = new Schnee(xPos, yPos, [x, y]);
        else if (rnd == this.lavaID) tile = new Lava(xPos, yPos, [x, y]);
        else if (rnd == this.regenwaldID) tile = new Regenwald(xPos, yPos, [x, y]);

        else console.log('f45' + rnd)
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
