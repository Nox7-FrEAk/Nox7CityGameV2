class Kohlewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 0.5, 15, 30, 25);
     super.setOutputRohstoff(new Kohle());

  }
}
