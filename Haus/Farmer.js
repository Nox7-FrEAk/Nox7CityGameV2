class Farmer extends AbstractHaus {

  //constructor(x, y, id, anzahlbewohner, nahrungsbedarf, rohstoffbedarf, farbe)

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 10, [], [new Brett(), new Stein()], color(255, 185, 15))
  }
}