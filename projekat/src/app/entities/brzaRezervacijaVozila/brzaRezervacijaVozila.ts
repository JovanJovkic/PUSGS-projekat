import { NumberValueAccessor } from '@angular/forms';

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

    constructor(id:number, idRentACar: number, idVozila: number, idKlijenta: string,popust: number,pocetnaCena: number, novaCena: number,pocetniDatum:string,krajnjiDatum:string) {
        this.id = id;
        this.idRentACar = idRentACar;
        this.idVozila = idVozila;
        this.idKlijenta = idKlijenta;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
        this.pocetnaCena = pocetnaCena;
        this.novaCena = novaCena;
        this.popust = popust;
    }

}