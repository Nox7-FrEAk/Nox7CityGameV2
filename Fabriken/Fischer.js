class Fischer extends AbstractFabrik {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 1, 2000, [], 10, 20, color(0, 25, 210));

    super.setOutputRohstoff(new Fisch());
  }

  update(lager) {
    super.update(lager);
  }

}
