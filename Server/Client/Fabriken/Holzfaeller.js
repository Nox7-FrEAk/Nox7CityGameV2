class Holzfaeller extends AbstractFabrik {

  constructor(tile) {
    super(Holzfaeller.fabrikname, tile.getX(), tile.getY(), tile.getID(), 1, 1000, [], 100, 10, color(12, 205, 0));
    if (tile instanceof Regenwald) this.produktionsrate *= 0.5
    else if (tile instanceof Wald) this.produktionsrate *= 0.8

    let changes = {};
    changes[new Holz().resource] = 1;
    super.setOutputRohstoff(changes);
  }

  update(lager) {
    super.update(lager);
  }

}

Holzfaeller.fabrikname = "holzfaeller";

Holzfaeller.kosten = {};
Holzfaeller.kosten[new Stein().resource] = 10;
