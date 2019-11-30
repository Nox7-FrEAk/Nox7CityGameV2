class Saegewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 0.5, [], 30, 25);
     super.setOutputRohstoff(new Kohle());
     super.setInputRohstoff(new Holz());
  

  }

}
