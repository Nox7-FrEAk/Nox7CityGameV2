
class Wald extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"wald", color(144,random(170,190),110), 1, id);
  }
}
