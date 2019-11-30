class AbstractTile {

  constructor(x, y, resource, farbe, wertigkeit, id) {
    this.resource = resource;
    this.wertigkeit = wertigkeit;
    this.sizeX = tileSize;
    this.sizeY = tileSize;
    this.x = x;
    this.y = y;
    this.id = id;
    this.farbe = farbe;

  }

  show() {
    rectMode(CENTER);
    noStroke();
    fill(this.farbe)
    rect(this.x, this.y, this.sizeX, this.sizeY)


  }


  update() {

  }


  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getID(){
    return this.id;
  }

}
