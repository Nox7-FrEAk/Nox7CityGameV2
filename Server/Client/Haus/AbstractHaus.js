//S/MB/#8_CLASS_Haus
class AbstractHaus extends AbstractTile {

  constructor(x, y, id, anzahlbewohner, nahrungsbedarf, rohstoffbedarf, farbe) {
    super(x, y, '', farbe, 0, id)
    this.anzahlbewohner = anzahlbewohner;
    this.arbeitendebewohner = 0
    this.nahrungsbedarf = nahrungsbedarf;
    this.rohstoffbedarf = rohstoffbedarf;
    this.selected = false
  }

  show() {
    if (this.selected) {
      strokeWeight(3)
      stroke(0)
    } else
      noStroke()
    fill(this.r, this.g, this.b, this.helligkeit)
    rect(this.x, this.y, this.sizeX, this.sizeY)

  }

  showMouseOver() {
    fill(0)
    textSize(10)
    noStroke()
    text('Anzahl Bewohner: ' + this.anzahlbewohner, this.x, this.y)
    text('Arbeitende Bewohner: ' + this.arbeitendebewohner, this.x, this.y + 10)

  }

  setSelected(val) {
    this.selected = val
  }

  getVerfuegbareBewohner() {
    var cache = this.anzahlbewohner - this.arbeitendebewohner
    this.arbeitendebewohner = cache
    console.log(cache)
    return cache
  }
}
//E/MB/#8_CLASS_Haus