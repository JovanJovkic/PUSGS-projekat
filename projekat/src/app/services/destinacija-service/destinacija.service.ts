import { Injectable } from '@angular/core';
import { Destinacija } from 'src/app/entities/destinacija/destinacija'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DestinacijaService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  loadDestinacija() {
    console.log('Učitavanje destinacija...');
    return this.mockedDestinacija();
  }

  dodajDestinaciju(item:Destinacija) {
    var body = {
      NazivDestinacije : item.nazivDestinacije,
      DatumVremeSletanja : item.datumVremeSletanja,
      DatumVremePoletanja : item.datumVremePoletanja,
      VremePutovanja : item.vremePutovanja,
      DuzinaPutovanja : item.duzinaPutovanja,
      brojPresedanja : item.brojPresedanja,
      lokacijaPresedanja : item.lokacijaPresedanja,
      CenaKarte : item.cenaKarte,
      AirCompanyID : item.airCompanyId
    };

    console.log(body);
    return this.http.post(this.BaseURI + '/Destinacija/AddDestinacija', body);
  }

  mockedDestinacija(): Array<Destinacija> {
    let allDestinacija = new Array<Destinacija>();

    const dest1 = new Destinacija(1, 'Jerusalim','21.9.2020 13:25', '11.9.2020 10:10', '7h', '2861km', 1, 'Istanbul', '40000.00rsd');
    const dest2 = new Destinacija(2, 'Ljubljana' ,'4.7.2020 16:45', '30.6.2020 20:20', '4h', '531km', 0, '-', '33000.00rsd');
    const dest3 = new Destinacija(3, 'Sofija', '16.5.2020 6:55', '11.5.2020 17:05', '3h', '394km', 0, '-', '19000.00rsd');
    const dest4 = new Destinacija(4, 'Pariz', '26.12.2020 3:20', '20.12.2020 6:30', '6h', '1857km', 1, 'Bratislava', '36000.00rsd')

    allDestinacija.push(dest1);
    allDestinacija.push(dest2);
    allDestinacija.push(dest3);
    allDestinacija.push(dest4);

    return allDestinacija;
  }

  ucitajDestinacija()
  {
    let destinacijeNiz = new Array<Destinacija>();

    var array = this.http.get<Destinacija[]>(this.BaseURI + '/Destinacija');

    return array;

  }

  izmeniDestinaciju(destinacija: Destinacija)
  {
    return this.http.post(this.BaseURI + '/Destinacija/UpdateDestinacija/', destinacija);
  }

  obrisiDestinaciju(id: Number)
  {
    return this.http.delete(this.BaseURI + '/Destinacija/DeleteDestinacija/'+id);
  }

  ucitajDestinacijaZaAviokompanijuOdredjenu(id:Number)
  {
    return this.http.get<Destinacija>(this.BaseURI + '/Destinacija/GetDestinacijaZaOdredjenuAvioKompaniju/'+id);
  }
}