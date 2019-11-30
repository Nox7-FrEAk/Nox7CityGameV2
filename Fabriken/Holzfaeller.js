class Holzfaeller extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(){
     super(1, 1, [], 100, 10, color(12,205,0));
     this.lager.push(new Holz());
     super.setOutputRohstoff(new Holz());
  }

  update(){
    super.update();


  }


}
