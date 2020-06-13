import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RezervacijaVozila } from '../../entities/rezervacijaVozila/rezervacijaVozila';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaVozilaService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  rezervisiVozilo(rezervacija: RezervacijaVozila)
  {
    var body = {
      IdRentACar : rezervacija.idRentACar,
      IdVozila : rezervacija.idVozila,
      IdKlijenta : rezervacija.idKlijenta,
      Cena : rezervacija.cena,
      PocetniDatum : rezervacija.pocetniDatum,
      KrajnjiDatum : rezervacija.krajnjiDatum,
      Vozilo: rezervacija.vozilo
    };
    
    return this.http.post(this.BaseURI + '/RezervacijaVozila/AddRezervacijaVozila/', body);
  }

  getRezervacijeZaOdredjenog(email:string)
  {
    return this.http.get<RezervacijaVozila>(this.BaseURI + '/RezervacijaVozila/GetRezervacijeVozilaZaOdredjenog/'+email);
  }

  
  oceni(id:number,ocenaServ:number,ocenaVoz:number)
  {
    var body={
       IdRezervacije:id,
       OcenaKompanja:ocenaServ,
       OcenaVozAvio:ocenaVoz,
    };

    return this.http.post(this.BaseURI + '/RezervacijaVozila/Oceni/', body);
  }
}
