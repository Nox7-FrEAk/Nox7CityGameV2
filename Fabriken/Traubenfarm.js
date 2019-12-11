class Traubenfarm extends AbstractFabrik{
  //constructor(x,y,id,level, produktionsRate, lager, einzugsradius, maixmaleMitarbeiter, c) {

  constructor(tile){
       super(tile.getX(), tile.getY(), tile.getID(), 1, 500, [] , 100, 5, color(200,0,200));
       this.setOutputRohstoff([{
           resource: new Weintraube().resource,
           resourcenFaktor: 2
       }]);
  }


}

Traubenfarm.kosten = [{
  resource: new Holz().resource,
  resourcenFaktor: 10
}]
