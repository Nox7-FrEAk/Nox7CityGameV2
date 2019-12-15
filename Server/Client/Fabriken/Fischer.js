class Fischer extends AbstractFabrik {

  constructor(tile) {
    super(Fischer.fabrikname, tile.getX(), tile.getY(), tile.getID(), 1, 1000, [], 100, 10, color(12, 205, 255));
    if (tile instanceof Wasser) this.produktionsrate *= 0.5

    let changes = {};
    changes[new Fisch().resource] = 1;
    super.setOutputRohstoff(changes);
  }

  update(lager) {
    super.update(lager);
  }

}

Fischer.fabrikname = "fischer";

Fischer.kosten = {};
Fischer.kosten[new Stein().resource] = 10;
Fischer.kosten[new Holz().resource] = 10;
