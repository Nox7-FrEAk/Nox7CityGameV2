class Lager {
  constructor(karte) {
    this.karte = karte
    this.lager = []
    this.mergedRohstoffe = []
    for(var i = 0;i<1000;i++)this.lager.push(new Holz())
    for(var i = 0;i<1000;i++)this.lager.push(new Stein())

  }
  show() {

    var i = 2;
    for (var rohstoff in this.mergedRohstoffe) {
      fill(255)
      text(rohstoff + ': ' + this.mergedRohstoffe[rohstoff], 100 * i, 19)
      i++
    }
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

  }

  getLager() {
    return this.lager
  }

  canRemove(resource, x) {
    var ok = false;
    for (var i = 0; i < resource.length; i++) {
      ok = (this.lager.filter(e => e.resource === resource[i]).length >= x[i])
      if (!ok) break
    }
    if (!ok) return false
    return true
  }

  remove(resource, x) {
    if (!this.canRemove(resource, x)) return false
    for (var j = 0; j < resource.length; j++) {
      var entfernteRohstoffe = 0;
      for (var i = this.lager.length - 1; i >= 0; i--) {
        if (this.lager[i].resource == resource[j]) {
          this.lager.splice(i, 1);
          entfernteRohstoffe++
          if (entfernteRohstoffe >= x[j]) break

        }

      }
    }
      return true
  }
}
