class SimpleMenu{
  constructor(x, y){
    this.texts = []
    this.maxEntrys = 5
    this.paddidng = 18

    this.x = x
    this.y = y

  }

  show(){
    textSize(18)
    fill(222,222,222,120)
    rect(this.x, this.y-this.paddidng,this.x+400,this.maxEntrys*this.paddidng+10)
    for(let i = 0;i<this.texts.length;i++){
      fill(this.texts[i].col)
      text(this.texts[i].text,this.x, this.y+i*  this.paddidng)
    }

  }

  update(){

  }

  addText(text){
    this.texts.unshift(text)
    if(this.texts.length > this.maxEntrys) this.texts.splice(this.maxEntrys,1)


  }

}
