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
    this.isSleeping = false
    //arrayliste der bewohner
    //arrayliste der spezialisten
  }

  show(x, y, sizeX, sizeY) {
    fill(this.c)
    rect(x, y, sizeX, sizeY)

    if(this.isSleeping){
    fill(0)
       text('zZzZ', x-sizeX/2,y)

     }


  }

  update(lager) {
    if (!this.isSleeping) {
      if (this.produktionsrate + this.lastTick < Date.now()) {
        this.lastTick = Date.now()
        if (this.inputRohstoff != null) {
          console.log(this.inputRohstoff)
          if (lager.remove([this.inputRohstoff.resource], [this.resourcenFaktor]))
            this.lager.push(this.outputRohstoff);
        } else this.lager.push(this.outputRohstoff);

      }
    }
  }



  setInputRohstoff(ir) {
    this.inputRohstoff = ir;
  }

  setOutputRohstoff(or) {
    this.outputRohstoff = or;
  }

  getIsSleeping(){
    return this.isSleeping
  }
  setIsSleeping(isSleeping){
    console.log(isSleeping)
    this.isSleeping = isSleeping
  }

  getLager() {
    var lager = this.lager.slice()
    this.lager = []
    if (lager.length == 0) return null
    else return lager
  }


}
//E/CK/#3_Class_Fabrik
