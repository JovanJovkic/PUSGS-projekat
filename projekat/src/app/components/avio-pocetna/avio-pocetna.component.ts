import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Avion } from 'src/app/entities/avion/avion';
import { AvionService } from 'src/app/services/avion/avion.service';

@Component({
  selector: 'app-avio-pocetna',
  templateUrl: './avio-pocetna.component.html',
  styleUrls: ['./avio-pocetna.component.css']
})
export class AvioPocetnaComponent implements OnInit {

  avioPocetnaForma : FormGroup;

  allAvion: Array<Avion>;
  avionToEdit: Avion;

  constructor(private avionService: AvionService) {
    //alert("Upravo se pozvao konstruktor komponente Avion");
    this.allAvion = new Array<Avion>();
    this.avionToEdit = new Avion("", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {
    //alert("Upravo se pozvala OnInit metoda komponente Avion");
  }

  loadAvion(): void {
    this.allAvion = this.avionService.loadAvion();
  }

  editAvioModal(avion: Avion): void {
    this.avionToEdit = avion;
  }

  editAvioInfo(): void {
    let nazivAvioKompanije = (<HTMLInputElement> document.getElementById("nazivAvioKompanije")).value;
    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    let promotivniOpis = (<HTMLInputElement> document.getElementById("promotivniOpis")).value;
    let destNaKojimPosluje = (<HTMLInputElement> document.getElementById("destNaKojimPosluje")).value;
    let letovi = (<HTMLInputElement> document.getElementById("letovi")).value;
    let spisakKarataSaPopustomZaBrzuRez = (<HTMLInputElement> document.getElementById("spisakKarataSaPopustomZaBrzuRez")).value;
    let konfigSegMesta = (<HTMLInputElement> document.getElementById("konfigSegMesta")).value;
    let cenovnik = (<HTMLInputElement> document.getElementById("cenovnik")).value;
    let infoPrtljag = (<HTMLInputElement> document.getElementById("infoPrtljag")).value;
    this.updateAvio(nazivAvioKompanije, adresa, promotivniOpis, letovi, destNaKojimPosluje, spisakKarataSaPopustomZaBrzuRez, konfigSegMesta, cenovnik, infoPrtljag);
  }

  updateAvio(nazivAvioKompanije: string, adresa: string, promotivniOpis:string, destNaKojimPosluje:string, letovi:string, spisakKarataSaPopustomZaBrzuRez: string, konfigSegMesta:string, cenovnik: string, infoPrtljag: string  ): void {
    let index = this.allAvion.indexOf(this.avionToEdit);
    this.allAvion[index].nazivAvioKompanije = nazivAvioKompanije;
    this.allAvion[index].adresa = adresa;
    this.allAvion[index].promotivniOpis = promotivniOpis;
    this.allAvion[index].destNaKojimPosluje = destNaKojimPosluje;
    this.allAvion[index].letovi = letovi;
    this.allAvion[index].spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
    this.allAvion[index].konfigSegMesta = konfigSegMesta;
    this.allAvion[index].cenovnik = cenovnik;
    this.allAvion[index].infoPrtljag = infoPrtljag;
    alert('Vaša izmena je sačuvana!');
  }

}
