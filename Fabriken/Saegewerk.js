class Saegewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){
     super(tile.getX(), tile.getY(), tile.getID(),1, 3020, [], 130, 50 ,color(200,100,100));
     super.setOutputRohstoff(new Brett());
     super.setInputRohstoff(new Holz());


  }

}
