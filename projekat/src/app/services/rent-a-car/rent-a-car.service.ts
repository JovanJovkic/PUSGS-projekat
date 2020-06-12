import { Injectable } from '@angular/core';
import { RentACarServis } from '../../entities/rentacar/rentacar';
import { Vozilo } from '../../entities/vozilo/vozilo';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import {map} from 'rxjs/add/operator/map';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentACarService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  formModel = this.fb.group({
    naziv: [''],
    adresa: [''],
    admin: [''],
  });

  dodaj() {
    var body = {
      Naziv: this.formModel.value.naziv,
      Adresa: this.formModel.value.adresa,
      Admin: this.formModel.value.admin,
      Odobreno: false
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/RentACarServis/AddRentACarServis', body);
  }

  odobri(id:number) {
    console.log(id);
    return this.http.get(this.BaseURI + '/RentACarServis/OdobriRentACarServis/' + id);
  }

  pretrazi(naziv: string, datumOd:string, datumDo:string) {
    var body = {
      Naziv: naziv,
      DatumOd: datumOd,
      DatumDo: datumDo
    };
    console.log(body);
    return this.http.put(this.BaseURI + '/RentACarServis/PretragaRentACarServis', body);
  }

  izmeniRentACarServis(servis: RentACarServis)
  {
    return this.http.post(this.BaseURI + '/RentACarServis/UpdateRentACarServis', servis);
  }

  loadRentACar() {
    console.log('Učitavanje rent-a-car servisa...');
    return this.mockedRentACar();
  }


  mockedRentACar(): Array<RentACarServis> {
    let allRentACarServis = new Array<RentACarServis>();

    //const ak1 = new RentACarServis(1,'Balkan', 'Jurija Gagarina 25, Novi Beograd', 'Najpovoljniji rent-a-car servis u gradu', 5);
    //const ak2 = new RentACarServis(2,'Novi Sad - rentAcar', 'Bulevar Oslobodjenja 123, Novi Sad', 'Servis za rent-a-car sa najnovijim modelima vozila', 5);
    //const ak3 = new RentACarServis(3,'Europa', 'Jovana Dučica 22, Loznica', 'Servis po vašoj meri', 3);
    //const ak4 = new RentACarServis(4,'Novi', 'Ive Andrića 25, Nis', 'servis za rent-a-car', 5);
    //const ak5 = new RentACarServis(5,'Servis BG', 'Karadjordjeva 254, Beograd', 'Posedujemo najnovija vozila', 4);

    //ak1.vozila = this.mockedVozilo();
    //ak2.vozila = this.mockedVozilo();
    //ak3.vozila = this.mockedVozilo();
   // ak4.vozila = this.mockedVozilo();
    //ak5.vozila = this.mockedVozilo();

    //allRentACarServis.push(ak1);
    //allRentACarServis.push(ak2);
    //allRentACarServis.push(ak3);
    //allRentACarServis.push(ak4);
    //allRentACarServis.push(ak5);

    return allRentACarServis;
  }

  mockedVozilo(): Array<Vozilo> {
    let allAvion = new Array<Vozilo>();

    //const ak1 = new Vozilo(1,'vozilo1','BMW','12',2012,5,'automobil');
    //const ak2 = new Vozilo(2,'vozilo2','BMW','09',2015,5,'automobil');
    //const ak3 = new Vozilo(3,'vozilo3','BMW','11',2010,5,'automobil');

    //allAvion.push(ak1);
    //allAvion.push(ak2);
    //allAvion.push(ak3);

    return allAvion;
  }

  filterRentCarServise(allRentACar: RentACarServis[], filterParams: AbstractFilterParam[]): RentACarServis[] {
    let filteredRentACar = new Array<RentACarServis>();
    for (const item of allRentACar) {
      let addAirCompany = true;
      for (const filterParam of filterParams) {
        if (this.checkNazivFilter(item, filterParam)) {
          addAirCompany = false;
            break;
        }
        /*
        if (this.checkVremeFilter(item, filterParam)) {
          addAirCompany = false;
          break;
        }*/
      }

      if (addAirCompany)
      filteredRentACar.push(item);
    }

    return filteredRentACar;
  }

  checkNazivFilter(rent: RentACarServis, filterParam: AbstractFilterParam): boolean {
    //console.log(filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'nazivFilter' && !rent.naziv.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase()));
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'nazivFilter' && !rent.naziv.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkVremeFilter(rent: RentACarServis, filterParam: AbstractFilterParam): boolean {
    //return filterParam instanceof NumberFilterParam && filterParam.getFilterParamName() === 'vremeFilter' && (aircompany.cenaKarte > filterParam.getFilterParamValue());
    return true;
  }

  ucitajAdmineRent()
  {
    return this.http.get('https://localhost:44308/api' + '/ApplicationUser/GetAdminRent');
  }

  ucitajRentACarServise()
  {
    let allRentACarServis = new Array<RentACarServis>();

    var array = this.http.get<RentACarServis[]>(this.BaseURI + '/RentACarServis');

    //this.http.get(this.BaseURI + '/RentACarServis').pipe(map((res: RentACarServis) => res.json()));

    //allRentACarServis = Observable.create(observer => { this.http.get(this.BaseURI + '/RentACarServis').map(response => response.json(); })

    return array;

  }

  ucitajRentACarServiseOdobrene()
  {
    var array = this.http.get<RentACarServis[]>(this.BaseURI + '/RentACarServis/GetRentACarServisiOdobreni');
    return array;

  }

  ucitajOdredjeniRentACarServis(id:Number)
  {
     return this.http.get<RentACarServis>(this.BaseURI + '/RentACarServis/'+id);
  }

  ucitajRentACarServisZaAdmina(id:string)
  {
     return this.http.get<RentACarServis>(this.BaseURI + '/RentACarServis/GetRentACarServisiZaAdmina/'+id);
  }
  
  rentACarPosleAvio(lokacija:string,datum:string)
  {
    var body = {
      Lokacija: lokacija,
      Datum: datum,
    };
    //console.log(body);
    return this.http.put(this.BaseURI + '/RentACarServis/GetRentACarServisPosleAvio', body);
  }

  mesecniIzvestaj(id:Number)
  {
     return this.http.get<Number>(this.BaseURI + '/RentACarServis/GetMesecniIzvestaj/'+id);
  }

  nedeljniIzvestaj(id:Number)
  {
    return this.http.get<Number>(this.BaseURI + '/RentACarServis/GetNedeljniIzvestaj/'+id);
  }

  dnevniIzvestaj(id:Number)
  {
    return this.http.get<Number>(this.BaseURI + '/RentACarServis/GetDnevniIzvestaj/'+id);
  }

  odrediPrihode(id:Number,datumOd:String,DatumDo:string)
  {
    var body = {
      IdRentACar: +id,
      PocetniDatum: datumOd,
      KrajnjiDatum: DatumDo
    };

    console.log(body);
    return this.http.post(this.BaseURI + '/RentACarServis/Prihodi', body);
  }
  
}
