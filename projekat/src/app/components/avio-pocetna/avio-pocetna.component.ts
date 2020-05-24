import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Avion } from 'src/app/entities/avion/avion';
//import { AvionService } from 'src/app/services/avion/avion.service';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies'; 

@Component({
  selector: 'app-avio-pocetna',
  templateUrl: './avio-pocetna.component.html',
  styleUrls: ['./avio-pocetna.component.css']
})
export class AvioPocetnaComponent implements OnInit {

  avioPocetnaForma : FormGroup;

  allAvion: Array<AirCompanies>;
  avionToEdit: AirCompanies;
  destinacijaToEdit: AirCompanies;

  constructor(private avionService: AircompaniesService, private destinacijaService: DestinacijaService) {
    //alert("Upravo se pozvao konstruktor komponente Avion");
    this.allAvion = new Array<AirCompanies>();
    //this.avionToEdit = new Avion("", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {
    this.loadAvion();
    //alert("Upravo se pozvala OnInit metoda komponente Avion");
  }

  loadAvion(): void {
    this.allAvion = this.avionService.loadAirCompanies();
  }

  editAvioModal(avion: AirCompanies): void {
    this.avionToEdit = avion;
  }

  editAvioInfo(): void {
    let nazivAvioKompanije = (<HTMLInputElement> document.getElementById("nazivAvioKompanije")).value;
    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    let promotivniOpis = (<HTMLInputElement> document.getElementById("promotivniOpis")).value;
    let destNaKojimPosluje = (<HTMLInputElement> document.getElementById("destNaKojimPosluje")).value;
    //let letovi = (<HTMLInputElement> document.getElementById("letovi")).value;
    let spisakKarataSaPopustomZaBrzuRez = (<HTMLInputElement> document.getElementById("spisakKarataSaPopustomZaBrzuRez")).value;
    let konfigSegMesta = (<HTMLInputElement> document.getElementById("konfigSegMesta")).value;
    let cenovnik = (<HTMLInputElement> document.getElementById("cenovnik")).value;
    let infoPrtljag = (<HTMLInputElement> document.getElementById("infoPrtljag")).value;
    //this.updateAvio(nazivAvioKompanije, adresa, promotivniOpis, letovi, destNaKojimPosluje, spisakKarataSaPopustomZaBrzuRez, konfigSegMesta, cenovnik, infoPrtljag);

    this.avionToEdit.nazivAvioKompanije = nazivAvioKompanije;
    this.avionToEdit.adresa = adresa;
    this.avionToEdit.promotivniOpis = promotivniOpis;
    this.avionToEdit.destNaKojimPosluje = destNaKojimPosluje;
    this.avionToEdit.spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
    this.avionToEdit.konfigSegMesta = konfigSegMesta;
    this.avionToEdit.cenovnik = cenovnik;
    this.avionToEdit.infoPrtljag = infoPrtljag;

    this.avionService.izmeniAirCompany(this.avionToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.avionToEdit = null;

  }

  dodajDestinacijuZaAviokompaniju(kompanija: AircompaniesService): void {
    this.destinacijaToEdit = kompanija;
  }

  /*
  updateAvio(nazivAvioKompanije: string, adresa: string, promotivniOpis:string, destNaKojimPosluje:string, letovi:string, spisakKarataSaPopustomZaBrzuRez: string, konfigSegMesta:string, cenovnik: string, infoPrtljag: string  ): void {
    let index = this.allAvion.indexOf(this.avionToEdit);
    let promena: boolean = false;
    if(nazivAvioKompanije != "")
    {
      this.allAvion[index].nazivAvioKompanije = nazivAvioKompanije;
      promena = true;
    }
    if(adresa != "")
    {
      this.allAvion[index].adresa = adresa;
      promena = true;
    }
    if(promotivniOpis != "")
    {
      this.allAvion[index].promotivniOpis = promotivniOpis;
      promena = true;
    }
    if(destNaKojimPosluje != "")
    {
      this.allAvion[index].destNaKojimPosluje = destNaKojimPosluje;
      promena = true;
    }
    if(letovi != "")
    {
      this.allAvion[index].letovi = letovi;
      promena = true;
    }
    if(spisakKarataSaPopustomZaBrzuRez != "")
    {
      this.allAvion[index].spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
      promena = true;
    }
    if(konfigSegMesta != "")
    {
      this.allAvion[index].konfigSegMesta = konfigSegMesta;
      promena = true;
    }
    if(cenovnik != "")
    {
      this.allAvion[index].cenovnik = cenovnik;
      promena = true;
    }
    if(infoPrtljag != "")
    {
      this.allAvion[index].infoPrtljag = infoPrtljag;
      promena = true;
    }
    
    if(promena == true)
    {
      alert('Vaša izmena je sačuvana!');
    }
  }
  */

}
