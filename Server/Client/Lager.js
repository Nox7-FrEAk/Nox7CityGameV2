class Lager {
  constructor(karte) {
    this.karte = karte
    var self = this;
    socket.on("lager", function(lager) {
      if (lager) {
        self.lager = lager;
      } else {
        self.lager = {};
        self.lager[new Holz().resource] = 30;
        self.lager[new Stein().resource] = 30;
        self.lager[new Fisch().resource] = 30;

        socket.emit('setLager', self.lager)
      }

    })
    socket.emit("getLager");

    socket.on("lagerChange", function(lager) {
      self.lager = lager;
    })

    //for(var i = 0;i<1000;i++)this.lager.push(new Holz())
    //for(var i = 0;i<1000;i++)this.lager.push(new Stein())

  }
  show() {

    var i = 2;
    for (var rohstoff in this.lager) {
      fill(255)
      text(rohstoff + ': ' + this.lager[rohstoff], 100 * i, 19)
      i++
    }
  }

  update() {
    let lager = this.karte.getTileLager()

    if (lager) {
      socket.emit("add", lager);
    }
    for (let i = 0; i < this.karte.fabriken.length; i++) {
      if (this.karte.fabriken[i] instanceof AbstractHaus) {
        if (this.karte.fabriken[i].getLastHungerTick() + this.karte.fabriken[i].getHungerTick() < Date.now()) {
          this.karte.fabriken[i].setLastHungerTick(Date.now())
          this.remove(this.karte.fabriken[i].getNahrungsbedarf(), true)
        }
      }
    }
  }

  getLager() {
    return this.lager
  }

  canRemove(resource) {
    var ok = true;
    for (var i in resource) {
      ok = ok && this.lager[i] >= resource[i];
    }
    return ok;
  }

  remove(resource, ignoreCan) {
    if (this.canRemove(resource) || ignoreCan) {
      socket.emit("remove", resource)
      for (var i in resource) {

        this.lager[i] -= resource[i];
      }
      return true
    }
    return false;
  }
}
