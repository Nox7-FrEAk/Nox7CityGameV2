class Kohlewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){
       super(tile.getX(), tile.getY(), tile.getID(),1, 100, [], 100, 60, color(40,40,40));
       this.setOutputRohstoff([{
           resource: new Kohle().resource,
           resourcenFaktor: 1
       }]);

  }


}

Kohlewerk.kosten = [{
  resource: new Weintraube().resource,
  resourcenFaktor: 10
}]
