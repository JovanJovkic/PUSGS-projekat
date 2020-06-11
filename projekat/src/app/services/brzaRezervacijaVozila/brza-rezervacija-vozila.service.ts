import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BrzaRezervacijaVozila } from '../../entities/brzaRezervacijaVozila/brzaRezervacijaVozila';

@Injectable({
  providedIn: 'root'
})
export class BrzaRezervacijaVozilaService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  dodajBrzuRez(rez:BrzaRezervacijaVozila)
  {
    var body = {
      IdRentACar : rez.idRentACar,
      IdVozila : rez.idVozila,
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
    return this.http.post(this.BaseURI + '/BrzaRezVoz/AddBrzaRezervacijaVozila/', body);
  }

  ucitajSveBrzeRez()
  {
    var array = this.http.get<BrzaRezervacijaVozila[]>(this.BaseURI + '/BrzaRezVoz');

    //this.http.get(this.BaseURI + '/RentACarServis').pipe(map((res: RentACarServis) => res.json()));

    //allRentACarServis = Observable.create(observer => { this.http.get(this.BaseURI + '/RentACarServis').map(response => response.json(); })

    return array;

  }

  getBrzaRezZaRent(id:Number)
  {
    return this.http.get(this.BaseURI + '/BrzaRezVoz/GetBrzaRezervacijaVozilaZaRent/' + id);
  }

  rezervisiVoziloBrzo(rezervacija: BrzaRezervacijaVozila)
  {
    var body = {
      IdRentACar : rezervacija.idRentACar,
      IdVozila : rezervacija.idVozila,
      IdKlijenta : rezervacija.idKlijenta,
      Cena : rezervacija.novaCena,
      PocetniDatum : rezervacija.pocetniDatum,
      KrajnjiDatum : rezervacija.krajnjiDatum,
     // Vozilo: rezervacija.vozilo
    };
    
    return this.http.post(this.BaseURI + '/BrzaRezVoz/Rezervisi/', body);
  }

}
