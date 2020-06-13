import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RezervacijaDestinacije } from '../../entities/rezervacijaDestinacije/rezervacijaDestinacije';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaDestinacijeService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  rezervisiDestinaciju(rezervacija: RezervacijaDestinacije)
  {
    var body = {
      IdAirCompany : rezervacija.idAirCompany,
      IdDestinacije : rezervacija.idDestinacije,
      IdKlijenta : rezervacija.idKlijenta,
      Cena : rezervacija.cena,
      PocetniDatum : rezervacija.pocetniDatum,
      KrajnjiDatum : rezervacija.krajnjiDatum,
      Destinacija: rezervacija.destinacija
    };

    console.log(body);
    
    return this.http.post(this.BaseURI + '/RezervacijaDestinacije/AddRezervacijaDestinacija/', body);
  }

  getRezervacijeZaOdredjenog(email:string)
  {
    return this.http.get<RezervacijaDestinacije>(this.BaseURI + '/RezervacijaDestinacije/GetRezervacijeDestinacijaZaOdredjenog/'+email);
  }

  oceni(id:number,ocenaKomp:number,ocenaAvio:number)
  {
    var body={
       IdRezervacije:id,
       OcenaKompanja:ocenaKomp,
       OcenaVozAvio:ocenaAvio,
    };

    return this.http.post(this.BaseURI + '/RezervacijaDestinacije/Oceni/', body);
  }
}
