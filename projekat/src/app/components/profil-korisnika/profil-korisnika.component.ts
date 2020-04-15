import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Korisnik } from 'src/app/entities/korisnik/korisnik';
import { AvionService } from 'src/app/services/avion.service';
import { KorisnikServiceService } from 'src/app/services/korisnik-service/korisnik-service.service';

@Component({
  selector: 'app-profil-korisnika',
  templateUrl: './profil-korisnika.component.html',
  styleUrls: ['./profil-korisnika.component.css']
})
export class ProfilKorisnikaComponent implements OnInit {

  korisnikPocetnaForma : FormGroup;

  allKorisnik: Array<Korisnik>;
  korisnikToEdit: Korisnik;

  constructor(private korisnikService: KorisnikServiceService) {
    //alert("Upravo se pozvao konstruktor komponente Avion");
    this.allKorisnik = new Array<Korisnik>();
    this.korisnikToEdit = new Korisnik("", "", "", "", "", "", "");
  }

  ngOnInit(): void {
    //alert("Upravo se pozvala OnInit metoda komponente Avion");
  }

  loadKorisnik(): void {
    this.allKorisnik = this.korisnikService.loadKorisnik();
  }

  editKorisnikModal(korisnik: Korisnik): void {
    this.korisnikToEdit = korisnik;
  }

  editKorisnikInfo(): void {
    let email = (<HTMLInputElement> document.getElementById("email")).value;
    let lozinka = (<HTMLInputElement> document.getElementById("lozinka")).value;
    let ime = (<HTMLInputElement> document.getElementById("ime")).value;
    let prezime = (<HTMLInputElement> document.getElementById("prezime")).value;
    let grad = (<HTMLInputElement> document.getElementById("grad")).value;
    let telefon = (<HTMLInputElement> document.getElementById("telefon")).value;
    let prijatelji = (<HTMLInputElement> document.getElementById("prijatelji")).value;
    this.updateKorisnik(email, lozinka, ime, prezime, grad, telefon, prijatelji);
  }

  updateKorisnik(email: string, lozinka: string, ime:string, prezime:string, grad:string, telefon: string, prijatelji: string ): void {
    let index = this.allKorisnik.indexOf(this.korisnikToEdit);
    this.allKorisnik[index].email = email;
    this.allKorisnik[index].lozinka = lozinka;
    this.allKorisnik[index].ime = ime;
    this.allKorisnik[index].prezime = prezime;
    this.allKorisnik[index].grad = grad;
    this.allKorisnik[index].telefon = telefon;
    this.allKorisnik[index].prijatelji = prijatelji;
    alert('Vaša izmena je sačuvana!');
  }

}
