var karte;
var lager;
var tileSize = 32;
var mainui;
var bauui;
var geui;
var wood_stick;

function preload() {
  wood_stick = loadImage('imgs/wood-stick.png');
  forrest = loadImage('Tiles/TileImage/Forrest.png');
  ocean = loadImage('Tiles/TileImage/Ocean2.png');
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
  if(karte.tiles){
    translate(karte.getTranslateX(), karte.getTranslateY());
    scale(karte.getZoom());
    karte.show();
    karte.update(lager)
    lager.update()
  }
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
