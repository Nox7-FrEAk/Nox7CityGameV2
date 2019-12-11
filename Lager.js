class Lager {
  constructor(karte) {
    this.karte = karte
    this.lager = []
    this.mergedRohstoffe = []
    for (var i = 0; i < 400; i++) this.lager.push(new Holz())
    for (var i = 0; i < 3020; i++) this.lager.push(new Stein())
    for (var i = 0; i < 300; i++) this.lager.push(new Fisch())
    for (var i = 0; i < 300; i++) this.lager.push(new Brett())

  }
  show() {

    var twGes = 0
    var tW = 0
    for (var rohstoff in this.mergedRohstoffe) {
      fill(255)
      tW = textWidth(rohstoff + ': ' + this.mergedRohstoffe[rohstoff] + " | ")
      text(rohstoff + ': ' + this.mergedRohstoffe[rohstoff] + " | ", 100 + tW + twGes, 19)
      twGes += tW + 5
    }
    var cache = 'Arbeitende Bewohner: ' + this.getArbeitendeBewohner()
    tW = textWidth(cache)
    text(cache, 100 + tW + twGes, 19)
    twGes += tW + 100
    cache = 'Bewohner gesamt: ' + this.getBewohner()
    tW = textWidth(cache)
    text(cache, 100 + tW + twGes, 19)
    twGes += tW + 5

  }
  update() {
    var lager = this.karte.getTileLager()

    if (lager) {
      for (var i = 0; i < lager.length; i++)
        this.lager.push(lager[i])
    }
    this.mergedRohstoffe = []
    for (var i = 0; i < this.lager.length; i++) {
      if (this.mergedRohstoffe[this.lager[i].resource] == null) this.mergedRohstoffe[this.lager[i].resource] = 1
      else this.mergedRohstoffe[this.lager[i].resource] += 1
    }


    if (this.karte.selectedTile instanceof AbstractFabrik) {
      if (this.karte.selectedTile.getMitarbeiter() < this.karte.selectedTile.getMaxMitarbeiter()) {
        if (this.setMitarbeiterArbeitend())
          this.karte.selectedTile.addMitarbeiter(1)
      }

    }
    for (var i = 0; i < this.karte.fabriken.length; i++) {
      if (this.karte.fabriken[i] instanceof AbstractHaus) {
        if (this.karte.fabriken[i].getLastHungerTick() + this.karte.fabriken[i].getHungerTick() < Date.now()) {
          this.karte.fabriken[i].setLastHungerTick(Date.now())
          var nb = this.karte.fabriken[i].getNahrungsbedarf()
            this.remove(nb);
        }
      }
    }

  }

  getLager() {
    return this.lager
  }

  setMitarbeiterArbeitend() {
    var bool = false
    for (var i = 0; i < this.karte.fabriken.length; i++) {
      if (this.karte.fabriken[i] instanceof AbstractHaus) {
        if (this.karte.fabriken[i].getBewohner() > this.karte.fabriken[i].getArbeitendeBewohner()) {
          this.karte.fabriken[i].setArbeitendeBewohner()
          bool = true
          break
        }
      }
    }
    return bool
  }

  getBewohner() {
    var bewohner = 0
    for (var i = 0; i < this.karte.fabriken.length; i++) {
      if (this.karte.fabriken[i] instanceof AbstractHaus) {
        bewohner += this.karte.fabriken[i].getBewohner()
      }
    }
    return bewohner
  }

  getArbeitendeBewohner() {
    var bewohner = 0
    for (var i = 0; i < this.karte.fabriken.length; i++) {
      if (this.karte.fabriken[i] instanceof AbstractHaus) {
        bewohner += this.karte.fabriken[i].getArbeitendeBewohner()
      }
    }
    return bewohner
  }

  canRemove(rohstoffe) {
    var ok = false;
    for (var i = 0; i < rohstoffe.length; i++) {
      ok = (this.lager.filter(e => e.resource === rohstoffe[i].resource).length >= rohstoffe[i].resourcenFaktor)
      if (!ok) break
    }
    if (!ok) return false
    return true
  }

  remove(rohstoffe) {

    if (!this.canRemove(rohstoffe)) return false

    for (var j = 0; j < rohstoffe.length; j++) {
      var entfernteRohstoffe = 0;
      for (var i = this.lager.length - 1; i >= 0; i--) {
        if (this.lager[i].resource == rohstoffe[j].resource) {
          this.lager.splice(i, 1);
          entfernteRohstoffe++
          if (entfernteRohstoffe >= rohstoffe[j].resourcenFaktor) break
        }

      }
    }
    return true
  }
}
