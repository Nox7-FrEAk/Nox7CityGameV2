
class Regenwald extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"regenwald", color(0,random(170,190),0), 1, id);
  }
}
