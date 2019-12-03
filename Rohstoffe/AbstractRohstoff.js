class AbstractRohstoff {

  constructor(resource, wertigkeit, gewicht, groesse, saetigung) {
    this.resource = resource;
    this.wertigkeit = wertigkeit;
    this.gewicht = gewicht;
    this.groesse = groesse;
    this.saetigung = saetigung;

  }

  getGeldwertigkeit() {
    return this.wertigkeit * 1;
  }

}