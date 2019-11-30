class Lager{
  constructor(karte){
    this.karte = karte
    this.lager = []
    this.mergedRohstoffe = []

  }
  show(){

    var i = 2;
    for(var rohstoff in this.mergedRohstoffe){
      fill(0)
      text(rohstoff + ': ' + this.mergedRohstoffe[rohstoff], 1,20*i)
      i++
    }
  }
  update(){
    var lager = this.karte.getTileLager()

    if (lager){
      for(var i = 0;i<lager.length;i++)
        this.lager.push(lager[i])
    }
    this.mergedRohstoffe = []
    for(var i = 0;i<this.lager.length;i++){
      if(this.mergedRohstoffe[this.lager[i].resource] == null)   this.mergedRohstoffe[this.lager[i].resource] = 1
      else   this.mergedRohstoffe[this.lager[i].resource] += 1
    }

  }

  getLager(){
    return this.lager
  }
}
