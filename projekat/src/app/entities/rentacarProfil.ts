export class RentACarProfil {
  naziv: string;
  adresa: string;
  promotivniOpis: string;
  ocena: number;


  constructor(naziv: string, adresa: string, promotivniOpis: string, ocena: number) {
      this.naziv = naziv;
      this.adresa = adresa;
      this.promotivniOpis = promotivniOpis;
      this.ocena = ocena;
  }

}