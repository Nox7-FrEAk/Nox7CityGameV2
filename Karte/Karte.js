//S/CK/#7_Wold-Generator
class Karte {

  constructor() {
    this.kartengenerator = new Kartengenerator();
    this.tiles = this.kartengenerator.generateKarte();
    this.translateX = 0;
    this.translateY = 0;
    this.zoom = 1;

  }

  show() {
    for (var i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i]) {
        if (this.tiles[i].getX()+tileSize > -this.translateX*(1/this.zoom)  && this.tiles[i].getX()-tileSize < (windowWidth-this.translateX)*(1/this.zoom) &&
            this.tiles[i].getY()+tileSize > -this.translateY*(1/this.zoom)  && this.tiles[i].getY()-tileSize < (windowHeight-this.translateY)*(1/this.zoom)){
          this.tiles[i].show();
        }
      }
    }
  }

  keyPressed(key) {
    if(key == 'W') this.translateY += tileSize/2;
    if(key == 'S') this.translateY -= tileSize/2;
    if(key == 'A') this.translateX += tileSize/2;
    if(key == 'D') this.translateX -= tileSize/2;

    if(key == 'Z') this.zoom += 0.1;
    if(key == 'U') this.zoom -= 0.1;
  }

  getTranslateX(){
    return this.translateX;
  }

  getTranslateY(){
    return this.translateY;
  }

  getZoom(){
    return this.zoom;
  }
}
//E/CK/#7_Wold-Generator
