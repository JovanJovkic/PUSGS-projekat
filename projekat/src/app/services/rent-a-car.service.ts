import { Injectable } from '@angular/core';
import { RentACarServis } from '../entities/rentacar';

@Injectable({
  providedIn: 'root'
})
export class RentACarService {

  constructor() { }

  loadRentACar() {
    console.log('Učitavanje rent-a-car servisa...');
    return this.mockedRentACar();
  }


  mockedRentACar(): Array<RentACarServis> {
    let allRentACarServis = new Array<RentACarServis>();

    const ak1 = new RentACarServis('Rent a car servis 1', 'Novi Beograd', 'servis za rent-a-car', 5);
    const ak2 = new RentACarServis('Rent a car servis 2', 'Novi Sad', 'servis za rent-a-car', 5);
    const ak3 = new RentACarServis('Rent a car servis 3', 'Loznica', 'servis za rent-a-car', 3);
    const ak4 = new RentACarServis('Rent a car servis 4', 'Nis', 'servis za rent-a-car', 5);
    const ak5 = new RentACarServis('Rent a car servis 5', 'Beograd', 'servis za rent-a-car', 4);

    allRentACarServis.push(ak1);
    allRentACarServis.push(ak2);
    allRentACarServis.push(ak3);
    allRentACarServis.push(ak4);
    allRentACarServis.push(ak5);

    return allRentACarServis;
  }
}
