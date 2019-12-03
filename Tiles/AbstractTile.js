class AbstractTile {

  constructor(x, y, resource, farbe, wertigkeit, id, tileImage) {
    this.resource = resource
    this.wertigkeit = wertigkeit
    this.sizeX = tileSize
    this.sizeY = tileSize
    this.x = x
    this.y = y
    this.id = id
    this.farbe = farbe
    this.r = red(this.farbe)
    this.g = green(this.farbe)
    this.b = blue(this.farbe)
    this.rMax = this.r+10
    this.rMin = this.r-10
    this.gMax = this.g+10
    this.gMin = this.g-10
    this.bMax = this.b+10
    this.bMin = this.b-10
    this.helligkeit = 255
    this.tileImage = tileImage
  }

  show() {
    rectMode(CENTER)
    noStroke()
    //fill(red(this.farbe), green(this.farbe), blue(this.farbe),this.helligkeit)
    if (this.tileImage != null) image(this.tileImage,this.x-tileSize/2,this.y-tileSize/2, tileSize, tileSize)
    else {
      fill(this.r, this.g, this.b, this.helligkeit)
      rect(this.x, this.y, this.sizeX, this.sizeY)
    }
  }

  showMouseOver(){


  }

  update() {

  }

  setFarbe(f){
    this.r = red(this.farbe)
    this.g = green(this.farbe)
    this.b = blue(this.farbe)
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
