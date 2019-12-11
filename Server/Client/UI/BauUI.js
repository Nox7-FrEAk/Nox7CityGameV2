class BauUI {

  constructor(Lager) {}

  setup() {

  }

  show() {
    var ra = -100;
    var x = windowWidth / 4;
    var y = windowHeight;
    var textHeight = 19;
    fill(60);
    stroke(255);
    rect(x, y - 21, windowWidth / 2, ra);
    fill(255);
    textSize(17);
    noStroke();
    text("1: Holzfäller", x + 5, y + ra);
    text("2: Steinmetz", x + 5, y + ra + textHeight);
    text("3: Sägewerk", x + 5, y + ra + (textHeight * 2));
    text("4: Farmer", x + 5, y + ra + (textHeight * 3));
    text("5: --", x + 5, y + ra + (textHeight * 4));
    lager.show();
  }
}