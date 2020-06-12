import { NumberValueAccessor } from '@angular/forms';

export class BrzaRezervacijaDestinacije {
    id: number;
    idAirCompany: number;
    idDestinacije: number;
    idKlijenta: string;
    pocetnaCena: number;
    novaCena: number;
    popust:number;
    pocetniDatum: string;
    krajnjiDatum:string;
    rowVersion:any[];

    constructor(id:number, idAirCompany: number, idDestinacije: number, idKlijenta: string,popust: number,pocetnaCena: number, novaCena: number,pocetniDatum:string,krajnjiDatum:string, rowVersion:any[]) {
        this.id = id;
        this.idAirCompany = idAirCompany;
        this.idDestinacije = idDestinacije;
        this.idKlijenta = idKlijenta;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
        this.pocetnaCena = pocetnaCena;
        this.novaCena = novaCena;
        this.popust = popust;
        this.rowVersion = rowVersion;
    }

}