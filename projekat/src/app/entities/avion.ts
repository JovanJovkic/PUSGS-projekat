export class Avion {
    nazivAvioKompanije: string;
    adresa: string;
    promotivniOpis: string;
    destNaKojimPosluje: string;
    letovi: string;
    spisakKarataSaPopustomZaBrzuRez: string;
    konfigSegMesta: string;
    cenovnik: string;
    infoPrtljag: string;

    constructor(nazivAvioKompanije: string, adresa: string, promotivniOpis: string, destNaKojimPosluje: string,letovi: string,spisakKarataSaPopustomZaBrzuRez: string,konfigSegMesta: string,cenovnik: string,infoPrtljag: string) {
        this.nazivAvioKompanije = nazivAvioKompanije;
        this.adresa = adresa;
        this.promotivniOpis = promotivniOpis;
        this.destNaKojimPosluje = destNaKojimPosluje;
        this.letovi = letovi;
        this.spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
        this.konfigSegMesta = konfigSegMesta;
        this.cenovnik = cenovnik;
        this.infoPrtljag = infoPrtljag;
    }

}