import { NumberValueAccessor } from '@angular/forms';
import { Destinacija } from '../destinacija/destinacija';

export class RezervacijaDestinacije {
    id: number;
    idAirCompany: number;
    idDestinacije: number;
    idKlijenta: string;
    cena: number;
    pocetniDatum: string;
    krajnjiDatum:string;
    destinacija:Destinacija;
    zavrseno:boolean;

    constructor(id:number, idAirCompany: number, idDestinacije: number, idKlijenta: string, cena: number,pocetniDatum:string,krajnjiDatum:string,destinacija:Destinacija) {
        this.id = id;
        this.idAirCompany = idAirCompany;
        this.idDestinacije = idDestinacije;
        this.idKlijenta = idKlijenta;
        this.cena = cena;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
        this.destinacija=destinacija;
    }

}