import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Korisnik } from 'src/app/entities/korisnik/korisnik';
import { AvionService } from 'src/app/services/avion/avion.service';
import { KorisnikServiceService } from 'src/app/services/korisnik-service/korisnik-service.service';
import { UserService } from 'src/app/services/korisnik-service/user.service';

@Component({
  selector: 'app-profil-korisnika',
  templateUrl: './profil-korisnika.component.html',
  styleUrls: ['./profil-korisnika.component.css']
})
export class ProfilKorisnikaComponent implements OnInit {

  korisnikPocetnaForma : FormGroup;

  allKorisnik: Array<Korisnik>;
  korisnikToEdit: Korisnik;
  korisnik:Korisnik;

  constructor(private korisnikService: KorisnikServiceService,private userService:UserService) {
    //alert("Upravo se pozvao konstruktor komponente Avion");
    this.allKorisnik = new Array<Korisnik>();
    this.korisnikToEdit = new Korisnik("", "", "", "", "", "", "");
  }

  ngOnInit(): void {
    this.loadKorisnik();
    //alert("Upravo se pozvala OnInit metoda komponente Avion");
  }

  loadKorisnik(): void {
    //this.allKorisnik = this.korisnikService.loadKorisnik();
    localStorage.getItem("userName");

    this.userService.getUser(localStorage.getItem("userName")).subscribe(
      (res: any) => {
        
              this.korisnik = res;
      }
      );

      
  }

  editKorisnikModal(korisnik: Korisnik): void {
    this.korisnikToEdit = korisnik;
  }

  editKorisnikInfo(): void {
    //let email = (<HTMLInputElement> document.getElementById("email")).value;
    //let lozinka = (<HTMLInputElement> document.getElementById("lozinka")).value;
    let ime = (<HTMLInputElement> document.getElementById("ime")).value;
    let prezime = (<HTMLInputElement> document.getElementById("prezime")).value;
    let grad = (<HTMLInputElement> document.getElementById("grad")).value;
    let telefon = (<HTMLInputElement> document.getElementById("telefon")).value;
    //let prijatelji = (<HTMLInputElement> document.getElementById("prijatelji")).value;

    this.korisnik.ime = ime;
    this.korisnik.prezime = prezime;
    this.korisnik.grad = grad;
    this.korisnik.telefon = telefon;

    //izmeni korisnika
    this.userService.izmeniKorisnika(this.korisnik).subscribe(
      (res: any) => {

      }
      );
  }

  updateKorisnik(email: string, lozinka: string, ime:string, prezime:string, grad:string, telefon: string, prijatelji: string ): void {
    let index = this.allKorisnik.indexOf(this.korisnikToEdit);
    let promena: boolean = false;
    if(email != "")
    {
      this.allKorisnik[index].email = email;
      promena = true;
    }
    if(lozinka != "")
    {
      this.allKorisnik[index].lozinka = lozinka;
      promena = true;
    }
    if(ime != "")
    {
      this.allKorisnik[index].ime = ime;
      promena = true;
    }
    if(prezime != "")
    {
      this.allKorisnik[index].prezime = prezime;
      promena = true;
    }
    if(grad != "")
    {
      this.allKorisnik[index].grad = grad;
      promena = true;
    }
    if(telefon != "")
    {
      this.allKorisnik[index].telefon = telefon;
      promena = true;
    }
    if(prijatelji != "")
    {
      this.allKorisnik[index].prijatelji = prijatelji;
      promena = true;
    }

    if(promena == true)
    {
      alert('Vaša izmena je sačuvana!');
    }
  }

}
