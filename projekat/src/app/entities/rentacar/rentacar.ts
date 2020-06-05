import { NumberValueAccessor } from '@angular/forms';
import { Vozilo } from '../vozilo/vozilo';

export class RentACarServis {
    id: number;
    naziv: string;
    adresa: string;
    promotivniOpis: string;
    ocena: number;
    vozila: Array<Vozilo>;
    cenaPrviDan : number;
    cenaSledeciDan : number;
    odobreno:boolean;

    constructor(id:number, naziv: string, adresa: string, promotivniOpis: string, ocena: number) {
        this.id = id;
        this.naziv = naziv;
        this.adresa = adresa;
        this.promotivniOpis = promotivniOpis;
        this.ocena = ocena;
        this.vozila = new Array<Vozilo>();
    }

}