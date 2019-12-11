class Fischer extends AbstractFabrik {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 1, 2000, [], 10, 5, color(0, 25, 210));
    this.setOutputRohstoff([{
        resource: new Fisch().resource,
        resourcenFaktor: 2
    }]);


  }

  update(lager) {
    super.update(lager);
  }

}
Fischer.kosten = [{
  resource: new Holz().resource,
  resourcenFaktor: 10
}]
