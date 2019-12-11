class Wasser extends AbstractTile {
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x, y, id) {
    super(x, y, "wasser", color(19, 105, random(165, 220)), 1, id, ocean);
  }

  update() {
    if (random(0, 100) < 40) {

      if (random(0, 100) <= 50) {
        if (this.b + 2 < this.bMax)
          this.b += 2
      } else {
        if (this.b - 2 > this.bMin)
          this.b -= 2
      }
    }

  }
}
