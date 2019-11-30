//S/CK/#3_Class_Fabrik

/*
Doku
 Ticket    Datum       Entwickler  Beschreibung
 --------------------------------------------------------------------------------------------
 #3        28.11.2018 CK           Class Fabrik erstellt
 */


class AbstractFabrik {

  constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter) {
    this.level = level;
    this.inputRohstoff = null;
    this.outputRohstoff = null;
    this.produktionsrate = produktionsRate;
    this.lager = lager;
    this.einzugsradius = einzugsradius;
    this.maximaleMitarbeiter = maixmalemitarbeiter;
    //arrayliste der bewohner
    //arrayliste der spezialisten
  }

  show() {

  }

  update() {
    if (this.lager.includes(this.inputRohstoff) || this.inputRohstoff == null) {
      if (this.inputRohstoff != null) {
        for (var i = 0; i < this.lager.length; i++)
          if (this.lager[i].resource === this.inputRohstoff.resource) {
            this.lager.splice(i, 1);
            break;
          }
      }
      this.lager.push(this.outputRohstoff);
      //console.log(this.lager);
    }

  }

  setInputRohstoff(ir) {
    this.inputRohstoff = ir;
  }

  setOutputRohstoff(or) {
    this.outputRohstoff = or;
  }


}
//E/CK/#3_Class_Fabrik
