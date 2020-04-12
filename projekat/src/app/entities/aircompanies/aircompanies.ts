export class AirCompanies {
    nazivAvioKompanije: string;
    gradAvioKompanije: string;
    //polazniAerodrom: string;
    //odredisniAerodrom: string;
    cenaKarte: number;

    constructor(nazivAvioKompanije: string, gradAvioKompanije: string, cenaKarte: number) {
        this.nazivAvioKompanije = nazivAvioKompanije;
        this.gradAvioKompanije = gradAvioKompanije;
        //this.model = model;
        //this.year = year;
        this.cenaKarte = cenaKarte;
    }
}