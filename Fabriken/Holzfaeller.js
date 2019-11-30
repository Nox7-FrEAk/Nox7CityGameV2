class Holzfaeller extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter, c) {

  constructor(){
     super(1, 1000, [], 100, 10, color(12,205,0));
     super.setOutputRohstoff(new Holz());
  }

  update(lager){
    super.update(lager);


  }


}
