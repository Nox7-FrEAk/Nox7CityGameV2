class Fischer extends AbstractFabrik {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 1, 1000, [], 100, 10, color(0, 25, 210));

    super.setOutputRohstoff(new Fisch());
  }

  update(lager) {
    super.update(lager);
  }

}
