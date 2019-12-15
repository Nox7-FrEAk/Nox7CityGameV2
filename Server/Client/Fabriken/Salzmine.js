class Salzmine extends AbstractFabrik {

  constructor(tile) {
    super(Salzmine.fabrikname, tile.getX(), tile.getY(), tile.getID(), 1, 5000, [], 100, 10, color(102, 20, 25));
    //if (tile instanceof Wasser) this.produktionsrate *= 0.5

    let changes = {};
    changes[new Salz().resource] = 2;
    super.setOutputRohstoff(changes);


  }

  update(lager) {
    super.update(lager);
  }

}

Salzmine.fabrikname = "salzmine";

Salzmine.kosten = {};
Salzmine.kosten[new Stein().resource] = 5;
Salzmine.kosten[new Holz().resource] = 5;
Salzmine.kosten[new Brett().resource] = 3;
