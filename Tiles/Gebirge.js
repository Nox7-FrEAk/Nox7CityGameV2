
class Gebrige extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"gebirge", color(190,random(170,190),190), 1, id);
  }
}
