import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar/rentacar';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';

@Component({
  selector: 'app-rent-pocetna',
  templateUrl: './rent-pocetna.component.html',
  styleUrls: ['./rent-pocetna.component.css']
})
export class RentPocetnaComponent implements OnInit {

  allRentACarServis: Array<RentACarServis>;
  filteredRentACarServis: Array<RentACarServis>;

  constructor(private rentACarService: RentACarService,private voziloService: VoziloService) { 
    this.allRentACarServis = new Array<RentACarServis>();    
  }

  ngOnInit(): void {
    this.loadRentServis();
    this.filteredRentACarServis=this.allRentACarServis;
  }

  /*
  loadRentServis(): void {
    this.allRentACarServis = this.rentACarService.loadRentACar();
    this.filteredRentACarServis = this.allRentACarServis;
  }*/

  filterRentACar(): void {
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("nazivFilter")) {
      filterParams.push(this.addnazivFilterParam());
    }
    if (this.getFilterFieldValue("vremeFilter")) {
      filterParams.push(this.addvremeFilterParam());
    }

    this.filteredRentACarServis = this.rentACarService.filterRentCarServise(this.allRentACarServis, filterParams);
  }

  resetFilter(): void {
    this.filteredRentACarServis = this.allRentACarServis;
  }

  getFilterFieldValue(filterFieldId: string) {
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }

  addnazivFilterParam(): ReturnType<any> {
    return new StringFilterParam("nazivFilter", this.getFilterFieldValue("nazivFilter"));
  }

  addvremeFilterParam(): ReturnType<any> {
    return new NumberFilterParam("vremeFilter", +this.getFilterFieldValue("vremeFilter"));
  }

  loadRentServis() {
    this.rentACarService.ucitajRentACarServise().subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          
          const ak = new RentACarServis(element.id,element.naziv,element.adresa,element.promotivniOpis, 4);
          console.log(element);
          if(ak.vozila.length!=0)
          {
            console.log(ak.vozila);
            ak.vozila=element.vozila;
          }
         
          this.allRentACarServis.push(ak);
        });

        this.loadVozila();

      } else {
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    );
  }

  loadVozila()
  {
    this.voziloService.ucitajVozila().subscribe(
      (res: any) => {
        res.forEach(element => {

          console.log(element);
          this.allRentACarServis.forEach(item => {

            if(element.rentACarServisID == item.id)
            {
              item.vozila.push(element);
            }

          });

        });
      }
      );
  }

}
