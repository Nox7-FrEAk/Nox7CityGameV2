//S/MB/#8_CLASS_Haus
class AbstractHaus extends AbstractTile {

  constructor(name, x, y, id, anzahlbewohner, nahrungsbedarf, hungerTick, rohstoffbedarf, farbe) {
    super(x, y, '', farbe, 0, id)
    this.name = name
    this.anzahlbewohner = anzahlbewohner;
    this.arbeitendebewohner = 0
    this.nahrungsbedarf = nahrungsbedarf;
    this.rohstoffbedarf = rohstoffbedarf;
    this.hungerTick = hungerTick
    this.lastHungerTick = Date.now()
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

  getNahrungsbedarf(){
    return this.nahrungsbedarf
  }

  getLastHungerTick(){
    return this.lastHungerTick
  }

  setLastHungerTick(lastHungerTick){
    this.lastHungerTick = lastHungerTick
  }

  setNahrungsbedarf(nahrungsbedarf){
    this.nahrungsbedarf = nahrungsbedarf

  }

  getHungerTick(){
    return this.hungerTick
  }
}
//E/MB/#8_CLASS_Haus
