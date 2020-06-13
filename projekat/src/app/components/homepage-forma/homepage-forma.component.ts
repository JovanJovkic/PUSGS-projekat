import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';
import { PromeniLozinkuComponent } from '../promeni-lozinku/promeni-lozinku.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';
import { RezervacijaVozilaService } from 'src/app/services/rezervacijaVozila/rezervacija-vozila.service';
import { RezervacijaDestinacijeService } from 'src/app/services/rezervacijaDestinacije/rezervacija-destinacije.service';
import { RezervacijaVozila } from 'src/app/entities/rezervacijaVozila/rezervacijaVozila';
import { RezervacijaDestinacije } from 'src/app/entities/rezervacijaDestinacije/rezervacijaDestinacije';


@Component({
  selector: 'app-homepage-forma',
  templateUrl: './homepage-forma.component.html',
  styleUrls: ['./homepage-forma.component.css']
})
export class HomepageFormaComponent implements OnInit {

  homepageForma : FormGroup;
  currentRate = 8;

  static  uloga = environment.uloga;

  izmena:any;

  rezervacijeVozila:Array<RezervacijaVozila>;
  rezervacijeDestinacija:Array<RezervacijaDestinacije>;

  rezervacijaVozilaZaOcenjivanje:RezervacijaVozila;
  rezervacijaDestinacijaZaOcenjivanje:RezervacijaDestinacije;

  constructor(private servisRezervacijaVozila:RezervacijaVozilaService,private servisRezervacijaDest:RezervacijaDestinacijeService ) { }

  ngOnInit(): void {
    this.izmena = localStorage.getItem("sifraIzmenjena");
    this.getSvojaVozila();
    this.getSvojeDestinacije();
  }

  get Getuloga() {
    return NavbarComponent.uloga;
  }

  //metoda za uzimenja samo tvojih rezervacija vozila
  getSvojaVozila():void
  {
    this.servisRezervacijaVozila.getRezervacijeZaOdredjenog(localStorage.getItem('userName')).subscribe(
      (res: any) => {
        //console.log(res);
          this.rezervacijeVozila = new Array<RezervacijaVozila>();

          res.forEach(element => {
            this.rezervacijeVozila.push(element);
          });

         // console.log(this.rezervacijeVozila);
      }
      );
  }

  //metoda za uzimanje samo tvojih rezervacija destinacija
  getSvojeDestinacije():void
  {
    this.servisRezervacijaDest.getRezervacijeZaOdredjenog(localStorage.getItem('userName')).subscribe(
      (res: any) => {
        this.rezervacijeDestinacija = new Array<RezervacijaDestinacije>();

        res.forEach(element => {
          this.rezervacijeDestinacija.push(element);
        });
        
        //console.log(this.rezervacijeDestinacija);
      }
      );
  }

  oceniDestinacijuIAvio():void{
    let ocenaDest = (<HTMLInputElement> document.getElementById("ocenaDest")).value;
    let ocenaAvio = (<HTMLInputElement> document.getElementById("ocenaAvio")).value;

    this.servisRezervacijaDest.oceni(this.rezervacijaDestinacijaZaOcenjivanje.id,+ocenaDest,+ocenaAvio).subscribe(
      (res: any) => {

      }
      );
  }


  oceniServisIVozilo():void{
    let cenaServis = (<HTMLInputElement> document.getElementById("cenaServis")).value;
    let cenaVozilo = (<HTMLInputElement> document.getElementById("cenaVozilo")).value;

    this.servisRezervacijaVozila.oceni(this.rezervacijaVozilaZaOcenjivanje.id,+cenaServis,+cenaVozilo).subscribe(
      (res: any) => {

      }
      );
  }

  oceniDestinaciju(rez:RezervacijaDestinacije):void{
    this.rezervacijaDestinacijaZaOcenjivanje=rez;
  }

  oceniVoziloZaRentACar(rez:RezervacijaVozila):void{
    this.rezervacijaVozilaZaOcenjivanje=rez;
  }
}
