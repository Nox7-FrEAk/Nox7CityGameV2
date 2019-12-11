class Buerger extends AbstractHaus {

  //constructor(anzahlbewohner, nahrungsbedarf, rohstoffbedarf, farbe) {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 15, [{resource: new Fisch().resource, resourcenFaktor: 1},
                                                      {resource: new Weintraube().resource, resourcenFaktor: 2}], 10000, [], color(255, 208, 0))
   this.arbeitendebewohner = tile.arbeitendebewohner

  }

  canLevelUp(){
    return false
  }
}



Buerger.kosten = [{
  resource: new Holz().resource,
  resourcenFaktor: 10
},{
  resource: new Brett().resource,
  resourcenFaktor: 1
}]
