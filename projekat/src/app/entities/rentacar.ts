import { NumberValueAccessor } from '@angular/forms';

export class RentACarServis {
    id: number;
    naziv: string;
    adresa: string;
    promotivniOpis: string;
    ocena: number;


    constructor(id:number, naziv: string, adresa: string, promotivniOpis: string, ocena: number) {
        this.id = id;
        this.naziv = naziv;
        this.adresa = adresa;
        this.promotivniOpis = promotivniOpis;
        this.ocena = ocena;
    }

}