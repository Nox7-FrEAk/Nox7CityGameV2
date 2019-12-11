class Holzfaeller extends AbstractFabrik {

  constructor(tile) {
    super(tile.getX(), tile.getY(), tile.getID(), 1, 2000, [], 100, 25, color(12, 205, 0));
    if (tile instanceof Regenwald) this.produktionsrate *= 0.5
    else if (tile instanceof Wald) this.produktionsrate *= 0.8
    this.setOutputRohstoff([{
        resource: new Holz().resource,
        resourcenFaktor: 1
    }]);

  }

  update(lager) {
    super.update(lager);
  }

}

Holzfaeller.kosten = [{
  resource: new Stein().resource,
  resourcenFaktor: 10
}]
