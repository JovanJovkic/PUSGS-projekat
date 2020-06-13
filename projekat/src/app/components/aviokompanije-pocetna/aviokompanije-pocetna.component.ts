import { Component, OnInit } from '@angular/core';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-aviokompanije-pocetna',
  templateUrl: './aviokompanije-pocetna.component.html',
  styleUrls: ['./aviokompanije-pocetna.component.css']
})
export class AviokompanijePocetnaComponent implements OnInit {

  aviokompanijePocetnaComponent : FormGroup

  allAirCompanies: Array<AirCompanies>;
  filteredAirCompanies: Array<AirCompanies>;
  


  constructor(private aircompanyService: AircompaniesService, private destinacijaService: DestinacijaService) { 
    this.allAirCompanies = this.aircompanyService.loadAirCompanies();
    //this.filteredAirCompanies = this.allAirCompanies;
    this.allAirCompanies = new Array<AirCompanies>();   
  }

  ngOnInit(): void {
    this.loadAirCompaniesService();
    this.filteredAirCompanies = this.allAirCompanies;
  }

  filterAirCompanies(): void {
    //this.filteredCars = new Array<Car>();
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("airCompanyBrandFilter")) {
      filterParams.push(this.addAirCompanyBrandFilterParam());
    }
    if (this.getFilterFieldValue("airCompanyMaxPerDayPriceFilter")) {
      filterParams.push(this.addAirCompanyMaxPerDayPriceFilterParam());
    }

    this.filteredAirCompanies = this.aircompanyService.filterAirCompanies(this.allAirCompanies, filterParams);
  }

  resetFilter(): void {
    this.filteredAirCompanies = this.allAirCompanies;
  }

  addAirCompanyBrandFilterParam(): ReturnType<any> {
    return new StringFilterParam("airCompanyBrandFilter", this.getFilterFieldValue("airCompanyBrandFilter"));
  }

  addAirCompanyMaxPerDayPriceFilterParam(): ReturnType<any> {
    return new NumberFilterParam("airCompanyMaxPerDayPriceFilter", +this.getFilterFieldValue("airCompanyMaxPerDayPriceFilter"));
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  loadAirCompaniesService() {
    this.aircompanyService.ucitajAirCompanies().subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          
          const ak = new AirCompanies(element.id, element.nazivAvioKompanije, element.adresa, element.promotivniOpis, element.destNaKojimPosluje
            , element.letovi, element.spisakKarataSaPopustomZaBrzuRez, element.konfigSegMesta, element.cenovnik, element.infoPrtljag, element.admin);
          console.log(element);
          if(ak.destinacija.length!=0)
          {
            console.log(ak.destinacija);
            ak.destinacija=element.destinacija;
          }
         
          this.allAirCompanies.push(ak);
        });

        this.loadDestinacije();

      } else {
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    );
  }

  loadDestinacije()
  {
    this.destinacijaService.ucitajDestinacija().subscribe(
      (res: any) => {
        res.forEach(element => {

          console.log(element);
          this.allAirCompanies.forEach(item => {

            if(element.AirCompanyID == item.id)
            {
              item.destinacija.push(element);
            }

          });

        });
      }
      );
  }

}