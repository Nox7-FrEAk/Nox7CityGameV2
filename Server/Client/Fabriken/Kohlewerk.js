class Kohlewerk extends AbstractFabrik {
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile) {
    super(Kohlewerk.fabrikname, tile.getX(), tile.getY(), tile.getID(), 1, 3000, [], 100, 25, color(40, 40, 40));

    let changes = {};
    changes[new Kohle().resource] = 1;
    super.setOutputRohstoff(changes);

  }


}

Kohlewerk.fabrikname = "kohlewerk";

Kohlewerk.kosten = {};
Kohlewerk.kosten[new Holz().resource] = 10;
Kohlewerk.kosten[new Stein().resource] = 10;
