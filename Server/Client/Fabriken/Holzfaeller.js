class Holzfaeller extends AbstractFabrik {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 1, 1000, [], 100, 10, color(12, 205, 0));
    if (tile instanceof Regenwald) this.produktionsrate *= 0.5
    else if (tile instanceof Wald) this.produktionsrate *= 0.8

    super.setOutputRohstoff(new Holz());
  }

  update(lager) {
    super.update(lager);
  }

}
