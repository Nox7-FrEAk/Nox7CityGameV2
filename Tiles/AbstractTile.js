class AbstractTile {

  constructor(x, y, resource, farbe, wertigkeit) {
    this.resource = resource;
    this.wertigkeit = wertigkeit;
    this.sizeX = 64;
    this.sizeY = 64;
    this.x = x+this.sizeX/2;
    this.y = y+this.sizeY/2;
    this.farbe = farbe;
    this.fabrik = null;

  }

  show(){
    rectMode(CENTER);
    noStroke();
    fill(this.farbe)
    rect(this.x,this.y,this.sizeX,this.sizeY);
  }

  update(){
    if(fabrik) fabrik.update();
  }


  setFabrik(f) {
    this.fabrik = f;
  }

}
