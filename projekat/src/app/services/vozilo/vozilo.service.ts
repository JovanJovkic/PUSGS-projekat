import { Injectable } from '@angular/core';
import { Vozilo } from '../../entities/vozilo/vozilo';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoziloService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  loadVozilo() {
    console.log('Učitavanje vozila...');
    return this.mockedVozilo();
  }

  dodajVozilo(item:Vozilo) {
    var body = {
      Naziv : item.naziv,
      Marka : item.marka,
      Model : item.model,
      GodinaProizvodnje : item.godinaProizvodnje,
      BrojSedista : item.brojSedista,
      TipVozila : item.tipVozila,
      RentACarServisID : item.rentACarId
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/Vozila/AddVozilo', body);
  }


  mockedVozilo(): Array<Vozilo> {
    let allAvion = new Array<Vozilo>();

    const ak1 = new Vozilo(1,'vozilo1','BMW','12',2012,5,'automobil');
    const ak2 = new Vozilo(2,'vozilo2','BMW','09',2015,5,'automobil');
    const ak3 = new Vozilo(3,'vozilo3','BMW','11',2010,5,'automobil');

    allAvion.push(ak1);
    allAvion.push(ak2);
    allAvion.push(ak3);

    return allAvion;
  }

  ucitajVozila()
  {
    let vozilaNiz = new Array<Vozilo>();

    var array = this.http.get<Vozilo[]>(this.BaseURI + '/Vozila');

    //this.http.get(this.BaseURI + '/RentACarServis').pipe(map((res: RentACarServis) => res.json()));

    //allRentACarServis = Observable.create(observer => { this.http.get(this.BaseURI + '/RentACarServis').map(response => response.json(); })

    return array;

  }
}
