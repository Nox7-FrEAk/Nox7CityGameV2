class Steinmetz extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 1, [], 100, 10);
     super.setOutputRohstoff(new Stein());

  }


}
