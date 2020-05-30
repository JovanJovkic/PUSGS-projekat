import { Injectable } from '@angular/core';
import { Filijala } from '../../entities/filijala/filijala';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilijaleService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  dodajFilijalu(item:Filijala) {
    var body = {
      Ulica : item.ulica,
      Broj : item.broj,
      Mesto : item.mesto,
      RentACarServisID : item.rentACarId,
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/Filijale/AddFilijala', body);
  }

  ucitajFilijale()
  {
    let filNiz = new Array<Filijala>();

    var array = this.http.get<Filijala[]>(this.BaseURI + '/Filijale');

    //this.http.get(this.BaseURI + '/RentACarServis').pipe(map((res: RentACarServis) => res.json()));

    //allRentACarServis = Observable.create(observer => { this.http.get(this.BaseURI + '/RentACarServis').map(response => response.json(); })

    return array;

  }

  ucitajFilijaleZaRentACarOdredjeni(id:Number)
  {
    return this.http.get<Filijala>(this.BaseURI + '/Vozila/GetFilijaleZaOdredjeniServis/'+id);
  }

  izmeniVozilo(fil: Filijala)
  {
    var body = {
      Id : fil.id,
      Ulica : fil.ulica,
      Broj : fil.broj,
      Mesto : fil.mesto,
      RentACarServisID : fil.rentACarId,
    };
    return this.http.post(this.BaseURI + '/Filijale/UpdateFilijala/', body);
  }

  obrisiVozilo(id: Number)
  {
    return this.http.delete(this.BaseURI + '/Filijale/DeleteFilijala/'+id);
  }

}
