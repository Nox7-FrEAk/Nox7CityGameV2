//S/CK/#7_Wold-Generator
class Karte {

  constructor() {
    this.kartengenerator = new Kartengenerator();
    this.tiles = this.kartengenerator.generateKarte([], 100);

    this.translateX = 0;
    this.translateY = 0;
    this.zoom = 1;
    this.tileX = int((mouseX / tileSize) * this.zoom)
    this.tileY = int((mouseY / tileSize) * this.zoom)
  }

  show() {

    this.tileX = int((mouseX / tileSize) * this.zoom)
    this.tileY = int((mouseY / tileSize) * this.zoom)
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i]) {
        if (this.tiles[i].getX() + tileSize > -this.translateX * (1 / this.zoom) && this.tiles[i].getX() - tileSize < (windowWidth - this.translateX) * (1 / this.zoom) &&
          this.tiles[i].getY() + tileSize > -this.translateY * (1 / this.zoom) && this.tiles[i].getY() - tileSize < (windowHeight - this.translateY) * (1 / this.zoom)) {
          this.tiles[i].show();
        }
      }
    }
    fill(255, 255, 255, 110)
    rectMode(CENTER)
    rect(this.tileX * tileSize + tileSize / 2, this.tileY * tileSize + tileSize / 2, tileSize, tileSize)

  }
  update(){
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i]) {
          this.tiles[i].update();
        }
      }
    }
  


  keyPressed(key) {
    if (key == 'W') this.translateY += tileSize / 2 * 4;
    if (key == 'S') this.translateY -= tileSize / 2 * 4;
    if (key == 'A') this.translateX += tileSize / 2 * 4;
    if (key == 'D') this.translateX -= tileSize / 2 * 4;
    //if(key == 'G') this.tiles = this.kartengenerator.generateKarte(this.tiles, -this.translateX*(1/this.zoom)/5);
    if (key == 'Z') this.zoom += 0.3;
    if (key == 'U') this.zoom -= 0.3;

    if (key == '1')     this.addFabrik(new Holzfaeller(), this.tileX, this.tileY)
    if (key == '2')     this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '3')    this.addFabrik(new Saegewerk(), this.tileX, this.tileY)
    if (key == '4')     this.addFabrik(new Steinmetz(), this.tileX, this.tileY)
    if (key == '5')    this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '6')    this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '7')     this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)
    if (key == '8')    this.addFabrik(new Kohlewerk(), this.tileX, this.tileY)

  }

  mousePressed() {

  }

  addFabrik(fabrik, x, y) {
    var tile = this.kartengenerator.getTile(this.tiles,x, y)
    tile.setFabrik(fabrik)
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