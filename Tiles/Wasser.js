
class Wasser extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"wasser", color(19,105,random(165,220)), 1, id);
  }
}
