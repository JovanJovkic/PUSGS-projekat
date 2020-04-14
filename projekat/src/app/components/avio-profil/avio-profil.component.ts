import { Component, OnInit } from '@angular/core';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { ActivatedRoute } from '@angular/router';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';

@Component({
  selector: 'app-avio-profil',
  templateUrl: './avio-profil.component.html',
  styleUrls: ['./avio-profil.component.css']
})
export class AvioProfilComponent implements OnInit {

  allProfiles: Array<AirCompanies>;
  profil:AirCompanies;
  id: number;

  allDestinacija:Array<Destinacija>;
  filteredDestinacija:Array<Destinacija>;
  
  constructor(private airCompaniesServis: AircompaniesService,private route: ActivatedRoute) { 
    this.allProfiles = new Array<AirCompanies>();
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.loadAvioCompanies();
  }

  loadAvioCompanies(): void {
    this.allProfiles = this.airCompaniesServis.loadAirCompanies();
    this.allProfiles.forEach(element => {
      if(element.id==this.id)
      {
        this.profil=element;
        this.allDestinacija = this.profil.destinacija;
        this.filteredDestinacija = this.allDestinacija;
      }
    });
  }
/*
  filterDestinacija(): void {
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("MestoPreFilter")) {
      filterParams.push(this.addMestoPreFilterParam());
    }
    if (this.getFilterFieldValue("DatumPreFilter")) {
      filterParams.push(this.addDatumPreFilterParam());
    }
    if (this.getFilterFieldValue("MestoVraFilter")) {
      filterParams.push(this.addMestoVraFilterParam());
    }
    if (this.getFilterFieldValue("DatumVraFilter")) {
      filterParams.push(this.addDatumVraFilterParam());
    }
    if (this.getFilterFieldValue("TipVozilaFilter")) {
      filterParams.push(this.addTipVozilaFilterParam());
    }
    if (this.getFilterFieldValue("BrojPutnikaFilter")) {
      filterParams.push(this.addBrojPutnikaFilterParam());
    }
    if (this.getFilterFieldValue("CenaOdFilter")) {
      filterParams.push(this.addCenaOdFilterParam());
    }
    if (this.getFilterFieldValue("CenaDoFilter")) {
      filterParams.push(this.addCenaDoFilterParam());
    }

    //this.filterVozila = this.rentACarService.filterRentCarServise(this.allRentACarServis, filterParams);
  }


  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  addMestoPreFilterParam(): ReturnType<any> {
    return new StringFilterParam("MestoPreFilter", this.getFilterFieldValue("MestoPreFilter"));
  }

  addDatumPreFilterParam(): ReturnType<any> {
    return new NumberFilterParam("DatumPreFilter", +this.getFilterFieldValue("DatumPreFilter"));
  }

  addMestoVraFilterParam(): ReturnType<any> {
    return new StringFilterParam("MestoVraFilter", this.getFilterFieldValue("MestoVraFilter"));
  }

  addDatumVraFilterParam(): ReturnType<any> {
    return new NumberFilterParam("DatumVraFilter", +this.getFilterFieldValue("DatumVraFilter"));
  }

  addTipVozilaFilterParam(): ReturnType<any> {
    return new StringFilterParam("TipVozilaFilter", this.getFilterFieldValue("TipVozilaFilter"));
  }

  addBrojPutnikaFilterParam(): ReturnType<any> {
    return new NumberFilterParam("BrojPutnikaFilter", +this.getFilterFieldValue("BrojPutnikaFilter"));
  }

  addCenaOdFilterParam(): ReturnType<any> {
    return new StringFilterParam("CenaOdFilter", this.getFilterFieldValue("CenaOdFilter"));
  }

  addCenaDoFilterParam(): ReturnType<any> {
    return new NumberFilterParam("CenaDoFilter", +this.getFilterFieldValue("CenaDoFilter"));
  }
*/
  resetFilter(): void {
    this.filteredDestinacija = this.allDestinacija;
  }

}
