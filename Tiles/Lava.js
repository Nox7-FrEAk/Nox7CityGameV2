class Lava extends AbstractTile {
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x, y, id) {
    super(x, y, "lava", color(random(210, 230), 44, 44), 1, id);
  }

  update() {
    if (random(0, 100) < 10) {
      if (random(0, 100) <= 50) {
        if (this.r + 2 < this.rMax)
          this.r += 2
      } else {
        if (this.r - 2 > this.rMin)
          this.r -= 2
      }
    }

  }
}
