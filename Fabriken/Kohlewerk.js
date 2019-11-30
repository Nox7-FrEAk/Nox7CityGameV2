class Kohlewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 0.5, [], 30, 25, color(40,40,40));
     super.setOutputRohstoff(new Kohle());

  }


}
