class Kohlewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){
       super(tile.getX(), tile.getY(), tile.getID(),1, 100, [], 100, 25, color(40,40,40));
     super.setOutputRohstoff(new Kohle());

  }


}
