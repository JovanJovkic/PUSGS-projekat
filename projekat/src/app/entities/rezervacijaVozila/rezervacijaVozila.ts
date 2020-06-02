import { NumberValueAccessor } from '@angular/forms';

export class RezervacijaVozila {
    id: number;
    idRentACar: number;
    idVozila: number;
    idKlijenta: string;
    cena: number;
    pocetniDatum: string;
    krajnjiDatum:string;

    constructor(id:number, idRentACar: number, idVozila: number, idKlijenta: string, cena: number,pocetniDatum:string,krajnjiDatum:string) {
        this.id = id;
        this.idRentACar = idRentACar;
        this.idVozila = idVozila;
        this.idKlijenta = idKlijenta;
        this.cena = cena;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
    }

}