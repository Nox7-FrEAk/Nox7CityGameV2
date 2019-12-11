class Farmer extends AbstractHaus {

  //constructor(anzahlbewohner, nahrungsbedarf, rohstoffbedarf, farbe) {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 5, [{resource: new Fisch().resource, resourcenFaktor: 1}], 10000, [], color(255, 185, 15))

  }
  canLevelUp(){
    return true
  }
}


Farmer.kosten = [{
  resource: new Holz().resource,
  resourcenFaktor: 10
}]
