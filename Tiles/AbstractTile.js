class AbstractTile {

  constructor(x, y, resource, farbe, wertigkeit, id) {
    this.resource = resource
    this.wertigkeit = wertigkeit
    this.sizeX = tileSize
    this.sizeY = tileSize
    this.x = x
    this.y = y
    this.id = id
    this.farbe = farbe
    this.r = red(farbe)
    this.g = green(farbe)
    this.b = blue(farbe)
    this.helligkeit = 200

  }

  show() {
    rectMode(CENTER)
    noStroke()
    //fill(red(this.farbe), green(this.farbe), blue(this.farbe),this.helligkeit)
    fill(this.r, this.g, this.b, this.helligkeit)
    rect(this.x, this.y, this.sizeX, this.sizeY)
  }


  update() {

  }


  getX() {
    return this.x
  }
  getY() {
    return this.y
  }
  getID(){
    return this.id
  }
  setHelligkeit(helligkeit){
    if(helligkeit > 255) this.helligkeit = 255
    else this.helligkeit = helligkeit
  }

  getHelligkeit(){
    return this.helligkeit
  }

}
