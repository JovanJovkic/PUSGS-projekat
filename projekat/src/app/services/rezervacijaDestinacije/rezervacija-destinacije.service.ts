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
    
    return this.http.post(this.BaseURI + '/RezervacijaDestinacije/AddRezervacijaDestinacije/', body);
  }
}
