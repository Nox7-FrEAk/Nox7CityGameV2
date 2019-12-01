
class Lava extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"lava", color(random(220,240),44,44), 1, id);
  }
}
