class Saegewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 1000, [], 30, 25,color(200,100,100));
     super.setOutputRohstoff(new Brett());
     super.setInputRohstoff(new Holz());


  }

}
