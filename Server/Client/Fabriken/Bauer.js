class Bauer extends AbstractFabrik {

  constructor(tile) {
    super(Bauer.fabrikname, tile.getX(), tile.getY(), tile.getID(), 1, 1000, [], 100, 10, color(12, 255, 255));
    //if (tile instanceof Wasser) this.produktionsrate *= 0.5

    let changes = {};
    changes[new Weizen().resource] = 1;
    super.setOutputRohstoff(changes);


  }

  update(lager) {
    super.update(lager);
  }

}

Bauer.fabrikname = "bauer";

Bauer.kosten = {};
Bauer.kosten[new Holz().resource] = 15;
