class Farmer extends AbstractHaus {

  //constructor(anzahlbewohner, nahrungsbedarf, rohstoffbedarf, farbe) {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 5, [new Fisch()], 10000, [new Brett(), new Stein()], color(255, 185, 15))

  }
}
