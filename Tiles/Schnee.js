
class Schnee extends AbstractTile{
  //constructor(x, y, sizeX, sizeY, resource, farbe, wertigkeit) {

  constructor(x,y, id){
    super(x,y,"schnee", color(250,random(240,250),250), 1, id);
  }
}
