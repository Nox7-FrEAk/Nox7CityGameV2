var karte;
var tileSize = 128;

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
  karte.update()
  pop();
  textSize(17);

  fill(0);
  text(round(frameRate()), 1,20);

  karte.getLager();


}

function mouseMoved() {

}

function mouseClicked() {

}

function keyPressed() {
karte.keyPressed(key);

}

function mousePressed(){
  karte.mousePressed()
}
