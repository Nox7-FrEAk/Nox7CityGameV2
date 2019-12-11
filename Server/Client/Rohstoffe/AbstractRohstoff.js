class AbstractRohstoff{

    constructor(resource, wertigkeit, gewicht, groesse){
      this.resource = resource;
      this.wertigkeit = wertigkeit;
      this.gewicht = gewicht;
      this.groesse = groesse;

    }

    getGeldwertigkeit(){
      return this.wertigkeit * 1;
    }

}
