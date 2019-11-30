//S/CK/#3_Class_Fabrik

/*
Doku
 Ticket    Datum       Entwickler  Beschreibung
 --------------------------------------------------------------------------------------------
 #3        28.11.2018 CK           Class Fabrik erstellt
*/


class AbstractFabrik extends AbstractTile {

  constructor(x,y,id,level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter, c) {
    super(x, y, '', c, 0, id)

    this.level = level;
    this.inputRohstoff = null;
    this.outputRohstoff = null;
    this.produktionsrate = produktionsRate;
    this.lastTick = Date.now()
    this.lager = lager;
    this.einzugsradius = einzugsradius;
    this.produktionsRatenMinderung = 1;
    this.maximaleMitarbeiter = maixmalemitarbeiter;
    this.resourcenFaktor = 2; //bsp: 1 holz -> 1 brett, wäre ein faktor von 1; 2 holz -> 1 brett, wäre ein faktor von 2
    this.isSleeping = false
    //arrayliste der bewohner
    //arrayliste der spezialisten
  }

  show() {
    super.show()
    if(this.isSleeping){
    fill(0)
       text('zZzZ', this.x-this.sizeX/2,this.y)

     }


  }
  showMouseOver(){
    noFill()
    stroke(255,0,0)
    ellipse(this.x,this.y,this.einzugsradius, this.einzugsradius)
    noStroke()
    fill(0)
    text(this.getProduktionsRate(), this.x, this.y)
  }

  update(lager) {
    if (!this.isSleeping) {
      if (this.getProduktionsRate() + this.lastTick < Date.now()) {
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

  getEinzugsRadius(){
    return this.einzugsradius
  }

  getProduktionsRate(){
    return this.produktionsrate*this.produktionsRatenMinderung
  }
  getProudktionsMinderung(){
    return this.produktionsRatenMinderung
  }


 setProudktionsMinderung(val){
   console.log(val)

   this.produktionsRatenMinderung = val
 }



}
//E/CK/#3_Class_Fabrik
