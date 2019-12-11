var karte;
var lager;
var tileSize = 64;
var mainui;
var bauui;
var geui;
var wood_stick;

function preload() {
  wood_stick = null
  forrest = null
  ocean = null
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  createCanvas(windowWidth - 20, windowHeight - 20);
  mainui = new MainUI();
  bauui = new BauUI();
  geui = new GebUI();
  karte = new Karte(geui);
  lager = new Lager(karte);
  frameRate(60)
}

function draw() {
  background(0);
  push();
  translate(karte.getTranslateX(), karte.getTranslateY());
  scale(karte.getZoom());
  karte.show();
  karte.update(lager)
  lager.update()
  pop();

  //lager.show()
  textSize(17);

  fill(0);
  //text(round(frameRate()), 1,20);
  mainui.show();
  bauui.show();
  geui.show();



}

function mouseMoved() {

}

function mouseClicked() {

}

function keyPressed() {
  karte.keyPressed(key, lager);

}

function mousePressed() {
  karte.mousePressed()
}
