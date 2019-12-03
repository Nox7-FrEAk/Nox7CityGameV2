class GebUI {

  constructor() {
    this.showingTile = null

  }


  show() {
    //Variablen
    var recthight = 250; //Rechteck Höhe
    var rectwidth = 200; //Rechteck Beirte
    var recty = (windowHeight / 2) - (recthight / 2); //Position rechteck in Y
    var rectx = windowWidth - rectwidth - 21; //Position Rechteck in X
    var textheight = 17 // Text Grösse

    //Code
    if (this.showingTile != null) {
      if (this.showingTile instanceof Farmer) {
        fill(60);
        stroke(255);
        rect(rectx, recty, rectwidth, recthight);
        noStroke();
        fill(255)
        textSize(textheight)
        text('Anzahl Bewohner: ', rectx + 5, recty + 25)
        text(this.showingTile.anzahlbewohner, rectx + 5, recty + 25 + textheight)
        text('Arbeitende Bewohner: ', rectx + 5, recty + 25 + (textheight * 2))
        text(this.showingTile.arbeitendebewohner, rectx + 5, recty + 25 + (textheight * 3))

      }
    }

  }

  setshowingTile(tile) {
    this.showingTile = tile

  }
}