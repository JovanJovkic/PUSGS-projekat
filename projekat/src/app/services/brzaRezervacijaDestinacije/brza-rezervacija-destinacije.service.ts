import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BrzaRezervacijaDestinacije } from '../../entities/BrzaRezervacijaDestinacije/brzaRezervacijaDestinacije';

@Injectable({
  providedIn: 'root'
})
export class BrzaRezervacijaDestinacijeService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  dodajBrzuRez(rez:BrzaRezervacijaDestinacije)
  {
    var body = {
      IdAirCompany : rez.idAirCompany,
      IdDestinacije : rez.idDestinacije,
      Popust : rez.popust,
      PocetniDatum : rez.pocetniDatum,
      KrajnjiDatum : rez.krajnjiDatum,
      Id : 0,
      NovaCena : 0,
      PocetnaCena : 0,
      Zavrseno : false,
      IdKlijenta : ''
    };

    console.log(body);
    return this.http.post(this.BaseURI + '/BrzaRezDes/AddBrzaRezervacijaDestinacije/', body);
  }

  ucitajSveBrzeRez()
  {
    var array = this.http.get<BrzaRezervacijaDestinacije[]>(this.BaseURI + '/BrzaRezDes');

    return array;

  }
}
