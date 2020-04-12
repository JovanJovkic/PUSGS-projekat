import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar';
import { ActivatedRoute } from '@angular/router';
import { Vozilo } from 'src/app/entities/vozilo';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';

@Component({
  selector: 'app-rent-profil',
  templateUrl: './rent-profil.component.html',
  styleUrls: ['./rent-profil.component.css']
})
export class RentProfilComponent implements OnInit {

  allProfiles: Array<RentACarServis>;
  profil:RentACarServis;
  id: number;

  allVozila:Array<Vozilo>;
  filteredVozila:Array<Vozilo>;
  
  constructor(private rentACarServis: RentACarService,private route: ActivatedRoute) { 
    this.allProfiles = new Array<RentACarServis>();
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.loadRentProfile();
  }

  loadRentProfile(): void {
    this.allProfiles = this.rentACarServis.loadRentACar();
    this.allProfiles.forEach(element => {
      if(element.id==this.id)
      {
        this.profil=element;
        this.allVozila = this.profil.vozila;
        this.filteredVozila = this.allVozila;
      }
    });
  }

  filterVozila(): void {
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

  resetFilter(): void {
    this.filteredVozila = this.allVozila;
  }

}
