var karte;
var lager;
var tileSize = 32;
var mainui;

function preload() {

}

function windowResized() {
  resizeCanvas(windowWidth-50, windowHeight-50);
}

function setup() {

  createCanvas(windowWidth-50, windowHeight-50);
  mainui = new MainUI();
  karte = new Karte();
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



}

function mouseMoved() {

}

function mouseClicked() {

}

function keyPressed() {
karte.keyPressed(key, lager);

}

function mousePressed(){
  karte.mousePressed()
}
