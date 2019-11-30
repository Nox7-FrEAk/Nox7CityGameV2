var karte;
var tileSize = 16;

function preload() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  karte = new Karte();
}

function draw() {
  background(255,255,230);
  push();
  translate(karte.getTranslateX(), karte.getTranslateY());
  scale(karte.getZoom());
  karte.show();
  pop();
  textSize(17);
  fill(0);
  text(round(frameRate()), 1,20);


}

function mouseMoved() {

}

function mouseClicked() {

}

function keyPressed() {
karte.keyPressed(key);

}
