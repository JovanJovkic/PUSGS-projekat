import { NumberValueAccessor } from '@angular/forms';
import { Destinacija } from 'src/app/entities/destinacija/destinacija'

export class AirCompanies {
    id: number;
    nazivAvioKompanije: string;
    gradAvioKompanije: string;
    //polazniAerodrom: string;
    //odredisniAerodrom: string;
    cenaKarte: number;
    destinacija: Array<Destinacija>;

    constructor(id:number, nazivAvioKompanije: string, gradAvioKompanije: string, cenaKarte: number) {
        this.id = id;
        this.nazivAvioKompanije = nazivAvioKompanije;
        this.gradAvioKompanije = gradAvioKompanije;
        //this.model = model;
        //this.year = year;
        this.cenaKarte = cenaKarte;
        this.destinacija = new Array<Destinacija>();
    }
}