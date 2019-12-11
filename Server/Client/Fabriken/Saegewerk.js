class Saegewerk extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){
     super(Saegewerk.fabrikname, tile.getX(), tile.getY(), tile.getID(),1, 1020, [], 130, 25,color(200,100,100));
     
     let changes = {};
     changes[new Holz().resource] = 3;
     super.setInputRohstoff(changes);

     changes = {};
     changes[new Brett().resource] = 1;
     super.setOutputRohstoff(changes);

  }

}

Saegewerk.fabrikname = "saegewerk";

Saegewerk.kosten = {};
Saegewerk.kosten[new Holz().resource] = 10;
Saegewerk.kosten[new Stein().resource] = 10;
