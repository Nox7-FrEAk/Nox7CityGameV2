class AbstractTile {

  constructor(x, y, resource, farbe, wertigkeit, id) {
    this.resource = resource;
    this.wertigkeit = wertigkeit;
    this.sizeX = tileSize;
    this.sizeY = tileSize;
    this.x = x+this.sizeX/2;
    this.y = y+this.sizeY/2;
    this.id = id;
    this.farbe = farbe;
    this.fabrik = null;

  }

  show(){
    rectMode(CENTER);
    noStroke();
    fill(this.farbe)
    rect(this.x,this.y,this.sizeX,this.sizeY);
    //fill(0);
    //text(this.id, this.x,this.y);

  }

  update(){
    if(fabrik) fabrik.update();
  }


  setFabrik(f) {
    this.fabrik = f;
  }

  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }

}
