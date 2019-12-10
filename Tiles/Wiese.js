
class Wiese extends AbstractTile{
  //constructor(x, y, resource, farbe, wertigkeit, id, tileImage) {

  constructor(x,y, id){
    super(x,y,"wiese", color(104,159,56), 1, id, wiesen_pics[Math.floor(Math.random()*wiesen_pics.length)]);
  }

}
