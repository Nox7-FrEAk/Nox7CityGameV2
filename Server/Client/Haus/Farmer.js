class Farmer extends AbstractHaus {

  //constructor(anzahlbewohner, nahrungsbedarf, rohstoffbedarf, farbe) {

  constructor(tile) {
    super(Farmer.hausname, tile.getX(), tile.getY(), tile.getID(), 5, [], 5000, [new Brett(), new Stein()], color(255, 185, 15))
    let changes = {};
    changes[new Fisch().resource] = 1;
    super.setNahrungsbedarf(changes)

  }
}

Farmer.kosten = {};
Farmer.kosten[new Holz().resource] = 10;
Farmer.kosten[new Stein().resource] = 10;
Farmer.hausname = "farmer";
