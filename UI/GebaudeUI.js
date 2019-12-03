class GebUI {

  constructor() {
    this.showingTile = null

  }


  show() {
    if (this.showingTile != null) {
      if (this.showingTile instanceof Farmer) {
        fill(255)
        textSize(17)
        noStroke()
        text('Anzahl Bewohner: ' + this.showingTile.anzahlbewohner, 10, 100)
        text('Arbeitende Bewohner: ' + this.showingTile.arbeitendebewohner, 10, 117)

      }
    }

  }

  setshowingTile(tile) {
    this.showingTile = tile

  }
}