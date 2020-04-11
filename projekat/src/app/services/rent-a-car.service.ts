import { Injectable } from '@angular/core';
import { RentACarServis } from '../entities/rentacar';
import { Vozilo } from '../entities/vozilo';

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

    const ak1 = new RentACarServis(1,'Rent a car servis 1', 'Novi Beograd', 'servis za rent-a-car', 5);
    const ak2 = new RentACarServis(2,'Rent a car servis 2', 'Novi Sad', 'servis za rent-a-car', 5);
    const ak3 = new RentACarServis(3,'Rent a car servis 3', 'Loznica', 'servis za rent-a-car', 3);
    const ak4 = new RentACarServis(4,'Rent a car servis 4', 'Nis', 'servis za rent-a-car', 5);
    const ak5 = new RentACarServis(5,'Rent a car servis 5', 'Beograd', 'servis za rent-a-car', 4);

    ak1.vozila = this.mockedVozilo();
    ak2.vozila = this.mockedVozilo();
    ak3.vozila = this.mockedVozilo();
    ak4.vozila = this.mockedVozilo();
    ak5.vozila = this.mockedVozilo();

    allRentACarServis.push(ak1);
    allRentACarServis.push(ak2);
    allRentACarServis.push(ak3);
    allRentACarServis.push(ak4);
    allRentACarServis.push(ak5);

    return allRentACarServis;
  }

  mockedVozilo(): Array<Vozilo> {
    let allAvion = new Array<Vozilo>();

    const ak1 = new Vozilo(1,'vozilo1','BMW','12',2012,5,'automobil');
    const ak2 = new Vozilo(2,'vozilo2','BMW','09',2015,5,'automobil');
    const ak3 = new Vozilo(3,'vozilo3','BMW','11',2010,5,'automobil');

    allAvion.push(ak1);
    allAvion.push(ak2);
    allAvion.push(ak3);

    return allAvion;
  }
}
