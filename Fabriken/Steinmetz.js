class Steinmetz extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 1001, [], 1000, 10, color(144,144,144));
     super.setOutputRohstoff(new Stein());

  }


}
