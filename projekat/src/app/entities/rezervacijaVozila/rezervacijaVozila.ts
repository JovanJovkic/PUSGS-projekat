import { NumberValueAccessor } from '@angular/forms';
import { Vozilo } from '../vozilo/vozilo';

export class RezervacijaVozila {
    id: number;
    idRentACar: number;
    idVozila: number;
    idKlijenta: string;
    cena: number;
    pocetniDatum: string;
    krajnjiDatum:string;
    vozilo:Vozilo;
    zavrseno:boolean;

    constructor(id:number, idRentACar: number, idVozila: number, idKlijenta: string, cena: number,pocetniDatum:string,krajnjiDatum:string,vozilo:Vozilo) {
        this.id = id;
        this.idRentACar = idRentACar;
        this.idVozila = idVozila;
        this.idKlijenta = idKlijenta;
        this.cena = cena;
        this.pocetniDatum = pocetniDatum;
        this.krajnjiDatum = krajnjiDatum;
        this.vozilo=vozilo;
    }

}