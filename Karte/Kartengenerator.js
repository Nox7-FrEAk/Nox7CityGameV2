//S/CK/#7_Wold-Generator
class Kartengenerator {

  constructor() {
    this.tiles = [];

  }

  generateKarte() {
    var tile;

    for(var x = -100;x<100;x++){
      for(var y = -100;y<100;y++){
        var rnd = int(random(0,3));
        var xPos = x*tileSize;
        var yPos = y*tileSize;
        if(rnd == 0) tile = new Sand(xPos,yPos);
        if(rnd == 1) tile = new Wald(xPos,yPos);
        if(rnd == 2) tile = new Wasser(xPos,yPos);

        this.tiles.push(tile);

      }
    }

    console.log(this.tiles.length + ' tiles erzeugt');
    return this.tiles;
  }


}
//E/CK/#7_Wold-Generator
