//S/CK/#3_Class_Fabrik

/*
Doku
 Ticket    Datum       Entwickler  Beschreibung
 --------------------------------------------------------------------------------------------
 #3        28.11.2018 CK           Class Fabrik erstellt
 */


class AbstractFabrik{

  constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){
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

   show(){
    console.log(this.level);
  }

   update(){

  }

  setInputRohstoff(ir){
    this.inputRohstoff = ir;
  }

  setOutputRohstoff(or){
    this.outputRohstoff = or;
  }


}
//E/CK/#3_Class_Fabrik
