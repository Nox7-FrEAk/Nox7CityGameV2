class Baecker extends AbstractFabrik {

  constructor(tile) {
    super(Baecker.fabrikname, tile.getX(), tile.getY(), tile.getID(), 1, 2000, [], 100, 10, color(12, 5, 255));
    //if (tile instanceof Wasser) this.produktionsrate *= 0.5

    let changes = {};
    changes[new Brot().resource] = 1;
    super.setOutputRohstoff(changes);

    changes = {};
    changes[new Weizen().resource] = 5;
    changes[new Kohle().resource] = 1;

    super.setInputRohstoff(changes);

  }

  update(lager) {
    super.update(lager);
  }

}

Baecker.fabrikname = "baecker";

Baecker.kosten = {};
Baecker.kosten[new Stein().resource] = 10;
Baecker.kosten[new Holz().resource] = 10;
Baecker.kosten[new Brett().resource] = 10;
