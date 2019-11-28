class Holzfaeller extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 1, 10, 100, 10);
     super.setOutputRohstoff(new Holz());

  }


}
