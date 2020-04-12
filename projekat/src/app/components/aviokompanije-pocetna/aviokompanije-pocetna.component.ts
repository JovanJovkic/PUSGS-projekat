import { Component, OnInit } from '@angular/core';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aviokompanije-pocetna',
  templateUrl: './aviokompanije-pocetna.component.html',
  styleUrls: ['./aviokompanije-pocetna.component.css']
})
export class AviokompanijePocetnaComponent implements OnInit {

  aviokompanijePocetnaComponent : FormGroup

  allAirCompanies: Array<AirCompanies>;
  filteredAirCompanies: Array<AirCompanies>;


  constructor(private aircompanyService: AircompaniesService) { 
    this.allAirCompanies = this.aircompanyService.loadAirCompanies();
    this.filteredAirCompanies = this.allAirCompanies;
  }

  ngOnInit(): void {
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

}