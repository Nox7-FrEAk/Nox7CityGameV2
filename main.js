


var sand, wald, wasser;
function preload(){

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sand = new Sand(1,0);
  wald = new Wald(1,228);
  wasser = new Wasser(1,228*2);
}

function draw() {
  //background(255,0,0);
  sand.show();
  wald.show();
  wasser.show();

}

function mouseMoved() {

}

function mouseClicked() {

}
