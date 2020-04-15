import { Injectable } from '@angular/core';
import { Korisnik } from 'src/app/entities/korisnik/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikServiceService {

  constructor() { }
  loadKorisnik() {
    console.log('Učitavanje podataka o korisniku...');
    return this.mockedAvio();
  }


  mockedAvio(): Array<Korisnik> {
    let allKorisnik = new Array<Korisnik>();

    const korisnik1 = new Korisnik('admin@uns.ac.rs', 'admin', 'Petar', 'Petrović', 'Novi Sad', '021 433-377','5 - prijatelja');

    allKorisnik.push(korisnik1);

    return allKorisnik;
  }
}