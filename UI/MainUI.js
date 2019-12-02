class MainUI {

  constructor(Lager) {

  }
  setup() {
    var lager;
    lager = new Lager(karte);
  }

  show() {
    var ra = 25;
    var textHeight = 19;
    fill(60);
    stroke(255);
    rect(0, 0, windowWidth - 21, ra);
    fill(255);
    textSize(17);
    noStroke();
    text("FPS: " + round(frameRate()), 5, textHeight);
    lager.show();
  }
}