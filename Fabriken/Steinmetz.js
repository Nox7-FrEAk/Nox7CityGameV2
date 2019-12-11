class Steinmetz extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){

     super(tile.getX(), tile.getY(), tile.getID(),1, 2000, [], 100, 30, color(144,144,144));
     this.setOutputRohstoff([{
         resource: new Fisch().resource,
         resourcenFaktor: 2
     }]);

  }


}

Steinmetz.kosten = [{
  resource: new Holz().resource,
  resourcenFaktor: 10
}]
