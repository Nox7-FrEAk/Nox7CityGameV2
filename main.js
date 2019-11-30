var karte;
var lager;
var tileSize = 64

function preload() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  karte = new Karte();
  lager = new Lager(karte)
  frameRate(60)
}

function draw() {
  background(255,255,230);
  push();
  translate(karte.getTranslateX(), karte.getTranslateY());
  scale(karte.getZoom());
  karte.show();
  karte.update(lager)
  lager.update()
  pop();
  lager.show()
  textSize(17);
  fill(0);
  text(round(frameRate()), 1,20);


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
