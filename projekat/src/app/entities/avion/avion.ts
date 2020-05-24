import { NumberValueAccessor } from '@angular/forms';
import { Destinacija } from 'src/app/entities/destinacija/destinacija'

export class Avion {
    id: number;
    nazivAvioKompanije: string;
    adresa: string;
    promotivniOpis: string;
    destNaKojimPosluje: string;
    letovi: string;
    spisakKarataSaPopustomZaBrzuRez: string;
    konfigSegMesta: string;
    cenovnik: string;
    infoPrtljag: string;
    destinacija: Array<Destinacija>;


    constructor(id:number, nazivAvioKompanije: string, adresa: string, promotivniOpis: string, destNaKojimPosluje: string,letovi: string,spisakKarataSaPopustomZaBrzuRez: string,konfigSegMesta: string,cenovnik: string,infoPrtljag: string) {
        this.id = id;
        this.nazivAvioKompanije = nazivAvioKompanije;
        this.adresa = adresa;
        this.promotivniOpis = promotivniOpis;
        this.destNaKojimPosluje = destNaKojimPosluje;
        this.letovi = letovi;
        this.spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
        this.konfigSegMesta = konfigSegMesta;
        this.cenovnik = cenovnik;
        this.infoPrtljag = infoPrtljag;
        this.destinacija = new Array<Destinacija>();
    }

}