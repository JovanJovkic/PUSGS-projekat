import { NumberValueAccessor } from '@angular/forms';
import { Vozilo } from '../vozilo/vozilo';

export class BrzaRezervacijaVozila {
    id: number;
    idRentACar: number;
    idVozila: number;
    idKlijenta: string;
    pocetnaCena: number;
    novaCena: number;
    popust:number;
    pocetniDatum: string;
    krajnjiDatum:string;
    rowVersion:any[];

    constructor(id:number, idRentACar: number, idVozila: number, idKlijenta: string,popust: number,pocetnaCena: number, novaCena: number,pocetniDatum:string,krajnjiDatum:string, rowVersion:any[]) {
        this.id = id;
        this.idRentACar = idRentACar;
        this.idVozila = idVozila;
        this.idKlijenta = idKlijenta;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
        this.pocetnaCena = pocetnaCena;
        this.novaCena = novaCena;
        this.popust = popust;
        this.rowVersion = rowVersion;
    }

}