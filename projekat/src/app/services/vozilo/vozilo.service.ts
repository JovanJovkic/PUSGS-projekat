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

  pretraziVozila(Id:Number, MestoPreFilter:String, DatumPreFilter:String, TipVozilaFilter:String, MestoVraFilter:String, DatumVraFilter:String, BrojPutnikaFilter:Number, CenaOdFilter:Number, CenaDoFilter:Number)
  {
    var body = {
      MestoPreuzimanja : MestoPreFilter,
      DatumPreuzimanja : DatumPreFilter,
      TipVozila : TipVozilaFilter,
      MestoVracanja : MestoVraFilter,
      DatumVracanja : DatumVraFilter,
      BrojPutnika : BrojPutnikaFilter,
      CenaOd : CenaOdFilter,
      CenaDo : CenaDoFilter,
      IdRentACar: Id
    };

    return this.http.post(this.BaseURI + '/Vozila/PretraziVozila', body);
  }

  dodajVozilo(item:Vozilo) {
    var body = {
      Naziv : item.naziv,
      Marka : item.marka,
      Model : item.model,
      GodinaProizvodnje : item.godinaProizvodnje,
      BrojSedista : item.brojSedista,
      TipVozila : item.tipVozila,
      RentACarServisID : item.rentACarId,
      FilijalaID : item.filijalaId
    };
    //console.log(body);
    return this.http.post(this.BaseURI + '/Vozila/AddVozilo', body);
  }


  mockedVozilo(): Array<Vozilo> {
    let allAvion = new Array<Vozilo>();

   // const ak1 = new Vozilo(1,'vozilo1','BMW','12',2012,5,'automobil');
   // const ak2 = new Vozilo(2,'vozilo2','BMW','09',2015,5,'automobil');
   // const ak3 = new Vozilo(3,'vozilo3','BMW','11',2010,5,'automobil');

    //allAvion.push(ak1);
    //allAvion.push(ak2);
    //allAvion.push(ak3);

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

  ucitajVozilaZaRentACarOdredjeni(id:Number)
  {
    return this.http.get<Vozilo>(this.BaseURI + '/Vozila/GetVozilaZaOdredjeniServis/'+id);
  }

  izmeniVozilo(vozilo: Vozilo)
  {
    return this.http.post(this.BaseURI + '/Vozila/UpdateVozilo/', vozilo);
  }

  obrisiVozilo(id: Number)
  {
    return this.http.delete(this.BaseURI + '/Vozila/DeleteVozilo/'+id);
  }
}
