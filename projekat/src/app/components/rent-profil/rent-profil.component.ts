import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar/rentacar';
import { ActivatedRoute } from '@angular/router';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';
import { RezervacijaVozila } from 'src/app/entities/rezervacijaVozila/rezervacijaVozila';
import { RezervacijaVozilaService } from 'src/app/services/rezervacijaVozila/rezervacija-vozila.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment }  from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import { BrzaRezervacijaVozila } from 'src/app/entities/brzaRezervacijaVozila/brzaRezervacijaVozila';
import { BrzaRezervacijaVozilaService } from 'src/app/services/brzaRezervacijaVozila/brza-rezervacija-vozila.service';

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

  rezervacija:RezervacijaVozila;
  uloga = environment.uloga;

  brzeRez: Array<BrzaRezervacijaVozila>;
  
  constructor(private rentACarServis: RentACarService,private route: ActivatedRoute,private voziloServis:VoziloService, private rezervacijaServis:RezervacijaVozilaService, private fb: FormBuilder, private brzeRezService:BrzaRezervacijaVozilaService) { 
    this.allProfiles = new Array<RentACarServis>();
    route.params.subscribe(params => { this.id = params['id']; });
    this.profil=new RentACarServis(0,"","","",0,"");
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

  Getuloga(){
    return NavbarComponent.uloga
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

  pretragaVozila():void{
    let MestoPreFilter = (<HTMLInputElement> document.getElementById("MestoPreFilter")).value;
    let DatumPreFilter = (<HTMLInputElement> document.getElementById("DatumPreFilter")).value;
    let TipVozilaFilter = (<HTMLInputElement> document.getElementById("TipVozilaFilter")).value;
    let MestoVraFilter = (<HTMLInputElement> document.getElementById("MestoVraFilter")).value;
    let DatumVraFilter = (<HTMLInputElement> document.getElementById("DatumVraFilter")).value;
    let BrojPutnikaFilter = (<HTMLInputElement> document.getElementById("BrojPutnikaFilter")).value;
    let CenaOdFilter = (<HTMLInputElement> document.getElementById("CenaOdFilter")).value;
    let CenaDoFilter = (<HTMLInputElement> document.getElementById("CenaDoFilter")).value;

    var id = this.profil.id;

    this.rezervacija = new RezervacijaVozila(1,this.profil.id,0,"",0,DatumPreFilter,DatumVraFilter,null);

    this.voziloServis.pretraziVozila(id,MestoPreFilter,DatumPreFilter,TipVozilaFilter,MestoVraFilter,DatumVraFilter,+BrojPutnikaFilter,+CenaOdFilter,+CenaDoFilter).subscribe(
      (res: any) => {
        if (res != null ) {
          this.filteredVozila = new Array<Vozilo>();
         res.forEach(element => {
            this.filteredVozila.push(element);
         });
         
        }
      }
    );
  }

  loadRentServis() {
    this.rentACarServis.ucitajOdredjeniRentACarServis(this.id).subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        //temp.forEach(element => {
          
          const ak = new RentACarServis(temp.id,temp.naziv,temp.adresa,temp.promotivniOpis, temp.ocena, temp.admin);
          console.log(temp);
          
          if(temp.vozila!=null)
          {
            if(temp.vozila.length!=0)
            {
              console.log(ak.vozila);
              ak.vozila=temp.vozila;
             // this.filteredVozila=temp.vozila;
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
          //this.filteredVozila=this.profil.vozila;
      }
      );
  }

  rezervisi(vozilo:Vozilo):void{ 
    this.rezervacija.idVozila = vozilo.id;
    this.rezervacija.vozilo = vozilo;
    this.rezervacija.idKlijenta = localStorage.getItem('userName');
    this.rezervacijaServis.rezervisiVozilo(this.rezervacija).subscribe(
      (res: any) => {
       /* res.forEach(element => {
              
            
          });*/
          console.log(res);
          alert("Uspesno ste rezervisali vozilo!");
      },
      err => {
        if (err.status == 400)
        {
          alert("Doslo je do konflikta, osvezite podatke i probajte ponovo!");
        }
      }
      );
  }

  formModel = this.fb.group({
    MestoPreFilter: ['',Validators.required],
    DatumPreFilter: ['',Validators.required],
    TipVozilaFilter: ['',Validators.required],
    MestoVraFilter: ['',Validators.required],
    DatumVraFilter: ['',Validators.required],
    BrojPutnikaFilter: ['',Validators.required],
    CenaOdFilter: [''],
    CenaDoFilter: ['']
  });

  brzeRezervacije():void{
    this.brzeRezService.getBrzaRezZaRent(this.profil.id).subscribe(
      (res: any) => {
        this.brzeRez = new Array<BrzaRezervacijaVozila>();
        res.forEach(element => {
              console.log('e');
              this.brzeRez.push(element);
              console.log(this.brzeRez);
          });
          //this.filteredVozila=this.profil.vozila;
      }
      );
  }

  RezervisiBrzuRezervaciju(rez:BrzaRezervacijaVozila):void{
    this.brzeRezService.rezervisiVoziloBrzo(rez).subscribe(
      (res: any) => {
          console.log(res);
          alert("Uspesno ste rezervisali vozilo!");
      },
      err => {
        if (err.status == 400)
        {
          alert("Doslo je do konflikta, osvezite podatke i probajte ponovo!");
        }
      }
      );
  }


}
