import { NumberValueAccessor } from '@angular/forms';

export class Destinacija {
    id: number;
    nazivDestinacije: string
    datumVremeSletanja: string;
    datumVremePoletanja: string;
    vremePutovanja: string;
    duzinaPutovanja: string;
    brojPresedanja: number;
    lokacijaPresedanja: string;
    cenaKarte: string;
    airCompanyId: number;


    constructor(id:number, nazivDestinacije: string, datumVremeSletanja: string, datumVremePoletanja: string, vremePutovanja: string, duzinaPutovanja: string, brojPresedanja: number, lokacijaPresedanja: string, cenaKarte: string) {
        this.id = id;
        this.nazivDestinacije = nazivDestinacije;
        this.datumVremeSletanja = datumVremeSletanja;
        this.datumVremePoletanja = datumVremePoletanja;
        this.vremePutovanja = vremePutovanja;
        this.duzinaPutovanja = duzinaPutovanja;
        this.brojPresedanja = brojPresedanja;
        this.lokacijaPresedanja = lokacijaPresedanja;
        this.cenaKarte = cenaKarte;
    }

}