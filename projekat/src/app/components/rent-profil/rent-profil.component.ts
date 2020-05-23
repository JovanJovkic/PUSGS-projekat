import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar/rentacar';
import { ActivatedRoute } from '@angular/router';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';

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
  
  constructor(private rentACarServis: RentACarService,private route: ActivatedRoute,private voziloServis:VoziloService) { 
    this.allProfiles = new Array<RentACarServis>();
    route.params.subscribe(params => { this.id = params['id']; });
    this.profil=new RentACarServis(0,"","","",0);
  }

  ngOnInit(): void {
    //this.loadRentProfile();
    this.loadRentServis();
  }

  /*
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
  }*/

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

  loadRentServis() {
    this.rentACarServis.ucitajOdredjeniRentACarServis(this.id).subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        //temp.forEach(element => {
          
          const ak = new RentACarServis(temp.id,temp.naziv,temp.adresa,temp.promotivniOpis, 4);
          console.log(temp);
          
          if(temp.vozila!=null)
          {
            if(temp.vozila.length!=0)
            {
              console.log(ak.vozila);
              ak.vozila=temp.vozila;
            }
          }
         
          this.profil=ak;
       // });

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
    this.voziloServis.ucitajVozilaZaRentACarOdredjeni(this.id).subscribe(
      (res: any) => {
        res.forEach(element => {
              this.profil.vozila.push(element);
          });
      }
      );
  }

}
