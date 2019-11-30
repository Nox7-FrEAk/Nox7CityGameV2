class Lager {
  constructor(karte) {
    this.karte = karte
    this.lager = []
    this.mergedRohstoffe = []
    for(var i = 0;i<10;i++)this.lager.push(new Holz())
    for(var i = 0;i<10;i++)this.lager.push(new Stein())

  }
  show() {

    var i = 2;
    for (var rohstoff in this.mergedRohstoffe) {
      fill(0)
      text(rohstoff + ': ' + this.mergedRohstoffe[rohstoff], 1, 20 * i)
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
    return (this.lager.filter(e => e.resource === resource).length >= x)
  }

  remove(resource, x) {
    var ok = false;
    for (var i = 0; i < resource.length; i++) {
      ok = this.canRemove(resource[i], x[i])
      if (!ok) break
    }
    if (!ok) return false

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
