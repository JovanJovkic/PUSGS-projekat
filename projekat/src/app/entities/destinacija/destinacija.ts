import { NumberValueAccessor } from '@angular/forms';

export class Destinacija {
    id: number;
    datumVremeSletanja: string;
    datumVremePoletanja: string;
    vremePutovanja: string;
    duzinaPutovanja: string;
    brojPresedanja: number;
    lokacijaPresedanja: string;
    cenaKarte: string;


    constructor(id:number, datumVremeSletanja: string, datumVremePoletanja: string, vremePutovanja: string, duzinaPutovanja: string, brojPresedanja: number, lokacijaPresedanja: string, cenaKarte: string) {
        this.id = id;
        this.datumVremeSletanja = datumVremeSletanja;
        this.datumVremePoletanja = datumVremePoletanja;
        this.vremePutovanja = vremePutovanja;
        this.duzinaPutovanja = duzinaPutovanja;
        this.brojPresedanja = brojPresedanja;
        this.lokacijaPresedanja = lokacijaPresedanja;
        this.cenaKarte = cenaKarte;
    }

}