import { Injectable } from '@angular/core';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FilterParam } from 'src/app/entities/filter-param/filter-param';
import { Destinacija } from 'src/app/entities/destinacija/destinacija'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AircompaniesService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  formModel = this.fb.group({
    naziv: [''],
    adresa: [''],
    admin: [''],
  });

  dodaj() {
    var body = {
      NazivAvioKompanije: this.formModel.value.naziv,
      //GradAvioKompanije: this.formModel.value.adresa,
      Adresa: this.formModel.value.adresa,
      Admin: this.formModel.value.admin,
      Odobreno: false
    };
    console.log(body);
    return this.http.post(this.BaseURI + '/AirCompany/AddAviokompanija', body);
  }

  odobri(id:number) {
    console.log(id);
    return this.http.get(this.BaseURI + '/AirCompany/OdobriAirCompany/' + id);
  }

  loadAirCompanies() {
    console.log('Učitavanje avio-kompanija...');
    return this.mockedAirCompanies();
  }

  filterAirCompanies(allCompanies: AirCompanies[], filterParams: AbstractFilterParam[]): AirCompanies[] {
    let filteredAirCompanies = new Array<AirCompanies>();
    for (const aircompany of allCompanies) {
      let addAirCompany = true;
      for (const filterParam of filterParams) {
        if (this.checkAirCompaniesBrandFilter(aircompany, filterParam)) {
          addAirCompany = false;
            console.log(aircompany.nazivAvioKompanije + ' ' + aircompany.adresa + ' ne zadovoljava vrednost polja airCompanyBrandFilter');
            break;
        }

        if (this.checkAirCompaniesMaxPerDayPriceFilter(aircompany, filterParam)) {
          addAirCompany = false;
          console.log(aircompany.nazivAvioKompanije + ' ' + aircompany.adresa + ' ne zadovoljava vrednost polja checkAirCompaniesMaxPerDayPriceFilter');
          break;
        }
      }

      if (addAirCompany)
        filteredAirCompanies.push(aircompany);
    }

    return filteredAirCompanies;
  }

  checkAirCompaniesBrandFilter(aircompany: AirCompanies, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'airCompanyBrandFilter' && !aircompany.nazivAvioKompanije.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkAirCompaniesMaxPerDayPriceFilter(aircompany: AirCompanies, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof NumberFilterParam && filterParam.getFilterParamName() === 'airCompanyMaxPerDayPriceFilter' && (aircompany.id < filterParam.getFilterParamValue());
  }

  mockedAirCompanies(): Array<AirCompanies> {
    let allCompanies = new Array<AirCompanies>();

    //const aircom1 = new AirCompanies(1, 'AirSerbia','Beograd', 'Opis kompanije', 'Pariz, Njujork', 'Letovi', 'Pariz', '1 2 3 4 5', '444 - 1000', 'besplatan rucni prtljag');
    //const aircom2 = new AirCompanies(2, 'QatarAirways', 'Doha', 'Opis kompanije', 'Pariz, Njujork', 'Letovi', 'Pariz', '1 2 3 4 5', '444 - 1000', 'besplatan rucni prtljag');
    //const aircom3 = new AirCompanies(3, 'WizzAir', 'Budapest', 'Opis kompanije', 'Pariz, Njujork', 'Letovi', 'Pariz', '1 2 3 4 5', '444 - 1000', 'besplatan rucni prtljag');
    //const aircom4 = new AirCompanies(4, 'RyanAir', 'Dublin', 'Opis kompanije', 'Pariz, Njujork', 'Letovi', 'Pariz', '1 2 3 4 5', '444 - 1000', 'besplatan rucni prtljag');
    //const aircom5 = new AirCompanies(5, 'Emirates', 'Dubai', 'Opis kompanije', 'Pariz, Njujork', 'Letovi', 'Pariz', '1 2 3 4 5', '444 - 1000', 'besplatan rucni prtljag');
    
    //aircom1.destinacija = this.mockedDestinacija();
    //aircom1.destinacija = this.mockedDestinacija();
    //aircom1.destinacija = this.mockedDestinacija();
    //aircom1.destinacija = this.mockedDestinacija();
    //aircom1.destinacija = this.mockedDestinacija();

    //allCompanies.push(aircom1);
    //allCompanies.push(aircom2);
    //allCompanies.push(aircom3);
    //allCompanies.push(aircom4);
    //allCompanies.push(aircom5);

    return allCompanies;
  }

  mockedDestinacija(): Array<Destinacija> {
    let allDestinacija = new Array<Destinacija>();

    //const dest1 = new Destinacija(1, 'Jerusalim','21.9.2020 13:25', '11.9.2020 10:10', '7h', '2861km', 1, 'Istanbul', '40000.00rsd');
    //const dest2 = new Destinacija(2, 'Ljubljana' ,'4.7.2020 16:45', '30.6.2020 20:20', '4h', '531km', 0, '-', '33000.00rsd');
    //const dest3 = new Destinacija(3, 'Sofija', '16.5.2020 6:55', '11.5.2020 17:05', '3h', '394km', 0, '-', '19000.00rsd');
    //const dest4 = new Destinacija(4, 'Pariz', '26.12.2020 3:20', '20.12.2020 6:30', '6h', '1857km', 1, 'Bratislava', '36000.00rsd')

    //allDestinacija.push(dest1);
    //allDestinacija.push(dest2);
    //allDestinacija.push(dest3);
    //allDestinacija.push(dest4);

    return allDestinacija;
  }

  //loadAirCompany() {
  //  console.log('Učitavanje avio-kompanija...');
  //  return this.mockedAirCompanies();
  //}

  izmeniAirCompany(servis: AirCompanies)
  {
    return this.http.post(this.BaseURI + '/AirCompany/UpdateAviokompanija', servis);
  }

  ucitajAdmineAvio()
  {
    return this.http.get('https://localhost:44308/api' + '/ApplicationUser/GetAdminAvio');
  }

  ucitajAirCompanies()
  {
    let allAirCompanies = new Array<AirCompanies>();

    var array = this.http.get<AirCompanies[]>(this.BaseURI + '/AirCompany');

    return array;

  }

  ucitajOdredjenuAirCompany(id:Number)
  {
     return this.http.get<AirCompanies>(this.BaseURI + '/AirCompany/'+id);
  }

  ucitajAirCompanyOdobrene()
  {
    var array = this.http.get<AirCompanies[]>(this.BaseURI + '/AirCompany/GetAirComapnyOdobrene');
    return array;

  }

  pretrazi(naziv: string, datumOd:string, datumDo:string) {
    var body = {
      Naziv: naziv,
      DatumOd: datumOd,
      DatumDo: datumDo
    };
    console.log(body);
    return this.http.put(this.BaseURI + '/AirComapny/PretragaAirCompany', body);
  }

  ucitajAirComapnyZaAdmina(id:string)
  {
     return this.http.get<AirCompanies>(this.BaseURI + '/AirComapny/GetAirComapnyZaAdmina/'+id);
  }
  
}

