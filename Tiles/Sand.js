
class Sand extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"sand", color(234,random(200,222),189), 1, id, sand);
  }
}
