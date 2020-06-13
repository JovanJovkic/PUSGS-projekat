import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar/rentacar';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'

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
    /*
    let filterParams = new Array<AbstractFilterParam>();
    if (this.getFilterFieldValue("nazivFilter")) {
      filterParams.push(this.addnazivFilterParam());
    }
    if (this.getFilterFieldValue("vremeFilter")) {
      filterParams.push(this.addvremeFilterParam());
    }

    this.filteredRentACarServis = this.rentACarService.filterRentCarServise(this.allRentACarServis, filterParams);*/

    let nazivFilter = (<HTMLInputElement> document.getElementById("nazivFilter")).value;
    let vremeFilterOd = (<HTMLInputElement> document.getElementById("vremeFilterOd")).value;
    let vremeFilterDo = (<HTMLInputElement> document.getElementById("vremeFilterDo")).value;

    this.rentACarService.pretrazi(nazivFilter,vremeFilterOd,vremeFilterDo).subscribe(
      (res: any) => {
        this.filteredRentACarServis = new Array<RentACarServis>();
        res.forEach(element => {

          console.log(element);
          this.filteredRentACarServis.push(new RentACarServis(element.id,element.naziv,element.adresa,element.promotivniOpis, 4,element.admin));
        });
      }
      );


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
    this.rentACarService.ucitajRentACarServiseOdobrene().subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          
          const ak = new RentACarServis(element.id,element.naziv,element.adresa,element.promotivniOpis, element.ocena,element.admin);
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
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [], label: 'Broj rezervacija' }
  ];

  public chartLabels: Array<any> = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar','Novembar','Decembar'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  
}