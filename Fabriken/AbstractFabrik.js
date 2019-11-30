//S/CK/#3_Class_Fabrik

/*
Doku
 Ticket    Datum       Entwickler  Beschreibung
 --------------------------------------------------------------------------------------------
 #3        28.11.2018 CK           Class Fabrik erstellt
*/


class AbstractFabrik {

  constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter, c) {
    this.level = level;
    this.inputRohstoff = null;
    this.outputRohstoff = null;
    this.produktionsrate = produktionsRate;
    this.lastTick = Date.now()
    this.lager = lager;
    this.einzugsradius = einzugsradius;
    this.maximaleMitarbeiter = maixmalemitarbeiter;
    this.resourcenFaktor = 2; //bsp: 1 holz -> 1 brett, wäre ein faktor von 1; 2 holz -> 1 brett, wäre ein faktor von 2
    this.c = c
    //arrayliste der bewohner
    //arrayliste der spezialisten
  }

  show(x, y, sizeX, sizeY) {
    fill(this.c)
    rect(x, y, sizeX, sizeY)


  }

  update(lager) {
    if (this.produktionsrate + this.lastTick < Date.now()) {
      this.lastTick = Date.now()
      if (this.inputRohstoff == null || lager.filter(e => e.resource === this.inputRohstoff.resource).length >= this.resourcenFaktor) {
        if (this.inputRohstoff != null) {
          var entfernteRohstoffe = 0;
          for (var i = lager.length - 1; i >= 0; i--) {
            if (lager[i].resource === this.inputRohstoff.resource) {
              lager.splice(i, 1);
              entfernteRohstoffe++

              if (entfernteRohstoffe >= this.resourcenFaktor) break;

            }
          }
        }
          this.lager.push(this.outputRohstoff);
      }
    }

  }

  setInputRohstoff(ir) {
    this.inputRohstoff = ir;
  }

  setOutputRohstoff(or) {
    this.outputRohstoff = or;
  }
  getLager(){
    var lager = this.lager.slice()
    this.lager = []
    if(lager.length == 0) return null
    else return lager
  }


}
//E/CK/#3_Class_Fabrik
