class Steinmetz extends AbstractFabrik{
  //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

  constructor(tile){

     super(Steinmetz.fabrikname, tile.getX(), tile.getY(), tile.getID(),1, 1000, [], 100, 10, color(144,144,144));
     let changes = {};
     changes[new Stein().resource] = 1;
     super.setOutputRohstoff(changes);

  }


}

Steinmetz.fabrikname = "steinmetz";
Steinmetz.kosten = {};
Steinmetz.kosten[new Holz().resource] = 10;
