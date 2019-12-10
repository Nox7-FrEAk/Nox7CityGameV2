class Steinmetz extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){

     super(tile.getX(), tile.getY(), tile.getID(),1, 2000, [], 100, 30, color(144,144,144));
     super.setOutputRohstoff(new Stein());

  }


}
