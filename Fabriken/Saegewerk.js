

class Saegewerk extends AbstractFabrik {
    //constructor(level, produktionsRate, lager, einzugsradius, maixmalemitarbeiter){

    constructor(tile) {
        super(tile.getX(), tile.getY(), tile.getID(), 1, 3020, [], 130, 50, color(200, 100, 100));
        super.setOutputRohstoff([{
            resource: new Brett().resource,
            resourcenFaktor: 1
        }]);

        super.setInputRohstoff([{
                resource: new Holz().resource,
                resourcenFaktor: 2
            },
            {
                resource: new Stein().resource,
                resourcenFaktor: 1
            }
        ]);


    }

}

Saegewerk.kosten = [{
  resource: new Holz().resource,
  resourcenFaktor: 10
},
{
  resource: new Stein().resource,
  resourcenFaktor: 10
}]
