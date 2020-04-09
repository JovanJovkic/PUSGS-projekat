import { Injectable } from '@angular/core';
import { RentACarProfil } from '../entities/rentacarProfil';

@Injectable({
  providedIn: 'root'
})
export class RentACarProfilService {

  constructor() { }

  loadRentACarProfil() {
    console.log('Učitavanje rent-a-car servisa profile...');
    return this.mockedRentACarProfil();
  }

  mockedRentACarProfil(): Array<RentACarProfil> {
      let allRentACarServis = new Array<RentACarProfil>();

      const ak5 = new RentACarProfil('Rent a car servis 5', 'Beograd', 'servis za rent-a-car', 4);

      allRentACarServis.push(ak5);
  
      return allRentACarServis;
    }
}
