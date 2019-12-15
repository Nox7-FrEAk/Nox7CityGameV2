//S/CK/#3_Class_Fabrik

/*
Doku
 Ticket    Datum       Entwickler  Beschreibung
 --------------------------------------------------------------------------------------------
 #3        28.11.2018 CK           Class Fabrik erstellt
*/


class AbstractFabrik extends AbstractTile {

  constructor(name, x,y,id,level, produktionsRate, lager, einzugsradius, maixmaleMitarbeiter, c) {
    super(x, y, '', c, 0, id)
    this.level = level;
    this.name = name
    this.inputRohstoff = null;
    this.outputRohstoff = null;
    this.produktionsrate = produktionsRate;
    this.lastTick = Date.now()
    this.lager = lager;
    this.einzugsradius = einzugsradius;
    this.produktionsRatenMinderung = 1;
    this.mitarbeiter = 0
    this.maximaleMitarbeiter = maixmaleMitarbeiter;
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

     if ((this.inputRohstoff == null || lager.canRemove(this.inputRohstoff)) && !this.isSleeping){
       var per = (this.getProduktionsRate() + this.lastTick - Date.now())/this.getProduktionsRate()
       fill(255)
       stroke(0)
       strokeWeight(1)
       rect(this.x, this.y-this.sizeY/2+this.sizeY/10, this.sizeX*per, this.sizeY/10)
     }



  }

  showMouseOver(){
    noFill()
    stroke(255,0,0)
    ellipse(this.x,this.y,this.einzugsradius, this.einzugsradius)
    noStroke()
    fill(0)
    textSize(15)
    text('PR: ' + this.getProduktionsRate(), this.x, this.y)
    text('MA: ' + this.mitarbeiter + '/' + this.maximaleMitarbeiter, this.x, this.y+10)
    text('Name:' + this.name, this.x, this.y+20)

  }

  update(lager) {
    if (!this.isSleeping) {
      if (this.getProduktionsRate() + this.lastTick < Date.now()) {
        this.lastTick = Date.now()
        if (this.inputRohstoff != null) {
          if (lager.remove(this.inputRohstoff)){
            for(var r in this.outputRohstoff){
              this.lager[r] = (this.lager[r] || 0) + this.outputRohstoff[r];
            }
          }
        } else{
          for(var r in this.outputRohstoff){
            this.lager[r] = (this.lager[r] || 0) + this.outputRohstoff[r];
          }
        }
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
    this.isSleeping = isSleeping
  }

  getLager() {
    var lager = this.lager;
    this.lager = {}
    if (Object.keys(lager).length == 0) return null
    else return lager
  }

  getEinzugsRadius(){
    return this.einzugsradius
  }

  getProduktionsRate(){
    return (this.produktionsrate*this.produktionsRatenMinderung)*(1/(this.mitarbeiter/this.maximaleMitarbeiter))
  }
  getProudktionsMinderung(){
    return this.produktionsRatenMinderung
  }


 setProudktionsMinderung(val){
   this.produktionsRatenMinderung = val
 }

 addMitarbeiter(val){
   this.mitarbeiter += val
   if(this.mitarbeiter > this.maximaleMitarbeiter) this.mitarbeiter = this.maximaleMitarbeiter
 }



}
//E/CK/#3_Class_Fabrik
